import type { AnimalProps } from '@/components/types/animal'

export function firstAnimalImage(animal?: AnimalProps | null) {
  return animal?.images?.[0]?.url ?? ''
}

export function normalizeFilterValue(value?: string) {
  return value?.toLowerCase() ?? ''
}

export function animalMatchesFilters(
  animal: AnimalProps,
  filters: Record<string, string[]>
) {
  const selectedSize = (filters.size ?? []).map(normalizeFilterValue)
  const selectedGender = (filters.gender ?? []).map(normalizeFilterValue)
  const selectedType = (filters.type ?? []).map(normalizeFilterValue)

  const hasSelectedSize = selectedSize.includes(
    normalizeFilterValue(animal.size)
  )
  const hasSelectedGender = selectedGender.includes(
    normalizeFilterValue(animal.gender)
  )
  const hasSelectedType = selectedType.includes(
    normalizeFilterValue(animal.type)
  )

  return (
    (selectedSize.length === 0 || hasSelectedSize) &&
    (selectedGender.length === 0 || hasSelectedGender) &&
    (selectedType.length === 0 || hasSelectedType)
  )
}
