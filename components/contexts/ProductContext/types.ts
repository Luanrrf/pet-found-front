import { AnimalProps } from '@/components/types/animal'

export interface ProductContextProps {
  productContext: AnimalProps | null
  setProductContext: React.Dispatch<React.SetStateAction<AnimalProps | null>>
}
