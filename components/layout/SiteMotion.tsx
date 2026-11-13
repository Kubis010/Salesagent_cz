'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function SiteMotion() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const animations: Animation[] = []
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return
        observer.unobserve(target)
        animations.push(target.animate([
          { opacity: 0.2, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)' }))
      })
    }, { threshold: 0.08 })

    document.querySelectorAll('.site-content section, .site-content article, .home-proof .font-mono-data').forEach((element) => {
      if (element.getBoundingClientRect().top >= window.innerHeight) observer.observe(element)
    })
    return () => { observer.disconnect(); animations.forEach((animation) => animation.cancel()) }
  }, [pathname])

  return null
}
