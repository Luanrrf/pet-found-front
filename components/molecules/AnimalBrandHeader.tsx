'use client'

interface Props {
  location?: string
  title?: string
  titleClassName?: string
}

export default function AnimalBrandHeader({
  title = 'Esse pet pode ser seu amigo!',
  titleClassName = 'text-[28px] leading-[32px]',
}: Props) {
  return (
    <div className="px-4 pb-4 pt-5">
      <p className={`mt-1 font-bold text-[#333] ${titleClassName}`}>{title}</p>
    </div>
  )
}
