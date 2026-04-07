import { Dispatch, SetStateAction } from 'react'
import { FilterPageContextProps } from '../contexts/FilterContext/types'

type Option = {
  label: string
  value: string
}

export default function PetFilter({
  title,
  filterKey,
  options,
  pageContext,
  setPageContext,
}: {
  title: string
  filterKey: string
  options: Option[]
  pageContext: FilterPageContextProps
  setPageContext: Dispatch<SetStateAction<FilterPageContextProps>>
}) {
  const handleChange = (value: string, checked: boolean) => {
    setPageContext((prev) => {
      const currentValues: string[] = prev.filters?.[filterKey] ?? []

      const updatedValues = checked
        ? [...currentValues, value]
        : currentValues.filter((item) => item !== value)

      return {
        ...prev,
        filters: {
          ...prev.filters,
          [filterKey]: updatedValues,
        },
      }
    })
  }

  return (
    <div className="mb-6">
      <p className="text-stone-500 text-base font-semibold leading-4 mb-6">
        {title}
      </p>

      <ul className="flex flex-col gap-6">
        {options.map((option) => (
          <li key={option.value}>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="checkbox"
                value={option.value}
                className="sr-only peer"
                onChange={(e) => handleChange(option.value, e.target.checked)}
                checked={
                  pageContext.filters[filterKey]?.includes(option.value) ||
                  false
                }
              />

              <div
                className="
                  flex relative w-[50px] h-[25px] rounded-full
                  bg-white border border-[#CCCCCC]
                  transition-colors duration-300 ease-in-out
                  peer-checked:bg-[#EF7E06]
                  peer-checked:[&>div]:translate-x-[22px]
                  peer-checked:[&>div]:bg-white
                  peer-checked:[&>div]:border-transparent
                  peer-checked:[&>div]:shadow-md
                "
              >
                <div
                  className="
                    absolute top-1/2 -translate-y-1/2 left-[4px]
                    w-[18px] h-[18px] rounded-full
                    bg-[#F4F4F4] border border-[#CCCCCC]
                    shadow-sm
                    transition-all duration-300 ease-in-out
                  "
                />
              </div>

              <span className="text-stone-500 text-base font-normal leading-6">
                {option.label}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
