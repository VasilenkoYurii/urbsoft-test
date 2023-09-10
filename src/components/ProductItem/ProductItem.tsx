import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// -----------------

import sprite from "assets/images/sprite.svg";
import { Products } from "helpers/interfaces";

import {
  MarketItem,
  ItemImageContainer,
  ProductAccent,
  ProductName,
  ProductOldPrice,
  ProductPrice,
  ProductNewPrice,
  ProductLink,
  ItemImageContainerSlides,
  SvgTringol,
  IconGroup,
  SvgButton,
  SvgIcons,
  SvgTringolButtonL,
  SvgTringolButtonR,
  SlwiperSlideContainer,
} from "./ProductItem.styled";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

/**
 * В этом компоненте мы принимаем продукт и определяем,
 * показывать нам товар со слайдером или без него,
 * если есть слайдер то мы добавляем функцианальность слайдера для него
 */
export const ProductItem = ({ product }: { product: Products }) => {
  const swiperParams = {
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },
  };

  console.log(product.showSlides);

  return (
    <MarketItem>
      {product.slides === true ? (
        <>
          <ItemImageContainerSlides>
            <Swiper {...swiperParams} style={{ width: "375px" }}>
              {product.showSlides !== undefined &&
                product.showSlides.map((slide, index) => {
                  return (
                    <SwiperSlide>
                      <SlwiperSlideContainer key={index}>
                        <img src={slide} alt={product.name} />
                      </SlwiperSlideContainer>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
            {product.accent && <ProductAccent>{product.accent}</ProductAccent>}

            <SvgTringolButtonL className="prev-button">
              <SvgTringol style={{ width: "22px", height: "16px" }}>
                <use href={`${sprite}#icon-tringolL`} />
              </SvgTringol>
            </SvgTringolButtonL>
            <SvgTringolButtonR className="next-button">
              <SvgTringol style={{ width: "22px", height: "16px" }}>
                <use href={`${sprite}#icon-tringolR`} />
              </SvgTringol>
            </SvgTringolButtonR>

            <IconGroup>
              <SvgButton>
                <SvgIcons style={{ width: "56px", height: "56px" }}>
                  <use href={`${sprite}#icon-heart`} />
                </SvgIcons>
              </SvgButton>
              <SvgButton>
                <SvgIcons style={{ width: "56px", height: "56px" }}>
                  <use href={`${sprite}#icon-bagg`} />
                </SvgIcons>
              </SvgButton>
              <SvgButton>
                <SvgIcons style={{ width: "56px", height: "56px" }}>
                  <use href={`${sprite}#icon-scales`} />
                </SvgIcons>
              </SvgButton>
            </IconGroup>
          </ItemImageContainerSlides>
          <ProductName>{product.name}</ProductName>
          {!product.oldPrice && (
            <ProductPrice>{product.price} грн.</ProductPrice>
          )}

          {product.oldPrice && (
            <>
              <ProductOldPrice>{product.oldPrice} грн.</ProductOldPrice>
              <ProductNewPrice>{product.price} грн.</ProductNewPrice>
            </>
          )}
        </>
      ) : (
        <ProductLink href="/">
          <ItemImageContainer>
            <img src={product.img} alt={product.name} />
            {product.accent && <ProductAccent>{product.accent}</ProductAccent>}
          </ItemImageContainer>
          <ProductName>{product.name}</ProductName>
          {!product.oldPrice && (
            <ProductPrice>{product.price} грн.</ProductPrice>
          )}

          {product.oldPrice && (
            <>
              <ProductOldPrice>{product.oldPrice} грн.</ProductOldPrice>
              <ProductNewPrice>{product.price} грн.</ProductNewPrice>
            </>
          )}
        </ProductLink>
      )}
    </MarketItem>
  );
};
