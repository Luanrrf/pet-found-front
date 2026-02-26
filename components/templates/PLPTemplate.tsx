'use client'
import { FilterProvider } from '../contexts/FilterContext'
import { PetList } from '../organisms/PetList'

export function PLPTemplate() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <FilterProvider>
        <h1 className="text-2xl font-bold mb-4">Lista de Animais</h1>
        <PetList />
      </FilterProvider>
    </div>
  )
}
