const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const ts = require('typescript')
const { execFileSync } = require('node:child_process')

function load(file, imports = {}, globals = {}) {
  const module = { exports: {} }
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
  } }).outputText
  vm.runInNewContext(code, { module, exports: module.exports, URL, AbortController,
    fetch: () => { throw Error('Unexpected live request') }, ...globals,
    require: id => Object.hasOwn(imports, id) ? imports[id] : require(id) })
  return module.exports
}
const api = load('lib/ares-search.ts')
const company = { ico: '27082440', name: 'Example company', natural_person: false, address: 'Example street 1',
  legal_form: 'Akciová společnost', active: true, founded: '2003-01-01', main_activity: 'Retail', employees: '100–199' }
const response = (body, status = 200) => new Response(JSON.stringify(body), { status })

function captchaBrowser() {
  const scripts = [], timers = new Map(), window = {}
  let timerId = 0
  const api = load('lib/ares-search.ts', {}, {
    window,
    document: {
      createElement: () => ({ remove() { this.removed = true } }),
      head: { appendChild(script) { scripts.push(script) } },
    },
    setTimeout(fn) { timers.set(++timerId, fn); return timerId },
    clearTimeout(id) { timers.delete(id) },
  })
  return { api, window, scripts, timers }
}

test('CAPTCHA waits for the full Google client after bootstrap onload, then gets fresh tokens', async () => {
  const browser = captchaBrowser(), ready = [], calls = []
  let outcome = 'pending'
  const first = browser.api.executeAresCaptcha()
  first.then(() => { outcome = 'resolved' }, () => { outcome = 'rejected' })
  // api.js only installs ready(); the gstatic client providing execute() loads later.
  browser.window.grecaptcha = { ready(callback) { ready.push(callback) } }
  browser.scripts[0].onload()
  await Promise.resolve(); await Promise.resolve()
  assert.equal(outcome, 'pending', 'bootstrap onload must not reject before the full client is ready')
  assert.equal(browser.timers.size, 1, 'readiness timeout stays active during the second script load')
  browser.window.grecaptcha.execute = async (key, options) => {
    calls.push({ key, action: options.action }); return 'token-' + calls.length
  }
  browser.window.grecaptcha.ready = callback => callback()
  ready.forEach(callback => callback())
  assert.equal(await first, 'token-1')
  assert.equal(await browser.api.executeAresCaptcha(), 'token-2')
  assert.equal(browser.scripts.length, 1)
  assert.equal(browser.timers.size, 0)
  assert.deepEqual(calls, [1, 2].map(() => ({ key: browser.api.ARES_SITE_KEY, action: 'ares_search' })))
})

test('CAPTCHA bootstrap failure can be retried and a stalled full client times out', async () => {
  const browser = captchaBrowser()
  const failed = browser.api.executeAresCaptcha()
  browser.scripts[0].onerror()
  await assert.rejects(failed, /CAPTCHA script failed/)
  assert.equal(browser.timers.size, 0)
  const stalled = browser.api.executeAresCaptcha()
  browser.window.grecaptcha = { ready() {} }
  browser.scripts[1].onload()
  assert.equal(browser.timers.size, 1)
  const [id, timeout] = browser.timers.entries().next().value
  browser.timers.delete(id); timeout()
  await assert.rejects(stalled, /CAPTCHA script timed out/)
  assert.equal(browser.scripts[1].removed, true)
})

test('name and ICO validation, whitespace, leading zeros, no CAPTCHA for invalid input', async () => {
  assert.equal(api.normalizeSearchQuery(' Škoda Auto '), 'Škoda Auto')
  assert.equal(api.normalizeSearchQuery('9586563'), '09586563')
  assert.equal(api.normalizeSearchQuery('270 82440'), '27082440')
  let tokens = 0
  for (const q of ['', 'ab', '12345', '123456789', 'a'.repeat(121)]) {
    await assert.rejects(api.searchAres(q, async () => { tokens++; return 'token' }), { code: 'INVALID_QUERY' })
  }
  assert.equal(tokens, 0)
})

test('every search and detail request gets a fresh token; contract uses only q and captcha_token', async () => {
  let tokens = 0
  const calls = []
  const send = async (url, options) => { calls.push({ url, options }); return response({ results: [company] }) }
  const token = async () => 'fresh-token-' + ++tokens
  const list = await api.searchAres('Example', token, send)
  await api.searchAres(company.ico, token, send)
  assert.equal(tokens, 2)
  assert.equal(calls[0].url, api.ARES_ENDPOINT)
  assert.equal(calls[0].options.method, 'POST')
  assert.equal(calls[0].options.credentials, 'omit')
  assert.deepEqual(JSON.parse(calls[0].options.body), { q: 'Example', captcha_token: 'fresh-token-1' })
  assert.deepEqual(JSON.parse(calls[1].options.body), { q: company.ico, captcha_token: 'fresh-token-2' })
  assert.equal(list[0].name, company.name)
})

test('all stable backend error codes have safe English messages', async () => {
  for (const code of Object.keys(api.SEARCH_ERRORS)) {
    await assert.rejects(api.searchAres('Example', async () => 'token', async () => response({ code, error: 'private backend detail' }, 403)),
      error => error.code === code && error.message === api.SEARCH_ERRORS[code] && !error.message.includes('private'))
  }
  await assert.rejects(api.searchAres('Example', async () => 'token', async () => response({ code: '__proto__' }, 500)), { code: 'TEMPORARILY_UNAVAILABLE' })
})

test('CAPTCHA failure or missing token never sends a search', async () => {
  let calls = 0
  const send = async () => { calls++; return response({ results: [] }) }
  await assert.rejects(api.searchAres('Example', async () => { throw Error('blocked') }, send), { code: 'CAPTCHA_UNAVAILABLE' })
  await assert.rejects(api.searchAres('Example', async () => '', send), { code: 'CAPTCHA_REQUIRED' })
  assert.equal(calls, 0)
})

test('network failure, non-JSON response, malformed results and cancellation handled without retry', async () => {
  for (const send of [async () => { throw Error('offline') }, async () => new Response('unavailable', { status: 502 }),
    async () => response({}), async () => response({ results: [{}] })]) {
    await assert.rejects(api.searchAres('Example', async () => 'token', send), { code: 'TEMPORARILY_UNAVAILABLE' })
  }
  const controller = new AbortController(); controller.abort()
  await assert.rejects(api.searchAres('Example', async () => 'token', async () => { throw Error('must not run') }, controller.signal), { code: 'TEMPORARILY_UNAVAILABLE' })
})

test('empty results, max ten companies, sole trader addresses removed, official links derived safely', async () => {
  assert.equal((await api.searchAres('Example', async () => 'token', async () => response({ results: [] }))).length, 0)
  const rows = await api.searchAres('Example', async () => 'token', async () => response({ results: Array(12).fill({ ...company, natural_person: true, source_url: 'javascript:alert(1)' }) }))
  assert.equal(rows.length, 10)
  assert.equal(rows[0].address, null)
  assert.equal(api.ARES_SOURCE_URL, 'https://ares.gov.cz/')
  const unknown = await api.searchAres('Example', async () => 'token', async () => response({ results: [{ ...company, natural_person: undefined }] }))
  assert.equal(unknown[0].address, null)
})

test('result cards show Source: ARES, escape returned names, hide sole trader addresses and offer detail', () => {
  const React = require('react')
  const { renderToStaticMarkup } = require('react-dom/server')
  const { AresCompanyResults } = load('components/AresCompanySearch.tsx', {
    '@/lib/ares-search': api,
    './AresCompanySearch.module.css': { __esModule: true, default: new Proxy({}, { get: (_, key) => String(key) }) },
  })
  const html = renderToStaticMarkup(React.createElement(AresCompanyResults, {
    companies: [{ ...company, natural_person: true, address: 'PRIVATE HOME', name: '<script>alert(1)</script>' }], detail: false, busy: false, onDetail() {},
  }))
  assert.match(html, /Source: ARES/)
  assert.match(html, /href="https:\/\/ares.gov.cz\/"/)
  assert.doesNotMatch(html, /ares.gov.cz\/ekonomicke-subjekty/)
  assert.match(html, /View company details/)
  assert.match(html, /&lt;script&gt;/)
  assert.doesNotMatch(html, /PRIVATE HOME|<script>/)
  const detail = renderToStaticMarkup(React.createElement(AresCompanyResults, { companies: [company], detail: true, busy: false, onDetail() {} }))
  assert.match(detail, /Main activity/)
  assert.match(detail, /Employee size category/)
  assert.doesNotMatch(detail, /View company details/)
})

test('original page title, H1, canonical and guide copy remain unchanged; EN-only addition', () => {
  const path = 'app/[locale]/resources/czech-business-companies-register/page.tsx'
  const before = execFileSync('git', ['show', 'c4bc5ca:' + path], { encoding: 'utf8' })
  const after = fs.readFileSync(path, 'utf8')
  const linkBlock = /        <p style=\{\{ marginBottom: '40px',[\s\S]*?Source: ARES — Czech Ministry of Finance\.<\/span>\n        <\/p>\n\n/
  assert.ok(before.match(linkBlock))
  const renderBody = source => source.split('export default async function CzechRegisterPage')[1]
  assert.equal(renderBody(after).replace("        {locale === 'en' && <AresCompanySearch />}\n\n", ''),
    renderBody(before).replace(linkBlock, ''))
  const metadataNode = source => ts.createSourceFile(path, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
    .statements.find(statement => ts.isVariableStatement(statement) && statement.declarationList.declarations[0].name.getText() === 'metadata')
    .declarationList.declarations[0].initializer
  const property = (node, name) => node.properties.find(p => p.name.getText() === name).initializer
  const originalMetadata = metadataNode(before), currentMetadata = metadataNode(after)
  for (const name of ['title', 'description', 'keywords', 'alternates']) {
    assert.equal(property(currentMetadata, name).getText(), property(originalMetadata, name).getText(), name)
  }
  for (const name of ['title', 'description', 'locale']) {
    assert.equal(property(property(currentMetadata, 'openGraph'), name).getText(),
      property(property(originalMetadata, 'openGraph'), name).getText(), 'openGraph.' + name)
  }
})
