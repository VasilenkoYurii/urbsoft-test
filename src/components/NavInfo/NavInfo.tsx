import sprite from "assets/images/sprite.svg";

import {
  Nav,
  NavList,
  NavLink,
  ActivNavLink,
  LinkContainer,
  Svg,
} from "./NavInfo.styled";

export const NavInfo = () => {
  return (
    <>
      <Nav>
        <NavList>
          <li>
            <NavLink href="/">О компании</NavLink>
          </li>
          <li>
            <NavLink href="/">Каталог</NavLink>
          </li>
          <li>
            <ActivNavLink href="/">Новинки</ActivNavLink>
          </li>
          <li>
            <NavLink href="/">Акции</NavLink>
          </li>
          <li>
            <NavLink href="/">Контакты</NavLink>
          </li>
        </NavList>
      </Nav>
      <LinkContainer>
        <li>
          <a href="tel:+380974663190">
            <Svg style={{ width: "15px", height: "15px" }}>
              <use href={`${sprite}#icon-phone`} />
            </Svg>
            +38 (097) 466 31 90
          </a>
        </li>
        <li>
          <a href="/">
            <Svg style={{ width: "23px", height: "27px" }}>
              <use href={`${sprite}#icon-bag`} />
            </Svg>
          </a>
        </li>
        <li>
          <a href="/">
            <Svg style={{ width: "23px", height: "30px" }}>
              <use href={`${sprite}#icon-users`} />
            </Svg>
          </a>
        </li>
      </LinkContainer>
    </>
  );
};
