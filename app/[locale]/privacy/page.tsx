import type { Metadata } from 'next'
import { getTranslations, type Locale } from '@/lib/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const cs = locale === 'cs'
  return {
    title: cs ? 'Ochrana osobních údajů — SalesAgent.cz' : 'Privacy Policy — SalesAgent.cz',
    description: cs
      ? 'Zásady zpracování osobních údajů společnosti Sales Robots s.r.o. — provozovatele SalesAgent.cz.'
      : 'Privacy policy of Sales Robots s.r.o. — operator of SalesAgent.cz.',
    alternates: {
      canonical: `https://salesagent.cz/${locale}/privacy`,
      languages: {
        cs: 'https://salesagent.cz/cs/privacy',
        en: 'https://salesagent.cz/en/privacy',
        'x-default': 'https://salesagent.cz/cs/privacy',
      },
    },
    robots: { index: false },
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const cs = locale === 'cs'

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          marginBottom: '8px',
        }}>
          {cs ? 'Zásady zpracování osobních údajů' : 'Privacy Policy'}
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '56px' }}>
          {cs ? 'Platné od 1. 1. 2024' : 'Effective from 1 January 2024'}
        </p>

        <Section title={cs ? 'Správce osobních údajů' : 'Data Controller'}>
          {cs
            ? 'Správcem vašich osobních údajů je společnost Sales Robots s.r.o., IČO: 09586563, se sídlem Generála Šišky 2082/26, Praha – Modřany. Tato společnost provozuje web salesagent.cz.'
            : 'The data controller is Sales Robots s.r.o., Company ID: 09586563, registered at Generála Šišky 2082/26, Prague – Modřany. This company operates the website salesagent.cz.'}
        </Section>

        <Section title={cs ? 'Jaké údaje zpracováváme' : 'What data we process'}>
          {cs
            ? 'Zpracováváme pouze údaje, které nám sami poskytnete prostřednictvím kontaktního formuláře nebo e-mailem: jméno, e-mailová adresa, název firmy a obsah vaší zprávy. Při návštěvě webu dále zaznamenáváme technické údaje: IP adresa, typ a verze prohlížeče a informace o zařízení (prostřednictvím Google Analytics).'
            : 'We process only data you provide via the contact form or email: name, email address, company name and message content. When visiting the site, we also record technical data: IP address, browser type and version, and device information (via Google Analytics).'}
        </Section>

        <Section title={cs ? 'Účely zpracování' : 'Purposes of processing'}>
          {cs
            ? 'Vaše osobní údaje zpracováváme za účelem: odpovědi na vaše dotazy a poskytnutí informací o našich službách, uzavření a plnění smlouvy o poskytování služeb, zasílání obchodních sdělení (pouze se souhlasem), zlepšování webu a služeb na základě anonymní analytiky.'
            : 'We process your personal data for the purposes of: responding to your enquiries and providing information about our services, concluding and performing a service agreement, sending commercial communications (with consent only), and improving the website and services based on anonymous analytics.'}
        </Section>

        <Section title={cs ? 'Právní základ zpracování' : 'Legal basis'}>
          {cs
            ? 'Zpracování provádíme na základě: plnění smlouvy nebo provedení opatření před uzavřením smlouvy (čl. 6 odst. 1 písm. b GDPR), oprávněného zájmu správce — přímý marketing a zlepšování služeb (čl. 6 odst. 1 písm. f GDPR), vašeho výslovného souhlasu — obchodní sdělení (čl. 6 odst. 1 písm. a GDPR), plnění zákonných povinností (čl. 6 odst. 1 písm. c GDPR).'
            : 'Processing is based on: performance of a contract or pre-contractual measures (Art. 6(1)(b) GDPR), legitimate interests of the controller — direct marketing and service improvement (Art. 6(1)(f) GDPR), your explicit consent — commercial communications (Art. 6(1)(a) GDPR), and compliance with legal obligations (Art. 6(1)(c) GDPR).'}
        </Section>

        <Section title={cs ? 'Doba uchovávání' : 'Retention period'}>
          {cs
            ? 'Osobní údaje uchováváme po dobu nezbytnou ke splnění účelu, pro který byly shromážděny. Údaje z kontaktního formuláře uchováváme po dobu trvání obchodního vztahu a 3 roky po jeho ukončení. Technické záznamy (logy) uchováváme po dobu 12 měsíců.'
            : 'Personal data is retained for as long as necessary to fulfil the purpose for which it was collected. Contact form data is retained for the duration of the business relationship and 3 years after its termination. Technical records (logs) are retained for 12 months.'}
        </Section>

        <Section title={cs ? 'Komu data předáváme' : 'Who we share data with'}>
          {cs
            ? 'Vaše údaje neprodáváme třetím stranám. Můžeme je sdílet s: poskytovateli cloudových služeb (hosting, e-mail), analytickými nástroji (Google Analytics — anonymizovaná data), a externími spolupracovníky vázanými smlouvou o zpracování osobních údajů.'
            : 'We do not sell your data to third parties. We may share it with: cloud service providers (hosting, email), analytics tools (Google Analytics — anonymised data), and external contractors bound by a data processing agreement.'}
        </Section>

        <Section title={cs ? 'Vaše práva' : 'Your rights'}>
          {cs
            ? 'Jako subjekt údajů máte právo na: přístup ke svým osobním údajům, opravu nepřesných údajů, výmaz údajů („právo být zapomenut"), omezení zpracování, přenositelnost údajů, námitku proti zpracování na základě oprávněného zájmu, odvolání souhlasu kdykoliv bez vlivu na zákonnost předchozího zpracování. Svá práva můžete uplatnit e-mailem na info@salesagent.cz. Na vaši žádost odpovíme do 30 dnů.'
            : 'As a data subject, you have the right to: access your personal data, rectify inaccurate data, erasure ("right to be forgotten"), restriction of processing, data portability, object to processing based on legitimate interest, and withdraw consent at any time without affecting the lawfulness of prior processing. You can exercise your rights by emailing info@salesagent.cz. We will respond within 30 days.'}
        </Section>

        <Section title={cs ? 'Zabezpečení' : 'Security'}>
          {cs
            ? 'Implementujeme technická a organizační opatření k ochraně vašich údajů: šifrování přenosu dat (HTTPS/TLS), omezený přístup k osobním údajům pouze pro pověřené osoby, pravidelné bezpečnostní kontroly.'
            : 'We implement technical and organisational measures to protect your data: encrypted data transmission (HTTPS/TLS), restricted access to personal data to authorised personnel only, and regular security checks.'}
        </Section>

        <Section title={cs ? 'Cookies a analytika' : 'Cookies and analytics'}>
          {cs
            ? 'Web používá Google Analytics pro anonymní sledování návštěvnosti. IP adresy jsou anonymizovány. Technické cookies nezbytné pro provoz webu nevyžadují souhlas. Analytické cookies můžete odmítnout v nastavení svého prohlížeče.'
            : 'The website uses Google Analytics for anonymous traffic tracking. IP addresses are anonymised. Technical cookies necessary for the website to function do not require consent. You can decline analytics cookies in your browser settings.'}
        </Section>

        <Section title={cs ? 'Dozorový orgán' : 'Supervisory authority'}>
          {cs
            ? 'Máte právo podat stížnost u Úřadu pro ochranu osobních údajů (ÚOOÚ), Pplk. Sochora 27, 170 00 Praha 7, www.uoou.cz.'
            : 'You have the right to lodge a complaint with the Office for Personal Data Protection (ÚOOÚ), Pplk. Sochora 27, 170 00 Prague 7, www.uoou.cz.'}
        </Section>

        <Section title={cs ? 'Kontakt' : 'Contact'}>
          {cs
            ? <>
                V případě dotazů k ochraně osobních údajů nás kontaktujte:<br />
                E-mail: <a href="mailto:info@salesagent.cz" style={{ color: 'var(--accent)' }}>info@salesagent.cz</a><br />
                Telefon: +420 777 591 503
              </>
            : <>
                For any questions regarding privacy, please contact us:<br />
                Email: <a href="mailto:info@salesagent.cz" style={{ color: 'var(--accent)' }}>info@salesagent.cz</a><br />
                Phone: +420 777 591 503
              </>}
        </Section>

      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '18px',
        fontWeight: 700,
        letterSpacing: '-0.01em',
        marginBottom: '10px',
      }}>
        {title}
      </h2>
      <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.75', margin: 0 }}>
        {children}
      </p>
    </div>
  )
}
