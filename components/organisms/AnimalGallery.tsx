import { Animal } from '@/utils/animalData'

interface Props {
  animal: Animal
  blurred?: boolean
}

export default function AnimalGallery({ animal, blurred = false }: Props) {
  const blurClass = blurred ? 'blur-[3px] select-none' : ''

  return (
    <>
      <div className="relative">
        <label className="absolute left-2 top-2 z-10 flex items-center gap-2 rounded-full bg-white/85 px-2 py-1 text-xs text-[#666]">
          <input
            type="checkbox"
            className="h-4 w-4 accent-[#EF7E06]"
            readOnly
          />
          Adotado?
        </label>

        <img
          src={animal.image}
          alt="Animal"
          className={`h-[260px] w-full rounded-xl object-cover ${blurClass}`}
        />
      </div>

      <div className={`mt-3 grid grid-cols-3 gap-3 ${blurClass}`}>
        {[0, 1, 2].map((item) => (
          <img
            key={item}
            src={animal.image}
            alt="Miniatura do animal"
            className="h-16 w-full rounded-lg object-cover"
          />
        ))}
      </div>
    </>
  )
}
