import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Obchodník vs. AI outreach: Srovnání nákladů | SalesAgent.cz',
  description:
    'Reálné srovnání nákladů: interní obchodní zástupce vs. AI outreach systém. Mzdy, výkon, kapacita a kdy se co vyplatí — s konkrétními čísly.',
  keywords: [
    'kolik stojí obchodní zástupce',
    'obchodník vs AI',
    'náklady na obchodního zástupce',
    'AI obchodní zástupce cena',
    'cena cold outreach',
    'obchodní zástupce mzda',
    'AI vs obchodník srovnání',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/kolik-stoji-obchodnik-vs-ai',
    languages: { cs: 'https://salesagent.cz/blog/kolik-stoji-obchodnik-vs-ai', 'x-default': 'https://salesagent.cz/blog/kolik-stoji-obchodnik-vs-ai' },
  },
  openGraph: {
    title: 'Kolik stojí obchodní zástupce vs. AI outreach? Srovnání nákladů',
    description: 'Reálné srovnání: interní obchodní zástupce vs. AI outreach. Konkrétní čísla, výkon a kdy se co vyplatí.',
    url: 'https://salesagent.cz/blog/kolik-stoji-obchodnik-vs-ai',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-07-25',
    images: [{ url: 'https://salesagent.cz/blog/obchodnik-vs-ai.jpg', width: 1280, height: 853, alt: 'Srovnání nákladů obchodník vs AI' }],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Kolik stojí obchodní zástupce vs. AI outreach? Srovnání nákladů',
  description: 'Reálné srovnání nákladů: interní obchodní zástupce vs. AI outreach systém.',
  image: 'https://salesagent.cz/blog/obchodnik-vs-ai.jpg',
  datePublished: '2026-07-25',
  dateModified: '2026-07-25',
  inLanguage: 'cs',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://salesagent.cz/blog/kolik-stoji-obchodnik-vs-ai' },
}

type Row = { label: string; obchodnik: string; ai: string; winner?: 'ai' | 'obchodnik' | 'none' }
const comparison: Row[] = [
  { label: 'Měsíční náklad', obchodnik: '55 000–80 000 Kč vč. odvodů', ai: '5 000–25 000 Kč', winner: 'ai' },
  { label: 'Oslovené firmy / měsíc', obchodnik: '80–200', ai: '200–800', winner: 'ai' },
  { label: 'Personalizace zprávy', obchodnik: 'Vysoká (čte web, píše ručně)', ai: 'Vysoká (AI čte web, generuje)', winner: 'none' },
  { label: 'Dostupnost', obchodnik: '8 hod/den, 5 dní v týdnu', ai: '24/7', winner: 'ai' },
  { label: 'Onboarding', obchodnik: '2–4 měsíce (nábor + zapracování)', ai: '1–2 týdny', winner: 'ai' },
  { label: 'Reakce na odpovědi', obchodnik: 'Okamžitá, kontextuální', ai: 'Vyžaduje člověka pro follow-up', winner: 'obchodnik' },
  { label: 'Budování vztahů', obchodnik: 'Silné — důvěra, empatie, kontext', ai: 'Nenahraditelná lidská role', winner: 'obchodnik' },
  { label: 'Uzavírání obchodů', obchodnik: 'Zvládá plný cyklus', ai: 'Pouze top-of-funnel', winner: 'obchodnik' },
  { label: 'Škálovatelnost', obchodnik: 'Lineární (nový člověk = +€€€)', ai: 'Téměř bez mezních nákladů', winner: 'ai' },
  { label: 'Výpovědní doba / flexibilita', obchodnik: 'Výpovědní lhůta, pesangon', ai: 'Zastavení kampaně = žádné náklady', winner: 'ai' },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kolik stojí interní obchodní zástupce celkem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hrubá mzda průměrného B2B obchodníka v ČR je 45 000–70 000 Kč. K tomu přičtěte odvody (33 %), provize, firemní auto nebo diety, telefon a nástroje. Reálné náklady jsou 75 000–120 000 Kč/měsíc."
      }
    },
    {
      "@type": "Question",
      "name": "Kolik stojí AI outreach systém?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Managed AI outreach služba jako SalesAgent.cz stojí od 5 990 Kč/měsíc. Do-it-yourself stack (Clay + Instantly + Apollo) vychází na 8 000–15 000 Kč/měsíc plus čas na správu."
      }
    },
    {
      "@type": "Question",
      "name": "Kdy se vyplatí AI outreach oproti internímu obchodníkovi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI outreach se vyplatí pro top-of-funnel aktivity (vyhledávání a oslovení) při jakémkoli objemu. Interní obchodník má smysl, jakmile máte dostatek příchozích leadů a potřebujete kapacitu na uzavírání obchodů."
      }
    }
  ]
}

export default function KolikStojiObchodnikPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors mb-10 inline-block">← Zpět na blog</Link>

          <header className="mb-12">
            <p className="text-sm text-orange-400 uppercase tracking-widest mb-4">Náklady · 25. července 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Kolik stojí obchodní zástupce vs. AI outreach?
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Reálné srovnání nákladů, výkonu a schopností: kdy se vyplatí najmout obchodníka a kdy je AI outreach lepší investice. S konkrétními čísly pro český trh.
            </p>
          </header>

          <div className="mb-14 rounded-xl overflow-hidden border border-white/10">
            <Image src="/blog/obchodnik-vs-ai.jpg" alt="Srovnání nákladů obchodní zástupce vs AI" width={1280} height={853} className="w-full object-cover" priority />
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Skutečné náklady na interního obchodníka</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Většina firem podceňuje skutečné náklady na obchodního zástupce. Hrubá mzda je jen začátek:
            </p>
            <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden mb-6">
              {[
                { item: 'Hrubá mzda (junior SDR)', amount: '35 000–50 000 Kč/měs' },
                { item: 'Odvody zaměstnavatele (34 %)', amount: '11 900–17 000 Kč/měs' },
                { item: 'Notebook, telefon, software', amount: '2 000–5 000 Kč/měs' },
                { item: 'CRM licence (HubSpot, Pipedrive)', amount: '1 000–3 000 Kč/měs' },
                { item: 'LinkedIn Sales Navigator', amount: '2 400 Kč/měs' },
                { item: 'Onboarding a školení (amort.)', amount: '2 000–4 000 Kč/měs' },
                { item: 'Management čas (10–15 % času senior)', amount: '3 000–6 000 Kč/měs' },
              ].map((row, i, arr) => (
                <div key={i} className={`flex justify-between items-center px-5 py-3 ${i < arr.length - 1 ? 'border-b border-gray-700/50' : 'bg-orange-900/10 border-t border-orange-500/30'}`}>
                  <span className={`text-sm ${i === arr.length - 1 ? 'text-orange-300 font-bold' : 'text-gray-300'}`}>{row.item}</span>
                  <span className={`text-sm font-mono ${i === arr.length - 1 ? 'text-orange-300 font-bold' : 'text-gray-400'}`}>{row.amount}</span>
                </div>
              ))}
              <div className="flex justify-between items-center px-5 py-4 bg-red-900/10 border-t border-red-500/30">
                <span className="text-red-300 font-bold">Celkem reálné náklady</span>
                <span className="text-red-300 font-bold font-mono">57 300–87 400 Kč/měs</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              A to je jen finanční stránka. K tomu přičtěte 2–4 měsíce, kdy obchodník teprve nabíhá na plný výkon, riziko odchodu po 12–18 měsících (průměrná fluktuace SDR) a výpovědní lhůtu.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Co interní obchodník reálně stihne</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Zkušený SDR věnující 100 % času prospektingu zvládne:
            </p>
            <ul className="list-none space-y-3 mb-8">
              {[
                '80–120 nových kontaktů oslovených za měsíc (při důkladné personalizaci)',
                '200–400 kontaktů při nižší kvalitě personalizace (šablony)',
                '4–8 hodin denně strávených vyhledáváním, psaním a follow-upem',
                'Zbytek času: CRM, reporting, schůzky, dovolenou, nemoc',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-gray-500 mt-1 flex-shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Přehledné srovnání: obchodník vs. AI</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium w-1/3">Parametr</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Interní obchodník</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">AI outreach</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/30' : ''}`}>
                      <td className="py-3 px-4 text-gray-300 font-medium">{row.label}</td>
                      <td className={`py-3 px-4 ${row.winner === 'obchodnik' ? 'text-green-400' : 'text-gray-400'}`}>
                        {row.winner === 'obchodnik' && <span className="mr-2">★</span>}
                        {row.obchodnik}
                      </td>
                      <td className={`py-3 px-4 ${row.winner === 'ai' ? 'text-green-400' : 'text-gray-400'}`}>
                        {row.winner === 'ai' && <span className="mr-2">★</span>}
                        {row.ai}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs mb-8">★ = výhoda v dané kategorii</p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Matematika: Cena za domluvenou schůzku</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Klíčová metrika pro srovnání není celkový náklad, ale cena za domluvené schůzky — tedy za skutečný výstup, ne za přítomnost.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  label: 'Interní obchodník',
                  cost: '70 000 Kč/měs',
                  contacts: '150 kontaktů/měs',
                  rate: '2 % míra odpovědí = 3 schůzky',
                  perMeeting: '23 300 Kč / schůzka',
                  color: 'border-gray-600',
                },
                {
                  label: 'AI outreach',
                  cost: '15 000 Kč/měs',
                  contacts: '400 kontaktů/měs',
                  rate: '2 % míra odpovědí = 8 schůzek',
                  perMeeting: '1 875 Kč / schůzka',
                  color: 'border-green-500/50',
                  highlight: true,
                },
              ].map((item, i) => (
                <div key={i} className={`bg-gray-900 border rounded-xl p-5 ${item.color}`}>
                  <p className={`font-bold mb-3 ${item.highlight ? 'text-green-400' : 'text-white'}`}>{item.label}</p>
                  <div className="space-y-1.5 text-sm">
                    <p className="text-gray-400">Náklad: <span className="text-gray-300">{item.cost}</span></p>
                    <p className="text-gray-400">Kapacita: <span className="text-gray-300">{item.contacts}</span></p>
                    <p className="text-gray-400">Výstup: <span className="text-gray-300">{item.rate}</span></p>
                    <p className={`font-bold mt-3 pt-3 border-t border-gray-700 ${item.highlight ? 'text-green-400' : 'text-white'}`}>
                      {item.perMeeting}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm mb-8">
              Výpočet je zjednodušený a závisí na konkrétní míře odpovědí, kvalitě targetingu a oboru. Cílem je ukázat poměr, ne přesná čísla pro každý případ.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Kdy najmout obchodníka a kdy vsadit na AI</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-900 border border-gray-600 rounded-xl p-5">
                <p className="text-white font-bold mb-3">Najměte obchodníka, pokud...</p>
                <ul className="space-y-2">
                  {[
                    'Prodáváte komplexní řešení nad 500 000 Kč/zakázku',
                    'Cílíte na 10–20 firem ročně (enterprise)',
                    'Vztah a důvěra jsou klíčovým rozhodovacím faktorem',
                    'Potřebujete aktivní správu existujících účtů',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-blue-400 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-900 border border-orange-500/40 rounded-xl p-5">
                <p className="text-white font-bold mb-3">Vsaďte na AI outreach, pokud...</p>
                <ul className="space-y-2">
                  {[
                    'Oslovujete stovky nebo tisíce firem měsíčně',
                    'Zakázky jsou do 200 000 Kč (SMB segment)',
                    'Chcete testovat outbound bez velkého závazku',
                    'Máte tým pro zpracování příchozích odpovědí',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-orange-400 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Nejčastější kombinace: AI + jeden člověk na odpovědi</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Nejúčinnější model pro B2B firmy ve SMB segmentu není „AI místo obchodníka", ale „AI na top-of-funnel + člověk na konverzaci". AI osloví 400 firem měsíčně, zpracuje odpovědi a dohodne schůzku. Obchodník (nebo majitel firmy) pak vede samotný hovor a uzavírá.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Tento model funguje i pro firmy, kde majitel dělá obchod sám — AI uvolní čas tím, že automatizuje vše před schůzkou.
            </p>

          </article>

          <div className="mt-16 p-8 border border-orange-500/30 rounded-2xl bg-orange-900/10 text-center">
            <h2 className="text-2xl font-bold mb-3">Porovnejte čísla pro váš obor</h2>
            <p className="text-gray-300 mb-6">Na bezplatném hovoru ukážeme, kolik firem z vašeho cílového segmentu můžeme oslovit a jakou míru odpovědí reálně čekat.</p>
            <a href="https://cal.com/salesagent/demo" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
              Domluvit bezplatnou ukázku
            </a>
          </div>

          <nav className="mt-16 pt-10 border-t border-white/10">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Související články</p>
            <div className="grid gap-4">
              <Link href="/blog/co-je-externi-obchod" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Co je to externí obchod a jak funguje?</span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/jak-oslovit-firmy-bez-databaze" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Jak oslovit firmy bez koupené databáze</span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/automatizace-prodeje-jak-ai-meni-b2b-osloveni" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Automatizace prodeje: Jak AI mění B2B oslovení</span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">→</span>
              </Link>
            </div>
          </nav>
        </div>
      </main>
    </>
  )
}
