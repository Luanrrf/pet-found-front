import { Animal } from '@/utils/animalData'
import AnimalInfoRow from '@/components/molecules/AnimalInfoRow'

interface Props {
  animal: Animal
  blurred?: boolean
}

export default function AnimalDetails({ animal, blurred = false }: Props) {
  return (
    <dl className="mt-4 space-y-1 text-xs leading-5 text-[#555]">
      <AnimalInfoRow label="Nome" value={animal.name} blurred={blurred} />
      <AnimalInfoRow label="Cor" value={animal.color} blurred={blurred} />
      <AnimalInfoRow label="Porte" value={animal.size} blurred={blurred} />
      <AnimalInfoRow label="Sexo" value={animal.gender} blurred={blurred} />
      <AnimalInfoRow
        label="Observações"
        value={animal.observations}
        blurred={blurred}
      />
    </dl>
  )
}
