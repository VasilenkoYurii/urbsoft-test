import styled from "@emotion/styled";

export const MarketItem = styled.li`
  width: 380px;
  height: 435px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  position: relative;
`;

export const ProductLink = styled.a`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ItemImageContainer = styled.div`
  width: 100%;
  height: 380px;

  border-radius: 6px;
  background: #fcf9f6;
  box-shadow: 0px 0px 15px 0px rgba(152, 136, 122, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const ProductAccent = styled.p`
  width: 83px;
  height: 46px;
  border-radius: 0px 7px 0px 0px;
  opacity: 0.85;
  background: #98887a;
  backdrop-filter: blur(20px);

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Sansation", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  color: var(--white-bg-color);

  position: absolute;
  top: 0;
  right: 0;
`;

export const ProductName = styled.p`
  color: var(--icon-color);
  font-family: "Ubuntu", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductOldPrice = styled.p`
  color: var(--old-price);
  font-family: "Ubuntu", sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: line-through;

  position: absolute;
  bottom: 3px;
  right: 19px;
`;

export const ProductPrice = styled.p`
  color: var(--primary-text-color);
  font-family: "Ubuntu", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ProductNewPrice = styled.p`
  color: var(--primary-text-color);
  font-family: "Ubuntu", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  position: absolute;
  bottom: -22px;
  right: 5px;
`;

export const ItemImageContainerSlides = styled.div`
  width: 100%;
  height: 380px;

  border-radius: 6px 12px 6px 6px;
  border: 3px solid rgba(152, 136, 122, 0.8);
  background: #fcf9f6;
  box-shadow: 0px 0px 15px 0px rgba(152, 136, 122, 0.5);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  padding-top: 31px;

  position: relative;
`;

export const SvgTringol = styled.svg`
  fill: var(--old-price);

  transition: fill 500ms;

  &:hover {
    fill: var(--icon-color);
  }
`;

// Добавил чуть-чуть больше падингов для удобного нажатия
export const SvgTringolButtonL = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;

  padding: 20px 20px 20px 0;

  position: absolute;
  z-index: 5;
  left: 10px;
  top: 157px;

  cursor: pointer;

  &:hover {
    svg {
      fill: var(--icon-color);
    }
  }
`;

// Добавил чуть-чуть больше падингов для удобного нажатия
export const SvgTringolButtonR = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;

  padding: 20px 0 20px 20px;

  position: absolute;
  z-index: 5;
  right: 10px;
  top: 157px;

  cursor: pointer;

  &:hover {
    svg {
      fill: var(--icon-color);
    }
  }
`;

export const IconGroup = styled.div`
  display: flex;
`;

export const SvgButton = styled.button`
  background-color: inherit;
  border: none;

  cursor: pointer;
`;

export const SvgIcons = styled.svg`
  fill: var(--primary-text-color);
  transition: fill 500ms;

  &:hover {
    fill: var(--icon-color);
  }
`;

export const SlwiperSlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
