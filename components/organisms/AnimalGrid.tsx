import { Animal } from '@/utils/animalData'
import AnimalThumbnail from '@/components/molecules/AnimalThumbnail'
import IconButton from '@/components/atoms/IconButton'
import FilterIcon from '@/components/atoms/FilterIcon'

interface Props {
  animals: Animal[]
  onAnimalClick: (id: number) => void
  onFilterClick: () => void
}

export default function AnimalGrid({
  animals,
  onAnimalClick,
  onFilterClick,
}: Props) {
  return (
    <div className="rounded-t-[14px] bg-white px-4 pb-5 pt-4">
      <IconButton
        label="Abrir filtros"
        onClick={onFilterClick}
        className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#EF7E06]"
      >
        <FilterIcon />
      </IconButton>

      <div className="grid grid-cols-3 gap-3">
        {animals.map((animal, index) => (
          <AnimalThumbnail
            key={`${animal.id}-${index}`}
            image={animal.image}
            onClick={() => onAnimalClick(animal.id)}
          />
        ))}
      </div>
    </div>
  )
}
