import React from 'react'
import { AnimalProps } from '../types/animal'
import Link from 'next/link'
import Image from 'next/image'
import { firstAnimalImage } from '@/utils/animalMappers'

const PetCard = (animal: AnimalProps) => {
  const firstImage = firstAnimalImage(animal)
  if (!firstImage) return null

  const { id } = animal

  return (
    <Link
      href={`/pet/${id}`}
      className="block md:h-[100px] max-md:h-auto md:w-[100px] max-md:w-fit aspect-square overflow-hidden rounded-[20px] m-auto"
    >
      <Image
        src={firstImage}
        alt="pet"
        width={200}
        height={200}
        className="h-full w-full rounded-[20px] bg-stone-100 object-contain"
      />
    </Link>
  )
}

export default PetCard
