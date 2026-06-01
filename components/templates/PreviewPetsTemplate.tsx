import { Suspense } from 'react'
import { FilterProvider } from '../contexts/FilterContext'
import PetCarousel from '../organisms/PetCarousel'
import Title from '../molecules/Title'

export default function PreviewPetsTemplate() {
  return (
    <div className="min-h-screen">
      <Title text="Um desses animais pode ser seu novo amigo" />

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
