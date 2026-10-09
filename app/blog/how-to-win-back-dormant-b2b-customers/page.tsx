import ReactivationArticle, { reactivationArticleMetadata } from '@/components/ReactivationArticle'

export const metadata = reactivationArticleMetadata('en')

export default function Page() {
  return <ReactivationArticle loc="en" />
}
