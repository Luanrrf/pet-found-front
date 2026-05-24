interface Props {
  name: string
  value: string
  label: string
  defaultChecked?: boolean
}

export default function FilterOption({
  name,
  value,
  label,
  defaultChecked = false,
}: Props) {
  return (
    <label className="flex items-center gap-3 text-sm text-[#666]">
      <span className="relative h-5 w-10">
        <input
          type="checkbox"
          name={name}
          value={value}
          defaultChecked={defaultChecked}
          className="peer sr-only"
        />
        <span className="absolute inset-0 rounded-full bg-[#E7E7E7] transition-colors duration-200 peer-checked:bg-[#EF7E06]" />
        <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 peer-checked:translate-x-5" />
      </span>
      {label}
    </label>
  )
}
