import Title from '@/components/molecules/Title'
import PageContainer from '@/components/pages/PageContainer'
import PageTemplate from '@/components/pages/PageTemplate'
import { PLPTemplate } from '@/components/templates/PLPTemplate'

export default function PetListPage() {
  return (
    <PageTemplate hasDefaultHeader>
      <Title text="Encontre agora um animal que é a sua cara" />
      <div>
        <PageContainer>
          <PLPTemplate />
        </PageContainer>
      </div>
    </PageTemplate>
  )
}
