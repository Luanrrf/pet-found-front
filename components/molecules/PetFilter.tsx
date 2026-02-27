import { Dispatch, SetStateAction } from 'react'
import { Button } from '../atoms/Button'
import FilterIcon from '../atoms/FilterIcon'

export default function PetFilter({
  openFilter,
  setOpenFilter,
}: {
  openFilter: boolean
  setOpenFilter: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <div>
      <Button
        type="button"
        onClick={() => setOpenFilter(!openFilter)}
        className=""
      >
        <FilterIcon />
      </Button>
    </div>
  )
}
