import PageTemplate from '@/components/pages/PageTemplate'
import AnimalPageTemplate from '@/components/templates/AnimalPageTemplate'
import { getAnimalById } from '@/utils/animalData'

interface Props {
  searchParams: Promise<{
    pet?: string
  }>
}

export default async function AnimalPageLogged({ searchParams }: Props) {
  const params = await searchParams
  const animal = getAnimalById(Number(params.pet))

  return (
    <PageTemplate hasDefaultHeader>
      <AnimalPageTemplate animal={animal} isLogged />
    </PageTemplate>
  )
}
