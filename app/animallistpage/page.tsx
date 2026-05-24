'use client'

import { useRouter } from 'next/navigation'
import PageTemplate from '@/components/pages/PageTemplate'
import AnimalListTemplate from '@/components/templates/AnimalListTemplate'
import { animalList } from '@/utils/animalData'

export default function AnimalListPage() {
  const router = useRouter()

  function openAnimalPage(id: number) {
    const token = localStorage.getItem('token')
    const page = token ? 'animalpagelogged' : 'animalpagenotlogged'

    router.push(`/${page}?pet=${id}`)
  }

  return (
    <PageTemplate hasDefaultHeader>
      <AnimalListTemplate
        animals={animalList}
        onAnimalClick={openAnimalPage}
        onFilterClick={() => router.push('/filters')}
      />
    </PageTemplate>
  )
}
