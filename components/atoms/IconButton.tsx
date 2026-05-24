import { ButtonHTMLAttributes } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  children: React.ReactNode
}

export default function IconButton({
  label,
  children,
  className = '',
  type = 'button',
  ...rest
}: IconButtonProps) {
  return (
    <button type={type} aria-label={label} className={className} {...rest}>
      {children}
    </button>
  )
}
