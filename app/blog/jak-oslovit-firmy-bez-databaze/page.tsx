import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jak oslovit firmy bez koupené databáze kontaktů | SalesAgent.cz',
  description:
    'Jak najít B2B kontakty a oslovit firmy bez placené databáze. Konkrétní zdroje, metody a AI nástroje pro outreach bez Apollo, Lusha nebo SalesNavigator.',
  keywords: [
    'jak oslovit firmy bez databáze',
    'B2B kontakty bez databáze',
    'jak najít B2B kontakty',
    'prospekting bez databáze',
    'AI prospekting firmy',
    'cold email bez databáze',
    'jak oslovit nové zákazníky',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/jak-oslovit-firmy-bez-databaze',
    languages: { cs: 'https://salesagent.cz/blog/jak-oslovit-firmy-bez-databaze', 'x-default': 'https://salesagent.cz/blog/jak-oslovit-firmy-bez-databaze' },
  },
  openGraph: {
    title: 'Jak oslovit firmy bez koupené databáze kontaktů',
    description: 'Jak najít B2B kontakty bez placené databáze — konkrétní zdroje, metody a AI nástroje pro outreach.',
    url: 'https://salesagent.cz/blog/jak-oslovit-firmy-bez-databaze',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-07-28',
    images: [{ url: 'https://salesagent.cz/blog/jak-oslovit-firmy.jpg', width: 1280, height: 853, alt: 'Jak oslovit firmy bez databáze' }],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Jak oslovit firmy bez koupené databáze kontaktů',
  description: 'Jak najít B2B kontakty a oslovit firmy bez placené databáze.',
  image: 'https://salesagent.cz/blog/jak-oslovit-firmy.jpg',
  datePublished: '2026-07-28',
  dateModified: '2026-07-28',
  inLanguage: 'cs',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://salesagent.cz/blog/jak-oslovit-firmy-bez-databaze' },
}

const sources = [
  {
    icon: '🔍',
    title: 'Hledání Google',
    desc: 'Nejjednodušší start. Zadejte "[obor] firmy [město/kraj]" nebo "[obor] dodavatel ČR". Google vrátí weby firem přímo — bez prostředníka. Procházením výsledků získáte kontakty rovnou z webu firmy.',
    quality: 'Vysoká — přímý přístup k firemním webům',
  },
  {
    icon: '📒',
    title: 'Firmy.cz',
    desc: 'Největší český firemní katalog. Filtrujte podle oboru, kraje nebo velikosti. Zobrazuje telefony, weby a v některých případech i e-mailové adresy přímo v záznamu.',
    quality: 'Vysoká — rozsáhlá česká databáze',
  },
  {
    icon: '🗺',
    title: 'Google Maps / Mapy.cz',
    desc: 'Ideální pro lokální outreach. Hledejte firmy podle kategorie a místa. Webové adresy a telefony jsou veřejně dostupné přímo v záznamu.',
    quality: 'Střední — pokrytí závisí na kategorii',
  },
  {
    icon: '🌐',
    title: 'Weby firem',
    desc: 'Přímý zdroj kontaktů — stránky „Kontakt", „Tým" nebo „O nás". Firmy zde uvádějí e-mailové adresy, telefony i jména zodpovědných osob. Čtení webu navíc dá kontext pro personalizaci zprávy.',
    quality: 'Velmi vysoká — první ruka, aktuální údaje',
  },
  {
    icon: '🏛',
    title: 'Obchodní rejstřík (justice.cz)',
    desc: 'Bezplatný rejstřík všech firem v ČR. Filtrujte podle oboru (NACE kódu), sídla nebo data vzniku. Kontakty na webu firmy hledejte manuálně nebo automaticky.',
    quality: 'Vysoká — aktuální právní údaje',
  },
  {
    icon: '📋',
    title: 'ARES (Administrativní registr ekonomických subjektů)',
    desc: 'Státní databáze firem dostupná přes API i webové rozhraní. Obsahuje IČO, adresy a obory. Neobsahuje přímé kontakty — ty hledejte na webech firem.',
    quality: 'Vysoká — pokrývá všechny registrované subjekty',
  },
  {
    icon: '🌍',
    title: 'Weby oborových sdružení',
    desc: 'Svazy, komory a asociace zveřejňují seznamy členů. Jsou to předkvalifikované firmy z daného oboru — ideální cílová skupina pro relevantní outreach.',
    quality: 'Velmi vysoká — předkvalifikované kontakty',
  },
  {
    icon: '🔵',
    title: 'LinkedIn (volné vyhledávání)',
    desc: 'Bez Sales Navigatoru stále najdete firmy a lidi pomocí filtrů. Omezení: 100 výsledků na hledání. Pro větší objem použijte Sales Navigator nebo alternativy.',
    quality: 'Vysoká — aktuální role a firmy',
  },
  {
    icon: '🤖',
    title: 'AI web scraping',
    desc: 'Moderní nástroje automaticky procházejí výše zmíněné zdroje a extrahují kontakty, obor, velikost a relevantní signály. Nahrazuje stovky hodin ruční práce.',
    quality: 'Závisí na nástroji',
  },
]

export default function JakOslovitFirmyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors mb-10 inline-block">← Zpět na blog</Link>

          <header className="mb-12">
            <p className="text-sm text-orange-400 uppercase tracking-widest mb-4">Prospekting · 28. července 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Jak oslovit firmy bez koupené databáze kontaktů
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Koupená databáze kontaktů je drahá, zastaralá a plná neaktivních firem. Jak najít relevantní B2B kontakty z veřejných zdrojů a oslovit je způsobem, který dostane odpovědi.
            </p>
          </header>

          <div className="mb-14 rounded-xl overflow-hidden border border-white/10">
            <Image src="/blog/jak-oslovit-firmy.jpg" alt="Jak oslovit firmy bez databáze" width={1280} height={853} className="w-full object-cover" priority />
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Proč koupená databáze obvykle zklamá</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Placené databáze kontaktů (Apollo, Clearbit, Sales Navigator, české agregátory) slibují tisíce kontaktů za měsíční poplatek. V praxi narazíte na tři problémy:
            </p>
            <ul className="list-none space-y-3 mb-8">
              {[
                '20–40 % kontaktů je zastaralých — lidé mění práci, firmy zanikají.',
                'Databáze jsou neosobní — každý obchodník oslovuje stejné lidi ze stejného seznamu.',
                'Relevance je obecná — víte obor, ale nevíte nic konkrétního o jejich aktuálních prioritách.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-red-400 mt-1 flex-shrink-0">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 leading-relaxed mb-6">
              Alternativa není záhadná: veřejné zdroje + inteligentní přístup. Firmy, které najdete sami, jsou čerstvé a přesně odpovídají vašemu cílovému profilu.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">6 zdrojů pro B2B kontakty bez databáze</h2>
            <div className="space-y-4 mb-10">
              {sources.map((source, i) => (
                <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{source.icon}</span>
                    <div className="flex-1">
                      <p className="text-white font-bold mb-1">{source.title}</p>
                      <p className="text-gray-300 text-sm leading-relaxed mb-2">{source.desc}</p>
                      <p className="text-xs text-gray-500">Kvalita: <span className="text-gray-400">{source.quality}</span></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Jak najít emailový kontakt na konkrétního člověka</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Firma je na webu — ale kontakt na rozhodovací osobu chybí. Postup bez placené databáze:
            </p>
            <ol className="space-y-4 mb-8">
              {[
                { step: '1', title: 'Web firmy', desc: 'Stránky „O nás", „Tým" nebo „Kontakt". Mnoho firem uvádí přímé e-maily zaměstnanců.' },
                { step: '2', title: 'LinkedIn profil', desc: 'Hledejte jméno + firma. Zjistíte pozici a můžete oslovit přes InMail nebo žádost o připojení.' },
                { step: '3', title: 'Vzor emailové adresy', desc: 'Pokud znáte jedno firemní emailu (info@firma.cz), odhadněte vzor: jmeno.prijmeni@firma.cz. Ověřte přes Hunter.io (10 hledání zdarma).' },
                { step: '4', title: 'Firemní tiskové zprávy a PR', desc: 'Citace z tiskových zpráv a článků v médiích často uvádějí jméno i pozici zodpovědné osoby.' },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 font-bold text-sm flex items-center justify-center">{item.step}</span>
                  <div>
                    <p className="text-white font-semibold mb-1">{item.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Proč je přístup „bez databáze" výhoda, ne handicap</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Když oslovíte firmu, jejíž web jste přečetli — vaše zpráva to pozná. Můžete napsat:
            </p>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 mb-4">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Místo generického:</p>
              <p className="text-gray-400 text-sm italic">"Rádi bychom vám nabídli naše obchodní služby..."</p>
            </div>
            <div className="bg-gray-900 border border-green-500/30 rounded-xl p-5 mb-8">
              <p className="text-xs text-green-400 uppercase tracking-widest mb-2">Napíšete konkrétní:</p>
              <p className="text-gray-300 text-sm">"Vidím, že se zaměřujete na průmyslové čistírny v Moravskoslezském kraji. Pracujeme s podobnými firmami na automatizaci oslovování subdodavatelů — rád vám ukážu, jak to funguje pro firmy z vašeho oboru."</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Tato personalizace je možná pouze tehdy, když si firmu najdete a přečtete — ne když ji vyberete z databáze přes filtr „obor: průmysl".
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Jak AI mění rovnici</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ruční hledání a čtení webů funguje do cca 30–50 kontaktů týdně. Nad tím je potřeba automatizace.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Moderní AI systémy pro prospekting:
            </p>
            <ul className="list-none space-y-3 mb-8">
              {[
                'Prohledávají obchodní rejstřík nebo Google Maps podle vašich kritérií',
                'Pro každou nalezenou firmu stáhnou a přečtou web',
                'Identifikují relevantní signály (čím se zabývají, jaká je jejich velikost, co hledají)',
                'Napíší personalizovanou první větu e-mailu na základě webu',
                'Odesílají v dávkách s dodržením GDPR patičky',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-orange-400 mt-1 flex-shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 leading-relaxed mb-6">
              Výsledek: stovky personalizovaných e-mailů měsíčně bez koupené databáze a bez toho, aby to vypadalo jako šablona.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Kdy koupená databáze přece jen dává smysl</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Existují situace, kde placená databáze je legitimní zkratka: oslovujete velmi specifickou skupinu (např. CFO firem nad 500 zaměstnanců v konkrétním oboru) a LinkedIn Sales Navigator nebo Apollo mají spolehlivé filtrování. V takovém případě databáze jako startovní bod funguje — ale personalizace stále musí přijít od vás, ne od databáze.
            </p>

          </article>

          <div className="mt-16 p-8 border border-orange-500/30 rounded-2xl bg-orange-900/10">
            <h2 className="text-2xl font-bold mb-3">Celý tento proces umíme automatizovat</h2>
            <p className="text-gray-300 mb-4">
              SalesAgent.cz automatizuje celý proces hledání a oslovování nových firem. Na základě vašeho ideálního zákaznického profilu systém vyhledá relevantní firmy, přečte jejich weby, identifikuje správné kontakty a odešle personalizovaný cold e-mail.
            </p>
            <p className="text-gray-300 mb-6">
              Výsledek: 200–500 oslovených firem měsíčně, bez koupené databáze, bez šablon a bez toho, abyste u toho museli sedět vy.
            </p>
            <a href="https://cal.com/salesagent/demo" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
              Zjistit, jak to funguje pro váš obor →
            </a>
          </div>

          <nav className="mt-16 pt-10 border-t border-white/10">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Související články</p>
            <div className="grid gap-4">
              <Link href="/blog/cold-email-vzor-cesky" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Cold email vzor česky: 3 šablony pro B2B oslovení</span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/gdpr-a-cold-email" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">GDPR a cold email: co smíte posílat firmám</span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/jak-personalizovat-cold-emaily-ai" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Jak personalizovat cold emaily pomocí AI</span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">→</span>
              </Link>
            </div>
          </nav>
        </div>
      </main>
    </>
  )
}
