import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getTranslations, type Locale, type Translations } from '@/lib/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const cs = locale === 'cs'
  return {
    title: cs
      ? 'Externí obchodník pro firmy — outsourcing obchodu'
      : 'Czech Market Entry Services & Sales Representation',
    description: cs
      ? 'Potřebujete externího obchodníka? SalesAgent zajistí vyhledávání firem, personalizované oslovení a předání zájemců — bez náboru, bez fixních nákladů.'
      : 'Local B2B sales representation in the Czech Republic and Slovakia: research, outreach and meetings in your name. Scope and pricing by agreement.',
    alternates: {
      canonical: `https://salesagent.cz/${locale}/sales-representation-czech-republic`,
      languages: {
        en: 'https://salesagent.cz/en/sales-representation-czech-republic',
        'x-default': 'https://salesagent.cz/en/sales-representation-czech-republic',
      },
    },
    keywords: cs
      ? ['externí obchodník', 'outsourcing obchodu', 'externí obchodní zástupce', 'outsourcing prodeje', 'B2B oslovení firem', 'externí sales']
      : ['czech market entry services', 'sales representation czech republic', 'external sales representation Czech Republic', 'sales agent Czech Republic', 'czech agent', 'sales agency Czech Republic', 'outsourced sales agent Europe', 'European sales expansion', 'enter Czech market', 'B2B sales Czech Republic', 'outsourced sales Czech Republic', 'market testing Czech Republic'],
    openGraph: {
      type: 'website',
      locale: cs ? 'cs_CZ' : 'en_US',
      url: `https://salesagent.cz/${locale}/sales-representation-czech-republic`,
      siteName: 'SalesAgent.cz',
      title: cs
        ? 'Externí obchodník pro firmy — outsourcing obchodu | SalesAgent.cz'
        : 'Czech Market Entry Services & Sales Representation | SalesAgent.cz',
      description: cs
        ? 'Potřebujete externího obchodníka? SalesAgent zajistí vyhledávání firem, oslovení a předání zájemců.'
        : 'Czech market entry services: we act as your external sales representation in the Czech Republic and Slovakia and book first meetings.',
    },
  }
}

const jsonLdEn = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Czech Market Entry Services: External Sales Representation',
  description:
    'Local B2B sales representation for international companies in the Czech Republic: market research, outreach, first meetings and, by agreement, support at local negotiations.',
  provider: {
    '@type': 'Organization',
    name: 'Sales Robots s.r.o.',
    url: 'https://salesagent.cz',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Czech Republic',
  },
  serviceType: 'B2B Sales Representation',
  url: 'https://salesagent.cz/en/sales-representation-czech-republic',
}

const jsonLdCs = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Externí obchodník pro firmy — outsourcing B2B obchodu',
  description:
    'Outsourcovaný externí obchodník jako služba. AI vyhledá firmy, prostuduje jejich weby a osloví je personalizovanými zprávami. Vy se věnujete jednání a uzavírání — my dodáme zájemce.',
  provider: {
    '@type': 'Organization',
    name: 'Sales Robots s.r.o.',
    url: 'https://salesagent.cz',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Czech Republic',
  },
  serviceType: 'Outsourcing B2B obchodu',
  url: 'https://salesagent.cz/cs/sales-representation-czech-republic',
}

export default async function SalesRepCzPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t: Translations = getTranslations(locale as Locale)
  const base = `/${locale}`
  const isCs = locale === 'cs'
  const jsonLd = isCs ? jsonLdCs : jsonLdEn

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Full-width hero */}
      <div style={{ paddingTop: '64px', marginBottom: '0' }}>
        <div style={{ position: 'relative', width: '100%', height: '420px', overflow: 'hidden' }}>
          <Image
            src={isCs ? '/blog/external-sales.jpg' : '/blog/czech-flag.jpg'}
            alt={isCs ? 'Externí obchodník pro firmy' : 'Czech Republic — external sales representation'}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(11,19,32,0.3) 0%, rgba(11,19,32,0.7) 100%)' }} />
        </div>
      </div>

      <div style={{ paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Hero */}
          <div style={{ textAlign: 'center', marginBottom: '80px', paddingTop: '60px' }}>
            <p style={{ fontSize: '13px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '20px' }}>
              {isCs ? 'Externí obchod · Outsourcing prodeje' : 'Czech Market Entry · Sales Representation'}
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '24px' }}>
              {isCs
                ? 'Externí obchodník,\nkterý prodává za vás'
                : 'Sales Representation & Market Entry Services in the Czech Republic'}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto 40px', lineHeight: 1.7 }}>
              {isCs
                ? 'Nechcete najímat obchodníka na plný úvazek? SalesAgent funguje jako váš externí obchodní tým — vyhledá firmy, osloví je personalizovaným e-mailem i na LinkedIn a předá vám ty, kteří mají zájem o schůzku.'
                : 'Your local sales partner in the Czech Republic and Slovakia: we research your market, find the right companies and open conversations in your name. We arrange first meetings and, by agreement, represent you at local negotiations and support commercial follow-up. Scope and pricing are agreed individually; a paid 2–3 month market test can be arranged.'}
            </p>
            {!isCs && (
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '-20px auto 32px', maxWidth: '640px' }}>
                New to the market? <Link href="/en/guides/czech-market-entry-for-b2b-companies" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Read the full Czech market entry playbook</Link> first.
              </p>
            )}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://outlook.office.com/bookwithme/user/480895b1333541dc94be634dd588fada@salesagent.cz/meetingtype/jwdxCRPBn0CvHccZ7eLwAg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--accent)',
                  color: '#0B1320',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '14px 32px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                }}
              >
                {isCs ? 'Domluvit nezávazný hovor' : 'Discuss your Czech market entry'}
              </a>
              <Link
                href={base}
                style={{
                  display: 'inline-block',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  fontWeight: 600,
                  fontSize: '15px',
                  padding: '14px 32px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                }}
              >
                {isCs ? 'Jak to funguje' : 'How it works'}
              </Link>
            </div>
          </div>

          {/* What we do */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px' }}>
              {isCs ? 'Jak externí obchod funguje v praxi' : 'How we represent you in Czech Republic'}
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '40px', maxWidth: '680px' }}>
              {isCs
                ? 'Nepotřebujete najímat obchodníka, zaučovat ho a doufat, že začne prodávat. Převezmeme celý outbound proces — od hledání firem po předání připravených příležitostí.'
                : 'Representing a foreign company in Czech Republic is more than translating a website. It is an active commercial presence — a localised offer, targeted outreach, and representation at real business meetings.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {[
                {
                  step: '01',
                  title: isCs ? 'Vyhledáme firmy podle vašeho zadání' : 'Localisation of your offer',
                  body: isCs
                    ? 'Definujeme vašeho ideálního zákazníka — obor, velikost, region. AI pak prohledá rejstříky, Google Maps a další veřejné zdroje a sestaví seznam relevantních firem. Žádné nakoupené databáze, jen čerstvé kontakty.'
                    : 'We help adapt your offer to the Czech market — how to communicate it, what to emphasise, and how to frame it in a context Czech companies understand and appreciate. This goes beyond translation into genuine value-proposition tuning.',
                },
                {
                  step: '02',
                  title: isCs ? 'Personalizovaně oslovíme' : 'Reaching the right companies',
                  body: isCs
                    ? 'AI prostuduje web každé firmy a napíše unikátní e-mail, který přímo reaguje na to, čím se firma zabývá. Paralelně pošle žádost o spojení na LinkedIn s osobní zprávou. Žádné šablony — skutečná personalizace.'
                    : 'We identify companies that match your ideal customer profile, study their websites, and reach out with personalised messages. No bulk blasting — every outreach makes sense to its specific recipient.',
                },
                {
                  step: '03',
                  title: isCs ? 'Předáme vám zájemce' : 'Representation at negotiations',
                  body: isCs
                    ? 'Vy vstupujete do procesu až ve chvíli, kdy firma odpoví, že má zájem o schůzku. Dostanete přehled o firmě, jejich reakci a doporučení na další kroky. Vy se soustředíte na uzavírání — my dodáváme příležitosti.'
                    : 'When a company shows interest, we stay involved. We help you prepare for meetings, navigate Czech business culture, and — where needed — can directly represent you at first-stage negotiations.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    padding: '28px',
                  }}
                >
                  <p style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '12px' }}>
                    {item.step}
                  </p>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {!isCs && (
            <section style={{ marginBottom: '80px' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px' }}>What we can handle for you</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>We agree the scope and responsibilities before starting. The initial engagement can include:</p>
              <ul style={{ color: 'var(--text-muted)', lineHeight: 1.9, paddingLeft: '22px' }}>
                <li>Research of your target market, relevant companies and competitors.</li>
                <li>Target lists, personalised email and LinkedIn outreach in your name, and follow-ups.</li>
                <li>Handling replies, qualifying interest and arranging first meetings.</li>
                <li>Reporting on outreach, responses, qualified prospects, meetings and market feedback.</li>
              </ul>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '16px' }}>By agreement, we can also join local business meetings, represent you at initial negotiations and support commercial follow-up. We agree who leads negotiations and closes each opportunity.</p>
            </section>
          )}

          {!isCs && (
            <section style={{ marginBottom: '80px' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px' }}>Local sales supported by our own tools and data</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>Our people run your sales activity with support from Salesbot and our own software. We use relevant company data to build a target list for your market, then keep the work organised in CRM.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                <div style={{ border: '1px solid var(--border)', borderRadius: '16px', padding: '24px' }}><h3>Company research and data</h3><p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>We combine public company registers, websites and other relevant sources to identify Czech and Slovak companies that fit your target market.</p></div>
                <div style={{ border: '1px solid var(--border)', borderRadius: '16px', padding: '24px' }}><h3>Salesbot and CRM</h3><p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>Our tools help us research prospects, prepare outreach and keep companies, conversations and next steps together. Reporting and access are agreed with you.</p></div>
                <div style={{ border: '1px solid var(--border)', borderRadius: '16px', padding: '24px' }}><h3>Custom sales tools</h3><p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>When your process needs more, we can discuss a tailored CRM, integrations or an interactive product presentation as a separate agreed scope.</p></div>
              </div>
            </section>
          )}

          {!isCs && (
            <section style={{ marginBottom: '80px' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '20px' }}>Experience working with international clients</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div style={{ border: '1px solid var(--border)', borderRadius: '16px', padding: '24px' }}><h3>Whistlelink</h3><p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>Whistleblowing SaaS · Sweden<br />37 qualified leads over a 2-month trial.</p></div>
                <div style={{ border: '1px solid var(--border)', borderRadius: '16px', padding: '24px' }}><h3>Bierbauer &amp; Söhne</h3><p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>Agricultural machinery · Germany<br />Ongoing lead generation across the Czech and Slovak markets.</p></div>
              </div>
              <p style={{ color: 'var(--text-muted)', marginTop: '16px' }}>Specific references and recommendations are available on request.</p>
            </section>
          )}

          {!isCs && (
            <section style={{ marginBottom: '80px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '28px' }}>
              <Image src="/petr-kubicek.jpg" alt="Petr Kubíček, founder of Sales Robots" width={120} height={120} style={{ borderRadius: '50%', objectFit: 'cover' }} />
              <div style={{ flex: '1 1 320px' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '12px' }}>Your local point of contact: Petr Kubíček</h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>Founder of Sales Robots with over 20 years in B2B sales. Petr represents international companies in the Czech market and helps clients prepare for meetings and navigate local business discussions. His involvement in your opportunities is agreed with you in advance.</p>
              </div>
            </section>
          )}

          {/* Market testing section */}
          <section style={{ marginBottom: '80px', background: 'var(--surface)', borderRadius: '20px', padding: '48px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px' }}>
              {isCs ? 'Proč outsourcing obchodu dává smysl' : 'Start with a paid market test'}
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px', maxWidth: '640px' }}>
              {isCs
                ? 'Vlastní obchodník stojí kolem 100 000 Kč měsíčně, potřebuje měsíce na zaučení a nemusí vydržet. S externím obchodníkem platíte za proces a výsledky — bez náboru, bez dovolených, bez výpovědních lhůt.'
                : 'Entering a new market is an investment. Before going all-in, it makes sense to first test whether there\'s genuine demand for your product or service in the Czech Republic — and how local companies respond to your outreach.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              {[
                {
                  label: isCs ? 'Oslovených firem měsíčně' : 'Market testing phase',
                  value: isCs ? 'až 500' : '2–3 months',
                },
                {
                  label: isCs ? 'Úspora oproti vlastnímu obchodníkovi' : 'Scope and pricing',
                  value: isCs ? '17×' : 'By agreement',
                },
                {
                  label: isCs ? 'Bez závazku' : 'Review before continuing',
                  value: isCs ? 'Měsíc po měsíci' : 'After the test',
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '20px 24px',
                  }}
                >
                  <p style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '4px' }}>{stat.value}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {isCs
                ? 'AI obchodník pracuje 24/7, nechodí na oběd a nevyhoří. Vy průběžně vidíte výsledky a platíte měsíční paušál od 3 600 Kč — zlomek nákladů na vlastního zaměstnance.'
                : 'After the testing phase, you know exactly: how many Czech companies responded positively to your pitch, how they react to your value proposition, and whether it makes sense to scale or adjust the approach. You decide based on data — not assumptions.'}
            </p>
          </section>

          {/* Why CZ */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px' }}>
              {isCs ? 'Komu se externí obchodník hodí' : 'Why Czech Republic is worth entering'}
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px', maxWidth: '680px' }}>
              {isCs
                ? 'Outsourcing obchodu není jen pro velké firmy. Využívají ho všichni, kdo potřebují pravidelně oslovovat nové zákazníky, ale nechtějí nebo nemůžou najímat vlastního obchodníka.'
                : 'Czech Republic is a stable economy with high B2B technology adoption. For companies planning market entry into Czech Republic, it offers a local sales agent infrastructure without the overhead of a permanent office.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {[
                {
                  title: isCs ? 'Firmy bez vlastního obchodníka' : '500,000+ active B2B companies',
                  body: isCs
                    ? 'Potřebujete pravidelně oslovovat nové firmy, ale nenajímáte obchodníka na plný úvazek. Externí obchodník rozjede oslovování bez náboru — do 48 hodin od nastavení.'
                    : 'The Czech business register contains hundreds of thousands of active companies. Our system searches relevant segments and identifies those that match your ideal customer profile.',
                },
                {
                  title: isCs ? 'Obchodní týmy, které chtějí čas na uzavírání' : 'High B2B email response rates',
                  body: isCs
                    ? 'Vaši obchodníci se mají věnovat jednání a domluvě. Vyhledávání firem, první oslovení a follow-upy necháte na nás — předáváme jen zájemce připravené na schůzku.'
                    : 'Personalised cold email works better in Czech Republic than in oversaturated markets like the UK or US. Czech decision-makers respond to relevant, well-written outreach.',
                },
                {
                  title: isCs ? 'Firmy testující nový segment nebo službu' : 'Gateway to Central Eastern Europe',
                  body: isCs
                    ? 'Než investujete do vlastního obchodníka, otestujte poptávku s externím obchodem. Za 2–3 měsíce víte, jestli trh reaguje — a rozhodujete se na základě dat, ne odhadů.'
                    : 'Czech Republic is your gateway to European sales expansion. As your outsourced sales agent in Europe, we run the full outreach cycle — then scale the same system into Slovakia, Poland and other CEE markets.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    border: '1px solid var(--border)',
                    borderLeft: '3px solid var(--accent)',
                    borderRadius: '12px',
                    padding: '24px',
                  }}
                >
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing teaser */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px' }}>
              {isCs ? 'Jak spolupráce probíhá' : 'How the engagement works'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {[
                {
                  phase: isCs ? 'Fáze 1' : 'Phase 1',
                  title: isCs ? 'Nastavení kampaně' : 'Onboarding & setup',
                  duration: isCs ? '2–3 dny' : '1–2 weeks',
                  body: isCs
                    ? 'Společně definujeme, koho chcete oslovovat. Připravíme zprávy, nastavíme nástroje a spustíme první várku oslovení.'
                    : 'We define your ICP, prepare messaging, and configure the system. We launch a first batch of outreach and monitor initial response.',
                },
                {
                  phase: isCs ? 'Fáze 2' : 'Phase 2',
                  title: isCs ? 'Aktivní oslovování' : 'Market testing (2–3 months)',
                  duration: isCs ? 'průběžně' : '2–3 months',
                  body: isCs
                    ? 'Systém oslovuje stovky firem měsíčně e-mailem i na LinkedIn. Průběžně vyhodnocujeme výsledky, ladíme zprávy a předáváme zájemce přímo do vašeho kalendáře nebo CRM.'
                    : 'We reach relevant companies in your name, evaluate responses and adjust targeting and messaging. We agree the scope and activity levels with you in advance.',
                },
                {
                  phase: isCs ? 'Fáze 3' : 'Phase 3',
                  title: isCs ? 'Optimalizace a škálování' : 'Scale or pivot',
                  duration: isCs ? 'od 3. měsíce' : 'from month 4',
                  body: isCs
                    ? 'Na základě dat rozhodneme, jak pokračovat — zvýšit objem, oslovit jiný segment nebo rozšířit kanály. Rozhodujete se na základě čísel, ne pocitů.'
                    : 'We review the results and decide together whether to continue, change the target segment or agree a broader scope of representation.',
                },
              ].map((item) => (
                <div
                  key={item.phase}
                  style={{
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    padding: '28px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <p style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.1em' }}>{item.phase}</p>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', background: 'var(--surface)', padding: '3px 8px', borderRadius: '6px' }}>{item.duration}</span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{item.body}</p>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '24px', fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              {isCs ? (
                <>{isCs ? 'Bez ročního závazku. Podívejte se na ' : 'No annual lock-in. See '}
                  <Link href={`${base}/pricing`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                    {isCs ? 'ceník' : 'pricing'}
                  </Link>{isCs ? ' pro detaily.' : ' for details.'}</>
              ) : (
                <>Scope, pricing and continuation are agreed individually. See{' '}
                  <Link href={`${base}/pricing`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                    pricing
                  </Link>{' '}for details.</>
              )}
            </p>
          </section>

          {/* Already setting up */}
          {!isCs && (
            <section style={{ marginBottom: '80px', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px 36px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '14px' }}>
                Already setting up in the Czech Republic?
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px', maxWidth: '620px' }}>
                If you&apos;re using corporate or secretarial services to establish your Czech entity, the next step is local sales. We help you research the market, reach relevant companies and arrange first meetings without hiring a local representative.
              </p>
              <a
                href="https://outlook.office.com/bookwithme/user/480895b1333541dc94be634dd588fada@salesagent.cz/meetingtype/jwdxCRPBn0CvHccZ7eLwAg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}
              >
                Talk to us about European sales expansion →
              </a>
            </section>
          )}

          {/* CTA */}
          <section style={{ textAlign: 'center', border: '1px solid var(--border)', borderRadius: '20px', padding: '60px 40px', background: 'var(--surface)' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '16px' }}>
              {isCs ? 'Pojďme rozjet váš obchod' : 'Let\'s test the Czech market together'}
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.7 }}>
              {isCs
                ? 'Na třicetiminutovém hovoru probereme váš trh a ukážeme, jak by oslovování vypadalo konkrétně ve vašem oboru.'
                : 'In a first call we\'ll discuss your product, your ideal Czech customer, and what realistic results look like in the first months.'}
            </p>
            <a
              href="https://outlook.office.com/bookwithme/user/480895b1333541dc94be634dd588fada@salesagent.cz/meetingtype/jwdxCRPBn0CvHccZ7eLwAg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--accent)',
                color: '#0B1320',
                fontWeight: 700,
                fontSize: '16px',
                padding: '16px 40px',
                borderRadius: '12px',
                textDecoration: 'none',
              }}
            >
              {isCs ? 'Domluvit nezávazný hovor' : 'Discuss your Czech market entry'}
            </a>
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
              {isCs ? 'Bez závazku · Odpovídáme do 24 hodin' : 'A free conversation about your product, target customers, local representation and next steps.'}
            </p>
          </section>

          {/* Blog links */}
          <div style={{ marginTop: '60px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link
              href={isCs ? '/blog/co-je-externi-obchod' : '/en/guides/czech-market-entry-for-b2b-companies'}
              style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none' }}
            >
              {isCs
                ? '→ Přečtěte si, co dělá externí obchodník a kdy se vyplatí'
                : '→ Guide: Czech market entry for B2B companies — a practical playbook'}
            </Link>
            {!isCs && (
              <Link
                href="/blog/european-sales-expansion"
                style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none' }}
              >
                → European sales expansion: how we run it for you across CZ, SK, PL and DACH
              </Link>
            )}
            {!isCs && (
              <Link
                href="/en/guides/czech-market-entry-for-b2b-companies"
                style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none' }}
              >
                → Guide: Czech market entry for B2B companies — a practical playbook
              </Link>
            )}
          </div>

        </div>
      </div>
    </>
  )
}
