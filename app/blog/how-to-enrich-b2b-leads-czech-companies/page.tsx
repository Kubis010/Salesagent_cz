import LeadEnrichmentArticle, { leadEnrichmentMetadata } from '@/components/LeadEnrichmentArticle'

export const metadata = leadEnrichmentMetadata('en')

export default function Page() {
  return <LeadEnrichmentArticle loc="en" />
}
