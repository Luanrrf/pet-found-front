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
    <div>
      {informations.map((info, index) => (
        <p
          key={index}
          className="text-stone-500 text-base font-normal leading-6"
        >
          <strong>{info.label}:</strong> {info.value}
        </p>
      ))}
    </div>
  )
}

export default PDPInformations
