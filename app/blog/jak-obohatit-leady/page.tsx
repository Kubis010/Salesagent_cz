import LeadEnrichmentArticle, { leadEnrichmentMetadata } from '@/components/LeadEnrichmentArticle'

export const metadata = leadEnrichmentMetadata('cs')

export default function Page() {
  return <LeadEnrichmentArticle loc="cs" />
}
