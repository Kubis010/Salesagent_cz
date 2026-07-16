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
    ]
  },
}

export default nextConfig
