'use client'

import Link from 'next/link'
import type { Locale, Translations } from '@/lib/i18n'

interface FooterProps {
  locale: Locale
  t: Translations
}

export default function Footer({ locale, t }: FooterProps) {
  const base = `/${locale}`
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '48px 24px 32px',
        marginTop: '80px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '18px',
              letterSpacing: '-0.02em',
              marginBottom: '8px',
            }}
          >
            SalesAgent<span style={{ color: 'var(--accent)' }}>.cz</span>
          </div>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--text-muted)',
              lineHeight: '1.5',
              marginBottom: '16px',
            }}
          >
            {t.footer.tagline}
          </p>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            {t.footer.company}<br />
            {t.footer.address}
          </p>
        </div>

        {/* Links */}
        <div>
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '16px',
            }}
          >
            Menu
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { href: `${base}/how-it-works`, label: t.footer.links.howItWorks },
              { href: `${base}/pricing`, label: t.footer.links.pricing },
              { href: `${base}/contact`, label: t.footer.links.contact },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--text)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--text-muted)')
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Resources */}
        <div>
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '16px',
            }}
          >
            Resources
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link
              href={`${base}/resources/czech-business-companies-register`}
              style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--text)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--text-muted)')
              }
            >
              {t.footer.links.register}
            </Link>
            <a
              href="https://salesrobots.cz"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--text)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--text-muted)')
              }
            >
              Sales Robots →
            </a>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '16px',
            }}
          >
            Kontakt / Contact
          </div>
          <a
            href="mailto:info@salesagent.cz"
            style={{
              fontSize: '14px',
              color: 'var(--text)',
              textDecoration: 'none',
            }}
          >
            info@salesagent.cz
          </a>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '40px auto 0',
          paddingTop: '24px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          © {year} Sales Robots s.r.o. {t.footer.rights}
        </p>
        <Link
          href={locale === 'cs' ? '/en' : '/cs'}
          style={{ fontSize: '12px', color: 'var(--text-muted)', textDecoration: 'none' }}
        >
          {locale === 'cs' ? 'English' : 'Česky'}
        </Link>
      </div>
    </footer>
  )
}
