import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Obchodní zástupce — definice a co vlastně dělá? | SalesAgent.cz',
  description:
    'Co je obchodní zástupce? Kompletní definice role — aktivity, klíčové odpovědnosti, požadované dovednosti a co od pozice očekávat v B2B obchodu.',
  keywords: [
    'obchodní zástupce',
    'AI obchodní zástupce',
    'co dělá obchodní zástupce',
    'obchodní zástupce definice',
    'B2B obchodník',
    'AI prodejní asistent',
    'automatizace B2B obchodu',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/obchodni-zastupce-definice-a-co-dela',
  },
  openGraph: {
    title: 'Obchodní zástupce — definice a co vlastně dělá?',
    description:
      'Co je obchodní zástupce? Aktivity, odpovědnosti, požadované dovednosti a co pozice skutečně znamená v B2B prodeji.',
    url: 'https://salesagent.cz/blog/obchodni-zastupce-definice-a-co-dela',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2025-01-09',
  },
  robots: { index: true, follow: true },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Obchodní zástupce — definice a co vlastně dělá?',
  description:
    'Kompletní definice role obchodního zástupce — aktivity, odpovědnosti, dovednosti a co pozice znamená v B2B prodeji.',
  url: 'https://salesagent.cz/blog/obchodni-zastupce-definice-a-co-dela',
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
  datePublished: '2025-01-09',
  dateModified: '2025-01-09',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div style={{ paddingTop: '100px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
        <article style={{ maxWidth: '740px', margin: '0 auto' }}>

          <nav style={{ marginBottom: '32px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <Link href="/cs" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Domů</Link>
            {' / '}
            <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link>
            {' / '}
            <span>Obchodní zástupce</span>
          </nav>

          <div style={{ marginBottom: '16px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(255,107,74,0.1)',
                color: 'var(--accent)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '4px 10px',
                borderRadius: '4px',
              }}
            >
              Obchod
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: '1.15',
              marginBottom: '20px',
            }}
          >
            Obchodní zástupce — definice a co vlastně dělá?
          </h1>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid var(--border)' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Petr Kubicek</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>·</span>
            <time dateTime="2025-01-09" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              9. ledna 2025
            </time>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>·</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>5 min čtení</span>
          </div>

          <ArticleSection>
            <p>
              <strong>Obchodní zástupce</strong> je profesionál, jehož hlavní funkcí je nacházet nové zákazníky a generovat tržby pro firmu. Na rozdíl od obecného obchodníka, který může zpracovávat příchozí poptávky nebo spravovat existující klienty, obchodní zástupce je zaměřen na aktivní oslovení — systematicky vyhledává firmy nebo jednotlivce, kteří zatím nejsou zákazníky, a přeměňuje je na zákazníky.
            </p>
            <p>
              Termín se používá napříč různými obory a kontexty, ale jádro významu zůstává stejné: obchodní zástupce je osoba (a stále častěji systém), která je zodpovědná za první kontakt, kvalifikaci zájmu a vytvoření podmínek pro uzavření obchodu.
            </p>
          </ArticleSection>

          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
              marginTop: '48px',
            }}
          >
            Pozice obchodního zástupce: O čem je a co čekat?
          </h2>

          <ArticleSection>
            <p>
              Role obchodního zástupce se nachází na vrcholu obchodního funnelu. V B2B prostředí se tato pozice často nazývá <em>Sales Development Representative (SDR)</em> nebo <em>Business Development Representative (BDR)</em>. Pozice je náročná, protože zahrnuje vysoký objem odmítnutí — většina kontaktů neodpoví a z těch, kteří ano, se jen zlomek stane skutečnou příležitostí.
            </p>
            <p>
              Co od role čekat: značná část času jde do průzkumu (hledání správných firem a kontaktů), oslovení (emaily, hovory, LinkedIn) a follow-upu. Výsledky se měří v domluvených schůzkách nebo kvalifikovaných leadech předaných uzavíracímu týmu, ne v uzavřených příjmech.
            </p>
          </ArticleSection>

          <h3
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '16px',
              marginTop: '40px',
            }}
          >
            Co obchodní zástupce dělá den co den?
          </h3>

          <ArticleSection>
            <p>
              Každodenní práce obchodního zástupce se skládá z opakujícího se cyklu průzkumu, oslovení a follow-upu. Poměr mezi těmito aktivitami se liší podle role a firmy, ale v typické outbound B2B pozici to vypadá takto:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Automatické vyhledávání B2B kontaktů odpovídajících ideálnímu zákaznickému profilu</li>
              <li>Hledání správné kontaktní osoby ve firmě (rozhodovací osoba)</li>
              <li>Psaní a odesílání personalizovaných cold emailů</li>
              <li>Prospekting přes LinkedIn — žádosti o připojení, zprávy, návštěvy profilů</li>
              <li>Follow-up u prospektů, kteří na první kontakt nereagovali</li>
              <li>Kvalifikace příchozích odpovědí a domlouvání discovery hovorů</li>
              <li>Logování veškeré aktivity a aktualizace CRM</li>
              <li>Reportování stavu pipeline managementu</li>
            </ul>
            <p>
              Celkový objem se výrazně liší. V technologické firmě cílící na středně velké účty může obchodní zástupce oslovit 30–50 nových firem denně. V niche enterprise segmentu to může být 5–10 důkladně prozkoumaných kontaktů týdně.
            </p>
          </ArticleSection>

          <h3
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '16px',
              marginTop: '40px',
            }}
          >
            Odpovědnosti
          </h3>

          <ArticleSection>
            <p>
              Kromě denní aktivity nese obchodní zástupce sadu průběžných odpovědností:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <strong>Vlastnictví pipeline:</strong> udržování dostatečného objemu kontaktů v každé fázi sekvence oslovení, aby se konzistentně plnil cíl schůzek
              </li>
              <li>
                <strong>Kvalita zpráv:</strong> zajištění, že oslovení je personalizované a relevantní, ne generický spam — přímo to ovlivňuje míru odpovědí a reputaci značky
              </li>
              <li>
                <strong>Hygiena CRM:</strong> udržování záznamů kontaktů, poznámek a logů aktivit v přesném stavu, aby širší tým měl přehled o tom, co bylo vyzkoušeno a kdy
              </li>
              <li>
                <strong>Plnění cílů:</strong> dodržování týdenních a měsíčních KPI pro počet oslovených kontaktů, odeslaných follow-upů a zahájených kvalifikovaných konverzací
              </li>
              <li>
                <strong>Kvalita předání:</strong> když prospect projeví zájem, příprava jasného shrnutí pro account executiva, aby discovery hovor začínal s kontextem
              </li>
              <li>
                <strong>Iterace:</strong> testování různých předmětů, zpráv a sekvencí pro nalezení toho, co funguje nejlépe pro dané publikum
              </li>
            </ul>
          </ArticleSection>

          <h3
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '16px',
              marginTop: '40px',
            }}
          >
            Požadované dovednosti
          </h3>

          <ArticleSection>
            <p>
              Dovednosti, které dělají silného obchodního zástupce, jsou specifickým mixem vytrvalosti, jasné komunikace a strukturovaného myšlení:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <strong>Písemná komunikace:</strong> schopnost napsat krátký, jasný, věrohodný email, který nevypadá jako šablona — toto je nejpříměji testovaná dovednost v roli
              </li>
              <li>
                <strong>Schopnost průzkumu:</strong> rychlé pochopení toho, čím se firma zabývá a proč by vaše nabídka mohla být relevantní právě pro ni
              </li>
              <li>
                <strong>Odolnost:</strong> schopnost udržet konzistentní úsilí navzdory vysokému objemu neodpovědí a odmítnutí
              </li>
              <li>
                <strong>Organizace:</strong> řízení velkého počtu kontaktů v různých fázích bez toho, aby něco propadlo
              </li>
              <li>
                <strong>Zvídavost:</strong> skutečný zájem o to, proč firmy kupují nebo nekupují, což vede k lepšímu cílení a zprávám v čase
              </li>
              <li>
                <strong>Znalost nástrojů:</strong> pohodlná práce s CRM (HubSpot, Salesforce, Pipedrive), LinkedIn Sales Navigator a nástroji na automatizaci emailových sekvencí
              </li>
            </ul>
          </ArticleSection>

          <h3
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '16px',
              marginTop: '40px',
            }}
          >
            Závěrečné myšlenky
          </h3>

          <ArticleSection>
            <p>
              Role obchodního zástupce je motorem outbound B2B prodeje. Je měřitelná, vysokoobjemová a opakovatelná — což z ní také dělá jednu z prvních rolí, kterou rozšiřuje AI. Moderní AI obchodní zástupce zvládne průzkum a první oslovení ve velkém měřítku, zatímco lidští obchodníci se soustředí na kvalifikaci konverzací a budování vztahů poté, co je zájem navázán.
            </p>
            <p>
              Ať už funkci vykonává člověk nebo automatizovaný systém, základní logika je stejná: identifikujte správné firmy, pochopte, co potřebují, řekněte něco relevantního a vytvořte podmínky pro konverzaci.
            </p>
          </ArticleSection>

          <div
            style={{
              background: 'rgba(255,107,74,0.06)',
              border: '1px solid rgba(255,107,74,0.25)',
              borderRadius: '14px',
              padding: '36px',
              marginTop: '56px',
            }}
          >
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
              AI obchodní zástupce jako služba
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '24px' }}>
              SalesAgent.cz poskytuje outsourcovaného AI obchodního zástupce, který najde cílové firmy, přečte jejich weby a odešle personalizovaný cold email vaším jménem. Dostáváte domluvené schůzky — bez najímání obchodníka na plný úvazek.
            </p>
            <Link
              href="/cs"
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--accent)',
                color: '#0B1320',
                fontWeight: 700,
                fontSize: '14px',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              Jak to funguje &#x2192;
            </Link>
          </div>

          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>Související články</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/blog/automatizace-prodeje-jak-ai-meni-b2b-osloveni" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Automatizace prodeje: Jak AI mění B2B oslovení →
              </Link>
              <Link href="/blog/jak-personalizovat-cold-emaily-ai" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak personalizovat cold emaily pomocí AI →
              </Link>
              <Link href="/cs/how-it-works" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak to funguje — krok za krokem →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

function ArticleSection({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: '16px',
        lineHeight: '1.8',
        color: 'var(--text-muted)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '8px',
      }}
    >
      {children}
    </div>
  )
}
