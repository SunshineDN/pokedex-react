// import { useNavigate } from "react-router-dom"
import { HeaderContainer, LogoutIcon, Title } from "./Header"

const HeaderComponent = () => {
  // const navigate = useNavigate();
  
  return (
    <HeaderContainer>
      <Title to="initial" spy={true} smooth={true} offset={0} duration={500}>
        Pokédex
      </Title>
      <LogoutIcon onClick={() => {
        window.localStorage.removeItem("sessionID");
        window.location.reload();
      }} />
    </HeaderContainer>
  )
}

export default HeaderComponent