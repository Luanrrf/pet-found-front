import PageContainer from '@/components/pages/PageContainer'
import PageTemplate from '@/components/pages/PageTemplate'

export default function CreatePetPage() {
  return (
    <PageTemplate hasDefaultHeader>
      <div>
        <h1 className="text-[#333] font-inter text-[32px] not-italic font-bold leading-normal">
          Encontrou um{' '}
          <span className="text-[var(--Primary,#EF7E06)] font-bold">
            animal
          </span>{' '}
          perdido?
        </h1>
        <PageContainer>CONTEÚDO DE PET PAGE</PageContainer>
      </div>
    </PageTemplate>
  )
}
