import styled from "@emotion/styled";
import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import sprite from "assets/images/sprite.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Add the required modules to SwiperCore
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Section = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideContent = styled.div`
  text-align: center;
`;

const SvgTringolButtonL = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const SvgTringolButtonR = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlideChange = (swiperInstance: any) => {
    setCurrentSlide(swiperInstance.realIndex + 1);
  };

  const swiperParams = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {
      nextEl: ".custom-next-button",
      prevEl: ".custom-prev-button",
    },
    onSlideChange: handleSlideChange,
  };

  return (
    <Section>
      <Container>
        <Swiper {...swiperParams}>
          <SwiperSlide>
            <SlideContent>
              <h2>Slide 1</h2>
              <p>Centered content in Slide 1</p>
            </SlideContent>
          </SwiperSlide>
          <SwiperSlide>
            <SlideContent>
              <h2>Slide 2</h2>
              <p>Centered content in Slide 2</p>
            </SlideContent>
          </SwiperSlide>
        </Swiper>

        <SvgTringolButtonL className="custom-prev-button">
          <svg width="22" height="16">
            <use href={`${sprite}#icon-tringolL`} />
          </svg>
        </SvgTringolButtonL>
        <SvgTringolButtonR className="custom-next-button">
          <svg width="22" height="16">
            <use href={`${sprite}#icon-tringolR`} />
          </svg>
        </SvgTringolButtonR>

        <div className="custom-pagination">{`${currentSlide}/${4}`}</div>
      </Container>
    </Section>
  );
};
