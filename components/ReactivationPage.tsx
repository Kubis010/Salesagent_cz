import type { Metadata } from 'next'
import Link from 'next/link'

type Loc = 'cs' | 'en'

export const REACTIVATION_PATH: Record<Loc, string> = {
  cs: '/cs/reaktivace-klientu',
  en: '/en/client-reactivation',
}

const ORIGIN = 'https://salesagent.cz'

const content = {
  cs: {
    meta: {
      title: 'Reaktivace klientů — externí služba pro neaktivní zákazníky',
      description:
        'Pravidelně oslovujeme neaktivní klienty z vaší databáze telefonem, e-mailem i LinkedInem. Odlehčíme vašemu salesu, vám zbydou jen zájemci.',
      keywords: [
        'reaktivace klientů',
        'reaktivace zákazníků',
        'reaktivace neaktivních klientů',
        'oživení databáze klientů',
        'win-back zákazníci B2B',
        'externí obchodní tým',
        'obnovení spolupráce se zákazníky',
      ],
      ogTitle: 'Reaktivace klientů — externí služba | SalesAgent.cz',
      ogDescription: 'Externě oživíme neaktivní klienty z vaší databáze: telefon, e-mail, LinkedIn. Váš sales řeší jen zájemce.',
    },
    eyebrow: 'Externí služba · Reaktivace klientů',
    h1: 'Reaktivace klientů: pravidelně oživíme neaktivní zákazníky z vaší databáze',
    answer:
      'Reaktivace klientů je externí služba, při které za vás pravidelně oslovujeme zákazníky, kteří dlouho nic neobjednali — telefonem (cold call), e-mailem, přes LinkedIn a dalšími kanály. Ozvou se jen ti, kdo mají zájem, a ty předáme vašemu obchodníkovi. Váš sales tak nemusí procházet starou databázi a může se věnovat novým příležitostem.',
    guide: { before: 'Praktický postup krok za krokem najdete v článku: ', anchor: 'návod, jak reaktivovat klienty', href: '/blog/jak-reaktivovat-neaktivni-klienty', after: '.' },
    ctaTitle: 'Máte v databázi klienty, kteří už dlouho nenakoupili?',
    ctaText: 'Projdeme vaši databázi a navrhneme, koho a jak oslovit. Konzultace je nezávazná.',
    ctaButton: 'Domluvit konzultaci',
    sections: [
      {
        h2: 'Co je reaktivace klientů a proč se vyplatí',
        paragraphs: [
          'Většina firem má v CRM nebo fakturačním systému stovky až tisíce zákazníků, kteří dříve nakupovali a přestali. Obchodník na ně obvykle nemá čas, protože hledá nové zákazníky nebo řeší ty aktivní. Přitom tito lidé vaši firmu znají, mají s ní zkušenost a oslovit je je jednodušší než získávat zcela cizí kontakty.',
          'Reaktivace je pravidelný proces, ne jednorázová kampaň. Databázi rozdělíme do segmentů, každému připravíme důvod, proč se ozvat, a opakovaně ho oslovujeme několika kanály, dokud se neozve zájem nebo klient nevyjádří, že nechce.',
        ],
      },
    ],
    channelsTitle: 'Jak neaktivní klienty oslovujeme',
    channels: [
      { title: 'Telefon (cold call)', body: 'Naši pracovníci volají klientům ve vašem jménu, zjistí důvod, proč přestali nakupovat, a domluví další krok nebo schůzku. Telefon je u starších klientů často nejúčinnější kanál.' },
      { title: 'E-mail', body: 'Personalizované sekvence podle segmentu a historie spolupráce. Žádný hromadný newsletter, ale zprávy, které odpovídají situaci konkrétního klienta, včetně odhlášení.' },
      { title: 'LinkedIn', body: 'U kontaktních osob, které najdeme na LinkedInu, navážeme kontakt a zprávou obnovíme komunikaci. Hodí se pro B2B klienty a rozhodovatele.' },
      { title: 'Další kanály podle domluvy', body: 'Podle vašeho zvyku a souhlasu klientů doplníme například SMS nebo WhatsApp. Kombinaci kanálů nastavíme na konzultaci.' },
    ],
    stepsTitle: 'Jak reaktivace probíhá',
    steps: [
      { title: 'Audit a segmentace databáze', body: 'Projdeme export z vašeho CRM nebo fakturace, vyřadíme duplicity a neplatné kontakty a rozdělíme klienty podle poslední objednávky, hodnoty a oboru.' },
      { title: 'Důvod ozvat se', body: 'Pro každý segment připravíme sdělení: nová nabídka, změna podmínek, nová služba, zpětná vazba k předchozí spolupráci.' },
      { title: 'Pravidelné oslovování', body: 'Klienty oslovujeme telefonem, e-mailem a LinkedInem v dohodnutých vlnách, aby je nebylo potřeba kontaktovat všechny najednou.' },
      { title: 'Zpracování reakcí', body: 'Odpovědi třídíme: zájem, později, nechce, špatný kontakt. U zájemců zjistíme potřebu a domluvíme další krok.' },
      { title: 'Předání a report', body: 'Zájemce předáme vašemu obchodníkovi s kontextem hovoru. Měsíčně dostanete přehled: kolik klientů jsme oslovili, kdo odpověděl a kolik schůzek vzniklo.' },
    ],
    benefitsTitle: 'Co tím ušetříte vašemu salesu',
    benefits: [
      'Obchodník nemusí ručně procházet starou databázi ani volat klientům, kteří nemají zájem.',
      'K němu se dostanou jen ti, kdo projevili zájem, a s kontextem předchozí komunikace.',
      'Reaktivace běží pravidelně i ve chvílích, kdy má sales napilno.',
      'Vy vidíte v reportu, která část databáze je ještě živá a která už ne.',
    ],
    forWhomTitle: 'Pro koho je reaktivace klientů',
    forWhom: [
      'B2B firmy s databází zákazníků, kteří dříve nakupovali (dodavatelé, služby, software, výroba).',
      'Firmy, jejichž obchodník nestíhá ani nové zákazníky, ani starou databázi.',
      'Firmy po změně nabídky, ceníku nebo produktu, které chtějí o novince informovat bývalé klienty.',
    ],
    differsTitle: 'Čím se reaktivace liší od newsletteru a vlastního salesu',
    differs: [
      'Oproti newsletteru nekomunikujeme jednosměrně. Ozveme se osobně a zjistíme, co klient potřebuje.',
      'Oproti vlastnímu salesu to děláme externě a pravidelně, bez zátěže vašeho týmu.',
      'Oproti marketingové automatizaci používáme i telefon, což u starších klientů často rozhoduje.',
    ],
    gdpr:
      'Oslovujeme existující zákazníky v rámci oprávněného zájmu. Každá zpráva obsahuje možnost odhlášení a respektujeme námitky i žádosti o výmaz. Přesné nastavení probereme na konzultaci.',
    faqTitle: 'Časté otázky o reaktivaci klientů',
    faqs: [
      { q: 'Co je reaktivace klientů?', a: 'Je to systematické oslovování zákazníků, kteří dříve nakupovali, ale delší dobu neobjednali. Cílem je obnovit komunikaci a spolupráci. SalesAgent.cz to dělá externě telefonem, e-mailem, přes LinkedIn a další kanály.' },
      { q: 'Jak dlouho musí být klient neaktivní, aby ho šlo reaktivovat?', a: 'Hranici nastavíme podle vašeho oboru a cyklu nákupu. U některých firem je to 6 měsíců, u jiných rok i déle. Na úvodním auditu databáze vybereme segmenty, které dávají smysl.' },
      { q: 'Co potřebujeme dodat?', a: 'Export klientů z CRM nebo fakturace (firma, kontaktní osoba, kontakt, datum poslední objednávky, případně hodnota). Zbytek nastavíme společně.' },
      { q: 'Je telefonické a e-mailové oslovení bývalých klientů v souladu s GDPR?', a: 'Existující zákazníky oslovujeme na základě oprávněného zájmu, s možností odhlášení a respektováním námitek. Nastavení vždy zohlední vaše podmínky a zdroj dat.' },
      { q: 'Kolik reaktivace stojí?', a: 'Cena závisí na velikosti databáze, počtu kanálů a četnosti oslovování. Přesnou nabídku připravíme po úvodní konzultaci a prohlídce databáze.' },
      { q: 'Nahradí to našeho obchodníka?', a: 'Ne. Předchází mu. Oslovení a první kvalifikaci děláme my, a obchodníkovi předáme jen zájemce, se kterými se vyplatí jednat.' },
    ],
    relatedTitle: 'Související',
    related: [
      { href: '/blog/jak-rozjet-a-zautomatizovat-b2b-obchod', label: 'Jak rozjet a zautomatizovat B2B obchod' },
      { href: '/blog/jak-najit-nove-leady', label: 'Jak najít nové leady' },
      { href: '/cs/pricing', label: 'Ceník' },
    ],
    breadcrumbHome: 'Domů',
    breadcrumbName: 'Reaktivace klientů',
    serviceName: 'Reaktivace klientů — externí služba',
    serviceDesc:
      'Externí služba pravidelné reaktivace neaktivních klientů z databáze zákazníka: telefon, e-mail, LinkedIn a další kanály. Odlehčuje obchodnímu týmu a předává jen zájemce.',
    serviceType: 'Reaktivace neaktivních klientů',
    inLanguage: 'cs',
  },
  en: {
    meta: {
      title: 'Client Reactivation Service: Win Back Dormant B2B Customers',
      description:
        'We contact the dormant customers in your database by phone, email and LinkedIn on a regular basis, so your sales team only talks to interested clients.',
      keywords: [
        'client reactivation service',
        'customer reactivation',
        'win back dormant customers',
        'reactivate inactive clients B2B',
        'outsourced customer reactivation',
        'dormant customer database',
        'outsourced sales team',
      ],
      ogTitle: 'Client Reactivation Service | SalesAgent.cz',
      ogDescription: 'Outsourced reactivation of dormant clients: phone, email, LinkedIn. Your sales team only handles interested clients.',
    },
    eyebrow: 'Outsourced service · Client reactivation',
    h1: 'Client reactivation: we regularly win back the dormant customers in your database',
    answer:
      'Client reactivation is an outsourced service in which we regularly contact customers who have not bought for a long time — by phone (cold calls), email, LinkedIn and other channels. Only clients who show interest are passed to your sales rep. Your team no longer has to work through an old database and can focus on new opportunities.',
    guide: { before: 'A step-by-step approach is in our article: ', anchor: 'how to win back dormant B2B customers', href: '/blog/how-to-win-back-dormant-b2b-customers', after: '.' },
    ctaTitle: 'Do you have customers in your database who have not bought for a long time?',
    ctaText: 'We review your database and propose who to contact and how. The consultation is free and no-strings.',
    ctaButton: 'Book a free consultation',
    sections: [
      {
        h2: 'What client reactivation is and why it pays off',
        paragraphs: [
          'Most companies have hundreds or thousands of customers in their CRM or invoicing system who used to buy and stopped. Sales reps rarely have time for them because they chase new customers or serve active ones. Yet these people know your company, have experience with it, and are easier to approach than completely cold contacts.',
          'Reactivation is a recurring process, not a one-off campaign. We split the database into segments, prepare a reason to get in touch for each, and contact them repeatedly across several channels until they show interest or say they are not interested.',
        ],
      },
    ],
    channelsTitle: 'How we contact dormant clients',
    channels: [
      { title: 'Phone (cold calls)', body: 'Our callers phone clients in your name, find out why they stopped buying, and agree a next step or a meeting. For older clients the phone is often the most effective channel.' },
      { title: 'Email', body: 'Personalised sequences by segment and purchase history. Not a mass newsletter, but messages that fit the situation of the specific client, with an opt-out.' },
      { title: 'LinkedIn', body: 'For contacts we can find on LinkedIn, we reconnect and reopen the conversation with a short message. Best for B2B clients and decision-makers.' },
      { title: 'Other channels by agreement', body: 'Depending on your practice and client consent, we can add channels such as SMS or WhatsApp. The channel mix is set during the consultation.' },
    ],
    stepsTitle: 'How reactivation works',
    steps: [
      { title: 'Database audit and segmentation', body: 'We review an export from your CRM or invoicing, remove duplicates and invalid contacts, and segment clients by last order, value and industry.' },
      { title: 'A reason to get in touch', body: 'For each segment we prepare the message: a new offer, changed terms, a new service, or feedback on your previous cooperation.' },
      { title: 'Regular outreach', body: 'We contact clients by phone, email and LinkedIn in agreed waves, so they are not all contacted at once.' },
      { title: 'Handling replies', body: 'We sort replies into interested, later, not interested and wrong contact. For interested clients we find out the need and agree the next step.' },
      { title: 'Handover and report', body: 'Interested clients go to your sales rep with the context of the call. Every month you get a report: how many clients were contacted, who replied and how many meetings resulted.' },
    ],
    benefitsTitle: 'What it saves your sales team',
    benefits: [
      'Your rep no longer has to work through an old database or call clients who are not interested.',
      'They only receive clients who showed interest, with the context of earlier communication.',
      'Reactivation keeps running when your sales team is busy.',
      'The report shows which part of your database is still alive and which is not.',
    ],
    forWhomTitle: 'Who client reactivation is for',
    forWhom: [
      'B2B companies with a database of past customers (suppliers, services, software, manufacturing).',
      'Companies whose sales rep cannot keep up with both new customers and the old database.',
      'Companies that changed their offer, pricing or product and want to inform past customers.',
    ],
    differsTitle: 'How reactivation differs from a newsletter or in-house sales',
    differs: [
      'Unlike a newsletter, communication is not one-way. We reach out personally and find out what the client needs.',
      'Unlike in-house sales, it is done externally and regularly, without taking your team’s time.',
      'Unlike marketing automation, we also use the phone, which often decides with older clients.',
    ],
    gdpr:
      'We contact existing customers on the basis of legitimate interest. Every message includes an opt-out, and we respect objections and erasure requests. We settle the exact set-up during the consultation.',
    faqTitle: 'Client reactivation FAQ',
    faqs: [
      { q: 'What is client reactivation?', a: 'It is the systematic outreach to customers who used to buy but have not ordered for a long time. The goal is to restart communication and cooperation. SalesAgent.cz does it as an outsourced service by phone, email, LinkedIn and other channels.' },
      { q: 'How long must a client be inactive to be reactivated?', a: 'We set the threshold according to your industry and buying cycle. For some companies it is 6 months, for others a year or more. In the database audit we pick the segments that make sense.' },
      { q: 'What do we need to provide?', a: 'An export of clients from your CRM or invoicing system (company, contact person, contact details, date of last order, ideally value). We set up the rest together.' },
      { q: 'Is contacting former clients by phone and email GDPR-compliant?', a: 'We contact existing customers on the basis of legitimate interest, with an opt-out and respect for objections. The set-up always takes your terms and the source of the data into account.' },
      { q: 'How much does client reactivation cost?', a: 'The price depends on the size of the database, the number of channels and the contact frequency. We prepare an exact offer after the initial consultation and a look at your database.' },
      { q: 'Does it replace our sales rep?', a: 'No. It comes before them. We do the outreach and first qualification, and only hand over clients worth your rep’s time.' },
    ],
    relatedTitle: 'Related',
    related: [
      { href: '/en/sales-representation-czech-republic', label: 'Czech market entry services & sales representation' },
      { href: '/en/guides/czech-market-entry-for-b2b-companies', label: 'Czech market entry playbook' },
      { href: '/en/pricing', label: 'Pricing' },
    ],
    breadcrumbHome: 'Home',
    breadcrumbName: 'Client reactivation',
    serviceName: 'Client reactivation — outsourced service',
    serviceDesc:
      'Outsourced service that regularly reactivates dormant clients from a customer database by phone, email, LinkedIn and other channels, relieving the sales team and passing on only interested clients.',
    serviceType: 'Dormant client reactivation',
    inLanguage: 'en',
  },
} as const

export function reactivationMetadata(locale: string): Metadata {
  const loc: Loc = locale === 'cs' ? 'cs' : 'en'
  const c = content[loc]
  const url = `${ORIGIN}${REACTIVATION_PATH[loc]}`
  return {
    title: c.meta.title,
    description: c.meta.description,
    keywords: [...c.meta.keywords],
    alternates: {
      canonical: url,
      languages: {
        cs: `${ORIGIN}${REACTIVATION_PATH.cs}`,
        en: `${ORIGIN}${REACTIVATION_PATH.en}`,
        'x-default': `${ORIGIN}${REACTIVATION_PATH.en}`,
      },
    },
    openGraph: {
      type: 'website',
      locale: loc === 'cs' ? 'cs_CZ' : 'en_US',
      url,
      siteName: 'SalesAgent.cz',
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
    },
    robots: { index: true, follow: true },
  }
}

const linkStyle = { color: 'var(--accent)', textDecoration: 'underline' } as const

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(23px, 3vw, 30px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.25, marginTop: '40px', marginBottom: '16px' }}>
      {children}
    </h2>
  )
}

export default function ReactivationPage({ locale }: { locale: string }) {
  const loc: Loc = locale === 'cs' ? 'cs' : 'en'
  const c = content[loc]
  const url = `${ORIGIN}${REACTIVATION_PATH[loc]}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: c.serviceName,
    description: c.serviceDesc,
    serviceType: c.serviceType,
    inLanguage: c.inLanguage,
    url,
    provider: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: ORIGIN },
    areaServed: ['CZ', 'SK'],
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: c.breadcrumbHome, item: `${ORIGIN}/${loc}` },
      { '@type': 'ListItem', position: 2, name: c.breadcrumbName, item: url },
    ],
  }

  return (
    <article style={{ paddingTop: '96px', paddingBottom: '80px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '32px' }}>
          <Link href={`/${loc}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{c.breadcrumbHome}</Link> {' / '} {c.breadcrumbName}
        </p>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>{c.eyebrow}</p>
        <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '24px' }}>{c.h1}</h1>

        <p style={{ fontSize: '19px', lineHeight: 1.65, color: 'var(--text)', marginBottom: '28px' }}>
          <strong>{c.answer}</strong>
        </p>

        <div style={{ background: 'rgba(255,107,74,0.06)', border: '1px solid rgba(255,107,74,0.25)', borderRadius: '14px', padding: '28px', marginBottom: '8px' }}>
          <p style={{ fontWeight: 700, fontSize: '19px', marginBottom: '8px' }}>{c.ctaTitle}</p>
          <p style={{ color: 'var(--text-muted)', margin: '0 0 18px' }}>{c.ctaText}</p>
          <Link href={`/${loc}/contact`} style={{ display: 'inline-block', backgroundColor: 'var(--accent)', color: '#0B1320', fontWeight: 700, fontSize: '15px', padding: '13px 28px', borderRadius: '9px', textDecoration: 'none' }}>{c.ctaButton} →</Link>
        </div>

        <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text)' }}>
          {c.sections.map((s) => (
            <div key={s.h2}>
              <H2>{s.h2}</H2>
              {s.paragraphs.map((p) => <p key={p} style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>{p}</p>)}
              <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
                {c.guide.before}
                <Link href={c.guide.href} style={linkStyle}>{c.guide.anchor}</Link>
                {c.guide.after}
              </p>
            </div>
          ))}

          <H2>{c.channelsTitle}</H2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
            {c.channels.map((ch) => (
              <div key={ch.title} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
                <p style={{ fontWeight: 700, marginBottom: '8px' }}>{ch.title}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>{ch.body}</p>
              </div>
            ))}
          </div>

          <H2>{c.stepsTitle}</H2>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {c.steps.map((st, i) => (
              <li key={st.title} style={{ display: 'flex', gap: '16px' }}>
                <span style={{ flexShrink: 0, width: '34px', height: '34px', borderRadius: '50%', background: 'var(--accent)', color: '#0B1320', fontWeight: 700, fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
                <div>
                  <p style={{ fontWeight: 700, margin: '4px 0 4px' }}>{st.title}</p>
                  <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>{st.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <H2>{c.benefitsTitle}</H2>
          <ul style={{ paddingLeft: '22px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {c.benefits.map((b) => <li key={b}>{b}</li>)}
          </ul>

          <H2>{c.forWhomTitle}</H2>
          <ul style={{ paddingLeft: '22px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {c.forWhom.map((b) => <li key={b}>{b}</li>)}
          </ul>

          <H2>{c.differsTitle}</H2>
          <ul style={{ paddingLeft: '22px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {c.differs.map((b) => <li key={b}>{b}</li>)}
          </ul>

          <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginTop: '28px' }}>{c.gdpr}</p>
        </div>

        <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>{c.faqTitle}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {c.faqs.map(({ q, a }) => (
              <details key={q} style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '16px 20px' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: '15px' }}>{q}</summary>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7, margin: '12px 0 0' }}>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <div style={{ background: 'rgba(255,107,74,0.06)', border: '1px solid rgba(255,107,74,0.25)', borderRadius: '14px', padding: '32px', textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>{c.ctaTitle}</p>
          <Link href={`/${loc}/contact`} style={{ display: 'inline-block', backgroundColor: 'var(--accent)', color: '#0B1320', fontWeight: 700, fontSize: '15px', padding: '13px 28px', borderRadius: '9px', textDecoration: 'none' }}>{c.ctaButton} →</Link>
        </div>

        <nav style={{ marginTop: '40px' }}>
          <p style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>{c.relatedTitle}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {c.related.map((r) => <Link key={r.href} href={r.href} style={{ ...linkStyle, textDecoration: 'none', fontSize: '14px' }}>{r.label} →</Link>)}
          </div>
        </nav>
      </div>
    </article>
  )
}
