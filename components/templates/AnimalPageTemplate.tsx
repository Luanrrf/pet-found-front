import { Animal } from '@/utils/animalData'
import AnimalProfileCard from '@/components/organisms/AnimalProfileCard'

interface Props {
  animal: Animal
  isLogged: boolean
}

export default function AnimalPageTemplate({ animal, isLogged }: Props) {
  return (
    <main>
      <AnimalProfileCard animal={animal} isLogged={isLogged} />
    </main>
  )
}
