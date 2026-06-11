export function getFormString(formData: FormData, key: string) {
  const value = formData.get(key)

  return typeof value === 'string' ? value.trim() : ''
}

export function optionalField(value: FormDataEntryValue | null) {
  if (typeof value !== 'string') return undefined

  const trimmed = value.trim()

  return trimmed ? trimmed : undefined
}
