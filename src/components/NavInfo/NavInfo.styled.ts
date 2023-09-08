import styled from "@emotion/styled";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;

  margin-left: 82px;
  margin-right: 50px;
`;

export const NavLink = styled.a`
  color: var(--main-text-color);
  font-size: 20px;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;

  transition: color 500ms;

  &:hover {
    color: var(--primary-text-color);
  }
`;

export const ActivNavLink = styled.a`
  color: var(--primary-text-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;

  cursor: pointer;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: var(--main-text-color);
    transition: all 500ms;

    &:hover {
      color: var(--primary-text-color);

      svg {
        fill: var(--primary-text-color);
      }
    }
  }
`;

export const Svg = styled.svg`
  fill: var(--main-text-color);
  transition: all 500ms;

  &:hover {
    color: var(--primary-text-color);
  }
`;
