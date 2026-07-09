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
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '8px',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="32" height="32" rx="7" fill="#FF6B4A"/>
              <path d="M13 12.5V10.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <rect x="8" y="12.5" width="16" height="11" rx="2.5" fill="white"/>
              <rect x="8" y="16.6" width="16" height="1.5" fill="#FF6B4A"/>
              <rect x="14.5" y="15.6" width="3" height="3.4" rx="0.8" fill="#FF6B4A"/>
            </svg>
            <span
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                letterSpacing: '-0.02em',
              }}
            >
              SalesAgent<span style={{ color: 'var(--accent)' }}>.cz</span>
            </span>
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
              href="/blog"
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
              Blog
            </Link>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href="mailto:info@salesagent.cz"
              style={{ fontSize: '14px', color: 'var(--text)', textDecoration: 'none' }}
            >
              info@salesagent.cz
            </a>
            <a
              href="tel:+420777591503"
              style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none' }}
            >
              +420 777 591 503
            </a>
            <a
              href="https://www.facebook.com/salesagent.cz/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'var(--text)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')
              }
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>
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
