// import { useState } from "react";

import products from "marketDB.json";

import { SectionTitle } from "components/SectionTitle/SectionTitle";
import { Filter } from "components/Filter/Filter";
import { ProductItem } from "components/ProductItem/ProductItem";

import {
  MarketableSection,
  Container,
  TitleContainer,
  TitleDescription,
  TitleContext,
  MarketPlaceContainer,
  MarketList,
  KitchenAllItem,
  KitchenKitItem,
  KitchenAllItemLink,
  KitchenKitItemLink,
  KithenLinkPrg,
  ButtonSeeMore,
} from "./Marketable.styled";

interface Products {
  id: number;
  img: string;
  name: string;
  price: string;
  oldPrice: string | null;
  accent: string | null;
  slides: boolean;
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
          {/*  */}

          <Filter />

          {/*  */}

          <MarketList>
            <KitchenAllItem>
              <KitchenAllItemLink href="/">
                <KithenLinkPrg>Хиты этого года</KithenLinkPrg>
              </KitchenAllItemLink>
              <p>Всё для кухни</p>
            </KitchenAllItem>

            {products.map((product: Products) => {
              return <ProductItem key={product.id} product={product} />;
            })}

            <KitchenKitItem>
              <KitchenKitItemLink href="/">
                <KithenLinkPrg>Комлекты</KithenLinkPrg>
              </KitchenKitItemLink>
              <p>Наборы техники</p>
            </KitchenKitItem>
          </MarketList>
        </MarketPlaceContainer>

        {/*  */}

        <ButtonSeeMore>Показать больше</ButtonSeeMore>

        {/*  */}
      </Container>
    </MarketableSection>
  );
};
