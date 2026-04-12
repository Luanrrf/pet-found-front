import { useState } from 'react'
import { Button } from '../atoms/Button'
import FilterIcon from '../atoms/FilterIcon'
import PetCards from '../organisms/PetCards'
import { FilterContainer } from '../organisms/FilterContainer'

export function PLPTemplate() {
  const [openFilter, setOpenFilter] = useState(false)

  return (
    <div>
      {openFilter && <FilterContainer setOpenFilter={setOpenFilter} />}
      <div>
        <Button type="button" onClick={() => setOpenFilter(!openFilter)}>
          <FilterIcon />
        </Button>
      </div>
      <PetCards />
    </div>
  )
}
