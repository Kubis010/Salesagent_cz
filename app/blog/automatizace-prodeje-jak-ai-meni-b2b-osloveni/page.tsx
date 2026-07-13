import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Automatizace prodeje: Jak AI mění B2B oslovení | SalesAgent.cz',
  description:
    'AI automatizace B2B obchodu nahrazuje rutinní prospekting. Co se ve vašem pipeline skutečně změní — a co to znamená pro váš obchodní tým.',
  keywords: [
    'automatizace B2B obchodu',
    'AI obchodní zástupce',
    'automatický cold mailing',
    'AI generování leadů',
    'automatické vyhledávání B2B kontaktů',
    'personalizovaný cold email',
    'nástroje na automatizaci prodeje',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/automatizace-prodeje-jak-ai-meni-b2b-osloveni',
  },
  openGraph: {
    title: 'Automatizace prodeje: Jak AI mění B2B oslovení',
    description:
      'AI automatizace B2B obchodu nahrazuje rutinní prospekting. Co se ve vašem pipeline skutečně změní — a co to znamená pro váš obchodní tým.',
    url: 'https://salesagent.cz/blog/automatizace-prodeje-jak-ai-meni-b2b-osloveni',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2025-02-05',
  },
  robots: { index: true, follow: true },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Automatizace prodeje: Jak AI mění B2B oslovení',
  description:
    'AI automatizace B2B obchodu nahrazuje rutinní prospekting. Co se ve vašem pipeline skutečně změní — a co to znamená pro váš obchodní tým.',
  url: 'https://salesagent.cz/blog/automatizace-prodeje-jak-ai-meni-b2b-osloveni',
  inLanguage: 'cs',
  author: {
    '@type': 'Person',
    name: 'Petr Kubicek',
    url: 'https://salesagent.cz/cs#founder',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Sales Robots s.r.o.',
    url: 'https://salesagent.cz',
    logo: { '@type': 'ImageObject', url: 'https://salesagent.cz/logo.png' },
  },
  datePublished: '2025-02-05',
  dateModified: '2025-02-05',
}

export default function Page() {
  return (
    <article style={{ paddingTop: '96px', paddingBottom: '80px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>

        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '32px' }}>
          <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link>
          {' / '}Automatizace prodeje
        </p>

        <img
          src="/blog/arrows.jpg"
          alt="Automatizace prodeje a B2B oslovení"
          style={{ width: '100%', borderRadius: '14px', marginBottom: '40px', display: 'block' }}
        />

        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
          Automatizace prodeje
        </p>

        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(26px, 4vw, 38px)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          lineHeight: 1.2,
          marginBottom: '16px',
        }}>
          Automatizace prodeje: Jak AI mění B2B oslovení
        </h1>

        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '40px' }}>
          5. února 2025 · Petr Kubicek
        </p>

        <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '24px' }}>

          <p>
            Léta B2B obchod znamenal obchodníka sedícího za stolem, ručně hledajícího firmy, vyhledávajícího rozhodovací osoby na LinkedInu, psajícího emaily od nuly a volajícího zpět o týden později. Fungovalo to — pomalu, draze a v měřítku omezeném počtem hodin pracovního dne.
          </p>

          <p>
            AI mění pravidla hry. Ne tím, že nahrazuje obchodníky — ale tím, že odstraňuje práci, která nikdy neměla být jejich.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Co automatizace B2B obchodu skutečně znamená
          </h2>

          <p>
            „Automatizace prodeje" je termín, který pokrývá všechno od předpřipravené emailové sekvence po plně autonomního AI obchodního zástupce, který identifikuje, prozkoumá a osloví potenciální zákazníky bez lidského zásahu. Rozdíl je zásadní, protože většina trhu prodává to první, zatímco naznačuje to druhé.
          </p>

          <p>
            Skutečná automatizace zvládne celý top-of-funnel cyklus: automatické vyhledávání B2B kontaktů odpovídajících vašemu ideálnímu zákaznickému profilu, načtení a analýzu jejich webových stránek, napsání personalizovaného cold emailu na základě zjištěných informací a jeho odeslání emailem i přes LinkedIn — to vše bez toho, aby se člověk musel zapojit, dokud nepřijde odpověď.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Proč starý přístup nefunguje ve velkém
          </h2>

          <p>
            Zkušený obchodník dokáže realisticky prozkoumat a oslovit 20–30 nových firem týdně, pokud to dělá pořádně — čte web, hledá správný kontakt, píše něco, co nevypadá jako šablona. V tomto tempu pokrytí 1 000 firem zabere téměř rok práce jednoho člověka.
          </p>

          <p>
            Přirozená reakce je najmout víc lidí. Jenže víc lidí znamená víc řízení, delší onboarding, vyšší mzdové náklady a žádnou garanci lepšího výkonu na hlavu. Problém je strukturální, ne kapacitní.
          </p>

          <img
            src="/blog/laptop-phone.jpg"
            alt="Nástroje na automatizaci prodeje"
            style={{ width: '100%', borderRadius: '12px', margin: '8px 0' }}
          />

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Co AI skutečně dělá v obchodním pipeline
          </h2>

          <p>
            Moderní AI systém pro automatický cold mailing funguje ve třech fázích, všechny běží paralelně ve velkém měřítku:
          </p>

          <p>
            <strong>1. Prospekting.</strong> Systém prohledává firemní rejstříky, mapy a veřejné webové zdroje, aby našel firmy odpovídající vašim definovaným kritériím — obor, velikost, region, klíčová slova na webu. Žádné kupované databáze, žádné zastaralé seznamy kontaktů.
          </p>

          <p>
            <strong>2. Průzkum.</strong> Pro každou nalezenou firmu systém stáhne a přečte její web. Shrne, čím se firma zabývá, jaké služby nabízí a jakým jazykem popisuje svou práci. To je kontext, díky kterému oslovení působí osobně.
          </p>

          <p>
            <strong>3. Oslovení.</strong> Na základě průzkumu systém vygeneruje unikátní personalizovaný cold email pro každou firmu — ne šablonu s doplněným jménem, ale zprávu, která přímo odkazuje na to, co na webu našel. Stejná logika platí i pro žádost o připojení na LinkedInu s osobní poznámkou.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Metrika, na které záleží: odpovědi, ne odeslané zprávy
          </h2>

          <p>
            Počet odeslaných emailů sám o sobě nic neznamená. Důležité je, kolik firem odpoví a projeví zájem — a co se s nimi stane dál. S kvalitní personalizací ve velkém měřítku 2% míra odpovědí z 1 000 oslovení měsíčně znamená 20 kvalifikovaných konverzací. Při 15% uzavírací míře ze schůzky to jsou 3 noví zákazníci měsíčně z jediného automatizovaného systému běžícího za 239 €.
          </p>

          <p>
            Matematika se zásadně změní, když ji porovnáte s full-time obchodníkem, který realisticky vyprodukuje 80 kontaktů měsíčně při nákladech 4 000 €+ včetně odvodů zaměstnavatele.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Co automatizace nenahradí
          </h2>

          <p>
            Automatizace zvládne vše před první skutečnou konverzací. Neuzavírá obchody — plní pipeline lidmi, kteří opravdu chtějí mluvit. Lidská práce začíná, když firma odpoví. Budování důvěry, pochopení situace, zvládání námitek, vyjednávání podmínek — to nikam nemizí.
          </p>

          <p>
            Co se mění, je to, že váš tým přestane trávit 80 % času prospektingem a začne ho trávit tou částí obchodu, která skutečně vyžaduje člověka.
          </p>

          <div style={{
            marginTop: '16px',
            background: 'var(--bg-card)',
            border: '1px solid rgba(255,107,74,0.3)',
            borderRadius: '14px',
            padding: '32px',
          }}>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>
              Chcete vidět, jak by to vypadalo ve vašem oboru?
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.65 }}>
              Provozujeme celý cyklus automatického cold mailingu jako službu — vyhledáváme firmy, studujeme jejich weby, píšeme personalizované zprávy. Ozvěte se a ukážeme vám, jak by pipeline vypadal ve vašem oboru.
            </p>
            <a
              href="https://outlook.office.com/bookwithme/user/480895b1333541dc94be634dd588fada@salesagent.cz/meetingtype/jwdxCRPBn0CvHccZ7eLwAg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'var(--accent)',
                color: '#0B1320',
                fontWeight: 700,
                fontSize: '15px',
                padding: '12px 28px',
                borderRadius: '9px',
                textDecoration: 'none',
              }}
            >
              Domluvit hovor →
            </a>
          </div>

          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>Související články</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/blog/jak-personalizovat-cold-emaily-ai" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak personalizovat cold emaily pomocí AI →
              </Link>
              <Link href="/blog/jak-zavest-automatizaci-prodeje-ve-firme" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak zavést automatizaci prodeje ve firmě →
              </Link>
              <Link href="/cs/pricing" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Ceník služby →
              </Link>
            </div>
          </div>

          <p style={{ marginTop: '16px' }}>
            <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px' }}>
              ← Zpět na Blog
            </Link>
          </p>

        </div>
      </div>
    </article>
  )
}
