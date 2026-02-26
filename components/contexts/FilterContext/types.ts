import { AnimalProps } from '@/components/types/animal'

export interface FilterContextProps {
  pageContext: AnimalProps[]
  setPageContext: React.Dispatch<React.SetStateAction<AnimalProps[]>>
}
