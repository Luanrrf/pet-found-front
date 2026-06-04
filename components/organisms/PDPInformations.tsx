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
          className="flex items-center justify-between rounded-xl bg-stone-50 px-4 py-3"
        >
          <span className="font-medium text-stone-700">{info.label}</span>
          <span className="text-stone-500">{info.value}</span>
        </div>
      ))}
    </div>
  )
}

export default PDPInformations
