import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Co dělá externí obchodník / sales manager? | SalesAgent.cz',
  description:
    'Co přesně dělá externí obchodník nebo sales manager, jaké nástroje používá, jak by měl fungovat a jaké výsledky od něj reálně čekat. Praktický přehled pro firmy.',
  keywords: [
    'co dělá externí obchodník',
    'externí sales manager',
    'obchodní zástupce na outsourcing',
    'exterior sales representative',
    'nástroje pro obchodníka',
    'outsourcing obchodu B2B',
    'sales manager činnost',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/co-dela-externi-obchodnik',
  },
  openGraph: {
    title: 'Co dělá externí obchodník / sales manager?',
    description:
      'Co přesně dělá externí obchodník, jaké nástroje používá a jaké výsledky od něj reálně čekat. Praktický přehled pro firmy.',
    url: 'https://salesagent.cz/blog/co-dela-externi-obchodnik',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-07-29',
    images: [{ url: 'https://salesagent.cz/blog/externi-obchodnik.png', width: 1280, height: 853, alt: 'Co dělá externí obchodník' }],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Co dělá externí obchodník / sales manager?',
  description: 'Co přesně dělá externí obchodník nebo sales manager, jaké nástroje používá a jak by měl fungovat.',
  image: 'https://salesagent.cz/blog/externi-obchodnik.png',
  datePublished: '2026-07-29',
  dateModified: '2026-07-29',
  inLanguage: 'cs',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://salesagent.cz/blog/co-dela-externi-obchodnik' },
}

export default function CoDElaExterniObchodnikPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors mb-10 inline-block">← Zpět na blog</Link>

          <header className="mb-12">
            <p className="text-sm text-orange-400 uppercase tracking-widest mb-4">Externí obchod · 29. července 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Co dělá externí obchodník / sales manager?
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Firma se rozhodne pro externího obchodníka — ale co přesně od něj čekat? Jaká je jeho každodenní práce, co by měl umět, jaké nástroje používat a podle čeho hodnotit výsledky?
            </p>
          </header>

          <div className="mb-14 rounded-xl overflow-hidden border border-white/10">
            <Image src="/blog/externi-obchodnik.png" alt="Co dělá externí obchodník — práce s daty a nástroji" width={1280} height={853} className="w-full object-cover" priority />
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Definice: kdo je externí obchodník?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Externí obchodník (nebo sales manager na outsourcing) je specialista, který zajišťuje obchodní aktivity pro klientskou firmu bez toho, aby byl jejím interním zaměstnancem. Pracuje na základě smlouvy o spolupráci — zpravidla s kombinací fixní odměny a provize z výsledků.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Od klasického obchodního zástupce se liší tím, že si přináší vlastní metodiku, nástroje a zkušenosti z práce pro více firem. Není závislý na interní kultuře ani procesech klienta — naopak je vnáší a buduje je od začátku.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Co konkrétně externí obchodník dělá</h2>

            <div className="space-y-6 mb-10">
              {[
                {
                  num: '01',
                  title: 'Analýza trhu a definice cílové skupiny',
                  body: 'Dobrý externí obchodník nezačne hned volat — nejprve analyzuje, koho má oslovovat. Společně s klientem definuje ideální zákaznický profil (ICP): odvětví, velikost firmy, rozhodovací pozice, geografie. Tato fáze rozhoduje o tom, zda práce přináší výsledky.',
                },
                {
                  num: '02',
                  title: 'Prospekting a budování kontaktní databáze',
                  body: 'Na základě definovaného ICP obchodník aktivně vyhledává potenciální zákazníky — z firemních registrů, LinkedIn, oborových databází nebo z webu. Buduje a průběžně aktualizuje kontaktní seznam, který je základem celého obchodního procesu.',
                },
                {
                  num: '03',
                  title: 'Oslovování a první kontakt',
                  body: 'Klíčová disciplína externího obchodníka: umění prvního oslovení. Email, telefonát nebo LinkedIn zpráva — každý kanál má svou logiku. Profesionální obchodník personalizuje každé oslovení na základě toho, co o firmě ví, a sleduje, jak různé přístupy fungují.',
                },
                {
                  num: '04',
                  title: 'Kvalifikace leadů',
                  body: 'Ne každý zájem je obchodní příležitost. Externí obchodník třídí odpovědi a zjišťuje, zda má daná firma reálný zájem, odpovídající budget a pravomoc rozhodovat. Ke klientovi předává jen kvalifikované leady — šetří tím čas interního týmu.',
                },
                {
                  num: '05',
                  title: 'Vedení schůzek a obchodních jednání',
                  body: 'V závislosti na dohodnutém rozsahu spolupráce může externí obchodník vést i obchodní schůzky — prezentace produktu, vyjednávání podmínek, práce s námitkami. Nebo naopak zajistí schůzku a předá ji internímu specialistovi.',
                },
                {
                  num: '06',
                  title: 'Reporting a zpětná vazba',
                  body: 'Pravidelný reporting je součástí profesionální externího spolupráce. Klient by měl každý týden nebo měsíc dostávat přehled: kolik firem bylo osloveno, jak reagovaly, kolik leadů bylo předáno a jaký je trend. Data jsou základem pro průběžné zlepšování.',
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-5">
                  <span className="text-orange-400 font-bold text-sm mt-1 flex-shrink-0 w-8">{item.num}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Jaké nástroje by měl mít dobrý externí obchodník?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Jednou z hlavních výhod externího obchodníka je, že přichází s vlastní technologickou infrastrukturou. Firma nemusí pořizovat licence ani řešit integraci. Profesionální obchodník by měl standardně pracovat s těmito nástroji:
            </p>

            <div className="grid gap-4 mb-10">
              {[
                {
                  category: 'CRM systém',
                  tools: 'HubSpot, Pipedrive nebo podobné — evidence kontaktů, průběhu jednání, follow-upů a výsledků. Bez CRM se nedá řídit pipeline a sledovat výsledky.',
                },
                {
                  category: 'Prospektingové nástroje',
                  tools: 'LinkedIn Sales Navigator pro hledání kontaktů, Apollo.io nebo Hunter.io pro dohledávání emailů, ARES nebo zahraniční firemní registry pro verifikaci firem.',
                },
                {
                  category: 'Email a outreach automatizace',
                  tools: 'Nástroje jako Lemlist, Instantly nebo Woodpecker pro rozesílání personalizovaných sekvencí a sledování otevření, kliknutí a odpovědí.',
                },
                {
                  category: 'LinkedIn outreach',
                  tools: 'Systematická práce s LinkedIn — zasílání žádostí o spojení, zpráv a follow-upů. Správně nastavený LinkedIn profil je stejně důležitý jako email.',
                },
                {
                  category: 'Analytika a reporting',
                  tools: 'Přehled výsledků v čase: míra odpovědí, konverzní poměr, počet schůzek, zdroj leadů. Bez dat nelze řídit zlepšování.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-white/10 rounded-xl p-5">
                  <p className="text-orange-400 font-semibold text-sm mb-1">{item.category}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.tools}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Co by měl dobrý externí obchodník splňovat?</h2>
            <ul className="list-none space-y-3 mb-8">
              {[
                'Prokazatelné výsledky z předchozích projektů — reference, čísla, případové studie',
                'Znalost oboru nebo schopnost rychlého onboardingu do nového segmentu',
                'Vlastní fungující procesy a nástroje — ne závislost na infrastruktuře klienta',
                'Transparentní reportování bez nutnosti urgování',
                'Schopnost jasně definovat, co dokáže a co naopak ne — bez přehnaných slibů',
                'Aktivní přístup: sám navrhuje optimalizace, nečeká na instrukce ke každému kroku',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-orange-400 mt-1 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Jak hodnotit výsledky externího obchodníka?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Výsledky je třeba měřit od prvního dne — a to na konkrétních metrikách, ne dojmech. Základní KPI pro externího obchodníka:
            </p>
            <ul className="list-none space-y-3 mb-8">
              {[
                'Počet oslovených firem za měsíc (aktivita)',
                'Míra odpovědí z cold outreache (kvalita oslovení)',
                'Počet kvalifikovaných leadů předaných k uzavření (výsledek)',
                'Konverzní poměr lead → schůzka a schůzka → obchod (efektivita)',
                'Průměrný čas od prvního kontaktu po první odpověď (rychlost)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-orange-400 mt-1 flex-shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 leading-relaxed mb-6">
              Realistická očekávání: první měsíc je obvykle o nastavení, testování a ladění. Výsledky v podobě teplých leadů se dostavují typicky od druhého nebo třetího měsíce spolupráce. Firmy, které chtějí výsledky od prvního týdne, bývají zklamány — a to bez ohledu na to, kdo obchod dělá.
            </p>

          </article>

          <div className="mt-16 p-8 border border-orange-500/30 rounded-2xl bg-orange-900/10 text-center">
            <h2 className="text-2xl font-bold mb-3">Hledáte externího obchodníka pro B2B?</h2>
            <p className="text-gray-300 mb-6">SalesAgent.cz kombinuje zkušeného obchodního specialistu s AI automatizací — vyhledáme firmy, personalizujeme oslovení a předáme vám jen ty se skutečným zájmem.</p>
            <a href="https://cal.com/salesagent/demo" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
              Domluvit bezplatnou konzultaci
            </a>
          </div>

          <nav className="mt-16 pt-10 border-t border-white/10">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Související články</p>
            <div className="grid gap-4">
              <Link href="/blog/co-je-externi-obchod" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Co je to externí obchod a jak funguje?</span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/obchodni-zastupce-definice-a-co-dela" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Obchodní zástupce — definice a co vlastně dělá?</span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/ai-agent-pro-generovani-leadu" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">AI agent pro generování leadů</span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">→</span>
              </Link>
            </div>
          </nav>
        </div>
      </main>
    </>
  )
}
