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
  const { pageContext } = useFilterContext()

  if (!pageContext) {
    return <Loader />
  }

  return (
    <ModalFilter setOpenFilter={setOpenFilter}>
      <PetFilter
        title="Animal"
        filterKey="type"
        options={[
          { label: 'Cachorro', value: 'Dog' },
          { label: 'Gato', value: 'Cat' },
        ]}
      />
      <PetFilter
        title="Tamanho"
        filterKey="size"
        options={[
          { label: 'Pequeno', value: 'Small' },
          { label: 'Médio', value: 'Medium' },
          { label: 'Grande', value: 'Large' },
        ]}
      />
      <PetFilter
        title="Gênero"
        filterKey="gender"
        options={[
          { label: 'Macho', value: 'Male' },
          { label: 'Fêmea', value: 'Female' },
          { label: 'Não sei dizer', value: 'Unknown' },
        ]}
      />

      <SendToFilteredPageButton
        filters={pageContext.filters}
        setOpenFilter={setOpenFilter}
      />
    </ModalFilter>
  )
}
