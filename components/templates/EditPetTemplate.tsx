'use client'

import EditPetForm from '@/components/organisms/EditPetForm'
import type { AnimalProps } from '../types/animal'

interface Props {
  onSubmit: (data: FormData) => void
  animal?: AnimalProps | null
}

export default function EditPetTemplate({ onSubmit, animal }: Props) {
  return (
    <div className="px-5 py-6 min-h-screen">
      <h1 className="text-[#333] max-md:text-[24px] md:text-[32px] font-bold leading-[40px] mb-6">
        Encontrou um <span className="text-[#EF7E06]">animal</span>
        <br />
        perdido?
      </h1>

      <EditPetForm onSubmit={onSubmit} animal={animal} />
    </div>
  )
}
