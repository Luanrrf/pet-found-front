'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import IconButton from '@/components/atoms/IconButton'
import FilterIcon from '@/components/atoms/FilterIcon'
import { animals } from '@/utils/animalData'

export default function PetCarousel() {
  const router = useRouter()
  const [current, setCurrent] = useState(0)

  function previousPet() {
    if (current > 0) {
      setCurrent(current - 1)
    }
  }

  function nextPet() {
    if (current < animals.length - 1) {
      setCurrent(current + 1)
    }
  }

  function openAnimalPage() {
    const token = localStorage.getItem('token')
    const page = token ? 'animalpagelogged' : 'animalpagenotlogged'

    router.push(`/${page}?pet=${animals[current].id}`)
  }

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative flex w-full justify-center">
        <IconButton
          label="Abrir página do animal"
          onClick={openAnimalPage}
          className="relative z-10"
        >
          <img
            src={animals[current].image}
            alt="Pet"
            className="h-[300px] w-[220px] rounded-[24px] object-cover"
          />
        </IconButton>

        {current > 0 && (
          <IconButton
            label="Animal anterior"
            onClick={previousPet}
            className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl font-bold text-[#EF7E06] shadow-md"
          >
            ‹
          </IconButton>
        )}

        {current < animals.length - 1 && (
          <IconButton
            label="Próximo animal"
            onClick={nextPet}
            className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl font-bold text-[#EF7E06] shadow-md"
          >
            ›
          </IconButton>
        )}
      </div>

      <IconButton
        label="Abrir filtros"
        onClick={() => router.push('/filters')}
        className="mt-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#EF7E06] shadow-lg"
      >
        <FilterIcon />
      </IconButton>
    </div>
  )
}
