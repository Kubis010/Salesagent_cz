import { cs } from './cs'
import { en } from './en'
import type { Translations } from './cs'

export type Locale = 'cs' | 'en'
export const locales: Locale[] = ['cs', 'en']
export const defaultLocale: Locale = 'cs'

export function getTranslations(locale: Locale): Translations {
  return locale === 'en' ? en : cs
}

export type { Translations } from './cs'
