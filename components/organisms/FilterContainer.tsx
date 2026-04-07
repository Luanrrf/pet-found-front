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
        title="Sexo"
        filterKey="gender"
        options={[
          { label: 'Macho', value: 'Male' },
          { label: 'Fêmea', value: 'Female' },
        ]}
        pageContext={pageContext}
        setPageContext={setPageContext}
      />
      <PetFilter
        title="Tipo"
        filterKey="type"
        options={[
          { label: 'Cachorro', value: 'Dog' },
          { label: 'Gato', value: 'Cat' },
        ]}
        pageContext={pageContext}
        setPageContext={setPageContext}
      />

      <SendToFilteredPageButton
        filters={pageContext.filters}
        setOpenFilter={setOpenFilter}
      />
    </ModalFilter>
  )
}
