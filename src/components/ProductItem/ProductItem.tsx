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
} from "./ProductItem.styled";

export const ProductItem = ({ product }: { product: Products }) => {
  return (
    <MarketItem>
      {product.slides === true ? (
        <>
          <ItemImageContainerSlides>
            <img src={product.img} alt={product.name} />
            {product.accent && <ProductAccent>{product.accent}</ProductAccent>}

            <SvgTringolButtonL>
              <SvgTringol style={{ width: "22px", height: "16px" }}>
                <use href={`${sprite}#icon-tringolL`} />
              </SvgTringol>
            </SvgTringolButtonL>
            <SvgTringolButtonR>
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
