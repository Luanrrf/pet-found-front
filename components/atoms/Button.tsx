'use client'

import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  color?: 'orange' | 'green' | 'blue' | 'red'
  emojiSrc?: string // png opcional
}

const COLOR_MAP = {
  orange: 'bg-orange-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  red: 'bg-red-500',
}

export function Button({
  children,
  onClick,
  type = 'button',
  className = '',
  color = 'orange',
  emojiSrc,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        clsx(
          'text-white rounded-full px-6 py-3 w-full flex items-center justify-center gap-2',
          COLOR_MAP[color],
          className
        )
      )}
    >
      {emojiSrc && <img src={emojiSrc} alt="emoji" className="h-5 w-5" />}
      {children}
    </button>
  )
}
