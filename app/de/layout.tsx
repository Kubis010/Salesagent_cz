import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MeasurementScripts from '@/components/MeasurementScripts'
import SiteMotion from '@/components/layout/SiteMotion'
import { CONSULTATION_URL, ENGLISH_MARKET_ENTRY, GERMAN_MARKET_ENTRY } from '@/lib/market-entry-languages'
import '../globals.css'
import './markteintritt-tschechien/page.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://salesagent.cz'),
  title: { default: 'Markteintritt Tschechien | SalesAgent.cz', template: '%s | SalesAgent.cz' },
}

export default function GermanLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="site-shell">
        <header className="de-header">
          <div>
            <Link href={GERMAN_MARKET_ENTRY} aria-label="SalesAgent.cz – Markteintritt Tschechien"><Image src="/logo.svg" alt="SalesAgent.cz" width={180} height={36} /></Link>
            <nav aria-label="Hauptnavigation">
              <a href={ENGLISH_MARKET_ENTRY} hrefLang="en" lang="en">English</a>
              <a href={CONSULTATION_URL} target="_blank" rel="noopener noreferrer">Erstgespräch</a>
            </nav>
          </div>
        </header>
        <main className="site-content">{children}</main>
        <SiteMotion />
        <footer className="de-footer">
          <div>
            <Image src="/logo.svg" alt="SalesAgent.cz" width={180} height={36} />
            <p>B2B-Vertrieb und Markteintritt in Tschechien.</p>
            <address>Sales Robots s.r.o. · IČO (Unternehmensnummer): 09586563<br />Generála Šišky 2082/26, Praha – Modřany, Tschechien</address>
            <p><a href="mailto:info@salesagent.cz">info@salesagent.cz</a> · <a href="tel:+420777591503">+420 777 591 503</a></p>
            <nav aria-label="Weitere Informationen">
              <a href="/en/privacy" hrefLang="en">Datenschutz (Englisch)</a>
              <a href="/en/about" hrefLang="en">Über uns (Englisch)</a>
              <a href={ENGLISH_MARKET_ENTRY} hrefLang="en" lang="en">English</a>
            </nav>
            <p>© {new Date().getFullYear()} Sales Robots s.r.o.</p>
          </div>
        </footer>
        <MeasurementScripts />
      </body>
    </html>
  )
}
