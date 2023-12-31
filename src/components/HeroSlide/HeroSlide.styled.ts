import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1680px;
  height: 954px;
  height: 100%;
  display: flex;
  justify-content: flex-start;

  position: relative;

  margin-left: 120px;
`;

export const HeroTitleContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 155px;
  width: 833px;
  height: 440px;

  padding-left: 150px;
  padding-top: 83px;
  border-left: 1px solid rgba(104, 97, 91, 0.42);
`;

export const NewContainer = styled.div`
  position: absolute;
  left: 44px;
  top: -10px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 213px;
  height: 113px;
`;

export const RotateImg = styled.div`
  position: absolute;

  width: 203px;
  height: 71px;
  border: 1px solid var(--primary-text-color);
  border-radius: 50%;
  transform: rotate(-12.66deg);
  rotate: 12.66%;
`;

export const NewPrg = styled.p`
  color: var(--light-section-text);
  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HeroTitle = styled.h1`
  color: var(--main-text-color);
  font-family: "Sansation", sans-serif;
  font-size: 68px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  margin-bottom: 25px;
`;

export const HeroDescription = styled.p`
  color: var(--light-section-text);
  font-family: "Ubuntu", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 20px;
  padding-left: 5px;
`;

export const HeroSecondDescription = styled.p`
  color: var(--light-section-text);
  font-family: "Ubuntu", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-left: 5px;
`;

export const ButtonBox = styled.div`
  position: absolute;

  left: 454px;
  bottom: 0;
`;

export const SocialLinkBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 68px;

  display: flex;
  gap: 30px;
`;

export const SocialLink = styled.a`
  color: var(--light-section-text);
  font-family: "Sansation", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100.914%;
`;

export const CircleOne = styled.div`
  width: 13px;
  height: 13px;
  background-color: #e8e8e8;
  opacity: 0.4;

  border-radius: 50%;
`;

export const CircleImg = styled.img`
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const LabeMainBox = styled.div`
  width: 960px;
  height: 280px;

  background: rgba(152, 136, 122, 0.06);

  position: absolute;
  bottom: 260px;
  right: -120px;
`;

export const LabeBox = styled.div`
  width: 375px;
  height: 73px;

  padding: 14px 30px 19px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  left: 300px;
  bottom: 56px;

  border-radius: 10px;
`;

export const LabePrg = styled.p`
  color: var(--main-text-color);
  font-family: "Sansation", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const LabeBtn = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  padding: 0;

  position: absolute;
  z-index: 1;
  right: 30px;
`;

export const LabeBorder = styled.img`
  position: absolute;

  left: 0;
`;

export const BlanderImgOne = styled.img`
  height: 561px;
  width: 561px;

  position: absolute;
  bottom: 400px;
  right: 50px;
  z-index: 2;
`;

export const BlanderImgTwo = styled.img`
  height: 735px;
  width: 735px;

  position: absolute;
  bottom: 64px;
  right: 259px;
  z-index: 2;
`;

export const BlanderImgThree = styled.img`
  position: absolute;
  bottom: 0;
  right: -120px;
  z-index: 2;
`;
