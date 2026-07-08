import type { Metadata } from 'next'
import { getTranslations, type Locale, type Translations } from '@/lib/i18n'
import ContactForm from '@/components/ContactForm'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const cs = locale === 'cs'
  return {
    title: cs ? 'Kontakt — AI SDR' : 'Contact — AI SDR',
    description: cs
      ? 'Domluvte si nezávazný 30minutový hovor. Projdeme váš trh a ukážeme, jak by AI outreach vypadal konkrétně u vás.'
      : 'Book a free 30-minute call. We will walk through your market and show what AI outreach would look like for your business.',
    alternates: {
      canonical: `https://salesagent.cz/${locale}/contact`,
      languages: {
        cs: 'https://salesagent.cz/cs/contact',
        en: 'https://salesagent.cz/en/contact',
        'x-default': 'https://salesagent.cz/cs/contact',
      },
    },
    openGraph: {
      type: 'website',
      locale: cs ? 'cs_CZ' : 'en_US',
      url: `https://salesagent.cz/${locale}/contact`,
      siteName: 'SalesAgent.cz',
      title: cs ? 'Kontakt — SalesAgent.cz' : 'Contact — SalesAgent.cz',
      description: cs
        ? 'Domluvte si 30minutový hovor zdarma.'
        : 'Book a free 30-minute call.',
    },
    twitter: {
      card: 'summary',
      title: cs ? 'Kontakt — SalesAgent.cz' : 'Contact — SalesAgent.cz',
      description: cs ? 'Domluvte si 30minutový hovor zdarma.' : 'Book a free 30-minute call.',
    },
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t: Translations = getTranslations(locale as Locale)

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
        className="contact-grid"
      >
        {/* Left */}
        <div>
          <h1
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            {t.contact.title}
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '40px' }}>
            {t.contact.subtitle}
          </p>

          {/* Calendly CTA */}
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
              marginBottom: '32px',
            }}
          >
            {t.contact.calendly}
          </a>

          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '40px' }}>
            {t.contact.or}
          </p>

          {/* Company info */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '24px',
            }}
          >
            {[
              t.contact.info.company,
              t.contact.info.ico,
              t.contact.info.address,
              t.contact.info.email,
            ].map((line) => (
              <p
                key={line}
                style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  margin: '0 0 6px',
                  lineHeight: '1.5',
                }}
              >
                {line.includes('@') ? (
                  <a href={`mailto:${line}`} style={{ color: 'var(--text)', textDecoration: 'none' }}>
                    {line}
                  </a>
                ) : (
                  line
                )}
              </p>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <ContactForm t={t} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </div>
  )
}
