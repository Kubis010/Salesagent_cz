import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale } from '@/lib/i18n'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Skip paths that must keep their exact URLs for SEO/GSC
  if (
    pathname.startsWith('/blog') ||
    pathname.startsWith('/czech-business-companies-register')
  ) {
    return NextResponse.next()
  }

  // Check if pathname already has a locale
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (hasLocale) return NextResponse.next()

  // Rewrite root to default locale — URL stays as-is, content from /cs/
  // This keeps salesagent.cz/ indexable (not a redirect) while serving CS content
  // Subpaths (e.g. /pricing) still redirect so they get the locale prefix in the URL
  if (pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = `/${defaultLocale}`
    return NextResponse.rewrite(url)
  }

  // Redirect subpaths to locale prefix
  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(url, 301)
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
}
