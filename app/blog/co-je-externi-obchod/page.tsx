import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Co je to externí obchod a jak funguje externí obchodník? | SalesAgent.cz',
  description:
    'Externí obchod je model, kdy firma místo vlastního obchodníka využívá externího specialistu. Jaké výhody přináší, proč vyjde levněji a kdy dává největší smysl?',
  keywords: [
    'externí obchod',
    'externí obchodník',
    'outsourcing obchodu',
    'externí sales',
    'výhody externího obchodníka',
    'outsourcing prodeje',
    'B2B obchodní zastoupení',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/co-je-externi-obchod',
    languages: { cs: 'https://salesagent.cz/blog/co-je-externi-obchod', 'x-default': 'https://salesagent.cz/blog/co-je-externi-obchod' },
  },
  openGraph: {
    title: 'Co je to externí obchod a jak funguje externí obchodník?',
    description:
      'Externí obchod je model, kdy firma místo vlastního obchodníka využívá externího specialistu. Jaké výhody přináší a kdy dává největší smysl?',
    url: 'https://salesagent.cz/blog/co-je-externi-obchod',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-08-01',
    images: [{ url: 'https://salesagent.cz/blog/externi-obchod.jpg', width: 1280, height: 853, alt: 'Externí obchod — obchodní jednání' }],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Co je to externí obchod a jak funguje externí obchodník?',
  description: 'Externí obchod je model, kdy firma místo vlastního obchodníka využívá externího specialistu.',
  image: 'https://salesagent.cz/blog/externi-obchod.jpg',
  datePublished: '2026-08-01',
  dateModified: '2026-08-01',
  inLanguage: 'cs',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://salesagent.cz/blog/co-je-externi-obchod' },
}

export default function CoJeExterniObchodPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors mb-10 inline-block">← Zpět na blog</Link>

          <header className="mb-12">
            <p className="text-sm text-orange-400 uppercase tracking-widest mb-4">Externí obchod · 1. srpna 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Co je to externí obchod a jak funguje externí obchodník?
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stále více firem místo náboru interního obchodníka volí externího specialistu. Co přesně tento model znamená, jak funguje v praxi a proč může být levnější a rychlejší než klasické zaměstnání?
            </p>
          </header>

          <div className="mb-14 rounded-xl overflow-hidden border border-white/10">
            <Image src="/blog/externi-obchod.jpg" alt="Externí obchod — obchodní schůzka" width={1280} height={853} className="w-full object-cover" priority />
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Co je to externí obchod?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Externí obchod (nebo také outsourcing obchodu) je model, při kterém firma svěří část nebo celou obchodní funkci externímu specialistovi či agentuře — místo toho, aby najímala vlastní zaměstnance. Externí obchodník pracuje jménem firmy, ale není jejím interním zaměstnancem.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Tento přístup existuje v různých formách: od agenturního zastoupení přes individuální freelance obchodníky až po plně řízené outsourcingové služby, které zajistí celý obchodní proces — od prospektingu po předání zájemce k uzavření.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Jak funguje externí obchodník v praxi?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Spolupráce s externím obchodníkem začíná obvykle onboardingem — obchodník se seznámí s produktem, cílovou skupinou a hodnotovým argumentem. Poté přebírá dohodnutou část obchodního procesu: může to být čistý prospekting a oslovování, předkvalifikace leadů, nebo i vedení schůzek a jednání.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Klíčový rozdíl oproti internímu zaměstnanci: externí obchodník zpravidla přichází s hotovou infrastrukturou, zkušenostmi a vlastními nástroji. Není třeba čekat na zaškolení, nákup softwaru ani budování procesů od nuly.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Výhody externího obchodu</h2>

            <div className="space-y-6 mb-10">
              {[
                {
                  title: 'Okamžitá připravenost',
                  body: 'Interní obchodník potřebuje týdny až měsíce, než se zaběhne — nábor, onboarding, zaškolení produktu, budování kontaktní základny. Externí obchodník přichází připravený: má fungující procesy, nástroje a zkušenosti z podobných projektů. Může začít pracovat v řádu dnů.',
                },
                {
                  title: 'Vlastní SW a HW nástroje bez dalších nákladů',
                  body: 'Zkušený externí obchodník přináší vlastní sadu nástrojů — CRM systém, nástroje pro prospekting (LinkedIn Sales Navigator, databáze firem), emailové sekvence, analytiku. Firma nemusí pořizovat licence, školit na systémy ani řešit IT infrastrukturu. Všechno je součástí služby.',
                },
                {
                  title: 'Nižší celkové náklady',
                  body: 'Interní obchodník s průměrnou mzdou, odvody, bonusy, benefity, notebookem a softwarem vychází na 80 000–150 000 Kč měsíčně i více. Externí obchodní spolupráce bývá výrazně levnější — a přitom přináší srovnatelný nebo vyšší výkon, protože specialista je motivován výsledky, ne měsíční výplatou.',
                },
                {
                  title: 'Testování trhu bez závazku',
                  body: 'Chcete vstoupit na nový trh nebo ověřit, zda je o váš produkt zájem? S externím obchodníkem testujete bez rizika — žádná pracovní smlouva, žádné závazky. Pokud trh nereaguje nebo se strategie ukáže jako nevhodná, spolupráci ukončíte bez komplikací.',
                },
                {
                  title: 'Specializované know-how',
                  body: 'Dobrý externí obchodník pracuje nebo pracoval pro více firem v podobném oboru. Přináší tedy nejen obchodní schopnosti, ale i oborové know-how, kontakty a pochopení toho, jak zákazníci v daném segmentu přemýšlejí. To je hodnota, kterou nový interní zaměstnanec teprve musí roky budovat.',
                },
                {
                  title: 'Flexibilita podle potřeby',
                  body: 'Potřebujete zintenzivnit obchod před sezónou? Nebo naopak zvolnit, protože máte plné kapacity? S externím obchodníkem dokážete rozsah spolupráce upravit. U interního zaměstnance je taková flexibilita prakticky nemožná.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Kdy dává externí obchod největší smysl?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Model externího obchodníka funguje nejlépe v konkrétních situacích:
            </p>
            <ul className="list-none space-y-3 mb-8">
              {[
                'Firma chce začít aktivně oslovovat zákazníky, ale ještě nemá vybudovaný obchodní tým',
                'Vstup na nový trh nebo do nového segmentu — kde nemá interní zkušenosti',
                'Potřeba rychlého startu bez měsíců náborového procesu',
                'Omezený rozpočet na interní zaměstnance s odvody a fixními náklady',
                'Zahraniční firma hledající zastoupení na českém nebo slovenském trhu',
                'Scale-up, který chce otestovat obchodní model před budováním vlastního týmu',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-orange-400 mt-1 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Co si ohlídat při výběru externího obchodníka?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Hlavní riziko externího obchodu je výběr špatného partnera. Na co se zaměřit:
            </p>
            <ul className="list-none space-y-3 mb-8">
              {[
                'Reference a prokazatelné výsledky — ne obecné sliby o zkušenostech',
                'Transparentní reporting — měsíční přehled aktivit, oslovených firem, výsledků',
                'Jasně definované KPI a způsob měření úspěchu ještě před startem',
                'Soulad s vaší cílovou skupinou — obchodník musí znát váš segment',
                'Jaké nástroje používá a jak je integruje do vašich procesů',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-orange-400 mt-1 flex-shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">AI jako nová forma externího obchodu</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Moderní varianta externího obchodu jde ještě dál — kombinuje lidskou expertízu s AI automatizací. Systémy jako SalesAgent.cz fungují jako plně externalizovaný obchodní proces: vyhledají firmy odpovídající vašemu ideálnímu zákazníkovi, analyzují jejich weby a posílají personalizované oslovení. Výsledkem jsou teplé leady, které lidský obchodník přebírá k uzavření.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Tento model kombinuje rychlost a škálovatelnost AI s odborností externího obchodního specialisty — a náklady zůstávají zlomkem interního týmu.
            </p>

          </article>

          <div className="mt-16 p-8 border border-orange-500/30 rounded-2xl bg-orange-900/10 text-center">
            <h2 className="text-2xl font-bold mb-3">Vyzkoušejte externí obchod s AI</h2>
            <p className="text-gray-300 mb-6">SalesAgent.cz zajistí celý proces oslovování B2B zákazníků — vyhledávání, analýzu webů i personalizované zprávy. Předáváme jen firmy se skutečným zájmem.</p>
            <a href="https://cal.com/salesagent/demo" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
              Domluvit bezplatnou konzultaci
            </a>
          </div>

          <nav className="mt-16 pt-10 border-t border-white/10">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Související články</p>
            <div className="grid gap-4">
              <Link href="/blog/co-dela-externi-obchodnik" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Co dělá externí obchodník / sales manager?</span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/ai-agent-pro-generovani-leadu" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">AI agent pro generování leadů</span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/obchodni-zastupce-definice-a-co-dela" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Obchodní zástupce — definice a co vlastně dělá?</span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">→</span>
              </Link>
            </div>
          </nav>
        </div>
      </main>
    </>
  )
}
