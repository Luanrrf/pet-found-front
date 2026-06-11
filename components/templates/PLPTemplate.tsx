import { useEffect, useState } from 'react'
import { Button } from '../atoms/Button'
import FilterIcon from '../atoms/FilterIcon'
import PetCards from '../organisms/PetCards'
import { FilterContainer } from '../organisms/FilterContainer'

export function PLPTemplate() {
  const [openFilter, setOpenFilter] = useState(false)

  useEffect(() => {
    document.body.style.overflow = openFilter ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [openFilter])

  return (
    <div className="min-h-[calc(100vh-80px)] w-full max-w-[1120px] bg-white pb-10">
      {openFilter && <FilterContainer setOpenFilter={setOpenFilter} />}
      <div className="h-12">
        <Button
          type="button"
          onClick={() => setOpenFilter(!openFilter)}
          className="bg-white text-orange-500 rounded-xl px-4 py-2"
        >
          <FilterIcon />
        </Button>
      </div>
      <PetCards />
    </div>
  )
}
