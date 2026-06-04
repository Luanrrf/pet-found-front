'use client'
import React, { useRef, useEffect } from 'react'
import { useIsMobile } from '../utils/useIsMobile'

const PageContainer = ({
  children,
  ...props
}: {
  children: React.ReactNode
  [key: string]: unknown
}) => {
  const [positionY, setPositionY] = React.useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

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
      className="rounded-t-[20px] mt-5 bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.25)] ml-[-20px] md:ml-0 mb-[-20px] md:mb-0 max-lg:w-[calc(100%+40px)] lg:w-full px-5 py-8 relative lg:max-w-[1200px]"
      style={{
        minHeight: isMobile ? `calc(100vh - ${positionY}px)` : 'auto',
        ...props,
      }}
    >
      {children}
    </div>
  )
}

export default PageContainer
