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
  className = 'bg-orange-500 text-white rounded-xl px-4 py-2 hover:brightness-80',
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  )
}
