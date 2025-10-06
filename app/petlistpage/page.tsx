import TitleWithLocation from '@/components/molecules/TitleWithLocation'
import PageContainer from '@/components/pages/PageContainer'
import PageTemplate from '@/components/pages/PageTemplate'

export default function PetListPage() {
  return (
    <PageTemplate hasDefaultHeader>
      <div>
        <TitleWithLocation />
        <PageContainer>Lista de animais</PageContainer>
      </div>
    </PageTemplate>
  )
}
