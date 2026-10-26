export const ARES_ENDPOINT = 'https://ffbkvbbreduuhwixojne.supabase.co/functions/v1/ares-public-search'
export const ARES_SITE_KEY = '6LeTVbstAAAAAI7UtRDTW5x9nz7GdKOc722gTQmJ'
export const ARES_CAPTCHA_ACTION = 'ares_search'

export const SEARCH_ERRORS = {
  ORIGIN_NOT_ALLOWED: 'Company lookup is available on salesagent.cz. Please open the live website.',
  INVALID_QUERY: 'Enter at least 3 characters of a company name, or an IČO with 6–8 digits.',
  CAPTCHA_REQUIRED: 'Security verification is required. Please try searching again.',
  CAPTCHA_FAILED: 'Security verification failed. Please try again or use the official ARES website.',
  CAPTCHA_UNAVAILABLE: 'Security verification could not load. Check your connection or content blocker and try again.',
  RATE_LIMITED: 'Too many searches. Please wait and try again. Limits: 2 requests per 10 seconds and 10 searches per hour per IP address, including cached results.',
  DAILY_LIMIT_REACHED: 'The shared daily capacity of 200 ARES queries has been reached. Please try tomorrow or use the official ARES website.',
  TEMPORARILY_UNAVAILABLE: 'Company lookup is temporarily unavailable. Please try again shortly.',
  REGISTRY_UNAVAILABLE: 'The ARES registry is currently unavailable. Please try again later.',
} as const

export class AresSearchError extends Error {
  constructor(public code: keyof typeof SEARCH_ERRORS) { super(SEARCH_ERRORS[code]); this.name = 'AresSearchError' }
}

export type AresCompany = {
  ico: string
  name: string
  natural_person: boolean
  legal_form: string | null
  address: string | null
  active: boolean | null
  founded: string | null
  main_activity: string | null
  employees: string | null
}

export function normalizeSearchQuery(input: string): string {
  const q = input.trim()
  if (q.length < 3 || q.length > 120) throw new AresSearchError('INVALID_QUERY')
  if (/^[\d\s]+$/.test(q)) {
    const digits = q.replace(/\s/g, '')
    if (!/^\d{6,8}$/.test(digits)) throw new AresSearchError('INVALID_QUERY')
    return digits.padStart(8, '0')
  }
  return q
}

export const ARES_SOURCE_URL = 'https://ares.gov.cz/'

function readCompany(value: unknown): AresCompany | null {
  if (!value || typeof value !== 'object') return null
  const row = value as Record<string, unknown>
  if (typeof row.ico !== 'string' || !/^\d{8}$/.test(row.ico) || typeof row.name !== 'string' || !row.name.trim()) return null
  const field = (key: string) => typeof row[key] === 'string' && row[key] ? String(row[key]) : null
  // Do not display an address unless the backend explicitly identifies a legal entity.
  const natural = row.natural_person !== false
  return { ico: row.ico, name: row.name, natural_person: natural, legal_form: field('legal_form'),
    address: natural ? null : field('address'), active: typeof row.active === 'boolean' ? row.active : null,
    founded: field('founded'), main_activity: field('main_activity'), employees: field('employees') }
}

export async function searchAres(input: string, getToken: () => Promise<string>, send: typeof fetch = fetch, signal?: AbortSignal): Promise<AresCompany[]> {
  const q = normalizeSearchQuery(input)
  let token: string
  try { token = await getToken() } catch { throw new AresSearchError('CAPTCHA_UNAVAILABLE') }
  if (!token) throw new AresSearchError('CAPTCHA_REQUIRED')
  let response: Response
  try {
    signal?.throwIfAborted()
    response = await send(ARES_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ q, captcha_token: token }), credentials: 'omit', signal })
  } catch { throw new AresSearchError('TEMPORARILY_UNAVAILABLE') }
  const body = await response.json().catch(() => null)
  if (!response.ok || body?.error) {
    const code = typeof body?.code === 'string' && Object.hasOwn(SEARCH_ERRORS, body.code)
      ? body.code as keyof typeof SEARCH_ERRORS
      : response.status === 429 ? 'RATE_LIMITED' : 'TEMPORARILY_UNAVAILABLE'
    throw new AresSearchError(code)
  }
  if (!Array.isArray(body?.results)) throw new AresSearchError('TEMPORARILY_UNAVAILABLE')
  const rows = body.results.slice(0, 10).map(readCompany)
  if (rows.some((row: AresCompany | null) => row === null)) throw new AresSearchError('TEMPORARILY_UNAVAILABLE')
  return rows as AresCompany[]
}

type Recaptcha = { ready(callback: () => void): void; execute(key: string, options: { action: string }): PromiseLike<string> }
let captchaScript: Promise<Recaptcha> | undefined

// Load Google only after a valid, explicit search. Never embed a secret or persist a token.
export async function executeAresCaptcha(): Promise<string> {
  const recaptchaWindow = window as Window & { grecaptcha?: Recaptcha }
  if (!captchaScript) {
    captchaScript = new Promise<Recaptcha>((resolve, reject) => {
      if (recaptchaWindow.grecaptcha?.execute) { resolve(recaptchaWindow.grecaptcha); return }
      const script = document.createElement('script')
      script.src = 'https://www.google.com/recaptcha/api.js?render=' + ARES_SITE_KEY
      script.async = true
      const timeout = setTimeout(() => { script.remove(); reject(new Error('CAPTCHA script timed out')) }, 12000)
      script.onload = () => {
        // api.js only bootstraps ready(); execute() arrives with the asynchronous gstatic client.
        const captcha = recaptchaWindow.grecaptcha
        if (!captcha?.ready) {
          clearTimeout(timeout); script.remove(); reject(new Error('CAPTCHA unavailable')); return
        }
        try {
          captcha.ready(() => {
            clearTimeout(timeout)
            if (typeof captcha.execute === 'function') resolve(captcha)
            else { script.remove(); reject(new Error('CAPTCHA unavailable')) }
          })
        } catch (error) { clearTimeout(timeout); script.remove(); reject(error) }
      }
      script.onerror = () => { clearTimeout(timeout); script.remove(); reject(new Error('CAPTCHA script failed')) }
      document.head.appendChild(script)
    }).catch(error => { captchaScript = undefined; throw error })
  }
  const captcha = await captchaScript
  return new Promise<string>((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('CAPTCHA timed out')), 12000)
    captcha.ready(() => {
      try {
        // Google's client returns a thenable which does not necessarily implement finally().
        Promise.resolve(captcha.execute(ARES_SITE_KEY, { action: ARES_CAPTCHA_ACTION })).then(
          token => { clearTimeout(timeout); resolve(token) },
          error => { clearTimeout(timeout); reject(error) },
        )
      } catch (error) { clearTimeout(timeout); reject(error) }
    })
  })
}
