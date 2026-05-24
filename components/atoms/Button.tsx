'use client'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  color?: 'orange' | 'green' | 'blue' | 'red'
  emojiSrc?: string
}

export function Button({
  children,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-orange-500 text-white rounded-xl px-4 py-2 ${className}`}
    >
      {children}
    </button>
  )
}
