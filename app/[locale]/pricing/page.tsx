import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations, type Locale } from '@/lib/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'cs' ? 'Ceník — AI SDR' : 'Pricing — AI SDR',
  }
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const base = `/${locale}`

  return (
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
                href="https://bookings.cloud.microsoft/bookwithme/user/480895b1333541dc94be634dd588fada%40salesagent.cz"
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
  )
}
