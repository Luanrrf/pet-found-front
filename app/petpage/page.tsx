import TitleWithLocation from '@/components/molecules/TitleWithLocation'
import PageContainer from '@/components/pages/PageContainer'
import PageTemplate from '@/components/pages/PageTemplate'

export default function PetPage() {
  return (
    <PageTemplate hasDefaultHeader>
      <div>
        <TitleWithLocation />
        <PageContainer>CONTEÚDO DE PET PAGE</PageContainer>
      </div>
    </PageTemplate>
  )
}
