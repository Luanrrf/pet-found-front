import React from 'react'
import { AnimalProps } from '../types/animal'
import Link from 'next/link'
import Image from 'next/image'

const PetCard = ({ id, images }: AnimalProps) => {
  const firstImage = images && images.length > 0 ? images[0].url : null
  if (!firstImage) return null

  return (
    <Link
      href={`/pet/${id}`}
      className="block h-[100px] w-[100px] overflow-hidden rounded-[20px]"
    >
      <Image
        src={firstImage}
        alt="pet"
        width={200}
        height={200}
        className="h-full w-full object-contain rounded-[20px] bg-stone-100"
      />
    </Link>
  )
}

export default PetCard
