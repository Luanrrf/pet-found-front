import { AnimalProps } from '@/components/types/animal'

export interface FilterContextProps {
  pageContext: FilterPageContextProps
  setPageContext: React.Dispatch<React.SetStateAction<FilterPageContextProps>>
}

export interface FilterPageContextProps {
  animals: AnimalProps[]
  filters: { [key: string]: string[] }
}
