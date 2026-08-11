import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Je legální B2B cold e-mail a databáze firem v EU? GDPR a zákon 480/2004 | SalesAgent.cz',
  description:
    'Ano, B2B cold e-mail na firemní adresy je v ČR legální — ale za přesně daných podmínek. Přečtěte si, co říká zákon č. 480/2004 Sb. a GDPR o databázích firem a cold outreachi.',
  keywords: [
    'je legální cold email b2b',
    'b2b databáze firem cold outreach',
    'GDPR cold e-mail',
    'cold email GDPR pravidla',
    'B2B cold e-mail zákon',
    'cold outreach EU legálnost',
    '480/2004 Sb cold e-mail',
    'ÚOOÚ cold e-mail',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/gdpr-a-cold-email',
    languages: { cs: 'https://salesagent.cz/blog/gdpr-a-cold-email', 'x-default': 'https://salesagent.cz/blog/gdpr-a-cold-email' },
  },
  openGraph: {
    title: 'GDPR a cold e-mail: Co říká ÚOOÚ a co to mění',
    description: 'Zákon č. 480/2004 Sb. nerozlišuje mezi fyzickou a právnickou osobou. Cold e-mail bez opt-inu je formálně porušení zákona — i na info@firma.cz.',
    url: 'https://salesagent.cz/blog/gdpr-a-cold-email',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-08-05',
    images: [{ url: 'https://salesagent.cz/blog/gdpr-cold-email.jpg', width: 1280, height: 853, alt: 'GDPR a cold e-mail — stanovisko ÚOOÚ' }],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'GDPR a cold e-mail: Co říká ÚOOÚ a co to mění',
  description: 'Zákon č. 480/2004 Sb. nerozlišuje mezi fyzickou a právnickou osobou. Cold e-mail bez opt-inu je formálně porušení zákona.',
  image: 'https://salesagent.cz/blog/gdpr-cold-email.jpg',
  datePublished: '2026-08-05',
  dateModified: '2026-08-05',
  inLanguage: 'cs',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://salesagent.cz/blog/gdpr-a-cold-email' },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Je cold e-mail na firemní adresu (info@firma.cz) legální bez souhlasu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ne. Dle stanoviska ÚOOÚ zákon č. 480/2004 Sb. nerozlišuje mezi fyzickou a právnickou osobou. Posílání obchodního sdělení bez předchozího souhlasu (opt-in) nebo bez existujícího zákaznického vztahu je formálně porušení zákona, a to i na firemní adresy."
      }
    },
    {
      "@type": "Question",
      "name": "Mohu použít kontakty z webu firmy nebo obchodního rejstříku pro cold e-mail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ÚOOÚ explicitně říká, že ne. Obchodní sdělení lze dle zákona odeslat pouze adresátům, kteří k tomu dali předem souhlas (opt-in), nebo kteří jsou zákazníkem odesílatele. Volně dostupný kontakt na webu neznamená souhlas s přijímáním obchodních sdělení."
      }
    },
    {
      "@type": "Question",
      "name": "Jaká pokuta hrozí za nelegální cold e-mailing v ČR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dle zákona č. 480/2004 Sb. hrozí fyzické osobě pokuta až 100 000 Kč a právnické osobě pokuta až 10 000 000 Kč. ÚOOÚ při posuzování vychází především z počtu obdržených stížností."
      }
    }
  ]
}

export default function GdprColdEmailPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors mb-10 inline-block">← Zpět na blog</Link>

          <header className="mb-12">
            <p className="text-sm text-orange-400 uppercase tracking-widest mb-4">Legislativa · 5. srpna 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              GDPR a cold e-mail: Co říká ÚOOÚ a co to mění
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Zákon č. 480/2004 Sb. nerozlišuje mezi fyzickou a právnickou osobou. Posílání cold e-mailů bez předchozího souhlasu je formálně v rozporu se zákonem — i na firemní adresy. Tady je, co z toho vyplývá a jak se to řeší v praxi.
            </p>
          </header>

          <div className="mb-14 rounded-xl overflow-hidden border border-white/10">
            <Image src="/blog/gdpr-cold-email.jpg" alt="GDPR a cold email — stanovisko ÚOOÚ" width={1280} height={853} className="w-full object-cover" priority />
          </div>

          <div className="mb-10 p-5 border border-yellow-500/30 bg-yellow-900/10 rounded-xl text-sm text-yellow-200/80 leading-relaxed">
            <strong className="text-yellow-300">Upozornění:</strong> Tento článek vychází z veřejně dostupných odpovědí ÚOOÚ (Úřad pro ochranu osobních údajů) k problematice obchodních sdělení. Nejsme právníci a obsah nepředstavuje právní radu ve smyslu zákona o advokacii. Doporučujeme vždy konzultovat konkrétní situaci s kvalifikovaným právníkem.
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Klíčové zjištění: zákon nerozlišuje typ adresáta</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nejdůležitější bod ze stanoviska ÚOOÚ:
            </p>
            <div className="p-6 border border-red-500/30 bg-red-900/10 rounded-xl mb-6">
              <p className="text-red-300 font-semibold mb-2 text-sm uppercase tracking-wider">Otázka na ÚOOÚ:</p>
              <p className="text-gray-200 italic mb-4">{'"Je rozdíl, je-li adresátem obchodního sdělení fyzická či právnická osoba?"'}</p>
              <p className="text-red-300 font-semibold mb-2 text-sm uppercase tracking-wider">Odpověď ÚOOÚ:</p>
              <p className="text-gray-200 italic">{'"Není. Zákon č. 480/2004 Sb. nerozlišuje mezi typem adresáta."'}</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              To znamená, že argument <em>{'"je to firemní adresa info@firma.cz, takže je to v pořádku"'}</em> neplatí. Zákon se aplikuje stejně na fyzické i právnické osoby. Posílání na info@firma.cz bez souhlasu je z pohledu zákona stejně problematické jako na jan.novak@gmail.com.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Dva zákony, které musíte znát</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  law: 'Zákon č. 480/2004 Sb.',
                  full: 'o některých službách informační společnosti',
                  desc: 'Upravuje obchodní sdělení — komu a za jakých podmínek lze posílat e-maily. Vyžaduje předchozí souhlas (opt-in) nebo existující zákaznický vztah.',
                },
                {
                  law: 'GDPR (Nařízení EU 2016/679)',
                  full: 'obecné nařízení o ochraně osobních údajů',
                  desc: 'Reguluje zpracování osobních údajů. Týká se vedení seznamu kontaktů, uchovávání e-mailů a záznamu o zpracování.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                  <p className="text-orange-400 font-bold text-sm mb-1">{item.law}</p>
                  <p className="text-gray-500 text-xs mb-3">{item.full}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Co říká ÚOOÚ — přehled odpovědí</h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  question: 'Lze použít volně dostupné kontakty z internetu?',
                  answer: '"Nelze. Odeslat obchodní sdělení lze pouze těm adresátům, kteří k tomu dali předem souhlas (opt-in) nebo kteří jsou zákazníkem podnikatele."',
                  note: 'Najít e-mail na webu firmy a poslat tam nabídku je formálně porušení zákona.',
                },
                {
                  question: 'Lze použít nakoupenou databázi kontaktů?',
                  answer: '"Prakticky to není možné."',
                  note: 'Generální souhlas v databázi neplatí. Souhlas musí být informovaný, konkrétní a vztažený ke konkrétnímu odesílateli.',
                },
                {
                  question: 'Lze poslat e-mail se žádostí o souhlas?',
                  answer: '"Ne, takovou žádost použít nelze."',
                  note: 'Samotná žádost „smím vám posílat nabídky?" je už obchodní sdělení, protože šíří povědomí o značce. Princip je, že adresát musí sám aktivně vyhledat podnikatele.',
                },
                {
                  question: 'Kdo nese odpovědnost za nelegální obchodní sdělení?',
                  answer: '"Za šíření obchodních sdělení je odpovědný jak samotný odesílatel, tak také subjekt, v jehož prospěch jsou obchodní sdělení zasílána."',
                  note: 'Odpovědný je rozesílatel i klient, na jehož objednávku se e-maily posílají.',
                },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl border border-red-500/20 bg-red-900/5">
                  <p className="text-orange-300 font-semibold mb-2">{item.question}</p>
                  <p className="text-gray-200 italic text-sm mb-2">{item.answer}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Kdy obchodní sdělení poslat SMÍTE</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Dle zákona existují pouze dvě situace, kdy je odeslání obchodního sdělení e-mailem legální:
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: 'Adresát dal předchozí souhlas (opt-in)',
                  desc: 'Souhlas musí být svobodný, informovaný a prokazatelný. Nestačí předvyplněný checkbox nebo obecný souhlas s podmínkami. Adresát musí vědět, kdo mu bude psát a za jakým účelem.',
                },
                {
                  title: 'Adresát je váš stávající zákazník',
                  desc: 'Pokud jste s adresátem už obchodovali, můžete mu posílat nabídky podobných produktů nebo služeb. I v tomto případě musí mít možnost se odhlásit.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-green-500/30 bg-green-900/10">
                  <span className="text-lg flex-shrink-0 mt-0.5 text-green-400">✓</span>
                  <div>
                    <p className="text-green-300 font-semibold mb-1">{item.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Co NESMÍTE — ani na firemní adresy</h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: 'Posílat obchodní sdělení bez předchozího souhlasu',
                  desc: 'Zákon nerozlišuje typ adresáta. Platí pro fyzické i právnické osoby, firemní i osobní adresy.',
                },
                {
                  title: 'Použít kontakty z webu, rejstříku nebo nakoupené databáze',
                  desc: 'Veřejně dostupný kontakt neznamená souhlas s obchodními sděleními. Nakoupený seznam není platný souhlas.',
                },
                {
                  title: 'Posílat „žádost o souhlas" e-mailem',
                  desc: 'I žádost o povolení je obchodní sdělení, protože šíří povědomí o značce.',
                },
                {
                  title: 'Skrýt totožnost odesílatele nebo vynechat unsubscribe',
                  desc: 'E-mail musí uvádět odesílatele a nabídnout funkční možnost odhlášení.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-red-500/30 bg-red-900/10">
                  <span className="text-lg flex-shrink-0 mt-0.5 text-red-400">✗</span>
                  <div>
                    <p className="text-red-300 font-semibold mb-1">{item.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Sankce dle zákona</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-orange-400 mb-2">100 000 Kč</p>
                <p className="text-gray-400 text-sm">maximální pokuta pro fyzickou osobu</p>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-red-400 mb-2">10 000 000 Kč</p>
                <p className="text-gray-400 text-sm">maximální pokuta pro právnickou osobu</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Odpovědný je odesílatel i objednatel — tedy firma, která e-maily rozesílá, i klient, v jehož prospěch se posílají.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Praktická realita — jak to funguje v praxi</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Zákon je jednoznačný, ale praxe je nuancovanější. Tady jsou klíčové body, které je potřeba vědět:
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: 'ÚOOÚ řeší stížnosti, ne aktivní kontroly',
                  desc: '„Úřad při posouzení společenské škodlivosti vychází především z počtu obdržených stížností." Pokud si nikdo nestěžuje, úřad pravděpodobně nezasáhne. To ale neznamená, že je to legální — jen že riziko sankce je nižší.',
                },
                {
                  title: 'Hromadnost zvyšuje riziko',
                  desc: 'ÚOOÚ definuje hromadné rozesílání jako „řádově několik málo desítek kontaktů" jednorázově. Při stovkách e-mailů měsíčně jste výrazně nad tímto prahem, což zvyšuje pravděpodobnost stížností.',
                },
                {
                  title: 'Unsubscribe zmírňuje riziko stížností',
                  desc: 'Funkční možnost odhlášení v každém e-mailu snižuje počet stížností na ÚOOÚ. Většina příjemců raději klikne na odhlášení, než aby psali na úřad.',
                },
                {
                  title: 'Personalizace vs. hromadný spam',
                  desc: 'ÚOOÚ rozlišuje mezi cílenou obchodní komunikací a plošným spamem. Relevantní, personalizovaná zpráva konkrétní firmě generuje výrazně méně stížností než šablonový hromadný mailing.',
                },
                {
                  title: 'Reputace domény je větší riziko než pokuta',
                  desc: 'Pro většinu firem je prakticky větší problém poškození reputace e-mailové domény (zařazení na blacklisty, snížená doručitelnost) než pokuta od ÚOOÚ.',
                },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl border border-gray-700 bg-gray-900/50">
                  <p className="text-white font-semibold mb-1">{item.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Povinné náležitosti každého obchodního e-mailu</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bez ohledu na to, jak kontakt získáte, zákon vyžaduje, aby každé obchodní sdělení obsahovalo:
            </p>
            <div className="bg-gray-900 border border-orange-500/30 rounded-xl overflow-hidden mb-6">
              {[
                { label: 'Označení jako obchodní sdělení', desc: 'Příjemce musí jasně poznat, že jde o obchodní komunikaci.' },
                { label: 'Identifikace odesílatele', desc: 'Název firmy, IČO, adresa sídla. Skrytá identita je přestupek.' },
                { label: 'Funkční možnost odmítnutí', desc: 'Odkaz na odhlášení nebo instrukce (např. odpovězte „odhlásit"). Musí skutečně fungovat.' },
                { label: 'Kontakt pro námitky', desc: 'E-mailová adresa nebo formulář, kde může příjemce vznést námitku proti dalšímu zasílání.' },
              ].map((item, i) => (
                <div key={i} className={`p-4 ${i < 3 ? 'border-b border-gray-700' : ''}`}>
                  <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Vzor povinné patičky</h2>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 mb-8">
              <p className="text-gray-300 text-sm leading-relaxed font-mono">
                Tato zpráva je obchodním sdělením dle zák. č. 480/2004 Sb. Odesílatel: [Název firmy] s.r.o., IČO [12345678], [Ulice, Město, PSČ]. Pokud si nepřejete dostávat další sdělení, odpovězte „odhlásit" nebo klikněte zde: [odkaz na odhlášení].
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">GDPR a uchovávání kontaktů</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              I při práci s firemními kontakty zpracováváte osobní údaje (jméno, pracovní e-mail). Musíte mít právní základ pro zpracování a vést záznamy. Kontakty, které neodpovídají a nejsou vaši zákazníci, neukládejte donekonečna — nastavte dobu uchovávání.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Shrnutí</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cold e-mailing bez předchozího souhlasu je dle zákona č. 480/2004 Sb. formálně v rozporu se zákonem — bez ohledu na to, zda oslovujete fyzickou nebo právnickou osobu. ÚOOÚ to potvrzuje explicitně.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              V praxi ÚOOÚ zasahuje na základě stížností. Firmy, které posílají personalizované, relevantní zprávy s funkčním odhlášením a řádnou patičkou, čelí výrazně nižšímu riziku než ty, které provozují plošný hromadný mailing. Ale riziko nulové není — a odpovědný je odesílatel i objednatel.
            </p>

          </article>

          <div className="mt-16 p-8 border border-orange-500/30 rounded-2xl bg-orange-900/10 text-center">
            <h2 className="text-2xl font-bold mb-3">Chcete to probrat?</h2>
            <p className="text-gray-300 mb-6">Rádi s vámi probereme, jak nastavit outreach tak, aby minimalizoval právní rizika — řádné patičky, správa opt-outů, personalizace a ochrana domény.</p>
            <a href="https://cal.com/salesagent/demo" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
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
              <summary>Je cold e-mail na firemní adresu (info@firma.cz) legální bez souhlasu?</summary>
              <div className="faq-answer">Ne. Dle stanoviska ÚOOÚ zákon č. 480/2004 Sb. nerozlišuje mezi fyzickou a právnickou osobou. Posílání obchodního sdělení bez předchozího souhlasu (opt-in) nebo bez existujícího zákaznického vztahu je formálně porušení zákona, a to i na firemní adresy.</div>
            </details>
            <details className="faq-item">
              <summary>Mohu použít kontakty z webu firmy nebo obchodního rejstříku pro cold e-mail?</summary>
              <div className="faq-answer">ÚOOÚ explicitně říká, že ne. Obchodní sdělení lze dle zákona odeslat pouze adresátům, kteří k tomu dali předem souhlas (opt-in), nebo kteří jsou zákazníkem odesílatele. Volně dostupný kontakt na webu neznamená souhlas s přijímáním obchodních sdělení.</div>
            </details>
            <details className="faq-item">
              <summary>Jaká pokuta hrozí za nelegální cold e-mailing v ČR?</summary>
              <div className="faq-answer">Dle zákona č. 480/2004 Sb. hrozí fyzické osobě pokuta až 100 000 Kč a právnické osobě pokuta až 10 000 000 Kč. ÚOOÚ při posuzování vychází především z počtu obdržených stížností.</div>
            </details>
          </section>

          <nav className="mt-16 pt-10 border-t border-white/10">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Související články</p>
            <div className="grid gap-4">
              <Link href="/blog/cold-email-vzor-cesky" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Cold e-mail vzor česky: 3 šablony pro B2B oslovení</span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/jak-oslovit-firmy-bez-databaze" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Jak oslovit firmy bez koupené databáze</span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/jak-personalizovat-cold-emaily-ai" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Jak personalizovat cold e-maily pomocí AI</span>
                <span className="text-gray-500 group-hover:text-orange-400 transition-colors">→</span>
              </Link>
            </div>
          </nav>
        </div>
      </main>
    </>
  )
}
