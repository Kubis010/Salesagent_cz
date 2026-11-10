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
  'next/server': { NextResponse: {
    next: () => response('next'),
    redirect: (url, status) => response('redirect', url, status),
    rewrite: url => response('rewrite', url),
  } },
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

test('root selects language, preserves query, and avoids shared caching', () => {
  const cs = middleware(request('/?utm_source=test', 'cs-CZ,cs;q=0.9'))
  assert.equal(cs.kind, 'redirect'); assert.equal(cs.status, 307)
  assert.equal(cs.url, 'https://salesagent.cz/cs?utm_source=test')
  assert.equal(cs.headers.get('cache-control'), 'private, no-store')
  assert.match(cs.headers.get('vary'), /Accept-Language/)
  const en = middleware(request('/', 'de-DE'))
  assert.equal(en.kind, 'rewrite'); assert.equal(en.url, 'https://salesagent.cz/en')
  assert.equal(en.headers.get('cache-control'), 'private, no-store')
})

test('manual choice wins at root and explicit URLs remain accessible', () => {
  assert.equal(middleware(request('/', 'cs-CZ', 'en')).kind, 'rewrite')
  assert.equal(middleware(request('/', 'en-US', 'cs')).url, 'https://salesagent.cz/cs')
  assert.equal(middleware(request('/en', 'cs-CZ', 'cs')).kind, 'next')
  assert.equal(middleware(request('/cs', 'en-US', 'en')).kind, 'next')
})
