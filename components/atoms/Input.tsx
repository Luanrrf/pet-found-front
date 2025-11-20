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
      className="border rounded-xl px-4 py-2 w-full"
    />
  )
}
