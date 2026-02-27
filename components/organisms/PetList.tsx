import { useState } from 'react'
import { useFilterContext } from '../contexts/FilterContext'
import PetFilter from '../molecules/PetFilter'
import { ModalFilter } from '../molecules/ModalFilter'

export function PetList() {
  const pets = useFilterContext()

  const [openFilter, setOpenFilter] = useState(false)

  console.log(pets)

  return (
    <div className="">
      {openFilter && (
        <ModalFilter setOpenFilter={setOpenFilter}>
          <div>PORTE</div>
        </ModalFilter>
      )}
      <PetFilter openFilter={openFilter} setOpenFilter={setOpenFilter} />
      {/* <PetCards /> */}
    </div>
  )
}
