import { useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import circles from "assets/images/circles.png";
import blenderOne from "assets/images/blender1.png";
import blenderTwo from "assets/images/blender2.png";
import blenderThree from "assets/images/blender3.png";
import border from "assets/images/border.png";
import sprite from "assets/images/sprite.svg";
import plus from "assets/images/plus.svg";

import { MoreButton } from "components/MoreButton/MoreButton";
import {
  HeroSection,
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
  ArrowPrg,
  ArrowSpan,
  ArrowLeft,
  ArrowRight,
  ArrowBox,
  LabeMainBox,
  LabeBox,
  LabePrg,
  LabeBtn,
  LabeBorder,
  BlanderImgOne,
  BlanderImgTwo,
  BlanderImgThree,
  SvgArL,
  SvgArR,
} from "./Hero.styled";

// import arrowLeft from "assets/images/arrow-l.svg";

// const CustomLeftArrow = ({ onClick }: any) => {
//   return (
//     <div className="custom-arrow custom-arrow-left" onClick={onClick}>
//       {/* Здесь вы можете использовать свои собственные иконки или разметку для стрелки влево */}
//       {"<"}
//     </div>
//   );
// };

// const CustomRightArrow = ({ onClick }: any) => {
//   return (
//     <div className="custom-arrow custom-arrow-right" onClick={onClick}>
//       <img src={arrowLeft} alt="" />
//     </div>
//   );
// };

// const sections = [
//   <div id="1" key={1} className="section">
//     <h2>Section 1</h2>
//     {/* Добавьте вашу большую разметку для секции 1 */}
//   </div>,
//   <div id="2" key={2} className="section">
//     <h2>Section 2</h2>
//     {/* Добавьте вашу большую разметку для секции 2 */}
//   </div>,
//   <div id="3" key={3} className="section">
//     <h2>Section 3</h2>
//     {/* Добавьте вашу большую разметку для секции 3 */}
//   </div>,
//   // Добавьте больше секций, если необходимо
// ];

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//     slidesToSlide: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//     slidesToSlide: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1,
//   },
// };

// export const Hero = () => {
//   const [activeSectionIndex, setActiveSectionIndex] = useState(0);

//   const handleSlideChange = (index: any) => {
//     setActiveSectionIndex(index);
//   };

//   return (
//     <div>
//       <Carousel
//         responsive={responsive}
//         removeArrowOnDeviceType={["tablet", "mobile"]}
//         afterChange={handleSlideChange}
//         customLeftArrow={<CustomLeftArrow />} // Используйте кастомную стрелку влево
//         customRightArrow={<CustomRightArrow />}
//       >
//         {sections}
//       </Carousel>
//       <div className="active-section">{activeSectionIndex}</div>
//     </div>
//   );
// };

export const Hero = () => {
  const [page, setPage] = useState(1);

  console.log(setPage);

  return (
    <HeroSection>
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
          <SocialLink href="/">Facebook</SocialLink>
          <SocialLink href="/">Instagram</SocialLink>
        </SocialLinkBox>

        {/*  */}

        <ArrowBox>
          <ArrowPrg>
            01 <ArrowSpan>/05</ArrowSpan>
          </ArrowPrg>

          <ArrowLeft>
            <SvgArL style={{ width: "52px", height: "52px" }} page={page}>
              <use href={`${sprite}#icon-arrowLS`} />
            </SvgArL>
          </ArrowLeft>
          <ArrowRight>
            <SvgArR style={{ width: "52px", height: "52px" }} page={page}>
              <use href={`${sprite}#icon-arrowRP`} />
            </SvgArR>
          </ArrowRight>
        </ArrowBox>

        {/*  */}

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
    </HeroSection>
  );
};
