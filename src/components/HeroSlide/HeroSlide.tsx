import circles from "assets/images/circles.png";
import blenderOne from "assets/images/blender1.png";
import blenderTwo from "assets/images/blender2.png";
import blenderThree from "assets/images/blender3.png";
import border from "assets/images/border.png";
import plus from "assets/images/plus.svg";

import { MoreButton } from "components/MoreButton/MoreButton";

import {
  Container,
  HeroTitleContainer,
  NewContainer,
  NewPrg,
  RotateImg,
  HeroTitle,
  HeroDescription,
  HeroSecondDescription,
  ButtonBox,
  SocialLinkBox,
  SocialLink,
  CircleImg,
  LabeMainBox,
  LabeBox,
  LabePrg,
  LabeBtn,
  LabeBorder,
  BlanderImgOne,
  BlanderImgTwo,
  BlanderImgThree,
} from "./HeroSlide.styled";

/**
 * Данный компонент выполняет роль слайда для секции героя
 */
export const HeroSlide = () => {
  return (
    <Container>
      <HeroTitleContainer>
        <NewContainer>
          <RotateImg />
          <NewPrg>Новинка 2023</NewPrg>
        </NewContainer>
        <HeroTitle>Погружной блендер нового поколения </HeroTitle>
        <HeroDescription>
          Удобство. Комфорт. Качество. Гарантия.
        </HeroDescription>
        <HeroSecondDescription>
          Отличный и не заменимый помощник на любой кухне для приготовления и
          воплощения любых кулинарных идей
        </HeroSecondDescription>
        <ButtonBox>
          <MoreButton text="Узнать больше" />
        </ButtonBox>
      </HeroTitleContainer>

      {/*  */}

      <SocialLinkBox>
        <SocialLink href="https://www.facebook.com/">Facebook</SocialLink>
        <SocialLink href="https://www.instagram.com/">Instagram</SocialLink>
      </SocialLinkBox>

      <LabeMainBox>
        <LabeBox>
          <LabePrg>Sencor SHB 4460WH</LabePrg>
          <LabeBtn>
            <img src={plus} alt="Plus icon" />
          </LabeBtn>
          <LabeBorder src={border} alt="Container border" />
        </LabeBox>
      </LabeMainBox>

      <CircleImg src={circles} alt="circles icons" />
      <BlanderImgOne src={blenderOne} alt="Product icon" />
      <BlanderImgTwo src={blenderTwo} alt="Product icon" />
      <BlanderImgThree src={blenderThree} alt="Product icon" />
    </Container>
  );
};
