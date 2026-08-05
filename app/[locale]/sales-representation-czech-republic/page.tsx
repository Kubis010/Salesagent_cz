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
      : 'External Sales Representation Czech Republic',
    description: cs
      ? 'Potřebujete externího obchodníka? SalesAgent zajistí vyhledávání firem, personalizované oslovení a předání zájemců — bez náboru, bez fixních nákladů.'
      : 'Looking for sales representation in Czech Republic? SalesAgent handles market testing, outreach and first meetings — without hiring a local sales rep or opening an office.',
    alternates: {
      canonical: `https://salesagent.cz/${locale}/sales-representation-czech-republic`,
      languages: {
        cs: 'https://salesagent.cz/cs/sales-representation-czech-republic',
        en: 'https://salesagent.cz/en/sales-representation-czech-republic',
        'x-default': 'https://salesagent.cz/en/sales-representation-czech-republic',
      },
    },
    keywords: cs
      ? ['externí obchodník', 'outsourcing obchodu', 'externí obchodní zástupce', 'outsourcing prodeje', 'B2B oslovení firem', 'externí sales']
      : ['external sales representation Czech Republic', 'sales agent Czech Republic', 'enter Czech market', 'B2B sales Czech Republic', 'outsourced sales Czech Republic', 'market testing Czech Republic'],
    openGraph: {
      type: 'website',
      locale: cs ? 'cs_CZ' : 'en_US',
      url: `https://salesagent.cz/${locale}/sales-representation-czech-republic`,
      siteName: 'SalesAgent.cz',
      title: cs
        ? 'Externí obchodník pro firmy — outsourcing obchodu | SalesAgent.cz'
        : 'External Sales Representation for Czech Republic | SalesAgent.cz',
      description: cs
        ? 'Potřebujete externího obchodníka? SalesAgent zajistí vyhledávání firem, oslovení a předání zájemců.'
        : 'Looking for sales representation in Czech Republic? SalesAgent handles market testing, outreach and first meetings.',
    },
  }
}

const jsonLdEn = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'External Sales Representation for Czech Republic',
  description:
    'AI-powered outsourced sales agency that acts as your external sales representative in the Czech Republic. Handles B2B prospecting, cold outreach and first meetings without hiring a local employee.',
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
              {isCs ? 'Externí obchod · Outsourcing prodeje' : 'Sales Representation · Czech Republic'}
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '24px' }}>
              {isCs
                ? 'Externí obchodník,\nkterý prodává za vás'
                : 'Your external sales representative\nin Czech Republic'}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto 40px', lineHeight: 1.7 }}>
              {isCs
                ? 'Nechcete najímat obchodníka na plný úvazek? SalesAgent funguje jako váš externí obchodní tým — vyhledá firmy, osloví je personalizovaným e-mailem i na LinkedIn a předá vám ty, kteří mají zájem o schůzku.'
                : 'Expanding into the Czech Republic but not ready to open an office or hire locally? SalesAgent acts as your external sales team — finding companies, reaching out, and booking first meetings on your behalf.'}
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://cal.com/salesagent/demo"
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
                {isCs ? 'Domluvit nezávazný hovor' : 'Book a free consultation'}
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

          {/* Market testing section */}
          <section style={{ marginBottom: '80px', background: 'var(--surface)', borderRadius: '20px', padding: '48px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px' }}>
              {isCs ? 'Proč outsourcing obchodu dává smysl' : 'Start with market testing — risk-free'}
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
                  label: isCs ? 'Úspora oproti vlastnímu obchodníkovi' : 'Companies reached per month',
                  value: isCs ? '17×' : 'up to 500',
                },
                {
                  label: isCs ? 'Bez závazku' : 'No long-term commitment',
                  value: isCs ? 'Měsíc po měsíci' : 'Month by month',
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
                : 'Czech Republic is a stable economy with high B2B technology adoption, a growing IT sector, and companies that actively seek international partners and suppliers.'}
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
                    : 'Success in Czech Republic is a natural stepping stone into Slovakia, Poland and other CEE markets. You learn what works, then scale across the region.',
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
                    : 'The system reaches out to hundreds of companies monthly. We continuously evaluate results, adjust targeting and messaging. Booked meetings land directly in your calendar.',
                },
                {
                  phase: isCs ? 'Fáze 3' : 'Phase 3',
                  title: isCs ? 'Optimalizace a škálování' : 'Scale or pivot',
                  duration: isCs ? 'od 3. měsíce' : 'from month 4',
                  body: isCs
                    ? 'Na základě dat rozhodneme, jak pokračovat — zvýšit objem, oslovit jiný segment nebo rozšířit kanály. Rozhodujete se na základě čísel, ne pocitů.'
                    : 'Based on first months of data, we decide together how to proceed — higher volume, a different segment, or transitioning into full commercial representation in Czech Republic.',
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
                <>No annual lock-in. See{' '}
                  <Link href={`${base}/pricing`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                    pricing
                  </Link>{' '}for details.</>
              )}
            </p>
          </section>

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
              href="https://cal.com/salesagent/demo"
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
              {isCs ? 'Domluvit nezávazný hovor' : 'Book a free consultation'}
            </a>
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
              {isCs ? 'Bez závazku · Odpovídáme do 24 hodin' : 'No commitment · We reply within 24 hours'}
            </p>
          </section>

          {/* Blog link */}
          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <Link
              href={isCs ? '/blog/co-je-externi-obchod' : '/blog/external-sales-representation-czech-republic'}
              style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none' }}
            >
              {isCs
                ? '→ Přečtěte si, co dělá externí obchodník a kdy se vyplatí'
                : '→ Read our story: what external sales representation in Czech Republic actually looks like'}
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
