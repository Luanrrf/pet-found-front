import TitleWithLocation from '../molecules/TitleWithLocation'
import PetCarousel from '../organisms/PetCarousel'

export default function FirstScreenTemplate() {
  return (
    <div className="bg-white min-h-screen px-5 py-5">
      <TitleWithLocation />

      <div className="mt-8">
        <PetCarousel />
      </div>
    </div>
  )
}
