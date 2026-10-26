'use client'

import { useEffect, useRef, useState } from 'react'
import { ARES_SOURCE_URL, AresSearchError, SEARCH_ERRORS, executeAresCaptcha, normalizeSearchQuery, searchAres, type AresCompany } from '@/lib/ares-search'
import styles from './AresCompanySearch.module.css'

export function AresCompanyResults({ companies, detail, busy, onDetail }: {
  companies: AresCompany[]; detail: boolean; busy: boolean; onDetail: (ico: string) => void
}) {
  return <ul className={styles.results} aria-label="Companies found in ARES">
    {companies.map(company => <li key={company.ico} className={styles.company}>
      <div className={styles.companyTop}><h3>{company.name}</h3>{company.active !== null && <span className={styles.badge}>{company.active ? 'Registered' : 'Ceased'}</span>}</div>
      <dl>
        <div><dt>IČO</dt><dd>{company.ico}</dd></div>
        {company.legal_form && <div><dt>Legal form</dt><dd>{company.legal_form}</dd></div>}
        {!company.natural_person && company.address && <div><dt>Registered address</dt><dd>{company.address}</dd></div>}
        {company.founded && <div><dt>Established</dt><dd>{company.founded}</dd></div>}
        {detail && company.main_activity && <div><dt>Main activity</dt><dd>{company.main_activity}</dd></div>}
        {detail && company.employees && <div><dt>Employee size category</dt><dd>{company.employees}</dd></div>}
      </dl>
      {company.natural_person && <p className={styles.note}>Sole trader: the registered address is not displayed to protect personal privacy.</p>}
      <div className={styles.companyActions}>{!detail && <button type="button" onClick={() => onDetail(company.ico)} disabled={busy}>View company details →</button>}
        <a href={ARES_SOURCE_URL} target="_blank" rel="noopener noreferrer">Source: ARES ↗</a></div>
    </li>)}
  </ul>
}

export default function AresCompanySearch() {
  const [query, setQuery] = useState('')
  const [companies, setCompanies] = useState<AresCompany[] | null>(null)
  const [detail, setDetail] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [preview, setPreview] = useState(false)
  const request = useRef<AbortController | null>(null)
  const inFlight = useRef(false)

  useEffect(() => {
    setPreview(!/^(www\.)?salesagent\.cz$/.test(window.location.hostname))
    return () => request.current?.abort()
  }, [])

  async function lookup(value: string) {
    if (inFlight.current) return
    setError('')
    let normalized: string
    try { normalized = normalizeSearchQuery(value) } catch (e) { setError((e as Error).message); return }
    if (!/^(www\.)?salesagent\.cz$/.test(window.location.hostname)) {
      setError('Local preview: live searches are disabled. reCAPTCHA and the search endpoint require salesagent.cz.'); return
    }
    inFlight.current = true
    setBusy(true)
    setCompanies(null)
    const controller = new AbortController()
    request.current = controller
    const timeout = setTimeout(() => controller.abort(), 35000)
    try {
      const results = await searchAres(normalized, executeAresCaptcha, fetch, controller.signal)
      if (!controller.signal.aborted) { setCompanies(results); setDetail(/^\d{8}$/.test(normalized)) }
    } catch (e) {
      setError(e instanceof AresSearchError ? e.message : SEARCH_ERRORS.TEMPORARILY_UNAVAILABLE)
    } finally { clearTimeout(timeout); inFlight.current = false; setBusy(false) }
  }

  return <section className={styles.search} aria-labelledby="company-lookup-title">
    <p className={styles.eyebrow}>PUBLIC COMPANY LOOKUP</p>
    <h2 id="company-lookup-title">Find a Czech company</h2>
    <p className={styles.intro}>Search by company name or IČO (Czech company identification number). Up to 10 matching companies per search.</p>
    <form onSubmit={event => { event.preventDefault(); void lookup(query) }} aria-busy={busy}>
      <label htmlFor="ares-query">Company name or IČO</label>
      <div className={styles.formRow}><input id="ares-query" name="q" type="search" placeholder="e.g. Škoda Auto or 27082440" value={query} onChange={event => setQuery(event.target.value)} maxLength={120} autoComplete="off" disabled={busy} aria-describedby="ares-search-help" />
        <button type="submit" disabled={busy}>{busy ? 'Searching…' : 'Search companies'}</button></div>
      <p id="ares-search-help" className={styles.note}>At least 3 characters for a name, or 6–8 digits for an IČO. No email addresses or phone numbers are included. Limit: 10 searches per hour per IP address, including cached results; at most 2 requests per 10 seconds. Opening company details counts as another search.</p>
    </form>
    <p className={styles.source}><strong>Source: <a href={ARES_SOURCE_URL} target="_blank" rel="noopener noreferrer">ARES — Czech Ministry of Finance ↗</a></strong><br />Lookup provided through Salesbot. Registry labels may be in Czech. Results are informational, not an official extract.</p>
    {preview && <p className={styles.preview}>Local preview — live lookup is disabled outside salesagent.cz. No searches are sent to the production endpoint.</p>}
    {error && <p role="alert" className={styles.error}>{error}</p>}
    <div role="status" aria-live="polite" aria-atomic="true" className={styles.status}>
      {busy ? 'Checking security verification and searching ARES…' : companies ? companies.length ? `${companies.length} ${companies.length === 1 ? 'company' : 'companies'} found. Source: ARES.` : 'No companies found. Try a more specific name or an IČO.' : ''}
    </div>
    {companies && companies.length > 0 && <AresCompanyResults companies={companies} detail={detail} busy={busy} onDetail={ico => { setQuery(ico); void lookup(ico) }} />}
    <p className={styles.note}>Protected by reCAPTCHA. Google&apos;s <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply. Lookup is subject to usage limits. <a href={ARES_SOURCE_URL} target="_blank" rel="noopener noreferrer">Official ARES website ↗</a>.</p>
  </section>
}
