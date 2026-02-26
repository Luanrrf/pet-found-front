import PageContainer from '@/components/pages/PageContainer'
import PageTemplate from '@/components/pages/PageTemplate'
import { PLPTemplate } from '@/components/templates/PLPTemplate'

export default function PetListPage() {
  return (
    <PageTemplate hasDefaultHeader>
      <h1>Encontre agora um animal que é a sua cara</h1>
      <div>
        <PageContainer>
          <PLPTemplate />
        </PageContainer>
      </div>
    </PageTemplate>
  )
}
