import user from "assets/images/users.svg";
import bag from "assets/images/bag.svg";
import phone from "assets/images/phone.svg";

import {
  Navigation,
  NavLink,
  ActivNavLink,
  LinkContainer,
} from "./NavInfo.styled";

export const NavInfo = () => {
  return (
    <>
      <Navigation>
        <NavLink href="/">О компании</NavLink>
        <NavLink href="/">Каталог</NavLink>
        <ActivNavLink href="/">Новинки</ActivNavLink>
        <NavLink href="/">Акции</NavLink>
        <NavLink href="/">Контакты</NavLink>
      </Navigation>
      <LinkContainer>
        <a href="tel:+380974663190">
          <img src={phone} alt="Phone icon" /> +38 (097) 466 31 90
        </a>
        <a href="/">
          <img src={bag} alt="Bag icon" />
        </a>
        <a href="/">
          <img src={user} alt="User icon" />
        </a>
      </LinkContainer>
    </>
  );
};
