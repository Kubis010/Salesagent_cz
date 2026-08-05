import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Follow-up e-mail vzor: 3 šablony, které fungují | SalesAgent.cz',
  description:
    'Jak napsat follow-up e-mail, který dostane odpověď. 3 konkrétní vzory pro B2B — bez tlačení, s novým argumentem a krátkým obsahem.',
  keywords: [
    'follow up e-mail vzor',
    'follow-up email šablona',
    'jak napsat follow-up',
    'B2B follow-up email',
    'navazující e-mail vzor',
    'follow up po cold emailu',
    'obchodní follow-up',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/follow-up-email-vzor',
    languages: { cs: 'https://salesagent.cz/blog/follow-up-email-vzor', 'x-default': 'https://salesagent.cz/blog/follow-up-email-vzor' },
  },
  openGraph: {
    title: 'Follow-up e-mail vzor: 3 šablony, které fungují v B2B',
    description: 'Jak napsat follow-up e-mail, který dostane odpověď. Bez tlačení, s novým argumentem a krátkým obsahem.',
    url: 'https://salesagent.cz/blog/follow-up-email-vzor',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-08-05',
    images: [{ url: 'https://salesagent.cz/blog/follow-up-email.png', width: 1024, height: 1024, alt: 'Follow-up e-mail vzor' }],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Follow-up e-mail vzor: 3 šablony, které fungují v B2B',
  description: 'Jak napsat follow-up e-mail, který dostane odpověď. Bez tlačení, s novým argumentem a krátkým obsahem.',
  image: 'https://salesagent.cz/blog/follow-up-email.png',
  datePublished: '2026-08-05',
  dateModified: '2026-08-05',
  inLanguage: 'cs',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://salesagent.cz/blog/follow-up-email-vzor' },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kolik follow-up e-mailů je přiměřených?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "V B2B outreachi jsou 2–3 follow-upy standard. Každý by měl přinést nový argument nebo informaci — ne jen zopakovat první zprávu. Po třetím follow-upu bez odpovědi je lepší kontakt nechat být."
      }
    },
    {
      "@type": "Question",
      "name": "Jak dlouho čekat mezi follow-up e-maily?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideální rozestupy jsou 3–5 pracovních dnů po prvním e-mailu, 5–7 dnů po druhém a 7–10 dnů po třetím. Kratší intervaly působí agresivně, delší ztrácejí kontext."
      }
    },
    {
      "@type": "Question",
      "name": "Má follow-up e-mail být ve stejném vlákně jako první zpráva?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ano. Odpovídejte na vlastní předchozí e-mail (Reply), takže příjemce vidí celou historii. Nový e-mail s novým předmětem působí jako nový cold email a snižuje šanci na odpověď."
      }
    }
  ]
}

const templates = [
  {
    num: '1',
    name: 'Nová hodnota',
    timing: '3–5 dnů po prvním e-mailu',
    when: 'Když chcete dát příjemci důvod odpovědět, který v první zprávě nebyl.',
    subject: 'Re: [původní předmět]',
    body: `Dobrý den,

navazuji na svůj předchozí e-mail. Mezitím jsem si prošel [konkrétní stránku/sekci webu příjemce] a napadlo mě, že by vás mohlo zajímat, jak [konkrétní výsledek relevantní pro jejich obor].

Jeden z našich klientů v [podobný obor] díky tomu [konkrétní výsledek — číslo, úspora, zrychlení].

Dává smysl si na to vzít 15 minut tento nebo příští týden?`,
    why: 'Přináší novou informaci (case study, číslo), ne opakování první zprávy. Odkazuje na konkrétní věc z webu příjemce — ukazuje, že nejde o šablonu.',
  },
  {
    num: '2',
    name: 'Krátký a přímý',
    timing: '5–7 dnů po prvním follow-upu',
    when: 'Když první follow-up nezabral a chcete zkusit jiný úhel — kratší, bez tlaku.',
    subject: 'Re: [původní předmět]',
    body: `Dobrý den,

jen krátce — stále řešíte [problém/téma z první zprávy]?

Pokud ano, rád pošlu konkrétní návrh, jak to řešíme u podobných firem. Pokud ne, klidně mi dejte vědět a nebudu se ozývat.`,
    why: 'Maximálně krátký. Dává příjemci jednoduchou volbu (ano/ne). Netlačí — nabízí únikovou cestu, což paradoxně zvyšuje míru odpovědí.',
  },
  {
    num: '3',
    name: 'Rozlučkový',
    timing: '7–10 dnů po druhém follow-upu',
    when: 'Poslední pokus. Funguje překvapivě dobře, protože snímá tlak a vyvolává „teď nebo nikdy" efekt.',
    subject: 'Re: [původní předmět]',
    body: `Dobrý den,

nechci být dotěrný, takže tohle je poslední zpráva ode mě k tomuto tématu.

Pokud [problém/téma] není teď priorita, naprosto rozumím. Kdybyste se k tomu chtěli vrátit později, stačí odpovědět na tento e-mail — zůstane v historii.

Přeji hezký den.`,
    why: 'Signalizuje ukončení — příjemce ví, že nebude další zpráva. Snímá tlak a často vyvolá odpověď typu „teď ne, ale za měsíc se ozvěte". Krátký a lidský.',
  },
]

export default function FollowUpEmailVzorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors mb-10 inline-block">← Zpět na blog</Link>

          <header className="mb-12">
            <p className="text-sm text-blue-400 uppercase tracking-widest mb-4">Vzory · 5. srpna 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Follow-up e-mail vzor: 3 šablony, které fungují v B2B
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Většina obchodů nevzniká po prvním e-mailu. Ale špatný follow-up udělá víc škody než žádný. Tady jsou 3 vzory, které netlačí, přinášejí nový argument a jsou krátké — přesně tak, jak to funguje.
            </p>
          </header>

          <div className="mb-14 rounded-xl overflow-hidden border border-white/10">
            <Image src="/blog/follow-up-email.png" alt="Follow-up e-mail vzor pro B2B" width={1024} height={1024} className="w-full object-cover" priority />
          </div>

          <article className="prose prose-invert prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Proč většina follow-upů nefunguje</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nejčastější chyba: poslat „jen jsem se chtěl zeptat, jestli jste viděl můj předchozí e-mail." To není follow-up — to je otravování. Příjemce váš e-mail viděl. Buď ho nezaujal, nebo neměl čas. Zopakovat totéž problém nevyřeší.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Dobrý follow-up musí splnit tři věci:
            </p>
            <div className="space-y-3 mb-8">
              {[
                { rule: 'Přinést nový argument nebo informaci', desc: 'Pokud opakujete první zprávu, proč by příjemce odpověděl teď, když neodpověděl poprvé?' },
                { rule: 'Být kratší než první e-mail', desc: 'Příjemce vás nezná a nemá důvod číst další dlouhou zprávu. Čím kratší, tím vyšší šance na přečtení.' },
                { rule: 'Netlačit', desc: 'Tlak vyvolává odpor. Nejlepší follow-upy dávají příjemci snadnou možnost říct „ne" — což paradoxně zvyšuje míru odpovědí „ano".' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1 flex-shrink-0 font-bold">{i + 1}.</span>
                  <div>
                    <span className="text-white font-semibold">{item.rule}</span>
                    <span className="text-gray-400"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Kdy follow-up poslat</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { label: '1. follow-up', timing: '3–5 pracovních dnů', note: 'po prvním e-mailu' },
                { label: '2. follow-up', timing: '5–7 pracovních dnů', note: 'po prvním follow-upu' },
                { label: '3. follow-up', timing: '7–10 pracovních dnů', note: 'poslední pokus' },
              ].map((item) => (
                <div key={item.label} className="bg-gray-900 border border-gray-700 rounded-xl p-5 text-center">
                  <p className="text-blue-400 font-bold text-sm mb-1">{item.label}</p>
                  <p className="text-2xl font-bold text-white mb-1">{item.timing}</p>
                  <p className="text-gray-500 text-xs">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Kratší intervaly působí agresivně. Delší ztrácejí kontext — příjemce už si nepamatuje, o čem první zpráva byla. Po třetím follow-upu bez odpovědi je lepší kontakt nechat být.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">3 vzory follow-up e-mailů</h2>

            {templates.map((tpl) => (
              <div key={tpl.num} className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-bold text-sm flex items-center justify-center">{tpl.num}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{`Vzor ${tpl.num}: ${tpl.name}`}</h3>
                    <p className="text-gray-500 text-sm">{tpl.timing}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{tpl.when}</p>
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 mb-3">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Předmět: {tpl.subject}</p>
                  <div className="border-t border-gray-700 pt-3">
                    {tpl.body.split('\n').map((line, i) => (
                      <p key={i} className={`text-gray-300 text-sm leading-relaxed ${line.trim() === '' ? 'mb-3' : 'mb-1'}`}>
                        {line.trim() === '' ? ' ' : line}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-2 p-4 rounded-lg bg-blue-900/10 border border-blue-500/20">
                  <span className="text-blue-400 font-bold text-sm flex-shrink-0 mt-0.5">Proč to funguje:</span>
                  <p className="text-gray-400 text-sm leading-relaxed">{tpl.why}</p>
                </div>
              </div>
            ))}

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5 chyb, které follow-up zabijí</h2>
            <div className="space-y-3 mb-8">
              {[
                { mistake: '„Jen se chci ujistit, že jste viděl můj e-mail"', fix: 'Příjemce ho viděl. Přineste nový důvod, proč odpovědět.' },
                { mistake: 'Kopírování prvního e-mailu', fix: 'Pokud první zpráva nezabrala, tatáž zpráva nezabere ani podruhé.' },
                { mistake: 'Příliš brzo (1–2 dny)', fix: 'Působíte zoufalě. Minimálně 3 pracovní dny.' },
                { mistake: 'Nový e-mail místo Reply', fix: 'Odpovídejte ve stejném vlákně — příjemce vidí kontext a vy nepůsobíte jako nový spam.' },
                { mistake: 'Příliš dlouhý text', fix: 'Follow-up by měl být kratší než první zpráva. Ideálně 3–5 vět.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-red-500/20 bg-red-900/5">
                  <span className="text-red-400 flex-shrink-0 mt-0.5">✗</span>
                  <div>
                    <span className="text-red-300 font-semibold text-sm">{item.mistake}</span>
                    <span className="text-gray-400 text-sm"> → {item.fix}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Shrnutí</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Dobrý follow-up není připomínka — je to nová příležitost zaujmout. Každá zpráva musí přinést něco, co v předchozí nebylo: nový argument, case study, kratší a přímější formulaci nebo snadnou možnost říct ne.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Držte se tří follow-upů, dodržujte rozestupy a netlačte. Většina odpovědí přijde po druhém nebo třetím follow-upu — ne proto, že jste příjemce uhonili, ale proto, že jste mu dali čas a důvod.
            </p>

          </article>

          <div className="mt-16 p-8 border border-blue-500/30 rounded-2xl bg-blue-900/10 text-center">
            <h2 className="text-2xl font-bold mb-3">Follow-upy na autopilota</h2>
            <p className="text-gray-300 mb-6">SalesAgent automaticky posílá personalizované follow-upy s novým argumentem — ve správný čas, ve správném tónu. Vy se ozvete až když firma projeví zájem.</p>
            <a href="https://cal.com/salesagent/demo" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
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
              <summary>Kolik follow-up e-mailů je přiměřených?</summary>
              <div className="faq-answer">V B2B outreachi jsou 2–3 follow-upy standard. Každý by měl přinést nový argument nebo informaci — ne jen zopakovat první zprávu. Po třetím follow-upu bez odpovědi je lepší kontakt nechat být.</div>
            </details>
            <details className="faq-item">
              <summary>Jak dlouho čekat mezi follow-up e-maily?</summary>
              <div className="faq-answer">Ideální rozestupy jsou 3–5 pracovních dnů po prvním e-mailu, 5–7 dnů po druhém a 7–10 dnů po třetím. Kratší intervaly působí agresivně, delší ztrácejí kontext.</div>
            </details>
            <details className="faq-item">
              <summary>Má follow-up e-mail být ve stejném vlákně jako první zpráva?</summary>
              <div className="faq-answer">Ano. Odpovídejte na vlastní předchozí e-mail (Reply), takže příjemce vidí celou historii. Nový e-mail s novým předmětem působí jako nový cold email a snižuje šanci na odpověď.</div>
            </details>
          </section>

          <nav className="mt-16 pt-10 border-t border-white/10">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Související články</p>
            <div className="grid gap-4">
              <Link href="/blog/cold-email-vzor-cesky" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-blue-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Cold e-mail vzor česky: 3 šablony pro B2B oslovení</span>
                <span className="text-gray-500 group-hover:text-blue-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/jak-personalizovat-cold-emaily-ai" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-blue-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">Jak personalizovat cold e-maily pomocí AI</span>
                <span className="text-gray-500 group-hover:text-blue-400 transition-colors">→</span>
              </Link>
              <Link href="/blog/gdpr-a-cold-email" className="group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-blue-500/50 transition-colors">
                <span className="text-gray-200 group-hover:text-white transition-colors">GDPR a cold e-mail: Co říká ÚOOÚ a co to mění</span>
                <span className="text-gray-500 group-hover:text-blue-400 transition-colors">→</span>
              </Link>
            </div>
          </nav>
        </div>
      </main>
    </>
  )
}
