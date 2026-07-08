import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations, type Locale, type Translations } from '@/lib/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'cs' ? 'Zdroje a průvodci' : 'Resources & Guides',
  }
}

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t: Translations = getTranslations(locale as Locale)
  const base = `/${locale}`

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <h1
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            marginBottom: '12px',
          }}
        >
          {locale === 'cs' ? 'Zdroje' : 'Resources'}
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '48px' }}>
          {locale === 'cs'
            ? 'Průvodci a nástroje pro B2B obchod a prospecting.'
            : 'Guides and tools for B2B sales and prospecting.'}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <Link
            href={`${base}/resources/czech-business-companies-register`}
            className="card-hover"
            style={{
              display: 'block',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '24px',
              textDecoration: 'none',
            }}
          >
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.06em', marginBottom: '8px' }}>
              PRŮVODCE / GUIDE
            </div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '18px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>
              {t.register.title}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
              {t.register.description}
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
