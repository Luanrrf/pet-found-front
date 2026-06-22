import PetFilter from '../molecules/PetFilter'
import { ModalFilter } from '../molecules/ModalFilter'
import SendToFilteredPageButton from '../atoms/SendToFilteredPageButton'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useFilterContext } from '../contexts/FilterContext'
import { FilterPageContextProps } from '../contexts/FilterContext/types'
import Loader from '../atoms/Loader'

export function FilterContainer({
  setOpenFilter,
}: {
  setOpenFilter: Dispatch<SetStateAction<boolean>>
}) {
  const { pageContext, setPageContext } = useFilterContext()
  const [draftFilters, setDraftFilters] = useState<
    FilterPageContextProps['filters']
  >({})

  useEffect(() => {
    if (pageContext) {
      setDraftFilters(pageContext.filters)
    }
  }, [pageContext])

  if (!pageContext) {
    return <Loader />
  }

  const handleApplyFilters = () => {
    setPageContext((prev) => ({
      ...prev,
      filters: draftFilters,
    }))
  }

  const handleClearFilters = () => {
    setDraftFilters({})
    setPageContext((prev) => ({
      ...prev,
      filters: {},
    }))
  }

  return (
    <ModalFilter setOpenFilter={setOpenFilter}>
      <PetFilter
        title="Animal"
        filterKey="type"
        filters={draftFilters}
        setFilters={setDraftFilters}
        options={[
          { label: 'Cachorro', value: 'Dog' },
          { label: 'Gato', value: 'Cat' },
        ]}
      />

      <PetFilter
        title="Tamanho"
        filterKey="size"
        filters={draftFilters}
        setFilters={setDraftFilters}
        options={[
          { label: 'Pequeno', value: 'Small' },
          { label: 'Médio', value: 'Medium' },
          { label: 'Grande', value: 'Large' },
        ]}
      />

      <PetFilter
        title="Gênero"
        filterKey="gender"
        filters={draftFilters}
        setFilters={setDraftFilters}
        options={[
          { label: 'Macho', value: 'Male' },
          { label: 'Fêmea', value: 'Female' },
        ]}
      />

      <SendToFilteredPageButton
        filters={draftFilters}
        setOpenFilter={setOpenFilter}
        onApplyFilters={handleApplyFilters}
        onClearFilters={handleClearFilters}
      />
    </ModalFilter>
  )
}
