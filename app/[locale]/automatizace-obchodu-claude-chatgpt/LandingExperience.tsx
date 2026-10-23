'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { attributedUrl, consent, firstTouch, LANDING, syncAdvertisingConsent, trackLanding } from '@/lib/landing-measurement'
import { postLandingForm } from '@/lib/landing-form'
import styles from './page.module.css'

const DEMO = 'https://app.salesrobots.cz/demo/salesagent-cz'
const cookieEvents = ['CookieScriptLoaded', 'CookieScriptAccept', 'CookieScriptAcceptAll', 'CookieScriptReject', 'CookieScriptSave']
const WEBINAR_ENABLED = process.env.NEXT_PUBLIC_LANDING_WEBINAR_ENABLED === 'true'
const WEBINAR_DATE = process.env.NEXT_PUBLIC_LANDING_WEBINAR_DATE ?? ''

export function DemoEmbed() {
  const [started, setStarted] = useState(false)
  const [failed, setFailed] = useState(false)
  const [textOnly, setTextOnly] = useState(false)
  const [external, setExternal] = useState(DEMO + '?utm_source=salesagent.cz&utm_medium=referral&utm_campaign=ac-claude-gpt-2026-10&utm_content=demo')
  const iframe = useRef<HTMLIFrameElement>(null)
  const loadTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const measured = useRef(false)
  useEffect(() => {
    if (!started || failed) return
    // Only a missing document load can be detected here, not cross-origin application errors.
    loadTimer.current = setTimeout(() => setFailed(true), 25000)
    return () => clearTimeout(loadTimer.current)
  }, [started, failed, external])
  useEffect(() => {
    // Cross-origin iframe contents cannot be observed. Focus is an approximation, not a completed demo.
    const onBlur = () => {
      window.setTimeout(() => {
        if (document.activeElement !== iframe.current || measured.current) return
        const touch = firstTouch(new URL(location.href), document.referrer)
        measured.current = trackLanding('demo_start', 'hero', touch)
      }, 0)
    }
    window.addEventListener('blur', onBlur)
    return () => window.removeEventListener('blur', onBlur)
  }, [])
  const load = (withoutMicrophone = false) => {
    setExternal(attributedUrl(withoutMicrophone ? DEMO + '?mode=text' : DEMO, firstTouch(new URL(location.href), document.referrer), 'demo'))
    setTextOnly(withoutMicrophone)
    setStarted(true)
    setFailed(false)
  }
  return <div id="prezentace" className={styles.demoFrame}>
    <div className={styles.demoBar}><span><i /> PREZENTÉR · SALESAGENT.CZ</span><a href={external} data-demo-external target="_blank" rel="noopener noreferrer">Otevřít ukázku v prohlížeči ↗</a></div>
    <div className={styles.demoStage}>
      {started && !failed ? <iframe ref={iframe} className={`sr-prezenter ${styles.srPrezenter}`} src={textOnly ? DEMO + '?mode=text' : DEMO} title="Salesagent.cz — interaktivní demo" loading="lazy" allow={textOnly ? "microphone 'none'" : 'microphone'} onLoad={() => clearTimeout(loadTimer.current)} onError={() => setFailed(true)} /> : <div className={styles.demoPoster}>
        <Image src="/how-it-works.jpg" alt="Ukázka obchodního postupu" fill sizes="(max-width: 760px) 100vw, 1200px" />
        <div className={styles.posterCopy}><span>CLAUDE / CHATGPT + SALESBOT</span><h2>{failed ? 'Ukázka se nenačetla.' : 'Od hledání leadů k připravené kampani.'}</h2><p>Interaktivní Prezentér načteme až po kliknutí.</p><button type="button" className={styles.primary} onClick={() => load()}>{failed ? 'Zkusit načíst znovu' : 'Spustit ukázku'}</button><a href="#konzultace" data-consultation data-placement="hero" className={styles.secondary}>Konzultace zdarma</a><button type="button" className={styles.textMode} onClick={() => load(true)}>Spustit bez mikrofonu</button></div>
      </div>}
    </div>
    <p className={styles.demoHelp}>Bez mikrofonu můžete v Prezentéru vybírat témata a psát otázky. Nefunguje vložená ukázka? <a href={external} data-demo-external target="_blank" rel="noopener noreferrer">Otevřete ji samostatně</a> nebo <a href="#konzultace" data-consultation data-placement="hero">domluvte konzultaci</a>. {started && <><button type="button" onClick={() => load(true)}>Přepnout na text bez mikrofonu</button> · <button type="button" onClick={() => setFailed(true)}>Ukázka nefunguje</button></>}</p>
  </div>
}

export default function LandingExperience() {
  const dialog = useRef<HTMLDialogElement>(null)
  const [opened, setOpened] = useState(false)
  const [choice, setChoice] = useState(false)
  const [ready, setReady] = useState(false)
  const [preferences, setPreferences] = useState(false)
  const [settings, setSettings] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [advertising, setAdvertising] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formType, setFormType] = useState<'consultation' | 'webinar'>('consultation')
  const submitting = useRef(false)
  const initial = useRef<{ url: URL; referrer: string } | null>(null)
  const open = useCallback(() => { setOpened(true); dialog.current?.showModal() }, [])

  useEffect(() => {
    initial.current = { url: new URL(location.href), referrer: document.referrer }
    document.body.classList.add('salesagent-paid-landing')
    let lastConsent = ''
    const touch = () => firstTouch(initial.current!.url, initial.current!.referrer)
    const updateLinks = () => document.querySelectorAll<HTMLAnchorElement>('[data-salesbot], [data-demo-external]').forEach(a => {
      a.href = attributedUrl(a.hasAttribute('data-salesbot') ? 'https://app.salesbot.cz/auth?lang=cs&mode=signup' : DEMO + (new URL(a.href).searchParams.get('mode') === 'text' ? '?mode=text' : ''),
        touch(), a.dataset.placement || (a.hasAttribute('data-demo-external') ? 'demo' : 'content'))
    })
    const refresh = () => {
      const state = consent()
      setReady(Boolean(window.CookieScript?.instance))
      setChoice(state.decided)
      document.body.classList.toggle('landing-cmp-ready', Boolean(window.CookieScript?.instance))
      document.body.classList.toggle('landing-consent-decided', state.decided)
      const serialized = JSON.stringify(state)
      if (lastConsent !== serialized) {
        lastConsent = serialized
        setAnalytics(state.analytics); setAdvertising(state.advertising)
        touch(); syncAdvertisingConsent(); updateLinks()
      }
    }
    const click = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return
      const anchor = event.target.closest<HTMLAnchorElement>('a[href]')
      if (!anchor) return
      const header = Boolean(anchor.closest('header'))
      const footer = Boolean(anchor.closest('footer'))
      const isConsultation = anchor.hasAttribute('data-consultation')
        || ((header || footer) && (/outlook\.office\.com\/book/.test(anchor.href) || anchor.pathname === '/cs/contact'))
      if (isConsultation) {
        event.preventDefault()
        setFormType('consultation')
        trackLanding('contact_click', anchor.dataset.placement || (header ? 'header' : footer ? 'footer' : 'content'), touch())
        open()
      } else if (anchor.hasAttribute('data-salesbot')) {
        anchor.href = attributedUrl('https://app.salesbot.cz/auth?lang=cs&mode=signup', touch(), anchor.dataset.placement || 'content')
        trackLanding('signup_click', anchor.dataset.placement || 'content', touch())
      }
    }
    document.addEventListener('click', click, true)
    cookieEvents.forEach(name => { window.addEventListener(name, refresh); document.addEventListener(name, refresh) })
    refresh()
    const timer = window.setInterval(refresh, 1500)
    return () => {
      clearInterval(timer)
      document.removeEventListener('click', click, true)
      cookieEvents.forEach(name => { window.removeEventListener(name, refresh); document.removeEventListener(name, refresh) })
      document.body.classList.remove('salesagent-paid-landing', 'landing-cmp-ready', 'landing-consent-decided')
      // Restore the site's conservative shared consent policy on other routes.
      window.gtag?.('consent', 'update', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' })
    }
  }, [open])

  const choose = (action: 'accept' | 'reject' | 'save') => {
    const cmp = window.CookieScript?.instance
    if (!cmp) return
    if (action === 'accept') cmp.acceptAllAction()
    else if (action === 'reject') cmp.rejectAllAction()
    else cmp.acceptAction(['strict', ...(analytics ? ['performance'] : []), ...(advertising ? ['targeting'] : [])])
    setPreferences(false)
    setSettings(false)
    // CookieScript remains the sole consent store; never create a parallel consent cookie.
    window.dispatchEvent(new Event('CookieScriptSave'))
  }

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (submitting.current || status === 'success') return
    submitting.current = true
    setStatus('sending')
    const data = new FormData(event.currentTarget)
    data.set('form-name', formType === 'webinar' ? 'landing-webinar' : 'landing-consultation')
    const state = consent()
    const attribution = initial.current ? firstTouch(initial.current.url, initial.current.referrer) : null
    data.set('landing_page', LANDING)
    data.set('consent_state', JSON.stringify({ analytics_storage: state.analytics ? 'granted' : 'denied', ad_storage: state.advertising ? 'granted' : 'denied', ad_user_data: state.advertising ? 'granted' : 'denied', ad_personalization: state.advertising ? 'granted' : 'denied' }))
    if (attribution) for (const key of ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'referrer', 'first_touch_at', 'first_source', 'first_medium', 'first_campaign']) data.set(key, String(attribution[key] ?? ''))
    try {
      // Netlify Runtime v5 requires a static form definition and AJAX to that file.
      // Do not report a false success from a generic local/static HTTP 200.
      await postLandingForm(data, location.hostname)
      trackLanding(formType === 'webinar' ? 'webinar_register' : 'generate_lead', 'form', attribution)
      setStatus('success')
    } catch { setStatus('error') } finally { submitting.current = false }
  }

  return <>
    <style>{`
      body.salesagent-paid-landing.landing-cmp-ready #cookiescript_injected,
      body.salesagent-paid-landing.landing-cmp-ready #cookiescript_badge { display: none !important; }
      body.salesagent-paid-landing:not(.landing-consent-decided) > :is([style*="2147483600"], [style*="2147483599"], [style*="2147483598"]),
      body.salesagent-paid-landing:has([data-landing-cookie-panel]) > :is([style*="2147483600"], [style*="2147483599"], [style*="2147483598"]) { display: none !important; }
      @media (max-width:760px) {
        body.salesagent-paid-landing.landing-consent-decided > :is([style*="2147483600"], [style*="2147483599"], [style*="2147483598"])[style*="bottom:"] { bottom:124px !important; max-height:calc(100dvh - 190px); }
      }
    `}</style>
    {WEBINAR_ENABLED && WEBINAR_DATE && <section className={styles.webinar}><h2>Živá ukázka: Claude/ChatGPT + Salesbot za 30 minut</h2><p>{WEBINAR_DATE}</p><button type="button" className={styles.primary} onClick={() => { setFormType('webinar'); open() }}>Registrovat se na webinář</button></section>}
    {choice && !preferences && !opened && <a href="#konzultace" data-consultation data-placement="sticky" className={styles.sticky}>Konzultace zdarma <span>→</span></a>}
    {choice && !preferences && <button type="button" className={styles.cookieReopen} onClick={() => setPreferences(true)}>Nastavení cookies</button>}
    {(!choice || preferences) && <section data-landing-cookie-panel className={styles.cookieBanner} aria-label="Nastavení cookies">
      <strong>Vaše soukromí</strong><p>Nezbytné cookies zajišťují chod webu. Analytiku a reklamní cookies zapneme jen s vaším souhlasem. <a href="/cs/privacy">Zásady ochrany soukromí</a></p>
      {settings && <div className={styles.cookieSettings}><label><input type="checkbox" checked disabled /> Nezbytné</label><label><input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} /> Analytické</label><label><input type="checkbox" checked={advertising} onChange={e => setAdvertising(e.target.checked)} /> Reklamní</label></div>}
      <div className={styles.cookieActions}><button type="button" disabled={!ready} onClick={() => choose('accept')}>Přijmout vše</button><button type="button" disabled={!ready} onClick={() => choose('reject')}>Odmítnout vše</button><button type="button" disabled={!ready} onClick={() => settings ? choose('save') : setSettings(true)}>{settings ? 'Uložit výběr' : 'Nastavení'}</button></div>
      {!ready && <small>Načítání nastavení souhlasu… Analytika zůstává vypnutá.</small>}
    </section>}
    <dialog id="konzultace" ref={dialog} className={styles.consultation} aria-labelledby="consultation-title" onClose={() => setOpened(false)}>
      <button type="button" aria-label="Zavřít formulář" className={styles.closeDialog} onClick={() => dialog.current?.close()}>×</button>
      <h2 id="consultation-title">{formType === 'webinar' ? 'Registrace na webinář' : 'Konzultace zdarma'}</h2>
      {status === 'success' ? <div role="status"><p>Děkujeme, váš požadavek jsme přijali. Ozveme se vám.</p><button type="button" className={styles.primary} onClick={() => dialog.current?.close()}>Hotovo</button></div> : <form onSubmit={submit} name={formType === 'webinar' ? 'landing-webinar' : 'landing-consultation'} method="POST">
        <label htmlFor="landing-name">Jméno<input id="landing-name" name="name" autoComplete="name" required maxLength={150} /></label>
        <label htmlFor="landing-email">E-mail<input id="landing-email" name="email" type="email" autoComplete="email" required maxLength={254} /></label>
        <label htmlFor="landing-company">Firma<input id="landing-company" name="company" autoComplete="organization" required maxLength={200} /></label>
        {formType === 'consultation' && <><label htmlFor="landing-phone">Telefon (volitelně)<input id="landing-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} /></label><label htmlFor="landing-message">Co chcete automatizovat?<textarea id="landing-message" name="message" rows={3} maxLength={4000} /></label></>}
        <p hidden><label>Nechte prázdné<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
        <label className={styles.gdpr}><input name="privacy_consent" type="checkbox" required value="yes" /><span>Souhlasím se zpracováním údajů pro vyřízení požadavku podle <a href="/cs/privacy" target="_blank" rel="noopener noreferrer">zásad ochrany osobních údajů</a>.</span></label>
        <button type="submit" className={styles.primary} disabled={status === 'sending'}>{status === 'sending' ? 'Odesílám…' : formType === 'webinar' ? 'Registrovat se' : 'Odeslat žádost o konzultaci'}</button>
        {status === 'error' && <p role="alert">Odeslání se nepodařilo. V lokálním náhledu se formulář neodesílá. Na živém webu zkuste odeslání znovu nebo napište na <a href="mailto:info@salesagent.cz">info@salesagent.cz</a>.</p>}
      </form>}
    </dialog>
  </>
}
