import type { AnimalProps } from '@/components/types/animal'
import { API_URL } from '../components/constants/api'

export function firstAnimalImage(animal?: AnimalProps | null) {
  return normalizeAnimalImageUrl(animal?.images?.[0]?.url)
}

export function normalizeAnimalImageUrl(url?: string | null) {
  if (!url) return ''

  if (url.startsWith('blob:') || url.startsWith('data:')) return url

  if (/^https?:\/\//i.test(url)) return url

  if (url.startsWith('/api/')) return url

  if (url.startsWith('/')) return `${API_URL}${url}`

  return `${API_URL}/${url}`
}

export function normalizeFilterValue(value?: string) {
  return value?.toLowerCase() ?? ''
}

export function animalMatchesFilters(
  animal: AnimalProps,
  filters: Record<string, string[]>
) {
  if (animal.is_adopted) return false

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
