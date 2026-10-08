import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { posts } from '@/lib/blog-posts'

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
      <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '-28px', marginBottom: '40px' }}>
        Články jsou česky i anglicky. Anglické články jsou označené štítkem EN.
        {' '}The EN label marks articles written for English-speaking readers.
      </p>

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
                  <p style={{ marginTop: '12px', fontSize: '13px', color: 'var(--accent)', fontWeight: 600 }}>{post.lang === 'EN' ? 'Read article →' : 'Číst článek →'}</p>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
