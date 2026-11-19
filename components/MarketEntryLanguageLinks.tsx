import { ENGLISH_MARKET_ENTRY, GERMAN_MARKET_ENTRY, POLISH_MARKET_ENTRY } from '@/lib/market-entry-languages'

const versions = [
  { locale: 'en', name: 'English', code: 'EN', href: ENGLISH_MARKET_ENTRY },
  { locale: 'de', name: 'Deutsch', code: 'DE', href: GERMAN_MARKET_ENTRY },
  { locale: 'pl', name: 'Polski', code: 'PL', href: POLISH_MARKET_ENTRY },
] as const

export default function MarketEntryLanguageLinks({ locale }: { locale: 'en' | 'de' | 'pl' }) {
  return <span className="market-language-links">
    {versions.filter(version => version.locale !== locale).map(version =>
      <a key={version.locale} href={version.href} hrefLang={version.locale} lang={version.locale} aria-label={version.name}>
        <span className="market-language-name">{version.name}</span><span className="market-language-code" aria-hidden="true">{version.code}</span>
      </a>
    )}
  </span>
}
