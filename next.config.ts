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
    ]
  },
}

export default nextConfig
