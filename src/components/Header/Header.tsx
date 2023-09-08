import logo from "assets/images/logo.png";

import { SearchInput } from "components/SearchInput/SearchInput";
import { NavInfo } from "components/NavInfo/NavInfo";

import { HeaderStyled, Container, Logo } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <a href="/">
          <Logo src={logo} alt="Company logo" />
        </a>

        <SearchInput placeholder="Ваш запрос" icon="search" />
        <NavInfo />
      </Container>
    </HeaderStyled>
  );
};
