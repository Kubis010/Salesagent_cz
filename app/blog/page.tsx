import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | SalesAgent.cz',
  description: 'Articles on B2B sales, outreach and building sales systems.',
  alternates: { canonical: 'https://salesagent.cz/blog' },
}

const posts = [
  {
    href: '/blog/external-sales-representation-czech-republic',
    lang: 'EN',
    title: 'External Sales Representation in Czech Republic: How to Start Without Risk',
    date: '27 July 2026',
    description:
      'How to enter the Czech B2B market through external sales representation — market testing approach, what to expect in the first 2–3 months, and how AI outreach changes the economics.',
  },
  {
    href: '/blog/ai-pro-obchod-a-prodej',
    lang: 'CS',
    title: 'AI pro obchod a prodej: Jak umělá inteligence mění B2B',
    date: '26. července 2026',
    description: 'AI pro obchod a prodej přestává být buzzword — stává se konkurenční výhodou. Jak konkrétně umělá inteligence mění B2B prospekting, cold outreach a správu leadů.',
  },
  {
    href: '/blog/jak-vyuzit-ai-v-prodeji',
    lang: 'CS',
    title: 'Jak využít AI v prodeji: Praktický průvodce pro B2B firmy',
    date: '24. července 2026',
    description: 'Jak využít umělou inteligenci v prodeji konkrétně a bez velkých investic. Průvodce pro B2B firmy — od automatizace prospektingu po personalizované oslovení.',
  },
  {
    href: '/blog/ai-agent-pro-generovani-leadu',
    lang: 'CS',
    title: 'AI agent pro generování leadů: Jak funguje a co od něj čekat',
    date: '21. července 2026',
    description: 'AI agent pro generování leadů hledá B2B kontakty, analyzuje je a oslovuje automaticky. Jak takový agent funguje, co umí a kde má své hranice.',
  },
  {
    href: '/blog/crm-na-miru',
    lang: 'CS',
    title: 'CRM na míru: Proč generické systémy firmám nevyhovují',
    date: '16. července 2026',
    description:
      'Salesforce a HubSpot jsou drahé a přeplácané pro většinu B2B firem. CRM na míru řeší přesně to, co potřebujete — bez zbytečných funkcí a zbytečných nákladů.',
  },
  {
    href: '/blog/jak-personalizovat-cold-emaily-ai',
    lang: 'CS',
    title: 'Jak personalizovat cold emaily pomocí AI — průvodce pro B2B firmy',
    date: '13. července 2026',
    description:
      'Automatický cold mailing nemusí znamenat spam. Jak AI personalizuje cold emaily na základě webu každé firmy a proč to generuje víc odpovědí než šablony.',
  },
  {
    href: '/blog/jak-zavest-automatizaci-prodeje-ve-firme',
    lang: 'CS',
    title: 'Jak zavést automatizaci prodeje ve firmě',
    date: '12. února 2025',
    description:
      'Praktický návod krok za krokem — od definice ideálního zákazníka po měření výsledků. Co nastavit před spuštěním a jak se vyhnout nejčastějším chybám.',
  },
  {
    href: '/blog/how-to-implement-sales-automation',
    lang: 'EN',
    title: 'How to Implement Sales Automation in Your Company',
    date: '12 February 2025',
    description:
      'A practical step-by-step guide — from defining your ideal customer to measuring results. What to set up before you launch, and how to avoid the most common mistakes.',
  },
  {
    href: '/blog/automatizace-prodeje-jak-ai-meni-b2b-osloveni',
    lang: 'CS',
    title: 'Automatizace prodeje: Jak AI mění B2B oslovení',
    date: '5. února 2025',
    description:
      'AI automatizace B2B obchodu nahrazuje rutinní prospekting. Co se ve vašem pipeline skutečně změní — a co to znamená pro váš obchodní tým.',
  },
  {
    href: '/blog/sales-automation-ai-b2b-outreach',
    lang: 'EN',
    title: 'Sales Automation: How AI Is Changing B2B Outreach',
    date: '5 February 2025',
    description:
      'AI removes the repetitive prospecting work from your pipeline. Here is what actually changes — and what it means for your sales team.',
  },
  {
    href: '/blog/jak-expandovat-s-obchodem-do-eu',
    lang: 'CS',
    title: 'Jak expandovat s obchodem do Evropské unie',
    date: '15. ledna 2025',
    description:
      'Praktický průvodce expanzí B2B obchodu do EU — průzkum trhu, právní rámec, lokalizace, strategie oslovení a jak najít správný vstupní bod.',
  },
  {
    href: '/blog/how-to-expand-your-business-and-sales-to-the-european-union',
    lang: 'EN',
    title: 'How to expand your business and sales to the European Union',
    date: '15 January 2025',
    description:
      'A practical guide for Czech and Slovak companies looking to grow into EU markets — from first contacts to building a pipeline abroad.',
  },
  {
    href: '/blog/obchodni-zastupce-definice-a-co-dela',
    lang: 'CS',
    title: 'Obchodní zástupce — definice a co vlastně dělá?',
    date: '9. ledna 2025',
    description:
      'Co obchodní zástupce skutečně dělá den co den, jaké dovednosti role vyžaduje a jak se liší od běžného obchodníka.',
  },
  {
    href: '/blog/sales-agent-definition-and-what-he-do',
    lang: 'EN',
    title: 'Sales Agent — definition and what he does?',
    date: '9 January 2025',
    description:
      'What a sales agent actually does day to day, what skills the role demands, and how it differs from a regular sales rep.',
  },
]

export default function BlogIndex() {
  return (
    <div style={{ paddingTop: '96px', paddingBottom: '80px', maxWidth: '760px', margin: '0 auto', padding: '96px 24px 80px' }}>
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
      }}>Articles on B2B sales and outreach</h1>

      <style>{`
        .blog-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; padding: 28px 32px; transition: border-color 0.2s; }
        .blog-card:hover { border-color: rgba(255,107,74,0.4); }
      `}</style>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {posts.map((post) => (
          <Link key={post.href} href={post.href} style={{ textDecoration: 'none' }}>
            <article className="blog-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
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
                fontSize: '20px',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: 'var(--text)',
                marginBottom: '10px',
                lineHeight: 1.3,
              }}>{post.title}</h2>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65 }}>{post.description}</p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--accent)', fontWeight: 600 }}>Read more →</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
