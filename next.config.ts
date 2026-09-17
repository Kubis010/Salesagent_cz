import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static export for Netlify (optional - comment out if using SSR on Netlify)
  // output: 'export',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/cs',
        permanent: true,
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
        source: '/en/how-it-works',
        destination: '/en',
        permanent: true,
      },
      // Broken pages (collateral from earlier repositioning) → 301 to relevant
      {
        source: '/contact-to-sales-agent',
        destination: '/cs/contact',
        permanent: true,
      },
      {
        source: '/sales-outsourcing-blog',
        destination: '/blog',
        permanent: true,
      },
      // EN sales-representation service page is live (ranks for "market entry czech republic").
      // CS stays redirected — Czech positioning is the owned-system homepage, not representation.
      {
        source: '/cs/sales-representation-czech-republic',
        destination: '/cs',
        permanent: true,
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
        source: '/en/blog/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
