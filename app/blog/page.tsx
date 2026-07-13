import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | SalesAgent.cz',
  description: 'Articles on B2B sales, outreach and building sales systems.',
  alternates: { canonical: 'https://salesagent.cz/blog' },
}

const posts = [
  {
    href: '/blog/jak-personalizovat-cold-emaily-ai',
    title: 'Jak personalizovat cold emaily pomocí AI — průvodce pro B2B firmy',
    date: '13. července 2026',
    description:
      'Automatický cold mailing nemusí znamenat spam. Jak AI personalizuje cold emaily na základě webu každé firmy a proč to generuje víc odpovědí než šablony.',
  },
  {
    href: '/blog/how-to-implement-sales-automation',
    title: 'How to Implement Sales Automation in Your Company',
    date: '12 February 2025',
    description:
      'A practical step-by-step guide — from defining your ideal customer to measuring results. What to set up before you launch, and how to avoid the most common mistakes.',
  },
  {
    href: '/blog/sales-automation-ai-b2b-outreach',
    title: 'Sales Automation: How AI Is Changing B2B Outreach',
    date: '5 February 2025',
    description:
      'AI removes the repetitive prospecting work from your pipeline. Here is what actually changes — and what it means for your sales team.',
  },
  {
    href: '/blog/sales-agent-definition-and-what-he-do',
    title: 'Sales Agent — definition and what he does?',
    date: '9 January 2025',
    description:
      'What a sales agent actually does day to day, what skills the role demands, and how it differs from a regular sales rep.',
  },
  {
    href: '/blog/how-to-expand-your-business-and-sales-to-the-european-union',
    title: 'How to expand your business and sales to the European Union',
    date: '15 January 2025',
    description:
      'A practical guide for Czech and Slovak companies looking to grow into EU markets — from first contacts to building a pipeline abroad.',
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
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '10px' }}>{post.date}</p>
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
