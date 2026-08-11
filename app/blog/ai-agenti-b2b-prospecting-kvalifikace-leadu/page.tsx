import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
title: 'AI agenti pro B2B prospecting: jak za vás hledají a kvalifikují leady | SalesAgent.cz',
  description:
    'AI agent prohledá Google Maps, prostuduje web každé firmy a vybere jen ty, co sedí vašemu ICP. Bez databáze, bez obchodníka na rešerše — celý proces běží sám. Praktický návod.',  keywords: [
    'AI agent prospecting',
    'kvalifikace leadů AI',
    'B2B prospecting automatizace',
    'AI lead qualification',
    'automatické vyhledávání firem',
    'AI obchodní agent',
    'B2B lead generation AI',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/ai-agenti-b2b-prospecting-kvalifikace-leadu',
    languages: { cs: 'https://salesagent.cz/blog/ai-agenti-b2b-prospecting-kvalifikace-leadu', 'x-default': 'https://salesagent.cz/blog/ai-agenti-b2b-prospecting-kvalifikace-leadu' },
  },
  openGraph: {
    title: 'AI agenti pro B2B prospecting a kvalifikaci leadů',
    description: 'Jak AI agenti mění B2B prospecting — automatické vyhledávání firem, analýza webů a kvalifikace leadů.',
    url: 'https://salesagent.cz/blog/ai-agenti-b2b-prospecting-kvalifikace-leadu',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-08-06',
    images: [{ url: 'https://salesagent.cz/blog/ai-agenti-prospecting.jpg', width: 1024, height: 1024, alt: 'AI agenti pro B2B prospecting' }],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'AI agenti pro B2B prospecting a kvalifikaci leadů',
  description: 'Jak AI agenti mění B2B prospecting — automatické vyhledávání firem, analýza webů a kvalifikace leadů.',
  image: 'https://salesagent.cz/blog/ai-agenti-prospecting.jpg',
  datePublished: '2026-08-06',
  dateModified: '2026-08-06',
  inLanguage: 'cs',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://salesagent.cz/blog/ai-agenti-b2b-prospecting-kvalifikace-leadu' },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Co je AI agent pro B2B prospecting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI agent pro prospecting je software, který autonomně vyhledává firmy odpovídající zadaným kritériím, analyzuje jejich weby, identifikuje rozhodovače a připravuje personalizované oslovení. Na rozdíl od běžného nástroje nepotřebuje manuální obsluhu — pracuje samostatně a předává hotové příležitosti."
      }
    },
    {
      "@type": "Question",
      "name": "Jak AI kvalifikuje leady v B2B?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI agent analyzuje web firmy, velikost, obor, technologie a veřejné signály (nábor, investice, expanze). Na základě těchto dat vyhodnotí shodu s vaším ideálním zákazníkem (ICP) a přiřadí skóre. Firmy s vysokým skóre osloví přednostně, ostatní vyřadí nebo odloží."
      }
    },
    {
      "@type": "Question",
      "name": "Jaký je rozdíl mezi AI agentem a CRM nástrojem pro lead scoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CRM lead scoring pracuje s leady, které už máte — hodnotí je na základě jejich aktivity (otevření e-mailu, návštěva webu). AI agent jde o krok dál: sám leady vyhledává, analyzuje z veřejných zdrojů a kvalifikuje ještě před prvním kontaktem. Pracuje s daty, která v CRM nejsou."
      }
    }
  ]
}

const steps = [
  {
    num: '01',
    title: 'Definice ideálního zákazníka (ICP)',
    body: 'Vše začíná přesným popisem, koho hledáte: obor, velikost firmy, region, technologie, konkrétní problémy. Čím přesnější zadání, tím relevantnější výsledky. AI agent nepracuje s vágním „malé a střední firmy" — potřebuje parametry, podle kterých filtruje.',
  },
  {
    num: '02',
    title: 'Automatické vyhledávání firem',
    body: 'Agent prohledává firemní rejstříky, Google Maps, oborové portály a další veřejné zdroje. Nepoužívá nakoupené databáze — generuje čerstvé kontakty v reálném čase. Za hodiny projde tisíce záznamů, které by obchodník procházel týdny.',
  },
  {
    num: '03',
    title: 'Analýza webu každé firmy',
    body: 'Před jakýmkoliv oslovením AI navštíví a přečte web každé nalezené firmy. Zjistí, čím se zabývají, jaké služby nabízejí, v jakém jazyce komunikují a jestli odpovídají vašemu ICP. Tohle je krok, který většina obchodníků přeskakuje — a přitom je klíčový pro relevantní oslovení.',
  },
  {
    num: '04',
    title: 'Kvalifikace a skórování',
    body: 'Na základě analýzy webu, velikosti firmy a dalších signálů agent vyhodnotí, jak moc daná firma odpovídá vašemu ICP. Firmy s vysokým skóre jdou do oslovení přednostně. Ty, které neodpovídají, vyřadí — šetří čas i reputaci vaší domény.',
  },
  {
    num: '05',
    title: 'Personalizované oslovení',
    body: 'Pro každou kvalifikovanou firmu agent vygeneruje unikátní zprávu, která přímo reaguje na obsah jejich webu. Nejde o šablonu s doplněným jménem — text mluví ke konkrétní firmě o konkrétním problému. Proto míra odpovědí násobně překračuje hromadné rozesílky.',
  },
]

const differences = [
  {
    label: 'Obchodník',
    items: [
      'Ručně prochází LinkedIn, rejstříky, Google',
      'Zvládne 20–30 firem denně',
      'Personalizace závisí na čase a náladě',
      'Kvalifikuje intuitivně',
      'Stojí 80–120 tis. Kč/měsíc vč. odvodů',
    ],
  },
  {
    label: 'AI agent',
    items: [
      'Automaticky prohledává tisíce zdrojů',
      'Zpracuje stovky firem denně',
      'Personalizuje systematicky na základě dat',
      'Kvalifikuje dle měřitelných kritérií (ICP skóre)',
      'Provozní náklady od 3 600 Kč/měsíc',
    ],
  },
]

export default function AiAgentiProspektingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors mb-10 inline-block">← Zpět na blog</Link>

          <header className="mb-12">
            <p className="text-sm text-emerald-400 uppercase tracking-widest mb-4">AI v obchodě · 6. srpna 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Jak využít AI agenty pro B2B prospecting a kvalifikaci leadů
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Obchodník stráví většinu času hledáním firem a zjišťováním, jestli vůbec stojí za oslovení. AI agent tohle udělá za něj — najde firmy, přečte jejich weby, vyhodnotí shodu s vaším ICP a osloví ty správné. Tady je, jak to funguje.
            </p>
          </header>

          <div className="mb-14 rounded-xl overflow-hidden border border-white/10">
            <Image src="/blog/ai-agenti-prospecting.jpg" alt="AI agenti pro B2B prospecting a kvalifikaci leadů" width={1024} height={1024} className="w-full object-cover" priority />
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Co je AI agent pro prospecting</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI agent pro B2B prospecting není jen nástroj na rozesílání e-mailů. Je to autonomní systém, který celý proces vyhledávání a kvalifikace leadů řídí sám — od zadání kritérií po předání připravených příležitostí.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Na rozdíl od běžných sales nástrojů, které potřebují manuální obsluhu (nahrajte seznam, napište šablonu, stiskněte odeslat), AI agent pracuje samostatně. Vy definujete, koho hledáte — on najde, zanalyzuje, vyhodnotí a osloví.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Jak AI agent prospecting funguje krok za krokem</h2>
            <div className="space-y-6 mb-10">
              {steps.map((step) => (
                <div key={step.num} className="border-l-2 border-emerald-500 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-bold text-sm">{step.num}</span>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Kvalifikace leadů: proč je důležitější než kvantita</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Většina firem řeší problém „málo leadů". Ve skutečnosti mají problém opačný — příliš mnoho nekvalifikovaných kontaktů, na kterých obchodníci ztrácejí čas. Oslovíte 500 firem, odpovídá 15, schůzku domluví 5, obchod uzavřete s 1. Kde jsou ty zbylé stovky hodin?
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              AI kvalifikace tento problém řeší u zdroje. Místo toho, abyste oslovovali všechny a čekali, kdo odpoví, AI agent nejdřív vyhodnotí, které firmy mají nejvyšší pravděpodobnost zájmu — a osloví přednostně ty.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Na čem AI kvalifikace stojí</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {[
                { signal: 'Obsah webu firmy', desc: 'Čím se zabývají, jaké služby nabízejí, jak komunikují' },
                { signal: 'Velikost a obor', desc: 'Odpovídá zadaným kritériím ICP' },
                { signal: 'Technologické signály', desc: 'Jaké nástroje používají (CRM, e-shop platforma, marketing stack)' },
                { signal: 'Růstové signály', desc: 'Nábor nových lidí, expanze, investice, nové pobočky' },
                { signal: 'Jazyk a region', desc: 'Komunikují česky, anglicky, cílí na lokální nebo mezinárodní trh' },
                { signal: 'Aktivita online', desc: 'Jak aktuální je web, blog, sociální sítě — signál aktivity firmy' },
              ].map((item) => (
                <div key={item.signal} className="p-4 rounded-lg border border-gray-700 bg-gray-900/50">
                  <p className="text-emerald-400 font-semibold text-sm mb-1">{item.signal}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Obchodník vs. AI agent — srovnání</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {differences.map((col) => (
                <div key={col.label} className={`rounded-xl border p-5 ${col.label === 'AI agent' ? 'border-emerald-500/30 bg-emerald-900/10' : 'border-gray-700 bg-gray-900'}`}>
                  <p className={`font-bold text-sm mb-4 ${col.label === 'AI agent' ? 'text-emerald-400' : 'text-gray-400'}`}>{col.label}</p>
                  <ul className="space-y-2">
                    {col.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className={`mt-1 flex-shrink-0 ${col.label === 'AI agent' ? 'text-emerald-400' : 'text-gray-500'}`}>{col.label === 'AI agent' ? '✓' : '–'}</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Kde AI agent nezastoupí člověka</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI agent exceluje v opakujících se, datově náročných úlohách — vyhledávání, analýza, kvalifikace, první oslovení. Ale některé věci stále vyžadují člověka:
            </p>
            <div className="space-y-3 mb-8">
              {[
                { what: 'Vyjednávání a uzavírání obchodu', why: 'Vztah, důvěra a čtení mezi řádky zůstávají lidskou doménou.' },
                { what: 'Strategická rozhodnutí o ICP', why: 'AI pracuje s kritérii, která mu zadáte. Špatné zadání = špatné výsledky.' },
                { what: 'Složité B2B prodejní cykly', why: 'Enterprise deals s více stakeholdery potřebují lidský přístup a politické čtení situace.' },
                { what: 'Budování dlouhodobých vztahů', why: 'Referenční byznys a partnerství se nedají automatizovat.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-gray-700 bg-gray-900/30">
                  <span className="text-gray-500 flex-shrink-0 mt-0.5">→</span>
                  <div>
                    <span className="text-white font-semibold text-sm">{item.what}</span>
                    <span className="text-gray-400 text-sm"> — {item.why}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Jak začít s AI prospektingem</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nejjednodušší start je outsourcovat celý proces — nemusíte kupovat nástroje, zaučovat lidi ani řešit technické nastavení. Služba jako SalesAgent funguje jako váš externí AI obchodní tým: definujete ICP, a systém najde, zanalyzuje, kvalifikuje a osloví firmy za vás.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Výsledkem jsou schůzky v kalendáři s firmami, které odpovídají vašemu zadání a projevily reálný zájem. Vy vstupujete do procesu až ve chvíli, kdy má smysl jednat.
            </p>

          </article>

          <div className="mt-16 p-8 border border-emerald-500/30 rounded-2xl bg-emerald-900/10 text-center">
            <h2 className="text-2xl font-bold mb-3">Vyzkoušejte AI prospecting v praxi</h2>
            <p className="text-gray-300 mb-6">Na třicetiminutovém hovoru ukážeme, jak by AI agent hledal a oslovoval firmy konkrétně ve vašem oboru.</p>
            <a href="https://cal.com/salesagent/demo" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
              Domluvit nezávazný hovor
            </a>
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
              <summary>Co je AI agent pro B2B prospecting?</summary>
              <div className="faq-answer">AI agent pro prospecting je software, který autonomně vyhledává firmy odpovídající zadaným kritériím, analyzuje jejich weby, identifikuje rozhodovače a připravuje personalizované oslovení. Na rozdíl od běžného nástroje nepotřebuje manuální obsluhu — pracuje samostatně a předává hotové příležitosti.</div>
            </details>
            <details className="faq-item">
              <summary>Jak AI kvalifikuje leady v B2B?</summary>
              <div className="faq-answer">AI agent analyzuje web firmy, velikost, obor, technologie a veřejné signály (nábor, investice, expanze). Na základě těchto dat vyhodnotí shodu s vaším ideálním zákazníkem (ICP) a přiřadí skóre. Firmy s vysokým skóre osloví přednostně, ostatní vyřadí nebo odloží.</div>
            </details>
            <details className="faq-item">
              <summary>Jaký je rozdíl mezi AI agentem a CRM nástrojem pro lead scoring?</summary>
              <div className="faq-answer">CRM lead scoring pracuje s leady, které už máte — hodnotí je na základě jejich aktivity (otevření e-mailu, návštěva webu). AI agent jde o krok dál: sám leady vyhledává, analyzuje z veřejných zdrojů a kvalifikuje ještě před prvním kontaktem. Pracuje s daty, která v CRM nejsou.</div>
            </details>
          </section>

          <nav className="mt-16 pt-10 border-t border-white/10">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Související články</p>
            <div className="grid gap-4">
              <Link href="/blog/ai-agent-pro-generovani-leadu" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-emerald-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">AI agent pro generování leadů</span>
                <span className="text-gray-500 group-hover:text-emerald-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/ai-pro-obchod-a-prodej" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-emerald-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">AI pro obchod a prodej: Jak umělá inteligence mění B2B</span>
                <span className="text-gray-500 group-hover:text-emerald-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/jak-vyuzit-ai-v-prodeji" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-emerald-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Jak využít AI v prodeji: Praktický průvodce pro B2B firmy</span>
                <span className="text-gray-500 group-hover:text-emerald-400 transition-colors">→</span>
              </Link>
            </div>
          </nav>
        </div>
      </main>
    </>
  )
}
