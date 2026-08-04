import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cold e-mail vzor česky: 3 šablony pro B2B | SalesAgent.cz',
  description:
    'Konkrétní vzory cold e-mailů pro B2B oslovení v češtině — 3 hotové šablony s GDPR patičkou. Jak napsat první zprávu, která dostane odpověď.',
  keywords: [
    'cold email vzor česky',
    'cold email šablona B2B',
    'jak napsat cold e-mail',
    'B2B oslovení e-mail',
    'cold mailing vzor',
    'cold email příklad',
    'B2B cold e-mail šablona',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/cold-e-mail-vzor-cesky',
    languages: { cs: 'https://salesagent.cz/blog/cold-e-mail-vzor-cesky', 'x-default': 'https://salesagent.cz/blog/cold-e-mail-vzor-cesky' },
  },
  openGraph: {
    title: 'Cold e-mail vzor česky: 3 šablony pro B2B oslovení',
    description: '3 hotové vzory cold e-mailů pro B2B s GDPR patičkou. Praktické šablony, které dostávají odpovědi.',
    url: 'https://salesagent.cz/blog/cold-e-mail-vzor-cesky',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-08-03',
    images: [{ url: 'https://salesagent.cz/blog/cold-e-mail-vzor.png', width: 1280, height: 853, alt: 'Cold e-mail vzor česky' }],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Cold e-mail vzor česky: 3 šablony pro B2B oslovení',
  description: 'Konkrétní vzory cold e-mailů pro B2B oslovení v češtině — 3 hotové šablony s GDPR patičkou.',
  image: 'https://salesagent.cz/blog/cold-e-mail-vzor.png',
  datePublished: '2026-08-03',
  dateModified: '2026-08-03',
  inLanguage: 'cs',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://salesagent.cz/blog/cold-email-vzor-cesky' },
}

const templates = [
  {
    label: 'Vzor #1 — Prospekting (problém → řešení)',
    subject: 'Oslovování firem bez databáze — zkuste to jinak',
    body: `Dobrý den, [Jméno],

přečetl jsem si váš web a vidím, že [konkrétní pozorování o firmě — co dělají, čím se liší].

Firmy ve vašem oboru většinou narážejí na to, že oslovovat nové zákazníky stojí buď hodně peněz (nábor obchodníka) nebo hodně času (ruční procházení kontaktů).

My to řešíme jinak — AI systém, který sám vyhledá relevantní firmy, přečte jejich web a odešle personalizovaný e-mail jménem vaší firmy. Bez koupené databáze, bez šablon.

Dáte mi 20 minut na hovor, abychom zjistili, zda to dává smysl pro váš obor?

S pozdravem,
[Jméno]
[Firma]
[Telefon]

---
Tato zpráva je obchodním sdělením dle zák. č. 480/2004 Sb. Odesílatel: [Název firmy] s.r.o., IČO [12345678]. Pokud si nepřejete dostávat další sdělení, odpovězte „odhlásit" nebo klikněte zde: [odkaz na odhlášení].`,
  },
  {
    label: 'Vzor #2 — Sociální důkaz (reference → relevance)',
    subject: 'Jak [podobná firma] získala 12 nových zákazníků za 2 měsíce',
    body: `Dobrý den, [Jméno],

pracujeme s firmami podobnými [Název firmy] — konkrétně s [název referenční firmy z oboru], kteří za 2 měsíce naší spolupráce oslovili 800 potenciálních zákazníků a domluvili 14 schůzek.

Celý proces proběhl bez rozšíření jejich obchodního týmu — jen s naším AI systémem, který prochází weby firem a píše personalizované oslovení.

Myslíte, že by podobný výsledek dával smysl i pro vás? Rád vám ukážu, jak konkrétně bychom nastavili kampaň pro [Název firmy].

[Jméno]
[Firma]

---
Tato zpráva je obchodním sdělením dle zák. č. 480/2004 Sb. Odesílatel: [Název firmy] s.r.o., IČO [12345678]. Pokud si nepřejete dostávat další sdělení, odpovězte „odhlásit" nebo klikněte zde: [odkaz na odhlášení].`,
  },
  {
    label: 'Vzor #3 — Přímý přístup (krátký, bez omáčky)',
    subject: 'Automatizace B2B oslovení pro [Název firmy]',
    body: `Dobrý den, [Jméno],

jmenuji se [Jméno] ze SalesAgent.cz.

Pomáháme B2B firmám automatizovat vyhledávání zákazníků — AI systém prochází weby cílových firem, identifikuje relevantní příležitosti a odesílá personalizované oslovení. Bez koupené databáze, bez šablon.

Výsledek: 200–500 oslovených firem měsíčně při nákladu výrazně nižším než interní obchodník.

Hodí se to pro vás? Rád vám ukážu čísla z podobných projektů.

[Jméno]

---
Tato zpráva je obchodním sdělením dle zák. č. 480/2004 Sb. Odesílatel: [Název firmy] s.r.o., IČO [12345678]. Pokud si nepřejete dostávat další sdělení, odpovězte „odhlásit" nebo klikněte zde: [odkaz na odhlášení].`,
  },
]

export default function ColdEmailVzorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors mb-10 inline-block">← Zpět na blog</Link>

          <header className="mb-12">
            <p className="text-sm text-orange-400 uppercase tracking-widest mb-4">Cold email · 3. srpna 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Cold e-mail vzor česky: 3 šablony pro B2B oslovení
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Tři konkrétní vzory cold e-mailů pro B2B outreach v češtině — s vysvětlením logiky každé šablony, co v ní funguje a jak ji přizpůsobit svému oboru. Včetně povinné GDPR patičky.
            </p>
          </header>

          <div className="mb-14 rounded-xl overflow-hidden border border-white/10">
            <Image src="/blog/cold-email-vzor.png" alt="Cold email vzor česky pro B2B" width={1280} height={853} className="w-full object-cover" priority />
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Proč většina cold emailů v češtině nefunguje</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Špatný cold e-mail v češtině se pozná okamžitě: začíná „Dovolte mi představit naši firmu...", je dlouhý jako životopis a žádá o schůzku s celým vedením. Příjemce ho smaže za 3 sekundy — nebo ho označí jako spam.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Dobrý cold e-mail je kratší, než si myslíte. Jedno konkrétní pozorování o příjemci, jedna jasná myšlenka o tom, co nabízíte, a jeden nízkobarierový krok dál. Nic víc.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Níže jsou tři funkční vzory pro různé situace — s komentářem k tomu, proč každý prvek tam je.
            </p>

            {templates.map((tpl, i) => (
              <div key={i} className="mt-12 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">{tpl.label}</h2>

                {i === 0 && (
                  <p className="text-gray-400 text-sm mb-4">
                    <strong className="text-gray-300">Kdy použít:</strong> Oslovujete firmu poprvé, nemáte referenci ze stejného oboru. Začínáte konkrétním pozorováním o jejich webu — to odlišuje zprávu od šablony.
                  </p>
                )}
                {i === 1 && (
                  <p className="text-gray-400 text-sm mb-4">
                    <strong className="text-gray-300">Kdy použít:</strong> Máte referenční projekt z podobného oboru. Lidé věří výsledkům jiných více než slibům. Čísla jsou konkrétní — ne „pomohli jsme desítkám firem", ale „14 schůzek za 2 měsíce".
                  </p>
                )}
                {i === 2 && (
                  <p className="text-gray-400 text-sm mb-4">
                    <strong className="text-gray-300">Kdy použít:</strong> Oslovujete vytížené lidi (majitelé, ředitelé), kteří nemají čas na dlouhé emaily. Přímý tón funguje lépe než zdvořilostní úvod. Žádné „dovolte mi" ani „rád bych vás oslovil".
                  </p>
                )}

                <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
                  <div className="bg-gray-800 px-5 py-3 border-b border-gray-700">
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Předmět</p>
                    <p className="text-white font-medium mt-1">{tpl.subject}</p>
                  </div>
                  <div className="px-5 py-5">
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Tělo zprávy</p>
                    <pre className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap font-sans">{tpl.body}</pre>
                  </div>
                </div>
              </div>
            ))}

            <h2 className="text-2xl font-bold text-white mt-14 mb-4">Co mají všechny tři vzory společného</h2>
            <ul className="list-none space-y-3 mb-8">
              {[
                'Krátké — do 150 slov. Příjemce rozhoduje během 5 sekund.',
                'Žádají jeden konkrétní krok (20minutový hovor), ne „schůzku s vedením".',
                'Začínají příjemcem, ne odesílatelem — co víte o jejich firmě, ne kdo jste vy.',
                'Předmět je konkrétní — buď číslo, buď přímá otázka. Vyhýbají se „Nabídka spolupráce".',
                'Obsahují GDPR patičku — povinnost ze zákona č. 480/2004 Sb.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-orange-400 mt-1 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Povinná GDPR patička cold emailu</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Každý obchodní e-mail musí obsahovat patičku dle zákona č. 480/2004 Sb. o některých službách informační společnosti. Bez ní se vystavujete pokutě a poškozujete reputaci domény.
            </p>
            <div className="bg-gray-900 border border-orange-500/30 rounded-xl p-5 mb-6">
              <p className="text-xs text-orange-400 uppercase tracking-widest mb-3">Vzor povinné patičky</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Tato zpráva je obchodním sdělením dle zák. č. 480/2004 Sb. Odesílatel: [Název firmy] s.r.o., IČO [12345678], [Adresa]. Pokud si nepřejete dostávat další sdělení, odpovězte „odhlásit" nebo klikněte zde: [odkaz na odhlášení].
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Nezapomeňte: odkaz na odhlášení musí skutečně fungovat a vedení na seznam, ze kterého příjemce okamžitě vyjmete. Ignorování žádosti o odhlášení je přestupek.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Jak personalizaci zvládnout ve velkém měřítku</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Ruční personalizace funguje do cca 50 e-mailů týdně. Nad tím narážíte na limity — buď píšete rychle a ztrácíte kvalitu, nebo píšete pomalu a oslovíte málo firem.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Moderní AI systémy přečtou web každé cílové firmy a vygenerují personalizovanou první větu (nebo celý e-mail) automaticky. Výsledek vypadá jako ruční práce, ale obsáhne stovky firem měsíčně. Přesně tak funguje SalesAgent.cz — místo koupené databáze a šablon.
            </p>

          </article>

          <div className="mt-16 p-8 border border-orange-500/30 rounded-2xl bg-orange-900/10 text-center">
            <h2 className="text-2xl font-bold mb-3">Nechte personalizaci na AI</h2>
            <p className="text-gray-300 mb-6">SalesAgent.cz píše cold emaily za vás — přečte web každé firmy a odešle zprávu, která vypadá jako ruční práce. 200–500 oslovených firem měsíčně.</p>
            <a href="https://cal.com/salesagent/demo" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
              Domluvit bezplatnou ukázku
            </a>
          </div>

          <nav className="mt-16 pt-10 border-t border-white/10">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Související články</p>
            <div className="grid gap-4">
              <Link href="/blog/gdpr-a-cold-email" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">GDPR a cold email: co smíte a nesmíte posílat</span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/jak-oslovit-firmy-bez-databaze" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Jak oslovit firmy bez koupené databáze</span>
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
