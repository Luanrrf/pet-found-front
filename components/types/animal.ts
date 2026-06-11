export interface AnimalImage {
  id: number
  url: string
  animalId: number
}

export interface AnimalProps {
  id?: number
  name?: string
  type?: string
  size?: string
  breed?: string
  gender?: string
  images?: AnimalImage[]
  observations?: string
  is_adopted?: boolean
  created_at?: string
  userId?: number
}
