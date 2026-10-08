import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { posts } from '@/lib/blog-posts'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (locale === 'cs') return { robots: { index: false, follow: true } }
  return {
    title: 'Blog: Czech Market Entry, B2B Sales & Outbound',
    description:
      'English articles on entering the Czech and Slovak market, outsourced B2B sales, outbound automation and client reactivation.',
    alternates: {
      canonical: 'https://salesagent.cz/en/blog',
      languages: { en: 'https://salesagent.cz/en/blog', 'x-default': 'https://salesagent.cz/en/blog' },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://salesagent.cz/en/blog',
      siteName: 'SalesAgent.cz',
      title: 'Blog: Czech Market Entry, B2B Sales & Outbound | SalesAgent.cz',
      description: 'English articles on Czech market entry, outsourced B2B sales and outbound automation.',
    },
  }
}

export default async function EnglishBlogIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale === 'cs') redirect('/blog')

  const enPosts = posts.filter((p) => p.lang === 'EN')

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', padding: '96px 24px 80px' }}>
      <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>Blog</p>
      <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: '16px', lineHeight: 1.2 }}>
        Czech market entry and outsourced B2B sales
      </h1>
      <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '40px' }}>
        Practical articles for companies selling into the Czech Republic and Slovakia. Start with the{' '}
        <Link href="/en/guides/czech-market-entry-for-b2b-companies" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Czech market entry playbook</Link>.
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
        {enPosts.map((post) => (
          <Link key={post.href} href={post.href} style={{ textDecoration: 'none' }}>
            <article className="blog-card">
              <div className="blog-card-inner">
                <Image src={post.image} alt={post.title} width={440} height={360} className="blog-card-img" />
                <div style={{ padding: '20px 24px' }}>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 8px' }}>{post.date}</p>
                  <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '18px', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--text)', marginBottom: '8px', lineHeight: 1.3 }}>{post.title}</h2>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{post.description}</p>
                  <p style={{ marginTop: '12px', fontSize: '13px', color: 'var(--accent)', fontWeight: 600 }}>Read article →</p>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
