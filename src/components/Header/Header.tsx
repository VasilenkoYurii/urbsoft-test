import logo from "assets/images/logo.png";
import user from "assets/images/users.svg";
import bag from "assets/images/bag.svg";
import phone from "assets/images/phone.svg";
import { SerchInput } from "components/SerchInput/SerchInput";

import {
  HeaderStyled,
  Container,
  Navigation,
  NavPrg,
  LinkContainer,
  Logo,
} from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Logo src={logo} alt="Company logo" />
        <SerchInput />
        <Navigation>
          <NavPrg>О компании</NavPrg>
          <NavPrg>Каталог</NavPrg>
          <NavPrg>Новинки</NavPrg>
          <NavPrg>Акции</NavPrg>
          <NavPrg>Контакты</NavPrg>
        </Navigation>
        <LinkContainer>
          <a href="tel:+380974663190">
            <img src={phone} alt="Phone icon" /> +38 (097) 466 31 90
          </a>
          <a href="#">
            <img src={bag} alt="Bag icon" />
          </a>
          <a href="#">
            <img src={user} alt="User icon" />
          </a>
        </LinkContainer>
      </Container>
    </HeaderStyled>
  );
};
