const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const ts = require('typescript')

function load(file, modules = {}) {
  const exports = {}
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText
  vm.runInNewContext(code, { exports, require: name => modules[name] })
  return exports
}

const { browserLanguage } = load('lib/browser-language.ts')
const response = (kind, url, status) => ({ kind, url: url?.toString(), status, headers: new Headers() })
const { middleware } = load('middleware.ts', {
  'next/server': { NextResponse: Object.assign(function (_body, init) { return response('notfound', undefined, init.status) }, {
    next: () => response('next'),
    redirect: (url, status) => response('redirect', url, status),
    rewrite: url => response('rewrite', url),
  }) },
  '@/lib/i18n': { locales: ['cs', 'en'], defaultLocale: 'cs' },
  '@/lib/legacy-en-redirects': { legacyEnRedirects: {} },
  '@/lib/browser-language': { browserLanguage },
})
function request(path, language, saved) {
  const url = new URL('https://salesagent.cz' + path)
  url.clone = () => new URL(url)
  return { nextUrl: url, headers: new Headers(language ? { 'accept-language': language } : {}), cookies: { get: () => saved ? { value: saved } : undefined } }
}

test('browser language respects preference order and quality', () => {
  for (const value of ['cs-CZ,cs;q=0.9,en;q=0.8', 'en;q=0.4,cs;q=0.9', 'CS']) assert.equal(browserLanguage(value), 'cs')
  for (const value of [null, 'en-US,en;q=0.9,cs;q=0.8', 'de-DE,de;q=0.9', 'cs;q=0,en;q=0.5']) assert.equal(browserLanguage(value), 'en')
})

test('root serves identical English HTML for every language and preserves query', () => {
  for (const language of ['cs-CZ,cs;q=0.9', 'en-US', 'de-DE', null]) {
    const result = middleware(request('/?utm_source=test', language))
    assert.equal(result.kind, 'rewrite')
    assert.equal(result.url, 'https://salesagent.cz/en?utm_source=test')
  }
})

test('root does not vary by saved choice and explicit URLs remain accessible', () => {
  assert.equal(middleware(request('/', 'cs-CZ', 'en')).kind, 'rewrite')
  assert.equal(middleware(request('/', 'en-US', 'cs')).url, 'https://salesagent.cz/en')
  assert.equal(middleware(request('/en', 'cs-CZ', 'cs')).kind, 'next')
  assert.equal(middleware(request('/cs', 'en-US', 'en')).kind, 'next')
})

test('client language selection runs only on first human root visit and respects manual choice', () => {
  function run({ path = '/', lang = 'cs-CZ', cookie = '', agent = 'Mozilla/5.0', seen = false } = {}) {
    let destination = null
    const storage = { getItem: () => seen ? '1' : null, setItem() {} }
    const window = { location: { pathname: path, search: '?utm_source=test', hash: '#part', replace: url => { destination = url } }, sessionStorage: storage }
    const exports = {}
    const code = ts.transpileModule(fs.readFileSync('components/layout/RootLanguageChoice.tsx', 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX },
    }).outputText
    vm.runInNewContext(code, { exports, require: name => name === 'react' ? { useEffect: fn => fn() } : undefined,
      window, document: { cookie }, navigator: { language: lang, userAgent: agent } })
    exports.default()
    return destination
  }
  assert.equal(run(), '/cs?utm_source=test#part')
  assert.equal(run({ cookie: 'site_language=en' }), null)
  assert.equal(run({ lang: 'en-US', cookie: 'site_language=cs' }), '/cs?utm_source=test#part')
  assert.equal(run({ path: '/en' }), null)
  assert.equal(run({ agent: 'Googlebot/2.1' }), null)
  assert.equal(run({ seen: true }), null)
})

test('localized guides keep exact URLs without opening other locales or changing the homepage', () => {
  assert.equal(middleware(request('/de/markteintritt-tschechien', 'cs-CZ', 'cs')).kind, 'next')
  assert.equal(middleware(request('/de/pricing', 'de-DE')).status, 404)
  assert.equal(middleware(request('/de', 'de-DE')).status, 404)
  assert.equal(middleware(request('/pl/wejscie-na-rynek-czeski', 'cs-CZ', 'cs')).kind, 'next')
  assert.equal(middleware(request('/pl/pricing', 'pl-PL')).status, 404)
  assert.equal(middleware(request('/pl', 'pl-PL')).status, 404)
  assert.equal(middleware(request('/', 'de-DE')).url, 'https://salesagent.cz/en')
  assert.equal(middleware(request('/', 'pl-PL')).url, 'https://salesagent.cz/en')
})
