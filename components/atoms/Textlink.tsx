import React from 'react'
import Link from 'next/link'

type TextLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export function TextLink({ href, children, className = '' }: TextLinkProps) {
  return (
    <Link href={href}>
      <a className={`text-orange-600 underline ${className}`}>{children}</a>
    </Link>
  )
}
