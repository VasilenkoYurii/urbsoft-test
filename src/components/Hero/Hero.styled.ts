import styled from "@emotion/styled";

export const HeroSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 1080px;
  padding-top: 126px;
  background-color: var(--main-bg-color);

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1680px;
  height: 954px;
  height: 100%;
  display: flex;
  justify-content: flex-start;

  position: relative;
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
`;

export const HeroSecondDescription = styled.p`
  color: var(--light-section-text);
  font-family: "Ubuntu", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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

export const ArrowBox = styled.div`
  width: 133px;
  height: 82px;

  position: absolute;
  z-index: 5;
  left: 742px;
  bottom: 77px;
`;

export const ArrowPrg = styled.p`
  color: var(--light-input-text);
  font-family: "Sansation", sans-serif;
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;

export const ArrowSpan = styled.span`
  color: var(--accent-text-color);
  font-family: "Sansation", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 100.914%;
`;

export const ArrowLeft = styled.button`
  position: absolute;

  bottom: -28px;
  left: 0;

  background-color: inherit;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const ArrowRight = styled.button`
  position: absolute;

  bottom: -28px;
  right: 0;

  background-color: inherit;
  border: none;
  cursor: pointer;
  padding: 0;
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

interface SvgProps {
  page: number;
}

export const SvgArL = styled.svg`
  fill: ${(props: SvgProps) =>
    props.page === 1
      ? "var(--accent-text-color)"
      : "var(--light-section-text)"};
  transition: all 500ms;
`;

export const SvgArR = styled.svg`
  fill: ${(props: SvgProps) =>
    props.page === 5
      ? "var(--accent-text-color)"
      : "var(--light-section-text)"};
  transition: all 500ms;
`;
