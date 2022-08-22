import igniteLogo from '../../assets/logotipo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={igniteLogo} alt="" />
      <span>to</span>
      <span>do</span>
    </HeaderContainer>
  )
}
