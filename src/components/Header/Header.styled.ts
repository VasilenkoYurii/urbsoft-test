import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 126px;
  background-color: var(--main-bg-color);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 1690px;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  margin-right: 100px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;

  margin-left: 82px;
  margin-right: 50px;
`;

export const NavPrg = styled.p`
  color: var(--main-text-color);
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  & a {
    color: var(--main-text-color);
  }
`;
