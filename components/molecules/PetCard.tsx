import React from 'react'
import { AnimalProps } from '../types/animal'
import Link from 'next/link'
import Image from 'next/image'

const PetCard = ({ id, image }: AnimalProps) => {
  return (
    <Link href={`/pet/${id}`} className="w-[100px] h-[100px] rounded-[20px]">
      <Image
        src={image ?? ''}
        alt="pet"
        width={200}
        height={200}
        className="aspect-square object-cover rounded-[20px]"
      />
    </Link>
  )
}

export default PetCard
