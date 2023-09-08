import styled from "@emotion/styled";

import kithenKit from "../../assets/images/kitchenKit.png";
import kithenAll from "../../assets/images/kithenAll.png";

export const MarketableSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  min-height: 1962px;
  background-color: #ffffff;

  padding-bottom: 50px;
  display: flex;
  justify-content: center;

  position: relative;
`;

export const Container = styled.div`
  width: 1680px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  position: relative;
`;

export const TitleContainer = styled.div`
  height: 268px;
  width: 100%;

  padding-top: 80px;
  margin-bottom: 35px;

  border-bottom: 1px solid var(--primary-text-color);

  position: relative;
`;

export const TitleDescription = styled.p`
  color: var(--light-section-text);
  font-family: "Ubuntu", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-top: 25px;

  width: 380px;
`;

export const TitleContext = styled.p`
  color: rgba(152, 136, 122, 0.06);
  font-family: "Sansation", sans-serif;
  font-size: 300px;
  font-style: normal;
  font-weight: 400;
  line-height: 100.914%;

  position: absolute;
  left: -25px;
  bottom: -30px;
`;

export const MarketPlaceContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const MarketList = styled.ul`
  width: 100%;
  height: 100%;

  margin-top: 80px;

  display: flex;
  flex-wrap: wrap;
  row-gap: 80px;
  column-gap: 51px;
`;

export const KitchenAllItem = styled.li`
  width: 817px;
  height: 432px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const KitchenAllItemLink = styled.a`
  width: 817px;
  height: 380px;
  border-radius: 6px;
  background: url(${kithenAll}) no-repeat center;

  position: relative;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const KitchenKitItem = styled.li`
  width: 817px;
  height: 432px;
`;

export const KitchenKitItemLink = styled.a`
  box-sizing: content-box;
  width: 100%;
  height: 380px;
  border-radius: 6px;
  background: url(${kithenKit}) no-repeat center;

  position: relative;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const KithenLinkPrg = styled.p`
  width: 317px;
  height: 79px;
  background-color: var(--primary-text-color);
  color: var(--white-bg-color);
  border-radius: 0px 0px 8px 0px;
  opacity: 0.85;
  backdrop-filter: blur(20px);

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Sansation", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 100.914%;
`;

export const ButtonSeeMore = styled.button`
  position: absolute;
  right: 5px;
  bottom: -40px;

  color: var(--main-text-color);
  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;

  background-color: inherit;
  border: none;
  cursor: pointer;
`;
