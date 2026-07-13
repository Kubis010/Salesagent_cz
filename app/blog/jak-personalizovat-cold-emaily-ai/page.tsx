import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jak personalizovat cold emaily pomocí AI — průvodce pro B2B firmy | SalesAgent.cz',
  description:
    'Automatický cold mailing nemusí znamenat spam. Naučte se, jak AI personalizuje cold emaily na základě webu každé firmy a proč to generuje víc odpovědí než šablony.',
  alternates: { canonical: 'https://salesagent.cz/blog/jak-personalizovat-cold-emaily-ai' },
  openGraph: {
    title: 'Jak personalizovat cold emaily pomocí AI',
    description:
      'AI přečte web firmy a napíše unikátní zprávu. Proč to funguje líp než šablony a jak na to.',
    type: 'article',
    publishedTime: '2026-07-13',
    locale: 'cs_CZ',
  },
  keywords: [
    'personalizovaný cold email',
    'automatický cold mailing',
    'AI cold email',
    'jak personalizovat cold emaily',
    'cold email automatizace',
    'B2B oslovování firem',
    'AI obchodní zástupce',
  ],
}

export default function Page() {
  return (
    <article style={{ paddingTop: '96px', paddingBottom: '80px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Jak personalizovat cold emaily pomocí AI — průvodce pro B2B firmy',
            datePublished: '2026-07-13',
            inLanguage: 'cs',
            author: { '@type': 'Person', name: 'Petr Kubíček' },
            publisher: { '@type': 'Organization', name: 'SalesAgent.cz' },
          }),
        }}
      />

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>

        {/* Breadcrumb */}
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '32px' }}>
          <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link>
          {' / '}Jak personalizovat cold emaily
        </p>

        {/* Hero image */}
        <img
          src="/blog/ai-cold-email.jpg"
          alt="AI personalizace cold emailů pro B2B firmy"
          style={{ width: '100%', borderRadius: '14px', marginBottom: '40px', display: 'block' }}
        />

        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
          Automatizace prodeje
        </p>
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          lineHeight: 1.2,
          marginBottom: '16px',
        }}>
          Jak personalizovat cold emaily pomocí AI — průvodce pro B2B firmy
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '48px' }}>
          13. července 2026 &middot; Petr Kubíček
        </p>

        <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)' }}>

          <p>
            Cold emaily mají v B2B obchodu špatnou pověst. Většina firem si pod nimi představí hromadné
            rozesílky, které končí ve spamu. Jenže problém není v cold emailu jako takovém — problém
            je v tom, že většina zpráv je <strong>generická</strong>. Šablona s doplněným jménem prostě nefunguje.
          </p>

          <p>
            Co kdyby každý email reagoval na to, čím se daná firma skutečně zabývá? Co kdyby příjemce
            měl pocit, že mu píše někdo, kdo si dal práci prostudovat jeho web? Přesně tohle dnes
            umí <strong>AI cold mailing</strong>.
          </p>

          <H2>Proč šablonové cold emaily nefungují</H2>

          <p>
            Typický cold email vypadá takto: <em>„Dobrý den, jmenuji se Jan a nabízíme řešení pro firmy
            jako je ta vaše."</em> Příjemce okamžitě pozná, že jde o hromadnou rozesílku. Výsledek?
            Míra odpovědí pod 1 %, vysoká míra odhlášení a poškozená doménová reputace.
          </p>

          <p>Hlavní problémy šablonových emailů:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li>Neobsahují žádný kontext o firmě příjemce</li>
            <li>Vypadají jako spam — a často ve spamu i končí</li>
            <li>Neodlišíte se od desítek dalších zpráv, které příjemce denně dostává</li>
            <li>Personalizace typu „jméno + firma" nestačí — příjemce to prokoukne</li>
          </ul>

          <H2>Jak funguje AI personalizace cold emailů</H2>

          <p>
            Moderní <strong>nástroje na automatizaci prodeje</strong> pracují úplně jinak než klasický
            email marketing. Místo jedné šablony pro tisíce kontaktů systém:
          </p>

          <ol style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li><strong>Navštíví web každé firmy</strong> — AI přečte obsah, zjistí obor, nabídku, specializaci</li>
            <li><strong>Pochopí kontext</strong> — rozpozná, co firma dělá, na co se zaměřuje a co by ji mohlo zajímat</li>
            <li><strong>Napíše unikátní zprávu</strong> — email přímo reaguje na obsah webu, ne na šablonu</li>
            <li><strong>Odešle ve správný čas</strong> — automaticky a bez manuálního zásahu</li>
          </ol>

          <p>
            Výsledek? Zpráva, která zní jako od člověka, který si dal práci. Protože AI si tu práci
            skutečně dala — jen to trvalo sekundy místo desítek minut.
          </p>

          <img
            src="/blog/ai-workflow.jpg"
            alt="Proces automatického vyhledávání B2B kontaktů a cold mailingu"
            style={{ width: '100%', borderRadius: '14px', margin: '32px 0', display: 'block' }}
          />

          <H2>Příklad: šablona vs. AI personalizace</H2>

          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
          }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Klasická šablona
            </p>
            <p style={{ fontStyle: 'italic', margin: 0 }}>
              „Dobrý den, jmenuji se Petr a rád bych vám představil naše řešení pro automatizaci
              prodeje. Pomáháme firmám jako je ta vaše získat více zákazníků. Měli byste zájem
              o 15minutový hovor?"
            </p>
          </div>

          <div style={{
            background: 'rgba(255,107,74,0.06)',
            border: '1px solid rgba(255,107,74,0.25)',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
          }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              AI personalizovaný email
            </p>
            <p style={{ fontStyle: 'italic', margin: 0 }}>
              „Dobrý den, všiml jsem si, že se zaměřujete na dodávky stavební techniky pro
              střední Moravu. Pracujeme s firmami v podobném segmentu a pomáháme jim systematicky
              oslovovat stavební firmy v regionech, kde zatím nemají pokrytí. Dává vám smysl
              15 minut na to, jestli by to mohlo fungovat i u vás?"
            </p>
          </div>

          <p>
            Rozdíl je zásadní. První zpráva je generická, mohl ji dostat kdokoliv. Druhá ukazuje,
            že odesílatel rozumí oboru příjemce. A právě to rozhoduje o tom, jestli někdo odpoví.
          </p>

          <H2>Kolik odpovědí to reálně generuje</H2>

          <p>
            Hromadné cold emaily mají typicky míru odpovědí kolem <strong>0,5–1 %</strong>.
            Personalizované AI cold emaily dosahují <strong>2–5 %</strong> — násobně více.
            U 500 oslovených firem měsíčně to znamená rozdíl mezi 2 a 25 odpověďmi.
          </p>

          <p>
            Navíc jsou odpovědi kvalitnější. Když někdo reaguje na zprávu, která přesně popisuje
            jeho situaci, je pravděpodobnější, že má skutečný zájem — ne jen zvědavost.
          </p>

          <H2>Automatický cold mailing vs. email marketing — jaký je rozdíl?</H2>

          <p>
            Hodně firem si plete cold mailing s email marketingem (Mailchimp, Ecomail apod.).
            Jsou to ale zásadně odlišné věci:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li><strong>Email marketing</strong> — oslovuje lidi, kteří se přihlásili k odběru. Pracujete s existující databází.</li>
            <li><strong>Cold mailing</strong> — oslovuje firmy, které vás ještě neznají. Každý kontakt je nový.</li>
          </ul>

          <p>
            AI cold mailing navíc řeší celý proces od vyhledání firmy po odeslání zprávy.
            Není to jen nástroj na rozesílání — je to kompletní <strong>automatizace B2B obchodu</strong>.
          </p>

          <H2>Pro koho je AI cold mailing vhodný</H2>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li><strong>B2B firmy</strong>, které chtějí systematicky oslovovat nové zákazníky</li>
            <li><strong>Firmy bez obchodního zástupce</strong> — AI obchodník zvládne první kontakt za zlomek nákladů</li>
            <li><strong>Zahraniční firmy vstupující na český trh</strong> — komunikace v češtině, znalost místního trhu</li>
            <li><strong>Rostoucí firmy</strong>, které potřebují víc schůzek, než stíhají generovat samy</li>
          </ul>

          <H2>Jak na to s SalesAgent.cz</H2>

          <p>
            <Link href="/cs" style={{ color: 'var(--accent)' }}>SalesAgent.cz</Link> je outsourcovaný
            AI obchodní zástupce. Nejde o software, který si sami nastavíte — je to služba. Nastavíme
            ji, spustíme a průběžně ladíme za vás.
          </p>

          <p>Celý proces vypadá takto:</p>
          <ol style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li>Společně definujeme, koho chcete oslovovat (obor, region, velikost firmy)</li>
            <li>AI automaticky vyhledá B2B kontakty z veřejných zdrojů</li>
            <li>Prostuduje web každé firmy a napíše personalizovaný cold email</li>
            <li>Odešle email i LinkedIn zprávu</li>
            <li>K vám se dostane jen ten, kdo odpoví se zájmem</li>
          </ol>

          <p>
            Začít se dá do 48 hodin. Tarif Grow stojí od 5 900 Kč měsíčně a zahrnuje oslovení
            až 500 firem.{' '}
            <Link href="/cs/pricing" style={{ color: 'var(--accent)' }}>Kompletní ceník najdete zde.</Link>
          </p>

          <H2>Shrnutí</H2>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li>Šablonové cold emaily nefungují — příjemce je pozná a ignoruje</li>
            <li>AI personalizace čte web každé firmy a píše unikátní zprávu</li>
            <li>Míra odpovědí je 2–5× vyšší než u hromadných rozesílek</li>
            <li>Cold mailing ≠ email marketing — oslovujete firmy, které vás ještě neznají</li>
            <li>SalesAgent.cz to dělá jako služba — vy neřešíte nic, jen přebíráte zájemce</li>
          </ul>

          <div style={{
            background: 'rgba(255,107,74,0.06)',
            border: '1px solid rgba(255,107,74,0.25)',
            borderRadius: '14px',
            padding: '32px',
            marginTop: '48px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px', fontFamily: 'Space Grotesk, sans-serif' }}>
              Chcete vidět, jak by AI personalizace vypadala ve vašem oboru?
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Na 30minutovém hovoru vám ukážeme konkrétní příklady pro váš segment.
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
              Domluvit hovor zdarma
            </a>
          </div>

        </div>
      </div>
    </article>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: '22px',
      fontWeight: 700,
      letterSpacing: '-0.015em',
      marginTop: '48px',
      marginBottom: '16px',
      color: 'var(--text)',
    }}>
      {children}
    </h2>
  )
}
