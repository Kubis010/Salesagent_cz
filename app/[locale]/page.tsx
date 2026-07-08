import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations, type Locale } from '@/lib/i18n'
import HeroPipeline from '@/components/home/HeroPipeline'
import RoiCalculator from '../../components/RoiCalculator'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  return {
    title: locale === 'cs'
      ? 'AI SDR jako outsourcovaná služba | SalesAgent.cz'
      : 'AI SDR as an outsourced service | SalesAgent.cz',
    description: t.hero.subheadline,
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const base = `/${locale}`

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="hero-grid dot-grid"
        style={{
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '128px',
          paddingBottom: '96px',
          paddingLeft: '24px',
          paddingRight: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* Ambient glows */}
        <div
          aria-hidden
          className="glow"
          style={{ width: '460px', height: '460px', background: 'rgba(255,107,74,0.16)', top: '-40px', right: '-60px' }}
        />
        <div
          aria-hidden
          className="glow"
          style={{ width: '380px', height: '380px', background: 'rgba(34,160,107,0.10)', bottom: '0px', left: '-100px' }}
        />

        {/* Left */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              border: '1px solid rgba(255,107,74,0.3)',
              borderRadius: '20px',
              padding: '5px 14px',
              marginBottom: '24px',
              background: 'rgba(255,107,74,0.06)',
            }}
          >
            <span
              className="animate-pulse-dot"
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
                display: 'inline-block',
              }}
            />
            {t.hero.badge}
          </div>

          <h1
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              marginBottom: '24px',
              whiteSpace: 'pre-line',
            }}
          >
            {t.hero.headline}
          </h1>

          <p
            style={{
              fontSize: '17px',
              color: 'var(--text-muted)',
              lineHeight: '1.65',
              marginBottom: '40px',
              maxWidth: '500px',
            }}
          >
            {t.hero.subheadline}
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://bookings.cloud.microsoft/bookwithme/user/480895b1333541dc94be634dd588fada%40salesagent.cz"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--accent)',
                color: '#0B1320',
                fontWeight: 700,
                fontSize: '15px',
                padding: '14px 28px',
                borderRadius: '10px',
                textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
            >
              {t.hero.cta}
            </a>
            <Link
              href={`${base}/how-it-works`}
              style={{
                display: 'inline-block',
                color: 'var(--text-muted)',
                fontSize: '15px',
                padding: '14px 4px',
                textDecoration: 'none',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {t.hero.ctaSub} →
            </Link>
          </div>
        </div>

        {/* Right: Pipeline */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <HeroPipeline t={t} />
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        id="how-it-works"
        style={{
          padding: '80px 24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ marginBottom: '56px' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>
            Proces
          </div>
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              marginBottom: '16px',
              maxWidth: '640px',
            }}
          >
            {t.howItWorks.title}
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.65', maxWidth: '560px' }}>
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          {t.howItWorks.steps.map((step: { number: string; title: string; body: string }, idx: number) => {
            const icons = [
              // 01 targeting
              <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="var(--accent)" strokeWidth="1.6"/><circle cx="12" cy="12" r="4" stroke="var(--accent)" strokeWidth="1.6"/><circle cx="12" cy="12" r="1.5" fill="var(--accent)"/></svg>,
              // 02 AI analysis
              <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2.5" stroke="var(--accent)" strokeWidth="1.6"/><path d="M7 10h3M7 14h5M14 10h3" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round"/><circle cx="19" cy="5" r="3" fill="var(--green)" stroke="var(--bg)" strokeWidth="1.5"/></svg>,
              // 03 personalized message
              <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v12H4z" stroke="var(--accent)" strokeWidth="1.6" strokeLinejoin="round"/><path d="M4 4l8 7 8-7" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round"/><path d="M4 20h10" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round"/></svg>,
              // 04 linkedin + followup
              <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 12h16M14 6l6 6-6 6" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            ]
            return (
              <div
                key={step.number}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '28px',
                  position: 'relative',
                }}
              >
                {/* Step number + icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div
                    className="font-mono-data"
                    style={{
                      fontSize: '12px',
                      color: 'var(--accent)',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      background: 'rgba(255,107,74,0.08)',
                      border: '1px solid rgba(255,107,74,0.2)',
                      borderRadius: '6px',
                      padding: '3px 9px',
                    }}
                  >
                    {step.number}
                  </div>
                  <div style={{ opacity: 0.7 }}>{icons[idx]}</div>
                </div>
                <h3
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '17px',
                    fontWeight: 700,
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                    lineHeight: '1.3',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0 }}>
                  {step.body}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── FOR WHOM ── */}
      <section
        style={{
          padding: '80px 24px',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          background: 'rgba(255,255,255,0.01)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              marginBottom: '48px',
            }}
          >
            {t.forWhom.title}
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {t.forWhom.items.map((item: { title: string; body: string }) => (
              <div
                key={item.title}
                style={{
                  borderLeft: '3px solid var(--accent)',
                  paddingLeft: '24px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    marginBottom: '10px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '56px' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>
            Naše služby
          </div>
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              marginBottom: '14px',
              maxWidth: '600px',
            }}
          >
            {t.services.title}
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.65', maxWidth: '520px' }}>
            {t.services.subtitle}
          </p>
        </div>

        {/* Automation — featured card */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(34,160,107,0.06) 100%)',
            border: '1px solid rgba(34,160,107,0.25)',
            borderRadius: '18px',
            padding: '40px',
            marginBottom: '20px',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="services-main-card"
        >
          {/* Subtle glow */}
          <div aria-hidden style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(34,160,107,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start', position: 'relative' }} className="services-inner-grid">
            {/* Left */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--green)', border: '1px solid rgba(34,160,107,0.35)', borderRadius: '20px', padding: '4px 12px', marginBottom: '20px', background: 'rgba(34,160,107,0.08)' }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="5" r="3" /></svg>
                {t.services.automation.badge}
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: '1.25' }}>
                {t.services.automation.title}
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '28px' }}>
                {t.services.automation.body}
              </p>
              <a
                href="https://bookings.cloud.microsoft/bookwithme/user/480895b1333541dc94be634dd588fada%40salesagent.cz"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: 'var(--green)', textDecoration: 'none', border: '1px solid rgba(34,160,107,0.35)', borderRadius: '8px', padding: '10px 20px', background: 'rgba(34,160,107,0.08)', transition: 'background 0.2s' }}
              >
                {t.services.automation.cta} →
              </a>
            </div>
            {/* Right — examples */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Co konkrétně stavíme
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {t.services.automation.examples.map((ex: { label: string; icon: string }, i: number) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: 'rgba(34,160,107,0.12)', border: '1px solid rgba(34,160,107,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      {ex.icon === 'connect' && <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><circle cx="3" cy="8" r="2" stroke="var(--green)" strokeWidth="1.5"/><circle cx="13" cy="8" r="2" stroke="var(--green)" strokeWidth="1.5"/><path d="M5 8h6" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                      {ex.icon === 'enrich' && <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="3" stroke="var(--green)" strokeWidth="1.5"/><path d="M8 9v5M6 11h4" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                      {ex.icon === 'ai' && <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="8" rx="2" stroke="var(--green)" strokeWidth="1.5"/><path d="M5 8h.5M8 8h.5M11 8h.5" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round"/></svg>}
                      {ex.icon === 'flow' && <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M2 4h4v3H2zM10 4h4v3h-4z" stroke="var(--green)" strokeWidth="1.4"/><path d="M6 5.5h4M8 7.5v3M8 10.5l-2 2M8 10.5l2 2" stroke="var(--green)" strokeWidth="1.4" strokeLinecap="round"/></svg>}
                      {ex.icon === 'chart' && <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M2 13V6l4-3 4 4 4-4" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      {ex.icon === 'alert' && <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M8 2l5.5 10H2.5L8 2z" stroke="var(--green)" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 7v3M8 11.5v.5" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                    </div>
                    <span style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.55' }}>{ex.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Agency — secondary card */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '18px',
            padding: '36px 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'start',
          }}
          className="services-agency-card"
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--accent)', border: '1px solid rgba(255,107,74,0.3)', borderRadius: '20px', padding: '4px 12px', marginBottom: '20px', background: 'rgba(255,107,74,0.06)' }}>
              {t.services.agency.badge}
            </div>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '14px' }}>
              {t.services.agency.title}
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '24px' }}>
              {t.services.agency.body}
            </p>
            <a
              href="https://bookings.cloud.microsoft/bookwithme/user/480895b1333541dc94be634dd588fada%40salesagent.cz"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px 20px', transition: 'border-color 0.2s' }}
            >
              {t.services.agency.cta} →
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '4px' }}>
            {t.services.agency.examples.map((ex: { label: string; icon: string }, i: number) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255,107,74,0.08)', border: '1px solid rgba(255,107,74,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l1.5 1.5L6.5 2" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.55' }}>{ex.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF BAND (light) — references + founder ── */}
      <section className="section-light" style={{ padding: '88px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* References */}
          <div style={{ maxWidth: '620px', marginBottom: '48px' }}>
            <h2
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                marginBottom: '14px',
                color: 'var(--text)',
              }}
            >
              {t.references.title}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.65' }}>
              {t.references.subtitle}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              marginBottom: '20px',
            }}
          >
            {t.references.items.map((r: { client: string; sector: string; value: string; result: string }) => (
              <div
                key={r.client}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '28px',
                  boxShadow: '0 12px 30px -24px rgba(20,17,11,0.4)',
                }}
              >
                <div
                  className="font-mono-data"
                  style={{ fontSize: '44px', fontWeight: 500, color: 'var(--accent)', lineHeight: 1, marginBottom: '14px' }}
                >
                  {r.value}
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 500, lineHeight: '1.5', marginBottom: '18px' }}>
                  {r.result}
                </p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '15px', fontWeight: 700, color: 'var(--text)' }}>
                    {r.client}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '3px' }}>{r.sector}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '72px' }}>
            {t.references.note}
          </p>

          {/* Founder */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '48px',
              alignItems: 'start',
              borderTop: '1px solid var(--border)',
              paddingTop: '64px',
            }}
            className="founder-grid"
          >
            {/* Photo */}
            <div style={{ flexShrink: 0 }}>
              <img
                src="/petr-kubicek.jpg"
                alt="Petr Kubíček"
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '16px',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  border: '1px solid var(--border)',
                  display: 'block',
                }}
              />
            </div>

            {/* Text + credentials */}
            <div>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '10px',
                }}
              >
                {t.founder.label}
              </div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, color: 'var(--text)', lineHeight: 1.2 }}>
                {t.founder.name}
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px', marginTop: '4px' }}>
                {t.founder.role}
              </div>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '28px', maxWidth: '600px' }}>
                {t.founder.body}
              </p>

              {/* Credentials */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {t.founder.credentials.map((c: { value: string; label: string }, i: number) => (
                  <div
                    key={i}
                    style={{
                      padding: '14px 20px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      textAlign: 'center',
                      minWidth: '90px',
                    }}
                  >
                    <div className="font-mono-data" style={{ fontSize: '22px', fontWeight: 600, color: 'var(--text)', lineHeight: 1, marginBottom: '5px' }}>
                      {c.value}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: '1.4' }}>{c.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SALES ROBOTS crosslink ── */}
      <section
        style={{
          padding: '0 24px 80px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              padding: '4px 10px',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              whiteSpace: 'nowrap',
            }}
          >
            {t.salesRobots.label}
          </span>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, flex: 1 }}>
            {t.salesRobots.text}{' '}
            <a
              href="https://salesrobots.cz"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text)', fontWeight: 600, textDecoration: 'none' }}
            >
              {t.salesRobots.link}
            </a>{' '}
            {t.salesRobots.suffix}
          </p>
        </div>
      </section>

      {/* ── ROI CALCULATOR ── */}
      <RoiCalculator locale={locale} />

      {/* ── CTA ── */}
      <section
        style={{
          padding: '80px 24px',
          textAlign: 'center',
          background: 'rgba(255,107,74,0.04)',
          borderTop: '1px solid rgba(255,107,74,0.12)',
        }}
      >
        <h2
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            marginBottom: '16px',
          }}
        >
          {t.cta.title}
        </h2>
        <p style={{ fontSize: '17px', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
          {t.cta.subtitle}
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://bookings.cloud.microsoft/bookwithme/user/480895b1333541dc94be634dd588fada%40salesagent.cz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--accent)',
              color: '#0B1320',
              fontWeight: 700,
              fontSize: '15px',
              padding: '14px 32px',
              borderRadius: '10px',
              textDecoration: 'none',
            }}
          >
            {t.cta.primary}
          </a>
          <a
            href="mailto:info@salesagent.cz"
            style={{
              display: 'inline-block',
              color: 'var(--text)',
              fontSize: '15px',
              padding: '14px 24px',
              textDecoration: 'none',
              border: '1px solid var(--border)',
              borderRadius: '10px',
            }}
          >
            {t.cta.secondary}
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .founder-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .services-inner-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .services-agency-card {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .services-main-card {
            padding: 28px !important;
          }
        }
      `}</style>
    </>
  )
}
