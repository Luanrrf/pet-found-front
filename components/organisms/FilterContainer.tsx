import PetFilter from '../molecules/PetFilter'
import { ModalFilter } from '../molecules/ModalFilter'
import SendToFilteredPageButton from '../atoms/SendToFilteredPageButton'
import { FilterPageContextProps } from '../contexts/FilterContext/types'
import { Dispatch, SetStateAction } from 'react'

export function FilterContainer({
  pageContext,
  setPageContext,
  setOpenFilter,
}: {
  pageContext: FilterPageContextProps
  setPageContext: Dispatch<SetStateAction<FilterPageContextProps>>
  setOpenFilter: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <ModalFilter setOpenFilter={setOpenFilter}>
      <PetFilter
        title="Porte"
        filterKey="size"
        options={[
          { label: 'Pequeno', value: 'small' },
          { label: 'Médio', value: 'medium' },
          { label: 'Grande', value: 'large' },
        ]}
        setPageContext={setPageContext}
      />
      <PetFilter
        title="Sexo"
        filterKey="gender"
        options={[
          { label: 'Macho', value: 'male' },
          { label: 'Fêmea', value: 'female' },
        ]}
        setPageContext={setPageContext}
      />

      <SendToFilteredPageButton filters={pageContext.filters} />
    </ModalFilter>
  )
}
