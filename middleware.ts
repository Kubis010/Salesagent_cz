import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale } from '@/lib/i18n'
import { legacyEnRedirects } from '@/lib/legacy-en-redirects'
import { browserLanguage } from '@/lib/browser-language'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const legacyDestination = legacyEnRedirects[pathname]
  if (legacyDestination) {
    const url = request.nextUrl.clone()
    url.pathname = legacyDestination
    return NextResponse.redirect(url, 301)
  }

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

  // Explicit language pages remain stable; choose a language only at the root.
  if (pathname === '/') {
    const saved = request.cookies.get('site_language')?.value
    const language = saved === 'cs' || saved === 'en' ? saved : browserLanguage(request.headers.get('accept-language'))
    const url = request.nextUrl.clone()
    url.pathname = `/${language}`
    const response = language === 'cs' ? NextResponse.redirect(url, 307) : NextResponse.rewrite(url)
    response.headers.set('Cache-Control', 'private, no-store')
    response.headers.set('Vary', 'Accept-Language, Cookie')
    return response
  }

  // Redirect subpaths to locale prefix
  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(url, 301)
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
}
