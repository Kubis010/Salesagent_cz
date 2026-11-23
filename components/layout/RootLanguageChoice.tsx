'use client'

import { useEffect } from 'react'

export default function RootLanguageChoice() {
  useEffect(() => {
    if (window.location.pathname !== '/') return
    if (/bot|crawler|spider|slurp|bingpreview|facebookexternalhit/i.test(navigator.userAgent)) return
    try {
      if (window.sessionStorage.getItem('root_language_checked')) return
      window.sessionStorage.setItem('root_language_checked', '1')
      const saved = document.cookie.match(/(?:^|;\s*)site_language=(cs|en)(?:;|$)/)?.[1]
      const language = saved ?? (/^cs(?:-|$)/i.test(navigator.language) ? 'cs' : 'en')
      if (language === 'cs') window.location.replace('/cs' + window.location.search + window.location.hash)
    } catch {
      // If storage is unavailable, keep the stable English entry page.
    }
  }, [])
  return null
}
