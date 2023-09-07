import styled from "@emotion/styled";

export const Button = styled.button`
  height: 51px;
  padding-left: 19px;

  display: flex;
  align-items: center;

  position: relative;

  border: none;
  background-color: inherit;

  cursor: pointer;
`;

export const BottonPrg = styled.p`
  color: var(--main-text-color);
  font-family: "Sansation";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--main-text-color);
    width: 100%;
    height: 2px;
  }
`;

export const EllipseImg = styled.img`
  position: absolute;
  left: 0;
`;

export const ArrowImg = styled.img`
  margin-left: 8px;
  padding-top: 3px;
`;
