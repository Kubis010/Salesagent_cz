import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jak expandovat s obchodem do Evropské unie | SalesAgent.cz',
  description:
    'Praktický průvodce expanzí B2B obchodu do EU — průzkum trhu, právní rámec, lokalizace, strategie oslovení a jak najít správný vstupní bod.',
  keywords: [
    'expanze do EU',
    'B2B obchod v Evropě',
    'vstup na evropský trh',
    'automatizace B2B obchodu',
    'cold mailing do EU',
    'automatické vyhledávání B2B kontaktů',
    'mezinárodní obchod',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/jak-expandovat-s-obchodem-do-eu',
  },
  openGraph: {
    title: 'Jak expandovat s obchodem do Evropské unie',
    description:
      'Praktické kroky pro B2B firmy vstupující na evropský trh — průzkum, právní rámec, lokalizace a strategie oslovení.',
    url: 'https://salesagent.cz/blog/jak-expandovat-s-obchodem-do-eu',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2025-01-15',
  },
  robots: { index: true, follow: true },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Jak expandovat s obchodem do Evropské unie',
  description:
    'Praktický průvodce expanzí B2B obchodu do EU — průzkum trhu, právní rámec, lokalizace, strategie oslovení a jak najít správný vstupní bod.',
  url: 'https://salesagent.cz/blog/jak-expandovat-s-obchodem-do-eu',
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
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
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
            <span>Expanze do EU</span>
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
              Business Development
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
            Jak expandovat s obchodem do Evropské unie
          </h1>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid var(--border)' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Petr Kubicek</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>·</span>
            <time dateTime="2025-01-15" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              15. ledna 2025
            </time>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>·</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>7 min čtení</span>
          </div>

          <ArticleSection>
            <p>
              Evropská unie představuje trh s více než 450 miliony spotřebitelů a stovkami tisíc B2B kupujících ve 27 zemích. Pro firmy hledající růst za hranicemi domácího trhu EU nabízí jednotný regulatorní rámec, společnou digitální platební infrastrukturu a silnou kupní sílu — zejména v Německu, Francii, Nizozemsku a severských zemích.
            </p>
            <p>
              Vstup na jakýkoli nový trh však vyžaduje jasný plán. Tento průvodce prochází šest praktických kroků, které rozhodují o tom, zda expanze do EU uspěje, nebo uvízne.
            </p>
          </ArticleSection>

          <NumberedSection number="1" title="Nejdřív prozkoumejte správný trh">
            <ArticleSection>
              <p>
                EU není jednotný trh v kulturním ani obchodním smyslu. Skandinávská firma kupující SaaS se chová úplně jinak než španělský výrobce hodnotící outsourcované služby. Než začnete expandovat, zodpovězte tyto otázky:
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Které země EU mají nejvyšší koncentraci vašeho ideálního zákaznického profilu?</li>
                <li>Jakým jazykem rozhodovací osoba komunikuje v každodenním businessu?</li>
                <li>Je nákupní proces centralizovaný na úrovni HQ, nebo regionální?</li>
                <li>Kdo jsou existující konkurenti na daném trhu?</li>
              </ul>
              <p>
                Německo je často výchozím prvním EU trhem pro B2B firmy — má největší ekonomiku, silnou průmyslovou základnu a kulturu, která oceňuje proces a specifikaci. Má ale také delší prodejní cykly a vysoká očekávání ohledně dokumentace a compliance. Česká republika, Slovensko a Polsko mohou být rychlejší na vstup a užitečné jako proof-of-concept před škálováním na západ.
              </p>
            </ArticleSection>
          </NumberedSection>

          <NumberedSection number="2" title="Pochopte právní a daňový rámec">
            <ArticleSection>
              <p>
                Prodej firmám v EU je obecně přímočarý — smlouva o poskytování služeb a faktura se správným DPH zacházením většinou stačí pro počáteční obchody. Složitost narůstá, když chcete založit právnickou osobu uvnitř EU.
              </p>
              <p>Klíčové body k vyjasnění na začátku:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <strong>Registrace k DPH:</strong> pokud překročíte práh pro vzdálený prodej (ve většině případů 10 000 EUR), musíte se registrovat k DPH v zemích kupujících nebo využít režim EU One-Stop-Shop (OSS)
                </li>
                <li>
                  <strong>Soulad s GDPR:</strong> jakékoli oslovení kontaktů v EU — email, LinkedIn, telefon — musí být v souladu s GDPR. To znamená mít zákonný základ (typicky oprávněný zájem pro B2B) a zahrnout možnost odhlášení v každé zprávě
                </li>
                <li>
                  <strong>Lokální entita:</strong> není nutná pro počáteční obchody, ale je potřeba pro najímání lokálních zaměstnanců, podepisování určitých smluv nebo přístup k veřejným zakázkám EU
                </li>
                <li>
                  <strong>Uložení dat:</strong> pokud váš produkt zpracovává osobní údaje občanů EU, může být nutné je ukládat v rámci EU podle Schrems II a následných rozhodnutí
                </li>
              </ul>
            </ArticleSection>
          </NumberedSection>

          <NumberedSection number="3" title="Lokalizujte nabídku — ne jen jazyk">
            <ArticleSection>
              <p>
                Překlad je minimum. Skutečná lokalizace znamená přizpůsobení hodnotové nabídky tomu, co na konkrétním trhu záleží. Funkce, která je prodejním argumentem v USA, může být v Německu považována za základ. Cena konkurenceschopná v ČR může ve Švýcarsku signalizovat nízkou kvalitu.
              </p>
              <p>Checklist lokalizace:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Web v lokálním jazyce (nebo minimálně v angličtině, která je široce akceptovaná v B2B napříč severní Evropou)</li>
                <li>Případové studie nebo reference od firem v cílovém regionu nebo srovnatelném trhu</li>
                <li>Ceník v lokální měně s lokálními platebními možnostmi</li>
                <li>Kontaktní údaje s lokálním telefonním číslem nebo adresou (na začátku může být virtuální kancelář)</li>
                <li>Dokumentace compliance relevantní pro daný sektor (ISO certifikáty, GDPR DPA, bezpečnostní assessmenty)</li>
              </ul>
            </ArticleSection>
          </NumberedSection>

          <NumberedSection number="4" title="Postavte cílenou strategii oslovení">
            <ArticleSection>
              <p>
                Automatický cold mailing v EU funguje — ale přístup musí odpovídat lokálním komunikačním normám. Němečtí a švýcarští kupující oceňují specifičnost a faktické tvrzení. Nizozemští a severští kupující dobře reagují na přímočarost a nízký tlak. Jihoevropské trhy často vyžadují delší fázi budování vztahu, než se obchod uzavře.
              </p>
              <p>
                Pro B2B oslovení napříč EU trhy je nejúčinnější kombinace:
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <strong>Personalizovaný cold email:</strong> ne šablonový blast — každá zpráva by měla odkazovat na něco konkrétního o firmě nebo oboru příjemce
                </li>
                <li>
                  <strong>LinkedIn oslovení:</strong> žádost o připojení následovaná krátkou zprávou; míra přijetí v EU bývá vyšší, když profil vypadá věrohodně a lokálně
                </li>
                <li>
                  <strong>Follow-up sekvence:</strong> dva až tři follow-upy v průběhu 10–14 dnů; kupující v EU jsou zaneprázdnění, ale obecně zdvořilí — jemný follow-up není považován za agresivní
                </li>
              </ul>
              <p>
                Poznámka ke GDPR: B2B cold email na firemní emailové adresy je povolen na základě oprávněného zájmu ve většině členských států EU za předpokladu, že máte jasné odhlášení a zpráva je skutečně relevantní pro profesní roli příjemce.
              </p>
            </ArticleSection>
          </NumberedSection>

          <NumberedSection number="5" title="Zvolte správný vstupní bod a partnery">
            <ArticleSection>
              <p>
                Přímý outbound prodej není jedinou cestou do EU. V závislosti na vašem produktu a zdrojích můžete zvážit i:
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <strong>Lokální prodejci nebo distributoři:</strong> obzvláště efektivní pro hardware, průmyslové produkty nebo trhy, kde je lokální vztah podmínkou nákupního rozhodnutí
                </li>
                <li>
                  <strong>Technologická partnerství:</strong> integrace s dominantní EU platformou (např. SAP, Sage, lokální ERP systémy) pro přístup k jejich zákaznické základně
                </li>
                <li>
                  <strong>EU akcelerátory a obchodní programy:</strong> několik EU zemí (Nizozemsko, Česká republika, Estonsko) má rozvinuté programy podpory zahraničních firem se subsidovanými landing službami
                </li>
                <li>
                  <strong>Účast na veletrzích:</strong> v sektorech jako výroba, potravinářství a stavebnictví zůstávají osobní akce (Hannover Messe, Anuga atd.) primárním kanálem pro navázání nových dodavatelských vztahů
                </li>
              </ul>
            </ArticleSection>
          </NumberedSection>

          <NumberedSection number="6" title="Měřte a iterujte před škálováním">
            <ArticleSection>
              <p>
                Mnoho EU expanzí selže ne proto, že by tržní příležitost byla špatná, ale proto, že firmy škálují příliš rychle, než ověří základní obchodní mechanismus. Než najmete lokální tým nebo se zavážete k lokální entitě, ověřte:
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Dokážete uzavřít obchod s EU zákazníkem na dálku, bez lokální přítomnosti?</li>
                <li>Jaká je realistická délka prodejního cyklu na tomto trhu?</li>
                <li>Jaké námitky se opakovaně objevují — a máte na ně dobré odpovědi?</li>
                <li>Jakou míru odpovědí dostáváte z automatického cold mailingu na tomto trhu vs. na domácím trhu?</li>
              </ul>
              <p>
                90denní testovací kampaň cílená na 500 firem na novém trhu vám řekne víc než jakékoli množství předběžných analýz. Data, která nasbíráte — které zprávy dostávají odpovědi, které firmy konvertují, jaké námitky zabíjejí obchody — jsou základem škálovatelného go-to-market v dané zemi.
              </p>
            </ArticleSection>
          </NumberedSection>

          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              padding: '36px',
              marginTop: '56px',
              marginBottom: '0',
            }}
          >
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>
              Expandujte do EU s jistotou
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '0' }}>
              Expanze do EU je proces, ne jednorázová událost. Firmy, které uspějí, jsou ty, které začnou v malém, testují systematicky a staví na tom, co se naučí. Vyberte si jeden trh, jasně definujte ideálního zákazníka, spusťte cílenou kampaň oslovení a výsledky použijte k rozhodnutí, zda a jak škálovat. Příležitost v EU je reálná — klíč je oslovit správné firmy se správnou zprávou ve správný čas.
            </p>
          </div>

          <div
            style={{
              background: 'rgba(255,107,74,0.06)',
              border: '1px solid rgba(255,107,74,0.25)',
              borderRadius: '14px',
              padding: '36px',
              marginTop: '24px',
            }}
          >
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
              Potřebujete oslovit české a slovenské firmy?
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '24px' }}>
              SalesAgent.cz se specializuje na B2B oslovení českých a slovenských firem — v lokálním jazyce, s kontextem. Najdeme vaše cílové firmy, přečteme jejich weby a odešleme personalizovanou zprávu správné osobě. Vy dostáváte kvalifikované schůzky.
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
              <Link href="/blog/jak-personalizovat-cold-emaily-ai" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak personalizovat cold emaily pomocí AI →
              </Link>
              <Link href="/blog/jak-zavest-automatizaci-prodeje-ve-firme" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak zavést automatizaci prodeje ve firmě →
              </Link>
              <Link href="/cs/pricing" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Ceník →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

function NumberedSection({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            minWidth: '36px',
            borderRadius: '50%',
            background: 'var(--accent)',
            color: '#0B1320',
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: '15px',
            marginTop: '2px',
          }}
        >
          {number}
        </span>
        <h2
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(20px, 2.5vw, 26px)',
            fontWeight: 700,
            letterSpacing: '-0.015em',
            lineHeight: '1.2',
            margin: 0,
            paddingTop: '6px',
          }}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
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
      }}
    >
      {children}
    </div>
  )
}
