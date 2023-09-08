import logo from "assets/images/logo.png";
import { SearchInput } from "components/SearchInput/SearchInput";
import { NavInfo } from "components/NavInfo/NavInfo";

import { FooterStyled, Container, Logo } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <a href="/">
          <Logo src={logo} alt="Company logo" />
        </a>

        <SearchInput placeholder="Ваш запрос" icon="search" />
        <NavInfo />
      </Container>
    </FooterStyled>
  );
};
