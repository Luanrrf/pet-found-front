import IconButton from '@/components/atoms/IconButton'

interface Props {
  image: string
  onClick: () => void
  label?: string
}

export default function AnimalThumbnail({
  image,
  onClick,
  label = 'Abrir página do animal',
}: Props) {
  return (
    <IconButton
      label={label}
      onClick={onClick}
      className="overflow-hidden rounded-lg bg-[#F2E8DE]"
    >
      <img src={image} alt="Animal" className="h-[72px] w-full object-cover" />
    </IconButton>
  )
}
