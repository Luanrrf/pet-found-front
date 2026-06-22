'use client'

import { FilterProvider } from '@/components/contexts/FilterContext'
import Title from '@/components/molecules/Title'
import PageContainer from '@/components/pages/PageContainer'
import PageTemplate from '@/components/pages/PageTemplate'
import { PLPTemplate } from '@/components/templates/PLPTemplate'
import { Suspense } from 'react'

export default function PetListPage() {
  return (
    <PageTemplate hasDefaultHeader>
      <div>
        <Title text="Encontre agora um animal que é a sua cara" />
        <PageContainer>
          <Suspense fallback={null}>
            <FilterProvider>
              <PLPTemplate />
            </FilterProvider>
          </Suspense>
        </PageContainer>
      </div>
    </PageTemplate>
  )
}
