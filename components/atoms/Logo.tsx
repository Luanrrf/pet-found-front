import Image from 'next/image'

interface LogoProps {
  src: string
  alt: string
  width?: number
  height?: number
}

const Logo = (props: LogoProps) => {
  return (
    <Image {...props} width={props.width ?? 193} height={props.height ?? 64} />
  )
}

export default Logo
