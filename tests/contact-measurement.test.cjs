const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const ts = require('typescript')

function browser({ consent = true, path = '/cs/externi-obchod', query = '', referrer = 'https://www.google.com/search?q=private' } = {}) {
  const jar = new Map(), listeners = {}, calls = [], scripts = []
  const location = { origin: 'https://salesagent.cz', hostname: 'salesagent.cz', protocol: 'https:', pathname: path, href: `https://salesagent.cz${path}${query}` }
  const document = { referrer, addEventListener(name, fn) { (listeners[name] ??= []).push(fn) }, createElement: () => ({}), head: { appendChild(node) { scripts.push(node) } } }
  Object.defineProperty(document, 'cookie', { get: () => [...jar].map(([k,v]) => `${k}=${v}`).join('; '), set(value) { const pair = value.split(';')[0], i = pair.indexOf('='); jar.set(pair.slice(0,i), pair.slice(i+1)) } })
  class Element { constructor(href) { this.href = href } closest() { return this } getAttribute() { return this.href } }
  let currentConsent = consent
  const window = { gtag: (...args) => calls.push(args), CookieScript: { instance: { currentState: () => ({ action: currentConsent ? 'accept' : 'reject', categories: currentConsent ? ['performance'] : [] }) } }, addEventListener() {}, setInterval() {} }
  vm.runInNewContext(fs.readFileSync('public/measurement.js', 'utf8'), { window, document, location, URL, Date, Element, clearInterval() {} })
  return { calls, scripts, jar, location, click: href => (listeners.click || []).forEach(fn => fn({ target: new Element(href) })), revoke: () => { currentConsent = false; window.SalesMeasurement.refresh() }, measurement: window.SalesMeasurement }
}
const events = x => x.calls.filter(call => call[0] === 'event')

test('contact page, booking, phone and email clicks are distinct and contain no contact details', () => {
  const x = browser()
  x.click('/cs/contact')
  x.click('https://outlook.office.com/bookwithme/user/example?email=secret@example.com')
  x.click('tel:+420777591503')
  x.click('mailto:secret@example.com')
  assert.deepEqual(events(x).map(e => e[2].link_type), ['contact_page', 'booking', 'phone', 'email'])
  for (const [,,data] of events(x)) {
    assert.equal(data.send_to, 'G-442V6JSVVN')
    assert.equal(data.page_location, 'https://salesagent.cz/cs/externi-obchod')
    assert.equal(data.first_medium, 'organic')
    assert.doesNotMatch(JSON.stringify(data), /secret@example|777591503|\?q=/)
  }
})

test('contact clicks follow current SPA page and do not duplicate paid landing consultation', () => {
  const x = browser()
  x.location.pathname = '/cs/pricing'; x.location.href = 'https://salesagent.cz/cs/pricing'
  x.click('/cs/contact')
  assert.equal(events(x)[0][2].page_location, 'https://salesagent.cz/cs/pricing')
  x.location.pathname = '/cs/automatizace-obchodu-claude-chatgpt'; x.location.href = 'https://salesagent.cz' + x.location.pathname
  x.click('/cs/contact')
  x.click('https://outlook.office.com/bookwithme/user/example')
  assert.equal(events(x).length, 1)
})

test('without analytics consent no Google script, event or attribution cookie is created', () => {
  const x = browser({ consent: false })
  x.click('/cs/contact')
  assert.equal(x.measurement.track('generate_lead', { form_id: 'contact', lang: 'cs' }), false)
  assert.equal(events(x).length, 0); assert.equal(x.scripts.length, 0); assert.equal(x.jar.has('sr_first_touch_v1'), false)
})

test('explicit UTM of current visit reaches GA configuration without URL query or personal data', () => {
  const x = browser({ query: '?utm_source=linkedin&utm_medium=paid_social&utm_campaign=market_test&email=secret@example.com' })
  const config = x.calls.find(c => c[0] === 'config')[2]
  assert.equal(config.campaign_source, 'linkedin'); assert.equal(config.campaign_medium, 'paid_social'); assert.equal(config.campaign_name, 'market_test')
  assert.equal(config.page_location, 'https://salesagent.cz/cs/externi-obchod')
  assert.doesNotMatch(JSON.stringify(config), /secret@example/)
})

test('accepted lead event includes attribution but strips personal fields; revoked consent blocks it', () => {
  const x = browser()
  assert.equal(x.measurement.track('generate_lead', { form_id: 'contact', lang: 'cs', email: 'secret@example.com' }), true)
  assert.equal(events(x)[0][1], 'generate_lead')
  assert.equal(events(x)[0][2].form_id, 'contact')
  assert.doesNotMatch(JSON.stringify(events(x)[0]), /secret@example/)
  x.revoke()
  assert.equal(x.measurement.track('generate_lead', { form_id: 'contact', lang: 'cs' }), false)
  assert.equal(events(x).length, 1)
})

test('a tracking failure cannot throw after a successful form submission', () => {
  const module = { exports: {} }, calls = []
  const code = ts.transpileModule(fs.readFileSync('lib/measurement.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
  vm.runInNewContext(code, { module, exports: module.exports, window: { SalesMeasurement: { refresh() { calls.push('refresh') }, track() { throw Error('tracking unavailable') } } } })
  assert.doesNotThrow(() => module.exports.trackLead('cs'))
  assert.deepEqual(calls, ['refresh'])
})

test('contact form reports a lead once only after successful server acknowledgement', async () => {
  for (const accepted of [true, false]) {
    const module = { exports: {} }, calls = [], statuses = []
    const jsx = require('react/jsx-runtime')
    class MockFormData {
      constructor() { this.values = [['name', 'Test'], ['email', 'test@example.invalid'], ['form-name', 'contact']] }
      append(k, v) { this.values.push([k, v]) }
      set(k, v) { this.values = this.values.filter(([key]) => key !== k); this.values.push([k, v]) }
      [Symbol.iterator]() { return this.values[Symbol.iterator]() }
    }
    const code = ts.transpileModule(fs.readFileSync('components/ContactForm.tsx', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText
    vm.runInNewContext(code, {
      module, exports: module.exports, FormData: MockFormData, URLSearchParams,
      document: { documentElement: { lang: 'cs' } }, console: { error() {} },
      fetch: async () => { calls.push('server'); return { ok: accepted, status: accepted ? 200 : 500 } },
      require: id => id === 'react/jsx-runtime' ? jsx : id === 'react' ? { useState(initial) { return [initial, value => statuses.push(value)] } } : id === '@/lib/measurement' ? { leadAttribution: () => null, trackLead(lang) { calls.push('lead:' + lang) } } : require(id),
    })
    const component = module.exports.default({ t: { contact: { form: { name:'Name', company:'Company', email:'Email', message:'Message', submit:'Send' } } } })
    await component.props.onSubmit({ preventDefault() {}, currentTarget: {} })
    assert.deepEqual(calls, accepted ? ['server', 'lead:cs'] : ['server'])
    assert.equal(statuses.at(-1), accepted ? 'success' : 'error')
  }
})
