import logo from "../../assets/images/logo.png";

import { HeaderStyled, Container, Navigation, NavPrg } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <img src={logo} alt="Company logo" />
        <input type="text" name="" id="" />
        <Navigation>
          <NavPrg>О компании</NavPrg>
          <NavPrg>Каталог</NavPrg>
          <NavPrg>Новинки</NavPrg>
          <NavPrg>Акции</NavPrg>
          <NavPrg>Контакты</NavPrg>
        </Navigation>
        <a href="">+38 (097) 466 31 90</a>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </Container>
    </HeaderStyled>
  );
};
