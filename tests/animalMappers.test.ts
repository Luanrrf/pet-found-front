import {
  animalMatchesFilters,
  firstAnimalImage,
  normalizeFilterValue,
} from '../utils/animalMappers'

const animal = {
  id: 1,
  type: 'Dog',
  size: 'Small',
  gender: 'Male',
  images: [{ id: 1, url: '/dog.png', animalId: 1 }],
}

describe('animalMappers', () => {
  it('returns the first animal image', () => {
    expect(firstAnimalImage(animal)).toBe('/dog.png')
  })

  it('returns empty string when animal has no image', () => {
    expect(firstAnimalImage({ id: 1 })).toBe('')
  })

  it('returns empty string for null animal', () => {
    expect(firstAnimalImage(null)).toBe('')
  })

  it('normalizes filter values to lowercase', () => {
    expect(normalizeFilterValue('Dog')).toBe('dog')
  })

  it('normalizes undefined filter values to empty string', () => {
    expect(normalizeFilterValue()).toBe('')
  })

  it('matches when no filters are selected', () => {
    expect(animalMatchesFilters(animal, {})).toBe(true)
  })

  it('matches selected type', () => {
    expect(animalMatchesFilters(animal, { type: ['Dog'] })).toBe(true)
  })

  it('does not match a different type', () => {
    expect(animalMatchesFilters(animal, { type: ['Cat'] })).toBe(false)
  })

  it('matches selected size', () => {
    expect(animalMatchesFilters(animal, { size: ['Small'] })).toBe(true)
  })

  it('does not match a different size', () => {
    expect(animalMatchesFilters(animal, { size: ['Large'] })).toBe(false)
  })

  it('matches selected gender', () => {
    expect(animalMatchesFilters(animal, { gender: ['Male'] })).toBe(true)
  })

  it('does not match a different gender', () => {
    expect(animalMatchesFilters(animal, { gender: ['Female'] })).toBe(false)
  })

  it('matches combined filters', () => {
    expect(
      animalMatchesFilters(animal, {
        type: ['Dog'],
        size: ['Small'],
        gender: ['Male'],
      })
    ).toBe(true)
  })

  it('fails combined filters when one field is different', () => {
    expect(
      animalMatchesFilters(animal, {
        type: ['Dog'],
        size: ['Small'],
        gender: ['Female'],
      })
    ).toBe(false)
  })

  it('handles case-insensitive filters', () => {
    expect(animalMatchesFilters(animal, { type: ['dog'] })).toBe(true)
  })
})
