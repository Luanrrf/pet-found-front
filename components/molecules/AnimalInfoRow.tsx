interface Props {
  label: string
  value: string
  blurred?: boolean
}

export default function AnimalInfoRow({
  label,
  value,
  blurred = false,
}: Props) {
  return (
    <div className={blurred ? 'blur-[3px] select-none' : ''}>
      <dt className="inline">{label}: </dt>
      <dd className="inline">{value}</dd>
    </div>
  )
}
