import type { NextConfig } from 'next'
import { legacyEnRedirects } from './lib/legacy-en-redirects'

const nextConfig: NextConfig = {
  // Static export for Netlify (optional - comment out if using SSR on Netlify)
  // output: 'export',
  async redirects() {
    return [
      // Legacy entry URLs point directly to their final service/language destination.
      { source: '/externi-obchod', destination: '/cs/externi-obchod', statusCode: 301 },
      ...Object.entries(legacyEnRedirects).map(([source, destination]) => ({ source, destination, statusCode: 301 as const })),
      // Consolidated into the market-entry guide; explicit 301, no /en/blog/ chain.
      {
        source: '/blog/market-entry-czech-republic-hire-sales-vs-open-entity',
        destination: '/en/guides/czech-market-entry-for-b2b-companies',
        statusCode: 301,
      },
      {
        source: '/en/blog/market-entry-czech-republic-hire-sales-vs-open-entity',
        destination: '/en/guides/czech-market-entry-for-b2b-companies',
        statusCode: 301,
      },
      {
        source: '/llms',
        destination: '/llms.txt',
        permanent: true,
      },
      {
        source: '/cs/how-it-works',
        destination: '/cs',
        permanent: true,
      },
      {
        source: '/en/reaktivace-klientu',
        destination: '/en/client-reactivation',
        permanent: true,
      },
      {
        source: '/cs/client-reactivation',
        destination: '/cs/reaktivace-klientu',
        permanent: true,
      },
      {
        source: '/en/vlastni-outbound',
        destination: '/en/sales-representation-czech-republic',
        permanent: true,
      },
      {
        source: '/en/how-it-works',
        destination: '/en',
        permanent: true,
      },
      // EN sales-representation service page is live (ranks for "market entry czech republic").
      // The former Czech representation URL is replaced by the commercial service page.
      {
        source: '/cs/sales-representation-czech-republic',
        destination: '/cs/externi-obchod',
        statusCode: 301,
      },
      {
        source: '/:locale(cs|en)/guides/expand-b2b-sales-to-czech-republic',
        destination: '/:locale',
        permanent: true,
      },
      {
        source: '/:locale(cs|en)/guides/b2b-lead-generation-in-the-czech-republic',
        destination: '/:locale',
        permanent: true,
      },
      {
        source: '/czech-business-companies-register',
        destination: '/en/resources/czech-business-companies-register',
        permanent: true,
      },
      {
        source: '/cs/resources/czech-business-companies-register',
        destination: '/en/resources/czech-business-companies-register',
        permanent: true,
      },
      {
        source: '/blog/cold-e-mail-vzor-cesky',
        destination: '/blog/cold-email-vzor-cesky',
        permanent: true,
      },
      {
        source: '/blog/gdpr-a-cold-e-mail',
        destination: '/blog/gdpr-a-cold-email',
        permanent: true,
      },
      {
        source: '/blog/jak-personalizovat-cold-e-maily-ai',
        destination: '/blog/jak-personalizovat-cold-emaily-ai',
        permanent: true,
      },
      // EN-prefixed blog URLs Google indexed (blogs live at /blog/, not /en/blog/)
      {
        source: '/en/blog/external-sales-representation-czech-republic',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/en/blog/:path+',
        destination: '/blog/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
