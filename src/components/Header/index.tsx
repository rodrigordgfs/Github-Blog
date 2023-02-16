import { HeaderContainer, HeaderLogo } from './styles'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src={Logo} alt="Logo do Blog" />
    </HeaderContainer>
  )
}
