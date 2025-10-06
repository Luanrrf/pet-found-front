import LogoLink from '../molecules/LogoLink'

const Header = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <LogoLink src="/petFound-logo.png" alt="pet found logo" link="/" />
    </div>
  )
}

export default Header
