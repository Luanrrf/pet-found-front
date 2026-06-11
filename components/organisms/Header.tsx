import LogoLink from '../molecules/LogoLink'
import BackButton from '../atoms/BackButton'

const Header = () => {
  return (
    <div className="relative mb-5 flex w-full items-center justify-center px-4 pt-4">
      <div className="absolute left-4 top-4">
        <BackButton />
      </div>
      <LogoLink src="/petFound-logo.png" alt="pet found logo" link="/" />
    </div>
  )
}

export default Header
