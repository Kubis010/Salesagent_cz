import type { Metadata } from 'next'
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
    title: cs ? 'O nás — AI obchodní zástupce' : 'About — AI Sales Agent',
    description: cs
      ? 'Sales Robots s.r.o. staví nástroje na automatizaci B2B prodeje. SalesAgent.cz je AI obchodní zástupce — outsourcovaný cold mailing a vyhledávání kontaktů pro B2B firmy.'
      : 'Sales Robots s.r.o. builds B2B sales automation tools. SalesAgent.cz is an AI sales agent — outsourced cold emailing and contact prospecting for B2B companies.',
    alternates: {
      canonical: `https://salesagent.cz/${locale}/about`,
      languages: {
        cs: 'https://salesagent.cz/cs/about',
        en: 'https://salesagent.cz/en/about',
        'x-default': 'https://salesagent.cz/cs/about',
      },
    },
    openGraph: {
      type: 'website',
      locale: cs ? 'cs_CZ' : 'en_US',
      url: `https://salesagent.cz/${locale}/about`,
      siteName: 'SalesAgent.cz',
      title: cs ? 'O nás — SalesAgent.cz' : 'About — SalesAgent.cz',
      description: cs
        ? 'Česká firma, která staví AI nástroje pro automatizaci B2B obchodu.'
        : 'Czech company building AI tools for B2B sales automation.',
    },
    twitter: {
      card: 'summary',
      title: cs ? 'O nás — SalesAgent.cz' : 'About — SalesAgent.cz',
      description: cs
        ? 'Česká firma, která staví AI nástroje pro automatizaci B2B obchodu.'
        : 'Czech company building AI tools for B2B sales automation.',
    },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t: Translations = getTranslations(locale as Locale)
  const cs = locale === 'cs'
  const base = `/${locale}`

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>

        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          marginBottom: '16px',
        }}>
          {cs ? 'Kdo stojí za SalesAgent.cz' : 'Who is behind SalesAgent.cz'}
        </h1>
        <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '64px', maxWidth: '580px' }}>
          {cs
            ? 'Česká firma, která staví nástroje na automatizaci B2B obchodu. Žádný přeprodávaný software — vlastní infrastruktura, osobní přístup.'
            : 'A Czech company building B2B sales automation tools. No resold software — our own infrastructure, personal approach.'}
        </p>

        {/* Founder */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '160px 1fr',
          gap: '40px',
          alignItems: 'start',
          marginBottom: '56px',
        }} className="about-founder">
          <img
            src="/petr-kubicek.jpg"
            alt="Petr Kubíček"
            style={{ width: '160px', height: '160px', borderRadius: '14px', objectFit: 'cover' }}
          />
          <div>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '24px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: '8px',
            }}>
              Petr Kubíček
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--accent)', fontWeight: 600, marginBottom: '16px' }}>
              {cs ? 'Zakladatel, Sales Robots s.r.o.' : 'Founder, Sales Robots s.r.o.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '16px' }}>
              {cs
                ? 'Patnáct let v B2B obchodu a marketingu, z toho roky v seniorních a vedoucích pozicích. Inženýr Vysoké školy ekonomické v Praze. SalesAgent.cz stavím a provozuji na vlastní infrastruktuře — neprodávám cizí nástroj, ale službu, za kterou ručím osobně.'
                : 'Fifteen years in B2B sales and marketing, including years in senior and management positions. Engineering degree from the Prague University of Economics and Business. I build and operate SalesAgent.cz on my own infrastructure — I don\'t resell someone else\'s tool, I deliver a service I personally stand behind.'}
            </p>
            <div style={{ display: 'flex', gap: '32px', fontSize: '14px', color: 'var(--text-muted)' }}>
              <div><span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, color: 'var(--text)', display: 'block' }}>15+</span>{cs ? 'let v B2B' : 'years in B2B'}</div>
              <div><span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, color: 'var(--text)', display: 'block' }}>Ing.</span>{cs ? 'VŠE Praha' : 'Prague UoE'}</div>
              <div><span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, color: 'var(--text)', display: 'block' }}>48 h</span>{cs ? 'do startu' : 'to launch'}</div>
            </div>
          </div>
        </div>

        {/* What we do */}
        <div style={{
          background: 'rgba(255,107,74,0.06)',
          border: '1px solid rgba(255,107,74,0.25)',
          borderRadius: '14px',
          padding: '36px',
          marginBottom: '32px',
        }}>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '22px',
            fontWeight: 700,
            marginBottom: '12px',
            letterSpacing: '-0.01em',
          }}>
            {cs ? 'Co přesně děláme' : 'What exactly we do'}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0 }}>
            {cs
              ? 'SalesAgent.cz je AI obchodní zástupce jako služba. Automaticky vyhledáváme B2B kontakty, studujeme web každé firmy a odesíláme personalizované cold emaily a LinkedIn zprávy. Nejde o software k pronájmu — je to plně řízená služba. Nastavíme ji, spustíme a průběžně ladíme za vás. Vy dostáváte schůzky a zájemce.'
              : 'SalesAgent.cz is an AI sales agent as a service. We automatically find B2B contacts, study each company\'s website and send personalised cold emails and LinkedIn messages. It\'s not software for rent — it\'s a fully managed service. We set it up, launch it and continuously optimise it for you. You receive meetings and interested leads.'}
          </p>
        </div>

        {/* Two products */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          padding: '36px',
          marginBottom: '32px',
        }}>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '22px',
            fontWeight: 700,
            marginBottom: '12px',
            letterSpacing: '-0.01em',
          }}>
            {cs ? 'Dva produkty, jeden cíl' : 'Two products, one goal'}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>
            {cs
              ? 'Provozujeme dvě vzájemně se doplňující služby pod firmou Sales Robots s.r.o.:'
              : 'We operate two complementary services under Sales Robots s.r.o.:'}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '18px', lineHeight: '1.4' }}>→</span>
              <div>
                <strong style={{ color: 'var(--text)' }}>SalesAgent.cz</strong>
                <span style={{ color: 'var(--text-muted)' }}> — {cs ? 'aktivní oslovování firem. AI obchodník najde firmy, prostuduje jejich web a odešle personalizovaný cold email.' : 'active outbound. AI sales agent finds companies, reads their website and sends personalised cold emails.'}</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '18px', lineHeight: '1.4' }}>→</span>
              <div>
                <strong style={{ color: 'var(--text)' }}>
                  <a href="https://salesrobots.cz" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', textDecoration: 'none' }}>Sales Robots</a>
                </strong>
                <span style={{ color: 'var(--text-muted)' }}> — {cs ? 'chatboti a widgety na web. Proměňují návštěvníky v poptávky.' : 'chatbots and website widgets. Convert visitors into enquiries.'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company info */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          padding: '36px',
          marginBottom: '56px',
        }}>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '22px',
            fontWeight: 700,
            marginBottom: '16px',
            letterSpacing: '-0.01em',
          }}>
            {cs ? 'Firemní údaje' : 'Company details'}
          </h2>
          <div style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <p style={{ margin: '0 0 4px' }}><strong style={{ color: 'var(--text)' }}>Sales Robots s.r.o.</strong></p>
            <p style={{ margin: '0 0 4px' }}>IČO: 09586563</p>
            <p style={{ margin: '0 0 4px' }}>Generála Šišky 2082/26, Praha – Modřany</p>
            <p style={{ margin: '0 0 4px' }}>
              <a href="mailto:info@salesagent.cz" style={{ color: 'var(--accent)', textDecoration: 'none' }}>info@salesagent.cz</a>
              {' · '}
              <a href="tel:+420777591503" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>+420 777 591 503</a>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', marginBottom: '20px' }}>
            {cs ? 'Chcete vědět, jestli má smysl to vyzkoušet ve vašem oboru?' : 'Want to know if it makes sense to try in your industry?'}
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
              fontSize: '15px',
              padding: '14px 32px',
              borderRadius: '10px',
              textDecoration: 'none',
            }}
          >
            {t.cta.primary}
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-founder {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            text-align: center;
          }
          .about-founder img {
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  )
}
