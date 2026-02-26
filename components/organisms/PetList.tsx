import { useFilterContext } from '../contexts/FilterContext'

export function PetList() {
  const pets = useFilterContext()

  console.log(pets)

  return <div className="">teste</div>
}
