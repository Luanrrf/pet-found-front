import React from 'react'

const PDPInformations = ({
  informations,
}: {
  informations: Array<{
    label: string
    value: string
  }>
}) => {
  return (
    <div className="flex flex-col gap-3">
      {informations.map((info, index) => (
        <div
          key={index}
          className="grid grid-cols-1 gap-1 rounded-xl bg-stone-50 px-4 py-3 text-center md:grid-cols-2 md:items-center"
        >
          <span className="font-medium text-stone-700 md:text-center">
            {info.label}
          </span>
          <span className="text-stone-500 md:text-center">{info.value}</span>
        </div>
      ))}
    </div>
  )
}

export default PDPInformations
