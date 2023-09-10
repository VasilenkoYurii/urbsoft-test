import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import sprite from "assets/images/sprite.svg";

import { HeroSlide } from "components/HeroSlide/HeroSlide";

import {
  HeroSection,
  Container,
  ArrowPrg,
  ArrowSpan,
  ArrowLeft,
  ArrowRight,
  ArrowBox,
  SvgArL,
  SvgArR,
} from "./Hero.styled";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

/**
 * Компонент который принимает компонент HeroSlide и использует его как
 * сайд, так же тут находиться вся логика для переключения слайдов
 */
export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlideChange = (swiperInstance: any) => {
    setCurrentSlide(swiperInstance.realIndex + 1);
  };

  const swiperParams = {
    spaceBetween: 100,
    slidesPerView: 1,
    navigation: {
      nextEl: ".custom-next-button",
      prevEl: ".custom-prev-button",
    },
    onSlideChange: handleSlideChange,
  };

  return (
    <HeroSection>
      <Container>
        <Swiper {...swiperParams}>
          <SwiperSlide>
            <HeroSlide />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSlide />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSlide />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSlide />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSlide />
          </SwiperSlide>
        </Swiper>

        <ArrowBox>
          <ArrowPrg>
            0{currentSlide}
            <ArrowSpan>/05</ArrowSpan>
          </ArrowPrg>

          <ArrowLeft className="custom-prev-button">
            <SvgArL
              style={{ width: "52px", height: "52px" }}
              page={currentSlide}
            >
              <use href={`${sprite}#icon-arrowLS`} />
            </SvgArL>
          </ArrowLeft>
          <ArrowRight className="custom-next-button">
            <SvgArR
              style={{ width: "52px", height: "52px" }}
              page={currentSlide}
            >
              <use href={`${sprite}#icon-arrowRP`} />
            </SvgArR>
          </ArrowRight>
        </ArrowBox>
      </Container>
    </HeroSection>
  );
};
