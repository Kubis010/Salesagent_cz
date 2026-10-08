'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import type { Translations } from '@/lib/i18n'

type Props = {
  csT: Translations
  enT: Translations
  enPaths: string[]
  initialYear: number
  part: 'header' | 'footer'
}

export default function BlogChrome({ csT, enT, enPaths, initialYear, part }: Props) {
  const pathname = usePathname() ?? ''
  const isEn = enPaths.includes(pathname.replace(/\/$/, ''))
  const locale = isEn ? 'en' : 'cs'
  const t = isEn ? enT : csT
  return part === 'header' ? (
    <Header locale={locale} t={t} />
  ) : (
    <Footer locale={locale} t={t} initialYear={initialYear} />
  )
}
