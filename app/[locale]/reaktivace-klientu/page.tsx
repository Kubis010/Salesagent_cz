import type { Metadata } from 'next'
import ReactivationPage, { reactivationMetadata } from '@/components/ReactivationPage'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return reactivationMetadata(locale)
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  return <ReactivationPage locale={locale} />
}
