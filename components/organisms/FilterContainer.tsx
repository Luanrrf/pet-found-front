import PetFilter from '../molecules/PetFilter'
import { ModalFilter } from '../molecules/ModalFilter'
import SendToFilteredPageButton from '../atoms/SendToFilteredPageButton'
import { Dispatch, SetStateAction } from 'react'
import { useFilterContext } from '../contexts/FilterContext'
import Loader from '../atoms/Loader'

export function FilterContainer({
  setOpenFilter,
}: {
  setOpenFilter: Dispatch<SetStateAction<boolean>>
}) {
  const { pageContext, setPageContext } = useFilterContext()

  if (!pageContext) {
    return <Loader />
  }

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
