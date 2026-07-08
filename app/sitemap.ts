import type { MetadataRoute } from 'next'

const BASE_URL = 'https://salesagent.cz'
const locales = ['cs', 'en'] as const

const pages = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/how-it-works', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/resources', priority: 0.6, changeFrequency: 'monthly' as const },
  {
    path: '/resources/czech-business-companies-register',
    priority: 0.7,
    changeFrequency: 'yearly' as const,
  },
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

  return entries
}
