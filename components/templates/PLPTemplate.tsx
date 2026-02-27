'use client'
import { FilterProvider } from '../contexts/FilterContext'
import { PetList } from '../organisms/PetList'

export function PLPTemplate() {
  return (
    <FilterProvider>
      <PetList />
    </FilterProvider>
  )
}
