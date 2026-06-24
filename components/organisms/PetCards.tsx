'use client'
import { useApi } from '@/utils/useApi'
import React, { useEffect, useState } from 'react'
import { AnimalProps } from '../types/animal'
import PetCard from '../molecules/PetCard'
import { useFilterContext } from '../contexts/FilterContext'
import { API_URL } from '../constants/api'
import Loader from '../atoms/Loader'
import { animalMatchesFilters } from '@/utils/animalMappers'
import getUserAuthentication from '../utils/getUserAuthentication'

const PetCards = () => {
  const { pageContext } = useFilterContext()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    getUserAuthentication().then((user) => {
      setIsLoggedIn(!!user && user.status !== 401)
    })
  }, [])

  const {
    data: animals,
    loading,
    error,
  } = useApi<AnimalProps[]>(
    `${API_URL}/animal`,
    { cache: 'no-store' },
    { disableCache: true }
  )

  if (loading) return <Loader />
  if (error) return <p>Erro ao carregar</p>

  const { filters } = pageContext

  const filteredAnimals = animals?.filter((animal) =>
    animalMatchesFilters(animal, filters)
  )

  return (
    <section className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
      {filteredAnimals?.map((animal) => (
        <PetCard {...animal} blurImage={!isLoggedIn} key={animal.id} />
      ))}
    </section>
  )
}

export default PetCards
