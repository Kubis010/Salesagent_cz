// Only used by the paid CZ landing. Other pages retain their existing measurement behaviour.
export const LANDING = '/cs/automatizace-obchodu-claude-chatgpt'
export const CAMPAIGN = 'ac-claude-gpt-2026-10'
const COOKIE = 'sr_first_touch_v1'
const TTL = 90 * 86400
const GA = 'G-442V6JSVVN'
const UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const
type Consent = { decided: boolean; analytics: boolean; advertising: boolean }
type CookieState = { action?: string; categories?: string[] | string }
export type LandingEvent = 'contact_click' | 'generate_lead' | 'signup_click' | 'demo_start' | 'webinar_register'

declare global {
  interface Window {
    CookieScript?: { instance?: {
      currentState: () => CookieState;
      acceptAllAction: () => void;
      rejectAllAction: () => void;
      acceptAction: (categories: string[]) => void;
    } }
  }
}

function readCookie(name: string): Record<string, unknown> | null {
  try {
    const entry = document.cookie.split('; ').find(s => s.startsWith(name + '='))
    return entry ? JSON.parse(decodeURIComponent(entry.slice(name.length + 1))) : null
  } catch { return null }
}

export function consent(): Consent {
  let state: CookieState | null = null
  try { state = window.CookieScript?.instance?.currentState() ?? null } catch { /* CMP loading */ }
  state ??= readCookie('CookieScriptConsent')
  let categories = state?.categories ?? []
  if (typeof categories === 'string') {
    try { categories = JSON.parse(categories) } catch { categories = [] }
  }
  const decided = state?.action === 'accept' || state?.action === 'reject'
  return { decided, analytics: decided && Array.isArray(categories) && categories.includes('performance'),
    advertising: decided && Array.isArray(categories) && categories.includes('targeting') }
}

// Restrict campaign dimensions, never forward arbitrary URL values or free-text form input.
export function campaignToken(value: unknown): string {
  return typeof value === 'string' && /^[a-z0-9][a-z0-9_.-]{0,99}$/i.test(value)
    && !/\d{8,}|[a-f0-9]{24,}/i.test(value) ? value : ''
}
function clickId(value: unknown): string {
  return typeof value === 'string' && /^[a-z0-9_-]{1,200}$/i.test(value) ? value : ''
}
function attributes(age: number) {
  return `; Path=/; Max-Age=${age}; SameSite=Lax${/^(www\.)?salesagent\.cz$/.test(location.hostname) ? '; Domain=salesagent.cz' : ''}${location.protocol === 'https:' ? '; Secure' : ''}`
}

export function firstTouch(entry: URL, referrer: string): Record<string, unknown> | null {
  const state = consent()
  const stored = readCookie(COOKIE)
  if (!state.analytics) {
    if (state.decided && stored) document.cookie = COOKIE + '=' + attributes(0)
    return null
  }
  const time = Date.parse(String(stored?.captured_at ?? ''))
  const valid = stored?.v === 1 && stored.consent === true && time <= Date.now() && Date.now() - time < TTL * 1000
  let ref = ''
  try { ref = new URL(referrer).hostname } catch { /* direct */ }
  if (/(^|\.)salesagent\.cz$/.test(ref)) ref = ''
  const source = campaignToken(entry.searchParams.get('utm_source'))
  const medium = campaignToken(entry.searchParams.get('utm_medium'))
  const ai = /^(claude\.ai|chatgpt\.com|chat\.openai\.com|gemini\.google\.com|(?:www\.)?perplexity\.ai)$/.test(ref)
  const organic = /(^|\.)(google\.[a-z.]+|bing\.com|duckduckgo\.com)$/.test(ref)
  const data: Record<string, unknown> = valid ? { ...stored } : {
    v: 1, consent: true, captured_at: new Date().toISOString(), landing_page: LANDING,
    referrer: campaignToken(ref), first_source: source || campaignToken(ref) || '(direct)',
    first_medium: source ? medium || 'referral' : ai ? 'ai-assistant' : organic ? 'organic' : ref ? 'referral' : '(none)',
    first_campaign: campaignToken(entry.searchParams.get('utm_campaign')),
  }
  // Enrich a cookie created moments earlier by shared measurement, not an older visit.
  const sameVisit = !stored?.first_touch_at && data.landing_page === entry.pathname && Date.now() - Date.parse(String(data.captured_at)) < 10000
  if (!valid || sameVisit) UTM.forEach(key => { data[key] = campaignToken(entry.searchParams.get(key)) })
  data.first_touch_at = data.captured_at
  data.consent_state = { analytics_storage: 'granted', ad_storage: state.advertising ? 'granted' : 'denied',
    ad_user_data: state.advertising ? 'granted' : 'denied', ad_personalization: state.advertising ? 'granted' : 'denied' }
  const matchingFirstCampaign = data.landing_page === entry.pathname && data.utm_source === source
    && data.utm_campaign === campaignToken(entry.searchParams.get('utm_campaign'))
  if (state.advertising && (!valid || sameVisit || (!data.gclid && matchingFirstCampaign))) data.gclid = clickId(entry.searchParams.get('gclid'))
  if (!state.advertising) delete data.gclid
  // Keep the original expiry: revisits must not renew the 90-day retention window.
  const remaining = Math.max(0, Math.floor((Date.parse(String(data.captured_at)) + TTL * 1000 - Date.now()) / 1000))
  const encoded = encodeURIComponent(JSON.stringify(data))
  if (JSON.stringify(stored) !== JSON.stringify(data)) document.cookie = COOKIE + '=' + encoded + attributes(remaining)
  return data
}

export function syncAdvertisingConsent() {
  const state = consent()
  window.gtag?.('consent', 'update', { analytics_storage: state.analytics ? 'granted' : 'denied',
    ad_storage: state.advertising ? 'granted' : 'denied', ad_user_data: state.advertising ? 'granted' : 'denied',
    ad_personalization: state.advertising ? 'granted' : 'denied' })
}

export function trackLanding(name: LandingEvent, placement: string, attribution: Record<string, unknown> | null) {
  if (!consent().analytics || !window.gtag || !/^(www\.)?salesagent\.cz$/.test(location.hostname)) return false
  syncAdvertisingConsent()
  const parameters: Record<string, string> = { send_to: GA, site_area: 'website', landing_page: LANDING,
    placement: campaignToken(placement), lang: 'cs', form_id: name === 'webinar_register' ? 'landing_webinar' : 'landing_consultation' }
  for (const key of ['first_source', 'first_medium', 'first_campaign']) {
    const value = attribution?.[key]
    if (value === '(direct)' || value === '(none)') parameters[key] = value
    else if (campaignToken(value)) parameters[key] = campaignToken(value)
  }
  window.gtag('event', name, parameters)
  // Deliberately off unless explicitly configured. Do not double-count a GA4-imported primary conversion.
  const target = process.env.NEXT_PUBLIC_LANDING_ADS_CONVERSION
  if (name === 'generate_lead' && consent().advertising && process.env.NEXT_PUBLIC_LANDING_NATIVE_ADS === 'true'
    && target && /^AW-\d+\/[a-z0-9_-]+$/i.test(target)) {
    window.gtag('config', target.split('/')[0], { allow_ad_personalization_signals: false })
    window.gtag('event', 'conversion', { send_to: target })
  }
  return true
}

export function attributedUrl(base: string, attribution: Record<string, unknown> | null, placement: string): string {
  const url = new URL(base)
  const state = consent()
  url.searchParams.set('utm_source', 'salesagent.cz')
  url.searchParams.set('utm_medium', 'referral')
  url.searchParams.set('utm_campaign', CAMPAIGN)
  url.searchParams.set('utm_content', campaignToken(placement))
  if (state.analytics && attribution) UTM.forEach(key => {
    const value = campaignToken(attribution[key])
    if (value) url.searchParams.set(key, value)
  })
  if (state.analytics && state.advertising && clickId(attribution?.gclid)) url.searchParams.set('gclid', clickId(attribution?.gclid))
  else url.searchParams.delete('gclid')
  return url.toString()
}
