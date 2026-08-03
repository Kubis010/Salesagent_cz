import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GDPR a cold email: Co smíte a nesmíte posílat firmám | SalesAgent.cz',
  description:
    'Jak rozlišit legální B2B cold email od spamu dle GDPR a zák. č. 480/2004 Sb. Co musí každý obchodní email obsahovat a co hrozí za porušení.',
  keywords: [
    'GDPR cold email',
    'cold email GDPR pravidla',
    'B2B cold email zákon',
    'obchodní sdělení zákon',
    'cold mailing GDPR',
    '480/2004 Sb cold email',
    'legální cold email',
  ],
  alternates: { canonical: 'https://salesagent.cz/blog/gdpr-a-cold-email' },
  openGraph: {
    title: 'GDPR a cold email: Co smíte a nesmíte posílat firmám',
    description: 'Praktický průvodce GDPR a zákonem 480/2004 Sb. pro B2B cold emailing — co je legální, co musí zpráva obsahovat a co hrozí za spam.',
    url: 'https://salesagent.cz/blog/gdpr-a-cold-email',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-07-31',
    images: [{ url: 'https://salesagent.cz/blog/gdpr-cold-email.jpg', width: 1280, height: 853, alt: 'GDPR a cold email pravidla' }],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'GDPR a cold email: Co smíte a nesmíte posílat firmám',
  description: 'Jak rozlišit legální B2B cold email od spamu dle GDPR a zák. č. 480/2004 Sb.',
  image: 'https://salesagent.cz/blog/gdpr-cold-email.jpg',
  datePublished: '2026-07-31',
  dateModified: '2026-07-31',
  inLanguage: 'cs',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://salesagent.cz/blog/gdpr-a-cold-email' },
}

const rules = [
  {
    ok: true,
    title: 'Oslovit firmu emailem bez předchozího souhlasu',
    note: 'B2B cold emailing je legální dle zák. č. 480/2004 Sb., pokud email obsahuje povinné náležitosti a příjemce má možnost se odhlásit.',
  },
  {
    ok: true,
    title: 'Použít veřejně dostupné kontakty (web firmy, obchodní rejstřík)',
    note: 'Pokud je kontakt uveden jako firemní, považuje se za určený pro obchodní komunikaci. Osobní email (jmeno@gmail.com) do tohoto pravidla nespadá.',
  },
  {
    ok: false,
    title: 'Posílat emaily fyzickým osobám bez souhlasu',
    note: 'Spotřebitelé (B2C) potřebují výslovný souhlas dle GDPR. Cold mailing na soukromé osoby bez opt-inu je nezákonný.',
  },
  {
    ok: false,
    title: 'Ignorovat žádost o odhlášení',
    note: 'Pokud příjemce odpoví "odhlásit" nebo klikne na odkaz pro odhlášení, musíte ho okamžitě vyřadit. Pokračování v zasílání je přestupek.',
  },
  {
    ok: false,
    title: 'Skrýt totožnost odesílatele',
    note: 'Email musí jasně uvádět, kdo ho posílá — název firmy, IČO a kontaktní adresa jsou povinné.',
  },
]

export default function GdprColdEmailPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors mb-10 inline-block">← Zpět na blog</Link>

          <header className="mb-12">
            <p className="text-sm text-orange-400 uppercase tracking-widest mb-4">GDPR · 31. července 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              GDPR a cold email: Co smíte a nesmíte posílat firmám
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              B2B cold emailing je v ČR legální — ale jen při splnění konkrétních podmínek. Jak rozlišit, co je povolené obchodní sdělení a co je spam, a co musí každý email povinně obsahovat.
            </p>
          </header>

          <div className="mb-14 rounded-xl overflow-hidden border border-white/10">
            <Image src="/blog/gdpr-cold-email.jpg" alt="GDPR a cold email pravidla" width={1280} height={853} className="w-full object-cover" priority />
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Dva zákony, které musíte znát</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Při B2B cold emailingu v ČR se pohybujete v rámci dvou předpisů:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  law: 'Zákon č. 480/2004 Sb.',
                  full: 'o některých službách informační společnosti',
                  desc: 'Upravuje obchodní sdělení — co musí email obsahovat, podmínky pro B2B oslovení a povinnost umožnit odhlášení.',
                },
                {
                  law: 'GDPR (Nařízení EU 2016/679)',
                  full: 'obecné nařízení o ochraně osobních údajů',
                  desc: 'Reguluje zpracování osobních údajů. Týká se zejména emailů fyzickým osobám a vedení záznamu o zpracování kontaktů.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                  <p className="text-orange-400 font-bold text-sm mb-1">{item.law}</p>
                  <p className="text-gray-500 text-xs mb-3">{item.full}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Pro B2B cold email (firma oslovuje firmu) je klíčový zejména zákon č. 480/2004 Sb. GDPR vstupuje do hry tehdy, když pracujete s osobními údaji fyzických osob — jmény, pracovními emaily konkrétních lidí.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Co smíte a nesmíte — přehled pravidel</h2>
            <div className="space-y-4 mb-8">
              {rules.map((rule, i) => (
                <div key={i} className={`flex items-start gap-4 p-5 rounded-xl border ${rule.ok ? 'border-green-500/30 bg-green-900/10' : 'border-red-500/30 bg-red-900/10'}`}>
                  <span className={`text-lg flex-shrink-0 mt-0.5 ${rule.ok ? 'text-green-400' : 'text-red-400'}`}>{rule.ok ? '✓' : '✗'}</span>
                  <div>
                    <p className={`font-semibold mb-1 ${rule.ok ? 'text-green-300' : 'text-red-300'}`}>{rule.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{rule.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Kdy B2B cold email nepotřebuje souhlas</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Zákon č. 480/2004 Sb. (§ 7 odst. 3) umožňuje posílat obchodní sdělení bez předchozího souhlasu, pokud jsou splněny tři podmínky současně:
            </p>
            <ol className="space-y-4 mb-8">
              {[
                { num: '1', title: 'Příjemce je právnická nebo podnikající fyzická osoba', desc: 'Sdělení musí mířit na firemní kontakt, ne na soukromou osobu.' },
                { num: '2', title: 'Produkt nebo služba jsou relevantní', desc: 'Nabídka musí být v přímé souvislosti s podnikáním příjemce. Nesmíte posílat náhodné nabídky, které s jeho byznysem nesouvisejí.' },
                { num: '3', title: 'Email obsahuje všechny povinné náležitosti', desc: 'Identifikace odesílatele, označení jako obchodní sdělení, funkční možnost odhlášení.' },
              ].map((item) => (
                <li key={item.num} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 font-bold text-sm flex items-center justify-center">{item.num}</span>
                  <div>
                    <p className="text-white font-semibold mb-1">{item.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-gray-300 leading-relaxed mb-6">
              Klíčové je slovo „relevantní". Oslovíte-li IT firmu s nabídkou IT nástrojů — to je relevantní. Pošlete-li IT firmě nabídku zahradnické techniky — to je spam bez ohledu na patičku.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Povinné náležitosti každého cold emailu</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Zákon vyžaduje, aby každé obchodní sdělení obsahovalo:
            </p>
            <div className="bg-gray-900 border border-orange-500/30 rounded-xl overflow-hidden mb-6">
              {[
                { label: 'Označení jako obchodní sdělení', desc: 'Příjemce musí jasně poznat, že jde o obchodní komunikaci, ne soukromou zprávu.' },
                { label: 'Identifikace odesílatele', desc: 'Název firmy, IČO, případně adresa sídla. Skrytá identita je přestupek.' },
                { label: 'Funkční možnost odmítnutí', desc: 'Odkaz na odhlášení nebo jasná instrukce, jak odhlásit (např. odpovězte „odhlásit"). Musí skutečně fungovat.' },
                { label: 'Kontakt pro odhlášení', desc: 'Emailová adresa nebo webový formulář, kde může příjemce vznést námitku.' },
              ].map((item, i) => (
                <div key={i} className={`p-4 ${i < 3 ? 'border-b border-gray-700' : ''}`}>
                  <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Vzor povinné patičky</h2>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 mb-4">
              <p className="text-gray-300 text-sm leading-relaxed font-mono">
                Tato zpráva je obchodním sdělením dle zák. č. 480/2004 Sb. Odesílatel: [Název firmy] s.r.o., IČO [12345678], [Ulice, Město, PSČ]. Pokud si nepřejete dostávat další sdělení, odpovězte „odhlásit" nebo klikněte zde: [odkaz na odhlášení].
              </p>
            </div>
            <p className="text-gray-400 text-sm mb-8">
              Odkaz na odhlášení musí vést na stránku nebo formulář, kde dojde ke skutečnému vyřazení ze seznamu. Nestačí odkaz na homepage nebo kontaktní stránku.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Co hrozí za porušení</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Úřad pro ochranu osobních údajů (ÚOOÚ) může uložit pokutu až 10 000 000 Kč nebo 2 % celosvětového obratu (dle GDPR), přičemž za přestupky dle zákona 480/2004 Sb. hrozí pokuta až 10 000 000 Kč fyzickým osobám a 10 000 000 Kč právnickým osobám.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              V praxi jsou pokuty pro malé firmy spíše symbolické — ÚOOÚ řeší primárně systémové porušovatele. Větší riziko pro B2B prospekting je poškození reputace domény při označení zpráv jako spam příjemci.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">GDPR a uchovávání kontaktů</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              I když nepotřebujete souhlas k odeslání emailu, stále zpracováváte osobní údaje (jméno, pracovní email). Musíte mít právní základ pro zpracování — v B2B případě je to zpravidla <strong className="text-white">oprávněný zájem</strong> (čl. 6 odst. 1 písm. f GDPR). Váš zájem oslovit potenciálního zákazníka musí být vyvážen zájmy příjemce — proto relevance nabídky není jen etická, ale právní povinnost.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Veďte záznamy o zpracování a nastavte dobu uchovávání — kontakty, které neodpovídají a nejsou vaši zákazníci, neukládejte donekonečna.
            </p>

          </article>

          <div className="mt-16 p-8 border border-orange-500/30 rounded-2xl bg-orange-900/10 text-center">
            <h2 className="text-2xl font-bold mb-3">Cold mailing bez starostí s compliance</h2>
            <p className="text-gray-300 mb-6">SalesAgent.cz zajišťuje legální B2B outreach s řádnými patičkami, správou opt-outů a personalizací, která nespadá do šablonového spamu.</p>
            <a href="https://cal.com/salesagent/demo" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
              Domluvit bezplatnou ukázku
            </a>
          </div>

          <nav className="mt-16 pt-10 border-t border-white/10">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Související články</p>
            <div className="grid gap-4">
              <Link href="/blog/cold-email-vzor-cesky" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Cold email vzor česky: 3 šablony pro B2B oslovení</span>
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
