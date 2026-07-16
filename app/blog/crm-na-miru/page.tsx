import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CRM na míru: Proč generické systémy firmám nevyhovují | SalesAgent.cz',
  description:
    'Salesforce a HubSpot jsou drahé a přeplácané pro většinu B2B firem. CRM na míru řeší přesně to, co potřebujete — bez zbytečných funkcí a zbytečných nákladů.',
  keywords: [
    'CRM na míru',
    'vlastní CRM systém',
    'CRM pro B2B firmy',
    'CRM pro malé firmy',
    'levné CRM',
    'alternativa Salesforce',
    'alternativa HubSpot',
    'CRM systém na zakázku',
    'jednoduché CRM',
    'CRM pro obchodní tým',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/crm-na-miru',
  },
  openGraph: {
    title: 'CRM na míru: Proč generické systémy firmám nevyhovují',
    description:
      'Salesforce a HubSpot jsou drahé a přeplácané pro většinu B2B firem. CRM na míru řeší přesně to, co potřebujete — bez zbytečných funkcí a zbytečných nákladů.',
    url: 'https://salesagent.cz/blog/crm-na-miru',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-07-16',
    images: [
      {
        url: 'https://salesagent.cz/blog/crm-na-miru.png',
        width: 1512,
        height: 642,
        alt: 'Sales Robots CRM — přehled lead pipeline',
      },
    ],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'CRM na míru: Proč generické systémy firmám nevyhovují',
  description:
    'Salesforce a HubSpot jsou drahé a přeplácané pro většinu B2B firem. CRM na míru řeší přesně to, co potřebujete — bez zbytečných funkcí a zbytečných nákladů.',
  image: 'https://salesagent.cz/blog/crm-na-miru.png',
  datePublished: '2026-07-16',
  dateModified: '2026-07-16',
  inLanguage: 'cs',
  author: {
    '@type': 'Organization',
    name: 'SalesAgent.cz',
    url: 'https://salesagent.cz',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Sales Robots s.r.o.',
    url: 'https://salesagent.cz',
    logo: {
      '@type': 'ImageObject',
      url: 'https://salesagent.cz/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://salesagent.cz/blog/crm-na-miru',
  },
}

export default function CrmNaMiruPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          {/* Back */}
          <Link
            href="/blog"
            className="text-sm text-gray-400 hover:text-white transition-colors mb-10 inline-block"
          >
            ← Zpět na blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <p className="text-sm text-purple-400 uppercase tracking-widest mb-4">
              CRM systémy · 16. července 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              CRM na míru: Proč generické systémy většině firem nevyhovují
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Salesforce, HubSpot, Pipedrive — znáte je. Jsou populární, mají tisíce funkcí a stojí
              tisíce korun měsíčně. Jenže pro většinu B2B firem jsou jako švýcarský nůž s padesáti
              nástroji, z nichž potřebujete tři. CRM na míru mění tenhle přístup.
            </p>
          </header>

          {/* Hero image */}
          <div className="mb-14 rounded-xl overflow-hidden border border-white/10">
            <Image
              src="/blog/crm-na-miru.png"
              alt="Sales Robots CRM — lead pipeline s 280 leady"
              width={1512}
              height={642}
              className="w-full"
              priority
            />
            <p className="text-xs text-gray-500 text-center py-2 px-4">
              Sales Robots CRM — přehled lead pipeline se stavy NOVÝ, ZÁJEM, VYHRÁNO
            </p>
          </div>

          {/* Article body */}
          <article className="prose prose-invert prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Proč jsou generická CRM pro většinu firem předimenzovaná
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Salesforce si nechá zaplatit přes 1 500 Kč měsíčně za uživatele — a to za základní
              verzi. HubSpot Sales Hub Professional vychází ještě dráž. Za tyhle peníze dostanete
              systém navržený tak, aby vyhovoval firmám od deseti do deseti tisíc zaměstnanců
              zároveň. Výsledek? Nepřehledné menu, nastavení na sto stránek a onboarding, který
              trvá týdny.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Obchodní týmy pak systém buď nepoužívají vůbec, nebo ho používají jen jako drahý
              Excelový soubor. Skutečná hodnota — přehled pipeline, sledování komunikace, prioritizace
              leadů — se ztrácí v komplexitě.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Co dělá CRM na míru jinak
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Jednoduché CRM na zakázku má jedinou výhodu, která překoná všechny ostatní: obsahuje
              přesně to, co váš tým potřebuje, a nic navíc. Žádné moduly pro call centrum, které
              nikdy neotevřete. Žádné enterprise workflow, které nikdo z vašeho pětičlenného týmu
              nepotřebuje.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Místo toho dostanete pipeline přizpůsobený vašemu obchodnímu procesu — s fázemi, které
              odpovídají tomu, jak skutečně prodáváte. Pole, která sbíráte při každém obchodním
              hovoru. Automatické přiřazování leadů podle teritoria nebo oboru. Integraci s nástroji,
              které už používáte.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Tři hlavní problémy generických CRM
            </h2>

            <div className="space-y-8 mb-8">
              <div className="border-l-2 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-white mb-2">1. Cena neodpovídá hodnotě</h3>
                <p className="text-gray-300 leading-relaxed">
                  Platíte za funkce, které nepoužíváte. Průměrná firma využívá méně než 30 % funkcí
                  svého CRM systému. U Salesforce a HubSpotu to bývá ještě méně — a přitom platíte
                  plnou cenu. CRM na míru naopak stojí jen za to, co skutečně potřebujete a
                  používáte každý den.
                </p>
              </div>

              <div className="border-l-2 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-white mb-2">2. Nepřizpůsobivost procesům</h3>
                <p className="text-gray-300 leading-relaxed">
                  Generické CRM vás nutí přizpůsobit vaše procesy systému, ne naopak. Pokud prodáváte
                  jinak než americká technologická firma z roku 2010, na které byl HubSpot navržen,
                  budete neustále bojovat s tím, jak systém funguje. Vlastní CRM systém se přizpůsobí
                  vám — pipeline, terminologie, fáze prodeje odpovídají tomu, jak skutečně pracujete.
                </p>
              </div>

              <div className="border-l-2 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-white mb-2">3. Adopce týmem je nízká</h3>
                <p className="text-gray-300 leading-relaxed">
                  Nejdražší CRM je to, které váš tým nepoužívá. Složité systémy vedou k tomu, že
                  obchodníci zapisují data zpětně (nebo vůbec), vyhýbají se aktualizacím a manažeři
                  nemají přehled o reálném stavu pipeline. Jednoduché CRM s přehledným rozhraním
                  zvyšuje adopci — a tím i hodnotu dat, se kterými pracujete.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Jak vypadá CRM pro B2B firmy v praxi
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Ve Sales Robots jsme si vlastní CRM vybudovali přesně proto, že žádné generické řešení
              nevyhovovalo specifickému procesu B2B outboundu. Na obrázku výše vidíte reálný přehled
              lead pipeline — 280 leadů rozdělených do stavů NOVÝ, ZÁJEM, MOŽNÁ POZDĚJI, VYHRÁNO a
              ZAMÍTNUT.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Každý lead má vlastní firmu, web, e-mail a případně Instagram nebo LinkedIn profil.
              Systém je přehledný na první pohled — žádné zbytečné sloupce, žádné skryté stavy. Tým
              vidí přesně, co potřebuje vidět, a nic navíc.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Takový přístup funguje zvlášť dobře pro CRM pro malé firmy a středně velké obchodní
              týmy, kde každý obchodník spravuje desítky až stovky aktivních leadů. Bez přehledného
              nástroje se leady ztrácejí, follow-upy chybí a obchody padají.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Kdy má smysl CRM systém na zakázku
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Vlastní CRM dává smysl, pokud platí alespoň jedno z následujícího:
            </p>
            <ul className="list-none space-y-3 mb-8">
              {[
                'Váš obchodní proces se liší od standardního SaaS modelu (projektová výroba, B2B služby, zakázkové dodávky)',
                'Generická CRM jsou pro váš tým příliš složitá a adopce je nízká',
                'Platíte za licence víc, než kolik vám systém přináší hodnoty',
                'Potřebujete specifické integrace — účetní systém, ERP, vlastní databáze',
                'Chcete mít kontrolu nad daty a neplatit za uložení každého kontaktu',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-purple-400 mt-1 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Alternativa Salesforce a HubSpot: co zvážit
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Alternativa k Salesforce a HubSpotu nemusí být nutně vlastní vývoj od nuly. Existuje
              celé spektrum možností — od open-source řešení (Odoo, SuiteCRM) přes levnější
              generická CRM (Pipedrive, Freshsales) až po skutečně vlastní CRM systém na zakázku.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Klíčová otázka není "co je nejlevnější", ale "co skutečně použijeme". Levné CRM, které
              tým aktivně používá, je vždy lepší než drahý systém, který generuje hezké reporty do
              šuplíku.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Při výběru doporučujeme zaměřit se na tři věci: jak rychle se v systému zorientuje nový
              obchodník, kolik polí skutečně vyplňujete při každém záznamu, a jestli systém podporuje
              váš způsob práce — nebo vás nutí pracovat jinak.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Shrnutí: co hledat v CRM pro obchodní tým
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Dobrý CRM systém pro B2B firmy musí splňovat tři podmínky: tým ho musí chtít
              používat, musí odpovídat vašemu procesu a musí vám dát přehled, který potřebujete pro
              rozhodování. Generická řešení splňují tyto podmínky jen tehdy, když váš proces
              odpovídá tomu, pro co byly navrženy. Pokud ne, CRM na míru je řešení, které stojí za
              zvážení.
            </p>
          </article>

          {/* CTA */}
          <div className="mt-16 p-8 border border-purple-500/30 rounded-2xl bg-purple-900/10 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Chcete vidět Sales Robots CRM v akci?
            </h2>
            <p className="text-gray-300 mb-6">
              Ukážeme vám, jak vypadá B2B outbound s vlastním CRM — od vyhledávání kontaktů po
              první odpověď z cílové firmy.
            </p>
            <a
              href="https://cal.com/salesagent/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Domluvit bezplatnou ukázku
            </a>
          </div>

          {/* Related articles */}
          <nav className="mt-16 pt-10 border-t border-white/10">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">
              Související články
            </p>
            <div className="grid gap-4">
              <Link
                href="/blog/automatizace-prodeje-jak-ai-meni-b2b-osloveni"
                className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-purple-500/50 transition-colors"
              >
                <span className="text-gray-200 group-hover:text-white transition-colors">
                  Automatizace prodeje: Jak AI mění B2B oslovení
                </span>
                <span className="text-gray-500 group-hover:text-purple-400 transition-colors">→</span>
              </Link>
              <Link
                href="/blog/jak-zavest-automatizaci-prodeje-ve-firme"
                className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-purple-500/50 transition-colors"
              >
                <span className="text-gray-200 group-hover:text-white transition-colors">
                  Jak zavést automatizaci prodeje ve firmě
                </span>
                <span className="text-gray-500 group-hover:text-purple-400 transition-colors">→</span>
              </Link>
              <Link
                href="/blog/obchodni-zastupce-definice-a-co-dela"
                className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-purple-500/50 transition-colors"
              >
                <span className="text-gray-200 group-hover:text-white transition-colors">
                  Obchodní zástupce — definice a co vlastně dělá?
                </span>
                <span className="text-gray-500 group-hover:text-purple-400 transition-colors">→</span>
              </Link>
            </div>
          </nav>
        </div>
      </main>
    </>
  )
}
