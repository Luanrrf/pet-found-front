'use client'
import React, { useRef, useEffect } from 'react'

const PageContainer = ({
  children,
  ...props
}: {
  children: React.ReactNode
  [key: string]: unknown
}) => {
  const [positionY, setPositionY] = React.useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (
      containerRef.current &&
      positionY !==
        containerRef.current.getBoundingClientRect().top + window.scrollY
    ) {
      setPositionY(
        containerRef.current.getBoundingClientRect().top + window.scrollY
      )
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="rounded-t-[20px] bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.25)] ml-[-20px] md:ml-0 mb-[-20px] md:mb-0 w-[calc(100%+40px)] px-5 py-8 relative"
      style={{
        minHeight: `calc(100vh - ${positionY}px)`,
        ...props,
      }}
    >
      {children}
    </div>
  )
}

export default PageContainer
