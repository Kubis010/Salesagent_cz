import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog o B2B prodeji, AI a automatizaci obchodu | SalesAgent.cz',
  description: 'Články o AI pro obchod a obchodníky, automatizaci B2B prodeje, cold e-mailingu, LinkedIn outreach a budování obchodních systémů — česky i anglicky.',
  keywords: ['AI pro obchodníky', 'B2B prodej blog', 'automatizace obchodu', 'cold email', 'AI outreach', 'LinkedIn automatizace'],
  alternates: {
    canonical: 'https://salesagent.cz/blog',
    languages: { 'x-default': 'https://salesagent.cz/blog' },
  },
  openGraph: {
    title: 'Blog o B2B prodeji a AI automatizaci | SalesAgent.cz',
    description: 'Články o AI pro obchod a obchodníky, automatizaci B2B prodeje, cold e-mailingu a LinkedIn outreach — česky i anglicky.',
    url: 'https://salesagent.cz/blog',
    siteName: 'SalesAgent.cz',
    type: 'website',
  },
}

const posts = [
  {
    href: '/blog/jak-personalizovat-cold-emaily-ai',
    lang: 'CS',
    title: 'Jak AI personalizuje cold emaily — bez šablon, bez proměnných',
    date: '11. srpna 2026',
    description:
      'Klasické šablony s [Jméno] a [Firma] nefungují. Jak AI čte web každé firmy a píše unikátní email od základu — a proč to má 3× vyšší response rate než klasický template.',
    image: '/blog/ai-personalizace-emailu.jpg',
  },
  {
    href: '/blog/jak-zavest-automatizaci-prodeje-ve-firme',
    lang: 'CS',
    title: 'Jak zavést automatizaci prodeje ve firmě — krok za krokem',
    date: '10. srpna 2026',
    description:
      'Automatizace prodeje není jen CRM nebo newsletter. Co reálně automatizovat, kde začít a jak vypadá fungující automatizovaný B2B obchodní proces od prvního kontaktu po schůzku.',
    image: '/blog/automatizace-prodeje.jpg',
  },
  {
    href: '/blog/ai-agent-pro-generovani-leadu',
    lang: 'CS',
    title: 'Generování B2B leadů v roce 2025: co funguje a co je mrtvé',
    date: '9. srpna 2026',
    description:
      'Studené databáze, LinkedIn spam a hromadné emaily přestávají fungovat. Co generuje B2B leady reálně? AI prospecting bez databází, hyper-personalizace a vícekanálový outreach.',
    image: '/blog/generovani-b2b-leadu.jpg',
  },
  {
    href: '/blog/ai-pro-obchod-a-obchodniky',
    lang: 'CS',
    title: 'AI pro obchod a obchodníky: kompletní systém automatizace',
    date: '4. srpna 2026',
    description:
      'Jak nastavit kompletní AI systém pro B2B obchodníky: automatizace LinkedIn outreach, kvalifikace leadů, CRM na míru jako srdce AI procesů a personalizované oslovení.',
    image: '/blog/ai-pro-obchodniky.jpg',
  },
  {
    href: '/blog/ai-agenti-b2b-prospecting-kvalifikace-leadu',
    lang: 'CS',
    title: 'Jak využít AI agenty pro B2B prospecting a kvalifikaci leadů',
    date: '6. srpna 2026',
    description:
      'Jak AI agenti mění B2B prospecting — automatické vyhledávání firem, analýza webů, kvalifikace leadů a personalizované oslovení. Praktický průvodce pro firmy.',
    image: '/blog/ai-agenti-prospecting.jpg',
  },
  {
    href: '/blog/follow-up-email-vzor',
    lang: 'CS',
    title: 'Follow-up e-mail vzor: 3 šablony, které fungují v B2B',
    date: '5. srpna 2026',
    description:
      'Jak napsat follow-up e-mail, který dostane odpověď. 3 konkrétní vzory — bez tlačení, s novým argumentem a krátkým obsahem.',
    image: '/blog/follow-up-email.png',
  },
  {
    href: '/blog/cold-email-vzor-cesky',
    lang: 'CS',
    title: 'Cold e-mail vzor česky: 3 šablony pro B2B oslovení',
    date: '3. srpna 2026',
    description:
      'Tři konkrétní vzory cold e-mailů pro B2B outreach v češtině s vysvětlením logiky každé šablony. Jak napsat první zprávu, která dostane odpověď.',
    image: '/blog/cold-email-vzor.png',
  },
  {
    href: '/blog/gdpr-a-cold-email',
    lang: 'CS',
    title: 'GDPR a cold e-mail: Co říká ÚOOÚ a co to mění',
    date: '5. srpna 2026',
    description:
      'Zákon č. 480/2004 Sb. nerozlišuje mezi FO a PO. Cold e-mail bez souhlasu je formálně v rozporu se zákonem — i na firemní adresy.',
    image: '/blog/gdpr-cold-email.jpg',
  },
  {
    href: '/blog/co-je-externi-obchod',
    lang: 'CS',
    title: 'Co je to externí obchod a jak funguje externí obchodník?',
    date: '1. srpna 2026',
    description:
      'Externí obchod je model, kdy firma využívá externího specialistu místo vlastního obchodníka. Jaké výhody přináší a kdy dává největší smysl?',
    image: '/blog/externi-obchod.jpg',
  },
  {
    href: '/blog/hiring-local-czech-staff-can-be-expensive-mistake',
    lang: 'EN',
    title: 'Hiring Local Czech Staff Can Be an Expensive Mistake',
    date: '4 August 2026',
    description:
      'Payroll taxes at 34 %, 2-month notice periods, 3–6 month ramp-up — the real cost of hiring a Czech sales rep is often over €5,000/month.',
    image: '/blog/expensive.jpg',
  },
  {
    href: '/blog/external-sales-representation-czech-republic',
    lang: 'EN',
    title: 'External Sales Representation in Czech Republic',
    date: '27 July 2026',
    description:
      'How to enter the Czech B2B market through external sales representation — market testing approach and how AI outreach changes the economics.',
    image: '/blog/czech-flag.jpg',
  },
  {
    href: '/blog/co-dela-externi-obchodnik',
    lang: 'CS',
    title: 'Co dělá externí obchodník / sales manager?',
    date: '29. července 2026',
    description:
      'Co přesně dělá externí obchodník, jaké nástroje používá, jak by měl fungovat a jaké výsledky od něj reálně čekat.',
    image: '/blog/externi-obchodnik.png',
  },
  {
    href: '/blog/jak-oslovit-firmy-bez-databaze',
    lang: 'CS',
    title: 'Jak oslovit firmy bez koupené databáze kontaktů',
    date: '28. července 2026',
    description:
      'Jak najít B2B kontakty a oslovit firmy bez placené databáze. Konkrétní zdroje, metody a AI nástroje pro outreach.',
    image: '/blog/jak-oslovit-firmy.jpg',
  },
  {
    href: '/blog/kolik-stoji-obchodnik-vs-ai',
    lang: 'CS',
    title: 'Kolik stojí obchodní zástupce vs. AI outreach?',
    date: '25. července 2026',
    description:
      'Reálné srovnání nákladů: interní obchodní zástupce vs. AI outreach systém. Mzdy, výkon, kapacita — s konkrétními čísly pro český trh.',
    image: '/blog/obchodnik-vs-ai.jpg',
  },
  {
    href: '/blog/ai-pro-obchod-a-prodej',
    lang: 'CS',
    title: 'AI pro obchod a prodej: Jak umělá inteligence mění B2B',
    date: '26. července 2026',
    description: 'AI pro obchod a prodej se stává konkurenční výhodou. Jak konkrétně AI mění B2B prospekting, cold outreach a správu leadů.',
    image: '/blog/ai-pro-obchod.jpg',
  },
  {
    href: '/blog/jak-vyuzit-ai-v-prodeji',
    lang: 'CS',
    title: 'Jak využít AI v prodeji: Praktický průvodce pro B2B firmy',
    date: '5. srpna 2026',
    description: 'Jak využít umělou inteligenci v prodeji konkrétně a bez velkých investic — od automatizace prospektingu po personalizované oslovení.',
    image: '/blog/ai-v-prodeji.jpg',
  },
  {
    href: '/blog/crm-na-miru',
    lang: 'CS',
    title: 'CRM na míru: Proč generické systémy firmám nevyhovují',
    date: '16. července 2026',
    description:
      'Salesforce a HubSpot jsou přeplácané pro většinu B2B firem. CRM na míru řeší přesně to, co potřebujete — bez zbytečných funkcí.',
    image: '/blog/crm-na-miru.png',
  },
  {
    href: '/blog/how-to-implement-sales-automation',
    lang: 'EN',
    title: 'How to Implement Sales Automation in Your Company',
    date: '12 February 2025',
    description:
      'A practical step-by-step guide — from defining your ideal customer to measuring results. What to set up before you launch.',
    image: '/blog/ai-workflow.jpg',
  },
  {
    href: '/blog/automatizace-prodeje-jak-ai-meni-b2b-osloveni',
    lang: 'CS',
    title: 'Automatizace prodeje: Jak AI mění B2B oslovení',
    date: '5. února 2025',
    description:
      'AI automatizace B2B obchodu nahrazuje rutinní prospekting. Co se ve vašem pipeline skutečně změní.',
    image: '/blog/laptop-phone.jpg',
  },
  {
    href: '/blog/sales-automation-ai-b2b-outreach',
    lang: 'EN',
    title: 'Sales Automation: How AI Is Changing B2B Outreach',
    date: '5 February 2025',
    description:
      'AI removes the repetitive prospecting work from your pipeline. What actually changes — and what it means for your sales team.',
    image: '/blog/laptop-phone.jpg',
  },
  {
    href: '/blog/jak-expandovat-s-obchodem-do-eu',
    lang: 'CS',
    title: 'Jak expandovat s obchodem do Evropské unie',
    date: '15. ledna 2025',
    description:
      'Praktický průvodce expanzí B2B obchodu do EU — průzkum trhu, právní rámec, lokalizace a jak najít správný vstupní bod.',
    image: '/blog/crossroads.jpg',
  },
  {
    href: '/blog/how-to-expand-your-business-and-sales-to-the-european-union',
    lang: 'EN',
    title: 'How to Expand Your Business and Sales to the European Union',
    date: '15 January 2025',
    description:
      'A practical guide for Czech and Slovak companies looking to grow into EU markets — from first contacts to building a pipeline abroad.',
    image: '/blog/crossroads.jpg',
  },
  {
    href: '/blog/obchodni-zastupce-definice-a-co-dela',
    lang: 'CS',
    title: 'Obchodní zástupce — definice a co vlastně dělá?',
    date: '9. ledna 2025',
    description:
      'Co obchodní zástupce skutečně dělá den co den, jaké dovednosti role vyžaduje a jak se liší od běžného obchodníka.',
    image: '/blog/notebook.jpg',
  },
  {
    href: '/blog/sales-agent-definition-and-what-he-do',
    lang: 'EN',
    title: 'Sales Agent — Definition and What They Do',
    date: '9 January 2025',
    description:
      'What a sales agent actually does day to day, what skills the role demands, and how it differs from a regular sales rep.',
    image: '/blog/notebook.jpg',
  },
]

export default function BlogIndex() {
  return (
    <div style={{ paddingTop: '96px', paddingBottom: '80px', maxWidth: '820px', margin: '0 auto', padding: '96px 24px 80px' }}>
      <p style={{
        fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px',
      }}>Blog</p>
      <h1 style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: 'clamp(28px, 4vw, 40px)',
        fontWeight: 700,
        letterSpacing: '-0.025em',
        marginBottom: '48px',
        lineHeight: 1.2,
      }}>AI pro obchod a obchodníky — články o B2B prodeji</h1>

      <style>{`
        .blog-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; transition: border-color 0.2s; }
        .blog-card:hover { border-color: rgba(255,107,74,0.4); }
        .blog-card-img { width: 100%; height: 180px; object-fit: cover; display: block; }
        @media (min-width: 640px) {
          .blog-card-inner { display: grid; grid-template-columns: 220px 1fr; }
          .blog-card-img { height: 100%; min-height: 160px; }
        }
      `}</style>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {posts.map((post) => (
          <Link key={post.href} href={post.href} style={{ textDecoration: 'none' }}>
            <article className="blog-card">
              <div className="blog-card-inner">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={440}
                  height={360}
                  className="blog-card-img"
                />
                <div style={{ padding: '20px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>{post.date}</p>
                    <span style={{
                      fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em',
                      padding: '2px 7px', borderRadius: '4px',
                      background: post.lang === 'EN' ? 'rgba(59,130,246,0.15)' : 'rgba(255,107,74,0.12)',
                      color: post.lang === 'EN' ? '#60a5fa' : 'var(--accent)',
                      border: `1px solid ${post.lang === 'EN' ? 'rgba(59,130,246,0.25)' : 'rgba(255,107,74,0.25)'}`,
                    }}>{post.lang}</span>
                  </div>
                  <h2 style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color: 'var(--text)',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}>{post.title}</h2>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{post.description}</p>
                  <p style={{ marginTop: '12px', fontSize: '13px', color: 'var(--accent)', fontWeight: 600 }}>Číst článek →</p>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
