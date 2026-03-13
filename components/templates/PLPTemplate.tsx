import { useState } from 'react'
import { useFilterContext } from '../contexts/FilterContext'
import { Button } from '../atoms/Button'
import FilterIcon from '../atoms/FilterIcon'
import PetCards from '../organisms/PetCards'
import { FilterContainer } from '../organisms/FilterContainer'

export function PLPTemplate() {
  const { pageContext, setPageContext } = useFilterContext()

  const [openFilter, setOpenFilter] = useState(false)

  return (
    <div className="">
      {openFilter && (
        <FilterContainer
          pageContext={pageContext}
          setPageContext={setPageContext}
          setOpenFilter={setOpenFilter}
        />
      )}
      <div>
        <Button
          type="button"
          onClick={() => setOpenFilter(!openFilter)}
          className=""
        >
          <FilterIcon />
        </Button>
      </div>
      <PetCards />
    </div>
  )
}
