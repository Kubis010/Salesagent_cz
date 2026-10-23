const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const ts = require('typescript')
const { execFileSync } = require('node:child_process')
const BASELINE = '3a20300' // Explicit pre-brief baseline; remains valid after committing this change.

function load(file, extra = {}) {
  const jar = new Map(), writes = [], calls = []
  let state = { categories: [] }
  const document = {}
  Object.defineProperty(document, 'cookie', {
    get: () => [...jar].map(([k, v]) => `${k}=${v}`).join('; '),
    set: value => { writes.push(value); const [pair] = value.split(';'); const i = pair.indexOf('='); if (/Max-Age=0(?:;|$)/.test(value)) jar.delete(pair.slice(0, i)); else jar.set(pair.slice(0, i), pair.slice(i + 1)) },
  })
  const context = { exports: {}, URL, URLSearchParams, FormData, Date, process: { env: {} }, document,
    location: { hostname: 'salesagent.cz', protocol: 'https:' },
    window: { gtag: (...args) => calls.push(args), CookieScript: { instance: { currentState: () => state } } }, ...extra }
  vm.runInNewContext(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, context)
  return { api: context.exports, calls, jar, writes, state: value => { state = value } }
}
const entry = () => new URL('https://salesagent.cz/cs/automatizace-obchodu-claude-chatgpt?utm_source=google&utm_medium=cpc&utm_campaign=ac-claude-gpt-2026-10&utm_content=video-cz-30s&gclid=TEST')
const full = { action: 'accept', categories: ['strict', 'performance', 'targeting'] }

test('undecided/rejected: no attribution cookie or analytics event', () => {
  const x = load('lib/landing-measurement.ts')
  assert.equal(x.api.firstTouch(entry(), ''), null)
  assert.equal(x.api.trackLanding('contact_click', 'hero', null), false)
  assert.equal(x.writes.length, 0); assert.equal(x.calls.length, 0)
  x.state({ action: 'reject', categories: ['strict'] })
  assert.equal(x.api.firstTouch(entry(), ''), null)
  assert.equal(x.writes.length, 0)
})
test('first touch retains campaign/content/click id, 90 days, and original source on revisit', () => {
  const x = load('lib/landing-measurement.ts'); x.state(full)
  const first = x.api.firstTouch(entry(), 'https://google.com/search?q=private')
  assert.equal(first.gclid, 'TEST'); assert.equal(first.utm_content, 'video-cz-30s')
  assert.equal(first.referrer, 'google.com'); assert.equal(first.first_source, 'google')
  const maxAge = Number(x.writes[0].match(/Max-Age=(\d+)/)?.[1])
  assert.ok(maxAge >= 7775990 && maxAge <= 7776000, 'cookie expires in 90 days, allowing elapsed test time')
  const second = x.api.firstTouch(new URL('https://salesagent.cz/cs?utm_source=linkedin'), '')
  assert.equal(second.first_source, 'google'); assert.equal(second.first_touch_at, first.first_touch_at)
  const samePage = x.api.firstTouch(new URL('https://salesagent.cz' + entry().pathname + '?utm_source=linkedin&utm_campaign=other'), '')
  assert.equal(samePage.utm_source, 'google'); assert.equal(samePage.utm_campaign, first.utm_campaign)
})
test('analytics consent alone never saves/forwards gclid; advertising withdrawal removes it', () => {
  const x = load('lib/landing-measurement.ts'); x.state({ action: 'accept', categories: ['performance'] })
  let data = x.api.firstTouch(entry(), '')
  assert.equal(data.gclid, undefined)
  assert.equal(new URL(x.api.attributedUrl('https://app.salesbot.cz/auth?mode=signup&lang=cs', data, 'self_serve')).searchParams.get('gclid'), null)
  x.state(full); data = x.api.firstTouch(entry(), ''); assert.equal(data.gclid, 'TEST')
  x.state({ action: 'accept', categories: ['performance'] }); data = x.api.firstTouch(entry(), '')
  assert.equal(data.gclid, undefined)
  x.state({ action: 'reject', categories: ['strict'] }); x.api.firstTouch(entry(), '')
  assert.equal(x.jar.has('sr_first_touch_v1'), false)
})
test('Salesbot attribution preserves lang/mode and campaign; event payload has no PII or gclid', () => {
  const x = load('lib/landing-measurement.ts'); x.state(full)
  const data = x.api.firstTouch(entry(), '')
  const url = new URL(x.api.attributedUrl('https://app.salesbot.cz/auth?mode=signup&lang=cs', data, 'hero'))
  assert.equal(url.searchParams.get('mode'), 'signup'); assert.equal(url.searchParams.get('lang'), 'cs')
  assert.equal(url.searchParams.get('gclid'), 'TEST'); assert.equal(url.searchParams.get('utm_source'), 'google')
  data.email = 'private@example.com'; data.name = 'Private Name'; data.phone = '777111222'
  assert.equal(x.api.trackLanding('generate_lead', 'form', data), true)
  const event = x.calls.find(c => c[0] === 'event')
  assert.equal(event[1], 'generate_lead'); assert.equal(event[2].send_to, 'G-442V6JSVVN')
  assert.doesNotMatch(JSON.stringify(event), /private|777111222|gclid/i)
  assert.equal(x.calls.filter(c => c[1] === 'conversion').length, 0)
})
test('invalid UTM and AI referral classification', () => {
  const x = load('lib/landing-measurement.ts'); x.state(full)
  assert.equal(x.api.campaignToken('name@example.com'), '')
  assert.equal(x.api.campaignToken('777111222'), '')
  const data = x.api.firstTouch(new URL('https://salesagent.cz/cs/automatizace-obchodu-claude-chatgpt'), 'https://claude.ai/chat/secret')
  assert.equal(data.first_medium, 'ai-assistant'); assert.equal(data.referrer, 'claude.ai')
})
test('shared GA config keeps paid campaign dimensions although page_location has no query', () => {
  const calls = [], jar = new Map()
  const document = { referrer: '', addEventListener() {}, createElement: () => ({}), head: { appendChild() {} } }
  Object.defineProperty(document, 'cookie', { get: () => [...jar].map(([k,v]) => k + '=' + v).join('; '),
    set: value => { const pair = value.split(';')[0], i = pair.indexOf('='); jar.set(pair.slice(0,i),pair.slice(i+1)) } })
  const location = { href: entry().href, pathname: entry().pathname, hostname: 'salesagent.cz', protocol: 'https:', origin: 'https://salesagent.cz' }
  const window = { gtag: (...args) => calls.push(args), CookieScript: { instance: { currentState: () => full } }, addEventListener() {}, setInterval() {} }
  const script = fs.readFileSync('public/measurement.js', 'utf8')
  vm.runInNewContext(script, { document, location, window, URL, Date })
  const config = calls.find(call => call[0] === 'config')
  assert.equal(config[1], 'G-442V6JSVVN')
  assert.equal(config[2].campaign_source, 'google'); assert.equal(config[2].campaign_medium, 'cpc')
  assert.equal(config[2].campaign_name, 'ac-claude-gpt-2026-10')
  assert.equal(config[2].page_location, 'https://salesagent.cz' + entry().pathname)
  const previewWindow = {}
  vm.runInNewContext(script, { window: previewWindow, location: { ...location, hostname: 'localhost' } })
  assert.equal(previewWindow.SalesMeasurement, undefined)
})
test('form: preview never submits, HTTP failure rejects, HTTP acknowledgement resolves', async () => {
  const { api } = load('lib/landing-form.ts', { fetch: () => {} })
  const data = new FormData(); data.set('form-name', 'landing-consultation'); data.set('utm_source', 'google')
  let requests = 0
  const mock = async (url, init) => { requests++; assert.equal(url, '/__landing-forms.html'); assert.equal(new URLSearchParams(init.body).get('utm_source'), 'google'); return { ok: true } }
  await assert.rejects(api.postLandingForm(data, 'localhost', mock)); assert.equal(requests, 0)
  await assert.rejects(api.postLandingForm(data, 'salesagent.cz', async () => ({ ok: false })))
  await api.postLandingForm(data, 'salesagent.cz', mock); assert.equal(requests, 1)
})
test('protected metadata, schema inputs, H1 and existing section copy are unchanged', () => {
  const file = 'app/[locale]/automatizace-obchodu-claude-chatgpt/page.tsx'
  const before = execFileSync('git', ['show', BASELINE + ':' + file], { encoding: 'utf8' })
  const after = fs.readFileSync(file, 'utf8')
  for (const regex of [/const description = [^\n]+/, /export async function generateMetadata[\s\S]+?\n}\n/, /const topics = \[[\s\S]+?\n\]/, /const faqs = \[[\s\S]+?\n\]/, /const faqSchema = \{[\s\S]+?\n  }/, /<h1[\s\S]+?<\/h1>/]) {
    assert.equal(after.match(regex)?.[0], before.match(regex)?.[0], regex.toString())
  }
  for (const tag of ['p', 'h2', 'h3', 'li']) {
    const regex = new RegExp(`<${tag}(?:\\s[^>]*)?>[\\s\\S]+?<\\/${tag}>`, 'g')
    assert.deepEqual(after.match(regex), before.match(regex), `Existing ${tag} content`)
  }
  assert.equal(execFileSync('git', ['diff', BASELINE, '--', 'components', 'app/[locale]/layout.tsx'], { encoding: 'utf8' }), '')
  const sitemapBefore = execFileSync('git', ['show', BASELINE + ':app/sitemap.ts'], { encoding: 'utf8' })
  const sitemapAfter = fs.readFileSync('app/sitemap.ts', 'utf8')
  const landingEntry = /entries\.push\(\{\s*url: `\$\{BASE_URL\}\/cs\/automatizace-obchodu-claude-chatgpt`,[\s\S]*?\n  \}\)/
  assert.ok(sitemapBefore.match(landingEntry), 'baseline landing sitemap entry exists')
  assert.equal(sitemapAfter.match(landingEntry)?.[0], sitemapBefore.match(landingEntry)[0])
  const sharedBefore = execFileSync('git', ['show', BASELINE + ':public/measurement.js'], { encoding: 'utf8' })
  const sharedAfter = fs.readFileSync('public/measurement.js', 'utf8')
  assert.equal(sharedAfter.replace('  // Local/Netlify previews of the paid landing must never pollute a production property.\n  if (location.pathname === "/cs/automatizace-obchodu-claude-chatgpt" && !/^(www\\.)?salesagent\\.cz$/.test(host)) return;\n', '').replace('      // Only the paid SalesAgent landing needs campaign dimensions alongside its query-free page_location.\n', '').replace('(authPage || (isAgent && location.pathname === "/cs/automatizace-obchodu-claude-chatgpt")) && first', 'authPage && first'), sharedBefore)
})
