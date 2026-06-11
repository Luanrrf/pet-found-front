import React from 'react'
import Link from 'next/link'

const EditButton = ({ petId }: { petId?: number }) => {
  return (
    <Link href={`/editpet?id=${petId ?? ''}`} aria-label="Editar animal">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="40" height="40" rx="8" fill="#3F2D20" />
        <rect width="40" height="40" rx="8" fill="url(#pattern0_111_137)" />
        <defs>
          <pattern
            id="pattern0_111_137"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_111_137" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_111_137"
            width="100"
            height="100"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVklEQVR4nO3dv08TYRzH8XNpBzFGdhOJEQcGcDK4EU0wBhDBH6jhHzAOek8bQdo4QFA0cdNSEnVwxbQkDsUWaEvroisOGKhCi4MxcRAiV5Kv6aWQGij0rtc+37afd/Jdm+fJK/c0d0mvioIQQgghhBBCCCFU0a06naeSQrj0UdVG2eup6daE6Emq6npKCMrORlKI67LXVbMYKSG0HAx9kkJspVT1tuz11VRreTCAIqGVwcHu/TB2UFQ1jeOrxPnn4lenQvOLCZd75SAQHF9lwPDPxDT/bJz8wWgCKBLzzcZ6dzC2ByiMMLIzFYwmlodcPwo6vvCdUloMMyj6fQpuHs0VCEx2+2bi6f0wTB1fquo2uaTajcaVns2Jut/vPwQWCgIxgqKqD2Xvr+IwyKNoNK7Qprdu3QjKQcdX5jHLd4fjpOw9ViQGZccMypLLvReKlrnDl73Hisag7Gjew4ZQ/MHotyWXezX3BjEpRJ/sPVYFBhWPoqUcjiuy91hVGGTy+PKH5r+uOJ3dsvdYlRhk9EqZiWm+uTgwSolRMAowyodxIAowyo+RFyXzmCX0EV/gMjB2oQBDPkYOyq/p6clOg0uq3aiEGPrnehQcU4UGDEYRrgw+ETD4RMDgEwGDTwQMPhEw+ETA4BMBg08EDD4RMPhEwOATAYNPBAw+ETD4RMDgEwGDTwQMPhEw+AQMRgGDUcBgFDAYBQxGAYNRwGAUMBgFDEYBg1HAYBQwGAUMRgGDUcBgFDAYBQxGAYNRwGAUMBhFr5XOkv4OfFzBm9gMgczZpunNoUX8KJ9BFFOOUMSeprDtp6UoHrwhwRxI2HaJInbSxyoUYJiPwvanOyBWoACjuChi//QfSDEowCguCipHKWLf2gViBgUYxUdRW8eeGEZRgGFNy+/qPfuCFIICDOu62d/2J/CygUyjAMO6Xgw1HW+92EWZMYUCDGsbG2wZOdt+mTJjGAUY1ue42/p5G8QASlp/zPJK6SjBkmq7G7fOb+SC5EHZorB9gSI2L4Vt12heOSZ73VWZ59HpE63tXbQXSH9/20bCV/8WAGXsycCZxzpAexf19l34e+/OuS+jAy3PvcNN+PcYGT1zNd8fe9A8OjHc2CBlAQghhBBCCCGEEEJKufsHyZ6yEMewNqUAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </Link>
  )
}

export default EditButton
