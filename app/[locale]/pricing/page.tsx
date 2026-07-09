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
    title: cs ? 'Ceník — AI SDR' : 'Pricing — AI SDR',
    description: cs
      ? 'Tři tarify AI SDR služby — Start, Grow od 5 900 Kč, Scale. Žádné roční závazky, žádné skryté poplatky. Outsourcovaný outbound pro B2B firmy.'
      : 'Three tiers for AI SDR service — Start, Grow from €239, Scale custom. No annual lock-in, no hidden fees. Outsourced outbound for B2B companies.',
    alternates: {
      canonical: `https://salesagent.cz/${locale}/pricing`,
      languages: {
        cs: 'https://salesagent.cz/cs/pricing',
        en: 'https://salesagent.cz/en/pricing',
        'x-default': 'https://salesagent.cz/cs/pricing',
      },
    },
    openGraph: {
      type: 'website',
      locale: cs ? 'cs_CZ' : 'en_US',
      url: `https://salesagent.cz/${locale}/pricing`,
      siteName: 'SalesAgent.cz',
      title: cs ? 'Ceník — AI SDR | SalesAgent.cz' : 'Pricing — AI SDR | SalesAgent.cz',
      description: cs
        ? 'Tři tarify outsourcovaného AI SDR. Grow od 5 900 Kč / měsíc.'
        : 'Three tiers for outsourced AI SDR. Grow from €239 / month.',
    },
    twitter: {
      card: 'summary_large_image',
      title: cs ? 'Ceník — AI SDR | SalesAgent.cz' : 'Pricing — AI SDR | SalesAgent.cz',
      description: cs
        ? 'Outsourcovaný AI SDR od 5 900 Kč / měsíc.'
        : 'Outsourced AI SDR from €239 / month.',
    },
  }
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t: Translations = getTranslations(locale as Locale)
  const base = `/${locale}`

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.pricing.faq.map((item: { q: string; a: string }) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <div style={{ paddingTop: '100px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            {t.pricing.title}
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: '1.65' }}>
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Setup fee note */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '20px 24px',
            marginBottom: '48px',
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent)',
              marginTop: '6px',
              flexShrink: 0,
            }}
          />
          <div>
            <strong style={{ fontSize: '14px', color: 'var(--text)', display: 'block', marginBottom: '4px' }}>
              {t.pricing.setup.label}
            </strong>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
              {t.pricing.setup.description}
            </p>
          </div>
        </div>

        {/* Tiers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '80px',
          }}
        >
          {t.pricing.tiers.map((tier: { name: string; monthlyLabel: string; price: string; priceNote: string; features: string[]; cta: string; highlight: boolean }) => (
            <div
              key={tier.name}
              style={{
                background: tier.highlight ? 'rgba(255,107,74,0.06)' : 'var(--bg-card)',
                border: `1px solid ${tier.highlight ? 'rgba(255,107,74,0.4)' : 'var(--border)'}`,
                borderRadius: '14px',
                padding: '32px',
                position: 'relative',
              }}
            >
              {tier.highlight && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-1px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--accent)',
                    color: '#0B1320',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '4px 14px',
                    borderRadius: '0 0 8px 8px',
                  }}
                >
                  {tier.priceNote}
                </div>
              )}

              <div
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  marginBottom: '8px',
                }}
              >
                {tier.name}
              </div>

              <div
                className="font-mono-data"
                style={{
                  fontSize: '38px',
                  fontWeight: 500,
                  color: tier.highlight ? 'var(--accent)' : 'var(--text)',
                  marginBottom: '4px',
                  lineHeight: 1,
                }}
              >
                {tier.price}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '28px' }}>
                {tier.monthlyLabel}
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {tier.features.map((f: string) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: '1px' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://outlook.office.com/bookwithme/user/480895b1333541dc94be634dd588fada@salesagent.cz/meetingtype/jwdxCRPBn0CvHccZ7eLwAg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '13px 24px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  backgroundColor: tier.highlight ? 'var(--accent)' : 'transparent',
                  color: tier.highlight ? '#0B1320' : 'var(--text)',
                  border: tier.highlight ? 'none' : '1px solid var(--border)',
                }}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div>
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: '32px',
            }}
          >
            FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {t.pricing.faq.map((item: { q: string; a: string }) => (
              <div
                key={item.q}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '24px',
                  marginBottom: '2px',
                }}
              >
                <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '10px' }}>{item.q}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.65' }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
