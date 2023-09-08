// import { useState } from "react";

import sprite from "assets/images/sprite.svg";
import products from "marketDB.json";

import { SectionTitle } from "components/SectionTitle/SectionTitle";
import {
  MarketableSection,
  Container,
  TitleContainer,
  TitleDescription,
  TitleContext,
  Svg,
  FiltersContainer,
  FilterBox,
  FilterNamePrg,
  FilterGroupButtonFilter,
  FilterGroupButtonSort,
  MarketPlaceContainer,
  MarketList,
  KitchenAllItem,
  KitchenKitItem,
  KitchenAllItemLink,
  KitchenKitItemLink,
  KithenLinkPrg,
  MarketItem,
  ItemImageContainer,
  ItemImage,
} from "./Marketable.styled";

interface Products {
  id: number;
  img: string;
  name: string;
  price: string;
  oldPrice: string | null;
  accent: string | null;
}

// const filterOptions = [
//   { name: "Все", id: 1 },
//   { name: "Меньше 2000грн.", id: 2 },
//   { name: "Больше 2000грн.", id: 3 },
// ];

export const Marketable = () => {
  //   const [filter, setFilter] = useState(false);
  //   const [sort, setSort] = useState(false);

  return (
    <MarketableSection>
      <Container>
        <TitleContainer>
          <SectionTitle text="Каталог товаров" />
          <TitleDescription>
            Выбирай своего незаменимого помощника для приготовления любого блюда
          </TitleDescription>
          <TitleContext>Все товары</TitleContext>
        </TitleContainer>

        <MarketPlaceContainer>
          <FiltersContainer>
            <FilterBox>
              <FilterNamePrg>Фильтры:</FilterNamePrg>
              <FilterGroupButtonFilter>
                <p>Все</p>
                <Svg width={16} height={12}>
                  <use href={`${sprite}#icon-tringolB`} />
                </Svg>
              </FilterGroupButtonFilter>
              <div className="option-menu-filter"></div>
            </FilterBox>
            <FilterBox>
              <FilterNamePrg>Сортировать:</FilterNamePrg>
              <FilterGroupButtonSort>
                <p>Самые популярные</p>
                <Svg width={16} height={12}>
                  <use href={`${sprite}#icon-tringolB`} />
                </Svg>
              </FilterGroupButtonSort>
              <div className="option-menu-sort"></div>
            </FilterBox>
          </FiltersContainer>

          <MarketList>
            <KitchenAllItem>
              <KitchenAllItemLink href="/">
                <KithenLinkPrg>Хиты этого года</KithenLinkPrg>
              </KitchenAllItemLink>
              <p>Всё для кухни</p>
            </KitchenAllItem>

            {products.map((product: Products) => {
              return (
                <MarketItem key={product.id}>
                  <a href="">
                    <ItemImageContainer>
                      <ItemImage src={product.img} alt={product.name} />
                      {product.accent && <p>{product.accent}</p>}
                    </ItemImageContainer>
                    <p>{product.name}</p>
                    {!product.oldPrice && <p>{product.price}</p>}

                    {product.oldPrice && (
                      <>
                        <p>{product.oldPrice}</p>
                        <p>{product.price}</p>
                      </>
                    )}
                  </a>
                </MarketItem>
              );
            })}

            <KitchenKitItem>
              <KitchenKitItemLink>
                <KithenLinkPrg>Комлекты</KithenLinkPrg>
              </KitchenKitItemLink>
              <p>Наборы техники</p>
            </KitchenKitItem>
          </MarketList>
        </MarketPlaceContainer>
      </Container>
    </MarketableSection>
  );
};
