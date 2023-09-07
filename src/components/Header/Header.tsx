import logo from "assets/images/logo.png";

import { SerchInput } from "components/SerchInput/SerchInput";
import { NavInfo } from "components/NavInfo/NavInfo";

import { HeaderStyled, Container, Logo } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Logo src={logo} alt="Company logo" />
        <SerchInput placeholder="Ваш запрос" icon="search" />
        <NavInfo />
      </Container>
    </HeaderStyled>
  );
};
