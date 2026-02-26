type InputProps = {
  type: string
  id: string
  name: string
  placeholder?: string
  required?: boolean
}

export function Input({ type, id, name, required, placeholder }: InputProps) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      required={required ?? false}
      placeholder={placeholder}
      className="
        w-full
        rounded-full
        border
        border-[#E6DCC8]
        bg-[#FBF3E3]
        px-4
        py-2.5
        text-[#5F4A2E]
        placeholder-[#A08E74]
        outline-none
        focus:border-[#C5B89E]
        transition
      "
    />
  )
}
