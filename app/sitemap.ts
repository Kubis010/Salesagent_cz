import type { MetadataRoute } from 'next'

const BASE_URL = 'https://salesagent.cz'
const locales = ['cs', 'en'] as const

const pages = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/how-it-works', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/resources', priority: 0.6, changeFrequency: 'monthly' as const },
  {
    path: '/resources/czech-business-companies-register',
    priority: 0.7,
    changeFrequency: 'yearly' as const,
  },
]

const blogPosts = [
  { slug: '', priority: 0.8, changeFrequency: 'weekly' as const },
  { slug: '/sales-automation-ai-b2b-outreach', priority: 0.75, changeFrequency: 'yearly' as const },
  { slug: '/how-to-implement-sales-automation', priority: 0.75, changeFrequency: 'yearly' as const },
  { slug: '/sales-agent-definition-and-what-he-do', priority: 0.7, changeFrequency: 'yearly' as const },
  { slug: '/how-to-expand-your-business-and-sales-to-the-european-union', priority: 0.7, changeFrequency: 'yearly' as const },
  { slug: '/jak-personalizovat-cold-emaily-ai', priority: 0.8, changeFrequency: 'monthly' as const },
  { slug: '/automatizace-prodeje-jak-ai-meni-b2b-osloveni', priority: 0.8, changeFrequency: 'monthly' as const },
  { slug: '/jak-zavest-automatizaci-prodeje-ve-firme', priority: 0.8, changeFrequency: 'monthly' as const },
  { slug: '/obchodni-zastupce-definice-a-co-dela', priority: 0.75, changeFrequency: 'monthly' as const },
  { slug: '/jak-expandovat-s-obchodem-do-eu', priority: 0.75, changeFrequency: 'monthly' as const },
  { slug: '/crm-na-miru', priority: 0.8, changeFrequency: 'monthly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}${page.path}`])
          ),
        },
      })
    }
  }

  for (const post of blogPosts) {
    entries.push({
      url: `${BASE_URL}/blog${post.slug}`,
      lastModified: new Date(),
      changeFrequency: post.changeFrequency,
      priority: post.priority,
    })
  }

  return entries
}
