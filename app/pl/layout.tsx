import type { Metadata } from 'next'
import Image from 'next/image'
import MeasurementScripts from '@/components/MeasurementScripts'
import SiteMotion from '@/components/layout/SiteMotion'
import MarketEntryLanguageLinks from '@/components/MarketEntryLanguageLinks'
import { CONSULTATION_URL, POLISH_MARKET_ENTRY } from '@/lib/market-entry-languages'
import '../globals.css'
import '../market-entry.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://salesagent.cz'),
  title: { default: 'Wejście na rynek czeski B2B | SalesAgent.cz', template: '%s | SalesAgent.cz' },
}

export default function PolishLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pl"><body className="site-shell">
    <header className="de-header"><div>
      <a href={POLISH_MARKET_ENTRY} aria-label="SalesAgent.cz – wejście na rynek czeski"><Image src="/logo.svg" alt="SalesAgent.cz" width={180} height={36} /></a>
      <nav aria-label="Nawigacja główna"><MarketEntryLanguageLinks locale="pl" /><a href={CONSULTATION_URL} target="_blank" rel="noopener noreferrer">Konsultacja</a></nav>
    </div></header>
    <main className="site-content">{children}</main>
    <SiteMotion />
    <footer className="de-footer"><div>
      <Image src="/logo.svg" alt="SalesAgent.cz" width={180} height={36} />
      <p>Sprzedaż B2B i wsparcie wejścia na rynek czeski.</p>
      <address>Sales Robots s.r.o. · IČO (numer identyfikacyjny firmy): 09586563<br />Generála Šišky 2082/26, Praha – Modřany, Czechy</address>
      <p><a href="mailto:info@salesagent.cz">info@salesagent.cz</a> · <a href="tel:+420777591503">+420 777 591 503</a></p>
      <nav aria-label="Dodatkowe informacje"><a href="/en/privacy" hrefLang="en">Prywatność (po angielsku)</a><a href="/en/about" hrefLang="en">O nas (po angielsku)</a><MarketEntryLanguageLinks locale="pl" /></nav>
      <p>© {new Date().getFullYear()} Sales Robots s.r.o.</p>
    </div></footer>
    <MeasurementScripts />
  </body></html>
}
