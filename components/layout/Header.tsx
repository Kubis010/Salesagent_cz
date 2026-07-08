'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Locale, Translations } from '@/lib/i18n'

interface HeaderProps {
  locale: Locale
  t: Translations
}

export default function Header({ locale, t }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const otherLocale = locale === 'cs' ? 'en' : 'cs'
  const base = `/${locale}`

  const links = [
    { href: `${base}/how-it-works`, label: t.nav.howItWorks },
    { href: `${base}/pricing`, label: t.nav.pricing },
    { href: `${base}/about`, label: t.nav.about },
    { href: '/blog', label: 'Blog' },
    { href: `${base}/contact`, label: t.nav.contact },
  ]

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'rgba(11, 19, 32, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href={`/${locale}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
              color: 'var(--text)',
              letterSpacing: '-0.02em',
            }}
          >
            SalesAgent<span style={{ color: 'var(--accent)' }}>.cz</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontWeight: 500,
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

          {/* Language switcher */}
          <Link
            href={`/${otherLocale}`}
            style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement
              el.style.borderColor = 'var(--border-strong)'
              el.style.color = 'var(--text)'
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement
              el.style.borderColor = 'var(--border)'
              el.style.color = 'var(--text-muted)'
            }}
          >
            {otherLocale.toUpperCase()}
          </Link>

          {/* CTA */}
          <a
            href="https://bookings.cloud.microsoft/bookwithme/user/480895b1333541dc94be634dd588fada%40salesagent.cz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#0B1320',
              backgroundColor: 'var(--accent)',
              padding: '8px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.opacity = '0.9')
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.opacity = '1')
            }
          >
            {t.nav.bookCall}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            cursor: 'pointer',
            padding: '8px',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" />
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" />
                <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            borderTop: '1px solid var(--border)',
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
          className="mobile-menu"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '16px',
                color: 'var(--text)',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <Link
              href={`/${otherLocale}`}
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              {otherLocale.toUpperCase()}
            </Link>
          </div>
          <a
            href="https://bookings.cloud.microsoft/bookwithme/user/480895b1333541dc94be634dd588fada%40salesagent.cz"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: '15px',
              fontWeight: 600,
              color: '#0B1320',
              backgroundColor: 'var(--accent)',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            {t.nav.bookCall}
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  )
}
