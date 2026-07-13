import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations, type Locale, type Translations } from '@/lib/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const cs = locale === 'cs'
  return {
    title: cs ? 'Jak to funguje — AI obchodní zástupce' : 'How it works — AI Sales Agent',
    description: cs
      ? 'Jak funguje automatizace B2B obchodu: AI obchodník vyhledá firmy, prostuduje jejich weby a odešle personalizovaný cold email i LinkedIn zprávu. Celý proces krok za krokem.'
      : 'How B2B sales automation works: AI sales agent finds companies, reads their websites and sends personalised cold emails and LinkedIn messages. Step by step.',
    alternates: {
      canonical: `https://salesagent.cz/${locale}/how-it-works`,
      languages: {
        cs: 'https://salesagent.cz/cs/how-it-works',
        en: 'https://salesagent.cz/en/how-it-works',
        'x-default': 'https://salesagent.cz/cs/how-it-works',
      },
    },
    openGraph: {
      type: 'website',
      locale: cs ? 'cs_CZ' : 'en_US',
      url: `https://salesagent.cz/${locale}/how-it-works`,
      siteName: 'SalesAgent.cz',
      title: cs ? 'Jak to funguje — AI obchodní zástupce | SalesAgent.cz' : 'How it works — AI Sales Agent | SalesAgent.cz',
      description: cs
        ? 'Automatizace B2B obchodu pomocí AI — krok za krokem.'
        : 'AI-powered B2B sales automation — step by step.',
    },
    twitter: {
      card: 'summary_large_image',
      title: cs ? 'Jak to funguje — AI obchodní zástupce | SalesAgent.cz' : 'How it works — AI Sales Agent | SalesAgent.cz',
      description: cs ? 'Automatizace B2B obchodu pomocí AI — krok za krokem.' : 'AI-powered B2B sales automation — step by step.',
    },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t: Translations = getTranslations(locale as Locale)
  const base = `/${locale}`

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>

        <h1
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: '16px',
          }}
        >
          {t.about.title}
        </h1>
        <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '64px', maxWidth: '580px' }}>
          {t.about.subtitle}
        </p>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {t.about.sections.map((section: { title: string; body: string }, i: number) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: '40px',
                paddingBottom: '48px',
                marginBottom: '48px',
                borderBottom: i < t.about.sections.length - 1 ? '1px solid var(--border)' : 'none',
              }}
              className="about-section"
            >
              <div>
                <div
                  className="font-mono-data"
                  style={{
                    fontSize: '13px',
                    color: 'var(--accent)',
                    fontWeight: 500,
                    marginBottom: '8px',
                  }}
                >
                  0{i + 1}
                </div>
                <h2
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {section.title}
                </h2>
              </div>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.7', marginTop: '28px' }}>
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Not SaaS */}
        <div
          style={{
            background: 'rgba(255,107,74,0.06)',
            border: '1px solid rgba(255,107,74,0.25)',
            borderRadius: '14px',
            padding: '36px',
            marginBottom: '32px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '22px',
              fontWeight: 700,
              marginBottom: '12px',
              letterSpacing: '-0.01em',
            }}
          >
            {t.about.notSaas.title}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0 }}>
            {t.about.notSaas.body}
          </p>
        </div>

        {/* Team */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '36px',
            marginBottom: '56px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '22px',
              fontWeight: 700,
              marginBottom: '12px',
              letterSpacing: '-0.01em',
            }}
          >
            {t.about.team.title}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0 }}>
            {t.about.team.body}
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://outlook.office.com/bookwithme/user/480895b1333541dc94be634dd588fada@salesagent.cz/meetingtype/jwdxCRPBn0CvHccZ7eLwAg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
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
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-section {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .about-section p {
            margin-top: 0 !important;
          }
        }
      `}</style>
    </div>
  )
}
