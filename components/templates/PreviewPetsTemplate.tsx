import { Suspense } from 'react'
import { FilterProvider } from '../contexts/FilterContext'
import TitleWithLocation from '../molecules/TitleWithLocation'
import PetCarousel from '../organisms/PetCarousel'

export default function PreviewPetsTemplate() {
  return (
    <div className="min-h-screen">
      <TitleWithLocation />

      <div className="mt-8">
        <Suspense fallback={null}>
          <FilterProvider>
            <PetCarousel />
          </FilterProvider>
        </Suspense>
      </div>
    </div>
  )
}
