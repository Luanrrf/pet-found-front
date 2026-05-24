import { ProductProvider } from '@/components/contexts/ProductContext'
import PageContainer from '@/components/pages/PageContainer'
import PageTemplate from '@/components/pages/PageTemplate'
import { PDPTemplate } from '@/components/templates/PDPTemplate'

export default async function PetPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <PageTemplate hasDefaultHeader>
      <div>
        <h1 className="text-[#333] font-inter text-[32px] not-italic font-bold leading-normal">
          Esse{' '}
          <span className="text-[var(--Primary,#EF7E06)] font-bold">pet</span>{' '}
          pode ser seu amigo!
        </h1>

        <PageContainer>
          <ProductProvider petId={id}>
            <PDPTemplate />
          </ProductProvider>
        </PageContainer>
      </div>
    </PageTemplate>
  )
}
