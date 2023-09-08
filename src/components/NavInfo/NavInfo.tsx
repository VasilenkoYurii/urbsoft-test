import user from "assets/images/users.svg";
import bag from "assets/images/bag.svg";
import phone from "assets/images/phone.svg";
import sprite from "assets/images/sprite.svg";

import {
  Navigation,
  NavLink,
  ActivNavLink,
  LinkContainer,
  Svg,
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
          <Svg style={{ width: "15px", height: "15px" }}>
            <use href={`${sprite}#icon-phone`} />
          </Svg>
          +38 (097) 466 31 90
        </a>
        <a href="/">
          <Svg style={{ width: "23px", height: "27px" }}>
            <use href={`${sprite}#icon-bag`} />
          </Svg>
        </a>
        <a href="/">
          <Svg style={{ width: "23px", height: "27px" }}>
            <use href={`${sprite}#icon-users`} />
          </Svg>
        </a>
      </LinkContainer>
    </>
  );
};
