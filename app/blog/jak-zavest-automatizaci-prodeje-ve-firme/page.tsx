import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jak zavést automatizaci prodeje ve firmě | SalesAgent.cz',
  description:
    'Praktický návod krok za krokem — od definice ideálního zákazníka po měření výsledků. Co nastavit před spuštěním a jak se vyhnout nejčastějším chybám.',
  keywords: [
    'automatizace prodeje',
    'automatizace B2B obchodu',
    'jak zavést automatizaci prodeje',
    'nástroje na automatizaci prodeje',
    'automatický cold mailing',
    'AI obchodní zástupce',
    'B2B prospekting',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/jak-zavest-automatizaci-prodeje-ve-firme',
  },
  openGraph: {
    title: 'Jak zavést automatizaci prodeje ve firmě',
    description:
      'Praktický návod krok za krokem — od definice ideálního zákazníka po měření výsledků.',
    url: 'https://salesagent.cz/blog/jak-zavest-automatizaci-prodeje-ve-firme',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2025-02-12',
  },
  robots: { index: true, follow: true },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Jak zavést automatizaci prodeje ve firmě',
  description:
    'Praktický návod krok za krokem — od definice ideálního zákazníka po měření výsledků.',
  url: 'https://salesagent.cz/blog/jak-zavest-automatizaci-prodeje-ve-firme',
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
  datePublished: '2025-02-12',
  dateModified: '2025-02-12',
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
          src="/blog/notebook.jpg"
          alt="Plánování automatizace prodeje"
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
          Jak zavést automatizaci prodeje ve firmě
        </h1>

        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '40px' }}>
          12. února 2025 · Petr Kubicek
        </p>

        <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '24px' }}>

          <p>
            Většina firem, které zkouší zavést automatizaci prodeje, neselže proto, že by technologie nefungovala, ale proto, že začnou od špatného konce. Koupí nástroj, napojí ho na CRM a čekají, že se leady začnou sypat. Když se nic smysluplného neděje, usoudí, že „automatizace u nás nefunguje."
          </p>

          <p>
            Problém téměř nikdy není v nástroji. Je to absence jasné definice, koho oslovujete, proč a co má následovat.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Krok 1: Přesně definujte ideálního zákazníka
          </h2>

          <p>
            Než může jakákoli automatizace běžet, potřebujete písemnou definici toho, koho cílíte. Ne „středně velké výrobní firmy" — ale „výrobní firmy s 20–200 zaměstnanci v ČR/SK, které exportují do Německa a nemají vlastní obchodní tým." Čím přesnější definice, tím lépe systém najde odpovídající firmy a tím relevantnější bude oslovení.
          </p>

          <p>
            Zapište si: obor, velikost firmy, geografie, signály naznačující shodu (klíčová slova na webu, technologie které používají, zda hledají zaměstnance na určité pozice) a signály, které je vylučují. Tento dokument se stane zadáním pro celý systém automatického vyhledávání B2B kontaktů.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Krok 2: Rozhodněte, o co žádáte
          </h2>

          <p>
            Cílem první zprávy není prodávat. Je to zahájení konverzace. Nejúčinnější automatický cold mailing žádá o jediný, nízkobarierový další krok — typicky 20–30minutový hovor, abyste zjistili, zda je vzájemná shoda.
          </p>

          <p>
            Pokud se vaše první zpráva pokouší vysvětlit celý produkt, přiložit brožuru a požádat o schůzku s celým rozhodovacím týmem, odpovědí se dočkáte málokdy. Stručnost je klíč. Jedno pozorování o jejich firmě, jedna věta o tom, co děláte, jedna otázka nebo žádost.
          </p>

          <img
            src="/blog/crossroads.jpg"
            alt="Volba správného přístupu k automatizaci"
            style={{ width: '100%', borderRadius: '12px', margin: '8px 0' }}
          />

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Krok 3: Zvolte správné kanály
          </h2>

          <p>
            Email a LinkedIn zůstávají dvěma nejúčinnějšími kanály pro B2B oslovení — a nejlépe fungují v kombinaci. Email dorazí přímo do schránky; LinkedIn přidává sociální rozměr, díky kterému odesílatel působí jako skutečná osoba, ne kampaň.
          </p>

          <p>
            Sekvence, která funguje: odeslat personalizovaný cold email → připojit se na LinkedInu s osobní poznámkou → follow-up emailem, pokud nepřijde odpověď po 5–7 dnech → follow-up na LinkedInu, pokud stále nic. Čtyři dotykové body, rozložené přes dva týdny, aniž byste působili dotěrně. Poté stop. Kdokoli, kdo neodpověděl, v tuto chvíli není dobrá investice follow-upu — může znovu vstoupit do systému za 3–6 měsíců.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Krok 4: Nastavte zpracování odpovědí ještě před spuštěním
          </h2>

          <p>
            Tady většina implementací padá. Automatizace běží, odpovědi přicházejí — a nikdo je rychle nezpracuje. Prospect, který odpoví na cold email, má krátké okno zájmu. Pokud čeká 48 hodin na odpověď, polovina z nich už bude mentálně jinde.
          </p>

          <p>
            Než spustíte jakýkoli automatický cold mailing, ujistěte se: někdo vlastní odpovědi a má cílový reakční čas pod 4 hodiny během pracovní doby; je jasný další krok (odkaz na rezervaci nebo konkrétní časový slot); a existuje follow-up, pokud prospect řekne „ano, ale ne teď" — zapište si to do diáře a vraťte se v dohodnutém termínu.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Krok 5: Měřte správné věci
          </h2>

          <p>
            Metriky, které stojí za sledování v automatizovaném oslovení: míra odpovědí (odpovědi ÷ odeslané zprávy), míra pozitivních odpovědí (pouze se zájmem), míra schůzek (domluvené schůzky ÷ odeslané zprávy) a hodnota pipeline vygenerovaná za měsíc. Open rate je v roce 2025 do značné míry bezvýznamný — příliš mnoho otevření zaznamenávají emailoví klienti automatickým skenováním zprávy.
          </p>

          <p>
            Zdravý systém oslovení ve velkém měřítku by měl produkovat 1,5–3 % míru odpovědí s dobrou personalizací. Pod 1 % většinou znamená špatné cílení nebo příliš generickou zprávu. Nad 3 % většinou znamená, že jste našli silnou shodu zprávy s trhem, do které stojí za to investovat víc.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Postavit si sám, nebo koupit jako službu?
          </h2>

          <p>
            Firmy zavádějící automatizaci B2B obchodu stojí před rozhodnutím: postavit systém interně pomocí nástrojů jako Clay, Apollo nebo Lemlist, nebo ho koupit jako službu, kde to za vás provozuje někdo jiný. Obojí může fungovat. Interní cesta je levnější na jednotku, ale vyžaduje člověka s technickými znalostmi, rozpočet na několik SaaS nástrojů a průběžný management. Služba stojí měsíčně víc, ale dostanete se na trh rychleji bez interní zátěže.
          </p>

          <p>
            Upřímná odpověď: pokud máte interně někoho, kdo může věnovat 20+ hodin nastavení a 5+ hodin týdně průběžnému řízení, interní řešení dává smysl ve velkém měřítku. Pokud chcete otestovat, zda outbound pro vaši firmu funguje, než investujete tento zdroj, koupě služby jako první krok je cesta s nižším rizikem.
          </p>

          <div style={{
            marginTop: '16px',
            background: 'var(--bg-card)',
            border: '1px solid rgba(255,107,74,0.3)',
            borderRadius: '14px',
            padding: '32px',
          }}>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>
              Chcete službu bez starostí s nastavením?
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.65 }}>
              SalesAgent.cz provozuje celý proces automatického vyhledávání B2B kontaktů a oslovení jako řízenou službu — řešíme cílení, průzkum, personalizované zprávy i follow-up. Vy dostáváte kvalifikované odpovědi, my řešíme vše před tím.
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
              <Link href="/blog/automatizace-prodeje-jak-ai-meni-b2b-osloveni" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Automatizace prodeje: Jak AI mění B2B oslovení →
              </Link>
              <Link href="/blog/jak-personalizovat-cold-emaily-ai" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak personalizovat cold emaily pomocí AI →
              </Link>
              <Link href="/cs/pricing" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Ceník →
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
