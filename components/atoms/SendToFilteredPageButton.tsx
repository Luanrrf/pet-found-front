import { Dispatch, SetStateAction } from 'react'
import { FilterPageContextProps } from '../contexts/FilterContext/types'
import { Button } from './Button'
import { useRouter } from 'next/navigation'

const SendToFilteredPageButton = ({
  filters,
  setOpenFilter,
  onApplyFilters,
  onClearFilters,
}: {
  filters: FilterPageContextProps['filters']
  setOpenFilter: Dispatch<SetStateAction<boolean>>
  onApplyFilters: () => void
  onClearFilters: () => void
}) => {
  const router = useRouter()

  const handleClick = () => {
    const query = buildQueryString(filters)

    onApplyFilters()
    router.push(`/pets${query}`)
    setOpenFilter(false)
  }

  const handleClearClick = () => {
    onClearFilters()
    router.push('/pets')
    setOpenFilter(false)
  }

  return (
    <div className="flex items-center justify-end gap-4 border-t border-[#E5E5E5] pt-6">
      <Button
        onClick={handleClearClick}
        className="bg-transparent text-[#ef7e06] border border-[#ef7e06] rounded-xl px-4 py-2 md:w-full hover:bg-[#fee7b8] transition-all"
      >
        Limpar filtros
      </Button>

      <Button onClick={handleClick}>Filtrar</Button>
    </div>
  )
}

function buildQueryString(params: Record<string, string[]>): string {
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, values]) => {
    if (values?.length) {
      searchParams.append(key, values.join(','))
    }
  })

  const query = searchParams.toString()

  return query ? `?${query}` : ''
}

export default SendToFilteredPageButton
