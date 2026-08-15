import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI pro obchod a obchodníky — kompletní systém automatizace | SalesAgent.cz',
  description:
    'Jak nastavit kompletní AI systém pro B2B obchodníky: automatizace LinkedIn outreach, kvalifikace leadů, CRM na míru jako srdce AI procesů a personalizované oslovení.',
  keywords: [
    'AI pro obchodníky',
    'AI automatizace obchodu',
    'LinkedIn automatizace AI',
    'AI lead generation',
    'CRM na míru AI',
    'AI obchodní systém',
    'B2B automatizace prodeje',
    'AI kvalifikace leadů',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/ai-pro-obchod-a-obchodniky',
    languages: { cs: 'https://salesagent.cz/blog/ai-pro-obchod-a-obchodniky', 'x-default': 'https://salesagent.cz/blog/ai-pro-obchod-a-obchodniky' },
  },
  openGraph: {
    title: 'AI pro obchod a obchodníky — kompletní systém automatizace',
    description: 'Jak nastavit kompletní AI systém pro B2B obchodníky: LinkedIn, kvalifikace leadů, CRM na míru a personalizované oslovení.',
    url: 'https://salesagent.cz/blog/ai-pro-obchod-a-obchodniky',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-08-04',
    images: [{ url: 'https://salesagent.cz/blog/ai-pro-obchodniky.jpg', width: 1024, height: 1024, alt: 'AI pro obchod a obchodníky' }],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'AI pro obchod a obchodníky — kompletní systém automatizace',
  description: 'Jak nastavit kompletní AI systém pro B2B obchodníky: LinkedIn, kvalifikace leadů, CRM na míru a personalizované oslovení.',
  image: 'https://salesagent.cz/blog/ai-pro-obchodniky.jpg',
  datePublished: '2026-08-04',
  dateModified: '2026-08-04',
  inLanguage: 'cs',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://salesagent.cz/blog/ai-pro-obchod-a-obchodniky' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Jak AI pomáhá obchodníkům na LinkedIn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI analyzuje profily a aktivitu potenciálních zákazníků na LinkedIn, automaticky posílá personalizované žádosti o spojení a follow-up zprávy. Na rozdíl od hromadného spamu AI přizpůsobuje každou zprávu konkrétnímu člověku — jeho roli, firmě a obsahu, který sdílí. Obchodník vstupuje až ve chvíli, kdy lead odpoví.',
      },
    },
    {
      '@type': 'Question',
      name: 'Proč potřebuji CRM na míru pro AI automatizaci?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generické CRM systémy jako Salesforce nebo HubSpot nejsou navržené pro autonomní AI procesy — vyžadují manuální zadávání a nerozumí kontextu. CRM na míru slouží jako centrální mozek: přijímá data z LinkedIn, e-mailu i webového prospektingu, automaticky přiřazuje skóre, řídí sekvence a předává obchodníkovi jen kvalifikované příležitosti.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kolik firem dokáže AI systém zpracovat za měsíc?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Záleží na nastavení a kanálech. Typický AI outreach systém zpracuje 200–500 firem měsíčně přes e-mail a 100–300 kontaktů přes LinkedIn. Při kombinaci obou kanálů s kvalifikací a follow-up sekvencemi je reálný výstup 10–30 domluvených schůzek měsíčně — bez nutnosti manuálního prospektingu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Nahradí AI obchodníka úplně?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ne. AI přebírá rutinní části obchodního procesu — vyhledávání, kvalifikaci, první oslovení a follow-up. Obchodník se díky tomu soustředí na to, co umí nejlíp: jednání, vyjednávání, budování vztahů a uzavírání obchodů. Nejefektivnější model je kombinace AI + zkušený obchodník.',
      },
    },
  ],
}

const systemParts = [
  {
    num: '01',
    title: 'AI prospekting — vyhledávání firem',
    body: 'Systém prohledává rejstříky, Google Maps, oborové portály a další veřejné zdroje. Nehledá náhodně — pracuje s přesně definovaným profilem ideálního zákazníka (ICP). Za den projde stovky firem, přečte jejich weby a vyhodnotí, jestli odpovídají vašemu zadání.',
    color: '#10b981',
  },
  {
    num: '02',
    title: 'Kvalifikace a skórování leadů',
    body: 'Každá nalezená firma dostane skóre na základě shody s ICP — obor, velikost, technologie, růstové signály. Firmy s vysokým skóre postupují dál, ostatní se vyřadí. Obchodník nedostane seznam 500 firem, ale 30 kvalifikovaných příležitostí.',
    color: '#3b82f6',
  },
  {
    num: '03',
    title: 'LinkedIn outreach — automatické oslovení',
    body: 'AI najde správné lidi ve firmě (rozhodovače, ne asistenty), pošle personalizovanou žádost o spojení a po přijetí navazující zprávu. Každá zpráva reaguje na profil a aktivitu konkrétního člověka — ne šablona s doplněným jménem.',
    color: '#0a66c2',
  },
  {
    num: '04',
    title: 'E-mailový outreach — personalizované oslovení',
    body: 'Paralelně s LinkedIn běží e-mailové sekvence. AI napíše unikátní e-mail na základě webu firmy — co dělají, jaké mají služby, kde vidí příležitost pro spolupráci. Follow-up zprávy přidávají nové argumenty, netlačí na opakování.',
    color: '#f59e0b',
  },
  {
    num: '05',
    title: 'CRM na míru — srdce celého systému',
    body: 'Všechny kanály se sbíhají do jednoho CRM, které je navržené přímo pro AI workflow. Automaticky přiřazuje statusy, měří engagement, řídí sekvence a eskaluje příležitosti obchodníkovi. Žádné ruční zadávání, žádné zapomenuté follow-upy.',
    color: '#8b5cf6',
  },
]

const linkedInSteps = [
  { title: 'Definice cílové skupiny', desc: 'Podle pozice, oboru, velikosti firmy a regionu AI identifikuje správné profily na LinkedIn.' },
  { title: 'Analýza profilu', desc: 'Před oslovením AI přečte profil — čím se člověk zabývá, co sdílí, jakou má roli. Na základě toho napíše zprávu.' },
  { title: 'Žádost o spojení', desc: 'Personalizovaná connection request se stručným důvodem, proč se propojit. Bez prodejního tlaku, s relevancí.' },
  { title: 'Follow-up sekvence', desc: 'Po přijetí spojení navazující zprávy s hodnotou — case study, relevantní tip, konkrétní nabídka. Vše s odstupem a logikou.' },
  { title: 'Předání obchodníkovi', desc: 'Jakmile lead odpoví, konverzaci přebírá člověk. AI předá kontext — kdo to je, co se dosud řeklo, jaké téma rezonuje.' },
]

export default function AiProObchodPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors mb-10 inline-block">← Zpět na blog</Link>

          <header className="mb-12">
            <p className="text-sm text-violet-400 uppercase tracking-widest mb-4">AI automatizace · 4. srpna 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              AI pro obchod a obchodníky: kompletní systém automatizace
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Jednotlivé AI nástroje nic nevyřeší. Skutečný efekt přichází, když je celý obchodní proces propojený — od vyhledávání firem přes kvalifikaci a LinkedIn outreach až po CRM, které celý systém řídí. Takhle to nastavujeme.
            </p>
          </header>

          <div className="mb-14 rounded-xl overflow-hidden border border-white/10">
            <Image src="/blog/ai-pro-obchodniky.jpg" alt="AI pro obchod a obchodníky — kompletní systém automatizace" width={1024} height={1024} className="w-full object-cover" priority />
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Proč jednotlivé nástroje nestačí</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Většina firem zkouší AI po kouscích — jeden nástroj na e-maily, druhý na LinkedIn, třetí na vyhledávání kontaktů. Výsledek? Rozpadlé workflow, duplicitní data, žádná návaznost. Obchodník stráví stejně času přepínáním mezi nástroji jako dřív manuálním prospektingem.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Kompletní AI systém funguje jinak. Všechny části — prospekting, kvalifikace, LinkedIn, e-mail, CRM — jsou propojené do jednoho workflow. Data tečou automaticky, sekvence na sebe navazují a obchodník vstupuje až tam, kde je jeho přítomnost skutečně potřeba.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">5 částí kompletního AI obchodního systému</h2>
            <div className="space-y-5 mb-10">
              {systemParts.map((part) => (
                <div key={part.num} className="rounded-xl border border-white/10 p-6" style={{ borderLeftWidth: '3px', borderLeftColor: part.color }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-bold text-sm" style={{ color: part.color }}>{part.num}</span>
                    <h3 className="text-lg font-semibold text-white">{part.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-[15px]">{part.body}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">LinkedIn automatizace: jak to děláme</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              LinkedIn je nejsilnější B2B kanál — ale ruční oslovování je pomalé a neškáluje. AI to mění. Každý krok od nalezení správného člověka po předání konverzace obchodníkovi běží automaticky, ale s kvalitou personálního přístupu.
            </p>
            <div className="space-y-4 mb-8">
              {linkedInSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-[#0a66c2]/5">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0a66c2]/20 text-[#0a66c2] flex items-center justify-center text-xs font-bold">{i + 1}</span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{step.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">CRM na míru: proč je srdcem celého systému</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Salesforce, HubSpot, Pipedrive — všechny jsou navržené pro manuální práci obchodníka. AI systém potřebuje něco jiného: CRM, které rozumí automatickým procesům a umí s nimi pracovat.
            </p>
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {[
                { label: 'Automatický import', desc: 'Leady z LinkedIn, e-mailu i prospektingu se nahrávají automaticky — bez manuálního zadávání.' },
                { label: 'Kvalifikační skóre', desc: 'Každý lead dostane ICP skóre a engagement skóre na základě odpovědí a interakcí.' },
                { label: 'Řízení sekvencí', desc: 'CRM rozhoduje, kdy poslat follow-up, přes jaký kanál a s jakým obsahem.' },
                { label: 'Eskalace obchodníkovi', desc: 'Když lead odpoví nebo dosáhne skóre, CRM automaticky notifikuje obchodníka s kompletním kontextem.' },
                { label: 'Pipeline přehled', desc: 'Vizuální přehled celého pipeline — kolik firem je v oslovení, kolik odpovědělo, kolik je ve vyjednávání.' },
                { label: 'Reporting a metriky', desc: 'Automatické reporty: response rate, conversion rate, náklady na lead, ROI celého systému.' },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-lg border border-gray-700 bg-gray-900/50">
                  <p className="text-violet-400 font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl border border-violet-500/20 bg-violet-900/10 mb-8">
              <p className="text-violet-300 text-sm leading-relaxed">
                <strong className="text-white">Proč ne generické CRM?</strong> Generické systémy potřebují desítky integrací, pluginů a workaroundů, aby fungovaly s AI procesy. CRM na míru má automatizaci zabudovanou — nemusíte nic propojovat, protože všechno bylo od začátku navržené jako jeden systém.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Kvalifikace leadů: kde AI šetří nejvíc času</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Obchodník průměrně stráví 60 % času aktivitami, které přímo nevedou k prodeji — hledání kontaktů, research firem, psaní e-mailů, aktualizace CRM. AI tohle přebírá kompletně.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { before: 'Ruční procházení LinkedIn — 2 hodiny denně', after: 'AI projde 100+ profilů za hodinu, pošle personalizované zprávy' },
                { before: 'Research firmy před oslovením — 15 min na firmu', after: 'AI přečte web, vyhodnotí shodu s ICP za sekundy' },
                { before: 'Psaní cold e-mailů — 10 min na e-mail', after: 'AI generuje unikátní e-mail na základě webu firmy' },
                { before: 'Follow-up tracking v Excelu — chybovost 30 %', after: 'CRM automaticky řídí sekvence, žádný follow-up se neztratí' },
              ].map((item, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-2">
                  <div className="p-3 rounded-lg bg-red-900/10 border border-red-500/20">
                    <p className="text-red-400 text-xs font-semibold mb-1">Bez AI</p>
                    <p className="text-gray-400 text-sm">{item.before}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-900/10 border border-emerald-500/20">
                    <p className="text-emerald-400 text-xs font-semibold mb-1">S AI systémem</p>
                    <p className="text-gray-400 text-sm">{item.after}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Jak to vypadá v praxi: typický měsíc</h2>
            <div className="rounded-xl border border-white/10 overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-4 text-gray-400 font-medium">Metrika</th>
                    <th className="text-right p-4 text-gray-400 font-medium">Obchodník sám</th>
                    <th className="text-right p-4 text-violet-400 font-medium">AI systém</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: 'Oslovených firem / měsíc', manual: '40–80', ai: '300–500' },
                    { metric: 'Kvalifikovaných leadů', manual: '10–20', ai: '50–100' },
                    { metric: 'Domluvených schůzek', manual: '3–8', ai: '15–30' },
                    { metric: 'Čas na prospekting', manual: '60 % pracovní doby', ai: '0 % (automatizováno)' },
                    { metric: 'Čas na prodej a jednání', manual: '40 % pracovní doby', ai: '100 % pracovní doby' },
                    { metric: 'Měsíční náklady', manual: '80–120 tis. Kč', ai: 'od 5 900 Kč' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="p-4 text-gray-300">{row.metric}</td>
                      <td className="p-4 text-right text-gray-500">{row.manual}</td>
                      <td className="p-4 text-right text-white font-medium">{row.ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Pro koho je AI obchodní systém</h2>
            <div className="space-y-3 mb-8">
              {[
                { who: 'B2B firmy bez obchodního týmu', why: 'AI systém zastoupí juniornějšího obchodníka za zlomek nákladů. Vy jednáte jen s kvalifikovanými leady.' },
                { who: 'Firmy s 1–3 obchodníky', why: 'AI přebere rutinní prospekting a obchodníci se soustředí na uzavírání obchodů. Kapacita se násobí bez náboru.' },
                { who: 'Scale-upy v růstové fázi', why: 'Potřebujete rychle škálovat pipeline, ale nechcete najímat a zaučovat 5 dalších lidí. AI systém roste s vámi.' },
                { who: 'Firmy expandující do zahraničí', why: 'AI oslovuje v místním jazyce, respektuje kulturní zvyklosti a testuje nové trhy bez nutnosti lokální přítomnosti.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <span className="text-violet-400 flex-shrink-0 mt-0.5">→</span>
                  <div>
                    <span className="text-white font-semibold text-sm">{item.who}</span>
                    <span className="text-gray-400 text-sm"> — {item.why}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Jak začít</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nemusíte kupovat nástroje, stavět infrastrukturu ani zaučovat tým. Celý AI obchodní systém — prospekting, LinkedIn, e-mail, CRM — nastavíme za vás jako outsourcovanou službu. Vy definujete, koho chcete oslovovat, a systém začne pracovat.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Výsledkem jsou schůzky v kalendáři s firmami, které odpovídají vašemu zadání a projevily reálný zájem. Měsíční report ukazuje přesně, co systém udělal, kolik firem oslovil a kolik příležitostí vygeneroval.
            </p>

          </article>

          <div className="mt-16 p-8 border border-violet-500/30 rounded-2xl bg-violet-900/10 text-center">
            <h2 className="text-2xl font-bold mb-3">Chcete vidět, jak by systém fungoval pro vás?</h2>
            <p className="text-gray-300 mb-6">Na 30minutovém hovoru vám ukážeme kompletní workflow — od nalezení firmy přes LinkedIn oslovení po schůzku v kalendáři.</p>
            <a href="https://cal.com/salesagent/demo" target="_blank" rel="noopener noreferrer" className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
              Domluvit nezávazný hovor
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Nebo zjistěte víc o{' '}
              <Link href="/cs" className="text-violet-400 hover:text-violet-300 underline">automatizaci B2B prodeje</Link>
              {' '}na naší hlavní stránce.
            </p>
          </div>

          <style>{`
            .faq-item { margin-bottom: 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
            .faq-item:last-child { border-bottom: none; }
            .faq-item summary { padding: 18px 0; cursor: pointer; font-weight: 600; font-size: 15px; color: #e5e7eb; list-style: none; display: flex; justify-content: space-between; align-items: center; }
            .faq-item summary::after { content: '+'; font-size: 20px; color: #9ca3af; transition: transform 0.2s; }
            .faq-item[open] summary::after { content: '−'; }
            .faq-item .faq-answer { padding: 0 0 18px; font-size: 14px; line-height: 1.7; color: #9ca3af; }
          `}</style>

          <section className="mt-16 pt-10 border-t border-white/10">
            <h2 className="text-lg font-bold mb-6">Časté otázky</h2>
            <details className="faq-item">
              <summary>Jak AI pomáhá obchodníkům na LinkedIn?</summary>
              <div className="faq-answer">AI analyzuje profily a aktivitu potenciálních zákazníků na LinkedIn, automaticky posílá personalizované žádosti o spojení a follow-up zprávy. Na rozdíl od hromadného spamu AI přizpůsobuje každou zprávu konkrétnímu člověku — jeho roli, firmě a obsahu, který sdílí. Obchodník vstupuje až ve chvíli, kdy lead odpoví.</div>
            </details>
            <details className="faq-item">
              <summary>Proč potřebuji CRM na míru pro AI automatizaci?</summary>
              <div className="faq-answer">Generické CRM systémy jako Salesforce nebo HubSpot nejsou navržené pro autonomní AI procesy — vyžadují manuální zadávání a nerozumí kontextu. CRM na míru slouží jako centrální mozek: přijímá data z LinkedIn, e-mailu i webového prospektingu, automaticky přiřazuje skóre, řídí sekvence a předává obchodníkovi jen kvalifikované příležitosti.</div>
            </details>
            <details className="faq-item">
              <summary>Kolik firem dokáže AI systém zpracovat za měsíc?</summary>
              <div className="faq-answer">Záleží na nastavení a kanálech. Typický AI outreach systém zpracuje 200–500 firem měsíčně přes e-mail a 100–300 kontaktů přes LinkedIn. Při kombinaci obou kanálů s kvalifikací a follow-up sekvencemi je reálný výstup 10–30 domluvených schůzek měsíčně — bez nutnosti manuálního prospektingu.</div>
            </details>
            <details className="faq-item">
              <summary>Nahradí AI obchodníka úplně?</summary>
              <div className="faq-answer">Ne. AI přebírá rutinní části obchodního procesu — vyhledávání, kvalifikaci, první oslovení a follow-up. Obchodník se díky tomu soustředí na to, co umí nejlíp: jednání, vyjednávání, budování vztahů a uzavírání obchodů. Nejefektivnější model je kombinace AI + zkušený obchodník.</div>
            </details>
          </section>

          <nav className="mt-16 pt-10 border-t border-white/10">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Související články</p>
            <div className="grid gap-4">
              <Link href="/blog/ai-agenti-b2b-prospecting-kvalifikace-leadu" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-violet-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">AI agenti pro B2B prospecting a kvalifikaci leadů</span>
                <span className="text-gray-500 group-hover:text-violet-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/crm-na-miru" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-violet-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">CRM na míru: Proč generické systémy firmám nevyhovují</span>
                <span className="text-gray-500 group-hover:text-violet-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/ai-pro-obchod-a-prodej" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-violet-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">AI pro obchod a prodej: Jak umělá inteligence mění B2B</span>
                <span className="text-gray-500 group-hover:text-violet-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/kolik-stoji-obchodnik-vs-ai" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-violet-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Kolik stojí obchodní zástupce vs. AI outreach?</span>
                <span className="text-gray-500 group-hover:text-violet-400 transition-colors">→</span>
              </Link>
            </div>
          </nav>
        </div>
      </main>
    </>
  )
}
