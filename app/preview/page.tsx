import PreviewPetsTemplate from '@/components/templates/PreviewPetsTemplate'
import PageTemplate from '@/components/pages/PageTemplate'

export default function PetPage() {
  return (
    <PageTemplate hasDefaultHeader>
      <PreviewPetsTemplate />
    </PageTemplate>
  )
}
