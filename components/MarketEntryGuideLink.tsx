'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

function hasAnalyticsConsent(): boolean {
  try {
    const cookieScript = (window as typeof window & { CookieScript?: { instance?: { currentState: () => { categories?: string[] } } } }).CookieScript
    const categories = cookieScript?.instance?.currentState()?.categories
    if (Array.isArray(categories)) return categories.includes('performance')
    const cookie = document.cookie.split('; ').find(value => value.startsWith('CookieScriptConsent='))
    if (!cookie) return false
    const stored = JSON.parse(decodeURIComponent(cookie.slice('CookieScriptConsent='.length)))
    const saved = typeof stored.categories === 'string' ? JSON.parse(stored.categories) : stored.categories
    return Array.isArray(saved) && saved.includes('performance')
  } catch { return false }
}

export default function MarketEntryGuideLink({ placement, children }: { placement: 'ares_box' | 'existing', children: ReactNode }) {
  return <Link href="/en/guides/czech-market-entry-for-b2b-companies" onClick={() => {
    if (!hasAnalyticsConsent()) return
    const measurement = (window as typeof window & { SalesMeasurement?: { track: (name: string, params: object) => boolean } }).SalesMeasurement
    try { measurement?.track('guide_click', { placement }) } catch { /* Navigation must work even if analytics fails. */ }
  }} style={{ color: 'var(--accent)', textDecoration: 'underline' }}>{children}</Link>
}
