import styled from "styled-components";
import logo from "./assets/logo.png";
import perfil from "./assets/perfil.png";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 4em;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 0.1;
`;

const StyledLink = styled.a`
  color: var(--dark-blue);
  front-weight: 700;
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <StyledContainer>
        <img src={perfil} alt="perfil" />
        <StyledLink href="#">Sair</StyledLink>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
