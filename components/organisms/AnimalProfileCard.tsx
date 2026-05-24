import { Animal } from '@/utils/animalData'
import AnimalBrandHeader from '@/components/molecules/AnimalBrandHeader'
import AnimalDetails from '@/components/organisms/AnimalDetails'
import AnimalGallery from '@/components/organisms/AnimalGallery'

interface Props {
  animal: Animal
  isLogged: boolean
}

export default function AnimalProfileCard({ animal, isLogged }: Props) {
  return (
    <section className="mx-auto max-w-[360px] overflow-hidden rounded-[18px] bg-[#FEE7B8]">
      <AnimalBrandHeader
        title="Esse pet pode ser seu amigo!"
        titleClassName="text-[28px] leading-[32px]"
      />

      <div className="rounded-t-[14px] p-4">
        <AnimalGallery animal={animal} blurred={!isLogged} />
        <AnimalDetails animal={animal} blurred={!isLogged} />
      </div>
    </section>
  )
}
