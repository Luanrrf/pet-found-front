interface Props {
  className?: string
}

export default function FilterIcon({ className = 'h-5 w-5' }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 7h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="9"
        cy="7"
        r="2"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="15"
        cy="12"
        r="2"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="11"
        cy="17"
        r="2"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}
