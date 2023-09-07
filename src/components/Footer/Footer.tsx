import logo from "assets/images/logo.png";
import { SerchInput } from "components/SerchInput/SerchInput";
import { NavInfo } from "components/NavInfo/NavInfo";

import { FooterStyled, Container, Logo } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Logo src={logo} alt="Company logo" />
        <SerchInput placeholder="Ваш запрос" icon="search" />
        <NavInfo />
      </Container>
    </FooterStyled>
  );
};
