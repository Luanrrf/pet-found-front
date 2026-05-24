import { Animal } from '@/utils/animalData'
import AnimalBrandHeader from '@/components/molecules/AnimalBrandHeader'
import AnimalGrid from '@/components/organisms/AnimalGrid'

interface Props {
  animals: Animal[]
  onAnimalClick: (id: number) => void
  onFilterClick: () => void
}

export default function AnimalListTemplate({
  animals,
  onAnimalClick,
  onFilterClick,
}: Props) {
  return (
    <main>
      <section className="mx-auto max-w-[360px] overflow-hidden rounded-[18px] bg-[#FEE7B8]">
        <AnimalBrandHeader titleClassName="text-[22px] leading-[28px]" />
        <AnimalGrid
          animals={animals}
          onAnimalClick={onAnimalClick}
          onFilterClick={onFilterClick}
        />
      </section>
    </main>
  )
}
