import { cs } from './cs'
import { en } from './en'

export type Locale = 'cs' | 'en'
export const locales: Locale[] = ['cs', 'en']
export const defaultLocale: Locale = 'cs'

export function getTranslations(locale: Locale) {
  return locale === 'en' ? en : cs
}

export type { Translations } from './cs'
