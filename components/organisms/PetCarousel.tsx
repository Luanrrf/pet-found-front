'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import IconButton from '@/components/atoms/IconButton'
import Link from 'next/link'
import Image from 'next/image'
import { useFilterContext } from '../contexts/FilterContext'
import { Button } from '../atoms/Button'

export default function PetCarousel() {
  const router = useRouter()
  const [current, setCurrent] = useState(0)
  const { pageContext } = useFilterContext()
  const { animals } = pageContext

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

  const actualAnimal = animals[current]

  if (!actualAnimal || !actualAnimal.images?.[0]?.url) return

  const animalSrc = actualAnimal.images?.[0]?.url

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative flex w-full justify-center max-w-[400px]">
        <Link
          className="z-10 absolute top-1/2 left-1/2 -translate-1/2 w-[258px]"
          href={`/pet/${actualAnimal.id}`}
        >
          <Image
            src={animalSrc}
            alt="Pet"
            width={258}
            height={365}
            className="max-w-[258px] w-full aspect-[258/365] object-cover rounded-[20px] relative z-10 border-1 border-white"
          />
        </Link>
        <Image
          src={'/petpage-shadow.png'}
          alt="Pet"
          width={350}
          height={424}
          className="w-full aspect-[350/424] object-cover  max-w-[350px]"
        />

        {current > 0 && (
          <IconButton
            label="Animal anterior"
            onClick={previousPet}
            className="absolute -left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-3xl font-bold text-[#EF7E06] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              className="-scale-x-100"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.8686 11.8686L2.37338 21.3638L0 18.9904L8.3085 10.6819L0 2.37338L2.37338 0L11.8686 9.49519C12.1832 9.80995 12.36 10.2368 12.36 10.6819C12.36 11.127 12.1832 11.5538 11.8686 11.8686Z"
                fill="#EF7E06"
              />
            </svg>
          </IconButton>
        )}

        {current < animals.length - 1 && (
          <IconButton
            label="Próximo animal"
            onClick={nextPet}
            className="absolute -right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-3xl font-bold text-[#EF7E06] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.8686 11.8686L2.37338 21.3638L0 18.9904L8.3085 10.6819L0 2.37338L2.37338 0L11.8686 9.49519C12.1832 9.80995 12.36 10.2368 12.36 10.6819C12.36 11.127 12.1832 11.5538 11.8686 11.8686Z"
                fill="#EF7E06"
              />
            </svg>
          </IconButton>
        )}
      </div>

      <Link href="pets">
        <Button className="bg-[var(--primary)] w-full max-w-[260px] py-[10px] m-auto text-white rounded-xl px-4 hover:brightness-80 cursor-pointer mt-10">
          Ver todos os animais
        </Button>
      </Link>

      <IconButton
        label="Abrir filtros"
        onClick={() => router.push('/createpet')}
        className="mt-4 flex items-center justify-center cursor-pointer hover:brightness-80"
      >
        <Image
          src="/createAnimalIcon.png"
          alt="Ícone de adicionar animal"
          width={100}
          height={100}
        />
      </IconButton>
    </div>
  )
}
