'use client'
import React, { useRef, useEffect } from 'react'

const PageContainer = ({ children }: { children: React.ReactNode }) => {
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
      style={{
        borderRadius: '20px 20px 0 0',
        background: 'white',
        boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.25)',
        marginLeft: '-20px',
        marginBottom: '-20px',
        width: 'calc(100%)',
        minHeight: `calc(100vh - ${positionY}px - 40px)`,
        padding: '20px',
      }}
    >
      {children}
    </div>
  )
}

export default PageContainer
