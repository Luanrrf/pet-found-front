import Image from 'next/image'

interface LogoProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

const Logo = (props: LogoProps) => {
  return (
    <Image
      {...props}
      width={props.width ?? 193}
      height={props.height ?? 64}
      className={`m-auto ${props.className}`}
    />
  )
}

export default Logo
