'use client'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  emojiSrc?: string
  disabled?: boolean
}

export function Button({
  children,
  onClick,
  disabled = false,
  type = 'button',
  className = 'bg-orange-500 text-white rounded-xl px-4 max-md:py-2 md:py-2 md:w-full hover:brightness-80',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
