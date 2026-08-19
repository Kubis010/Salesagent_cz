import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static export for Netlify (optional - comment out if using SSR on Netlify)
  // output: 'export',
  async redirects() {
    return [
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
        destination: '/en/sales-representation-czech-republic',
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
