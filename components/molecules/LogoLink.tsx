import Link from 'next/link'
import Logo from '../atoms/Logo'

interface LogoLinkProps {
  src: string
  alt: string
  link: string
}

const LogoLink = ({ src, alt, link }: LogoLinkProps) => {
  return (
    <Link href={link}>
      <Logo src={src} alt={alt} />
    </Link>
  )
}

export default LogoLink
