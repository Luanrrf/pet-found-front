'use client'
import { useApi } from '@/utils/useApi'
import React from 'react'
import { AnimalProps } from '../types/animal'
import PetCard from '../molecules/PetCard'
import { useFilterContext } from '../contexts/FilterContext'

const PetCards = () => {
  const { pageContext } = useFilterContext()

  const {
    data: animals,
    loading,
    error,
  } = useApi<AnimalProps[]>('https://pet-found-backend.up.railway.app/animal')

  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar</p>

  const { filters } = pageContext

  const filteredAnimals = animals?.filter((animal) => {
    // const sizeFilter = filters.size ?? []
    const genderFilter = filters.gender ?? []
    const typeFilter = filters.type ?? []

    // const hasSelectedSize = sizeFilter.includes(animal.size || '')
    const hasSelectedGender = genderFilter.includes(animal.gender || '')
    const hasSelectedType = typeFilter.includes(animal.type || '')

    return (
      // (sizeFilter.length === 0 || hasSelectedSize) &&
      (genderFilter.length === 0 || hasSelectedGender) &&
      (typeFilter.length === 0 || hasSelectedType)
    )
  })

  return (
    <section className="flex gap-4 flex-wrap mt-10">
      {filteredAnimals?.map((animal) => (
        <PetCard {...animal} key={animal.id} />
      ))}
    </section>
  )
}

export default PetCards
