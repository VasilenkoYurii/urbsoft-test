import sprite from "assets/images/sprite.svg";

import {
  FiltersContainer,
  FilterBox,
  FilterNamePrg,
  FilterGroupButtonFilter,
  FilterGroupButtonSort,
  Svg,
  FilterList,
  FilterListItem,
} from "./Filter.styled";

export const Filter = () => {
  return (
    <FiltersContainer>
      <FilterBox>
        <FilterNamePrg>Фильтры:</FilterNamePrg>
        <FilterGroupButtonFilter>
          <p>Все</p>
          <Svg width={14} height={10}>
            <use href={`${sprite}#icon-tringolB`} />
          </Svg>
        </FilterGroupButtonFilter>
        <div className="option-menu-filter">
          <FilterList>
            <FilterListItem>Блендеры</FilterListItem>
            <FilterListItem>Чайники</FilterListItem>
            <FilterListItem>Тостеры</FilterListItem>
          </FilterList>
        </div>
      </FilterBox>
      <FilterBox>
        <FilterNamePrg>Сортировать:</FilterNamePrg>
        <FilterGroupButtonSort>
          <p>Самые популярные</p>
          <Svg width={14} height={10}>
            <use href={`${sprite}#icon-tringolB`} />
          </Svg>
        </FilterGroupButtonSort>
        <div className="option-menu-sort">
          <FilterList>
            <FilterListItem>Сначала меньшая цена</FilterListItem>
            <FilterListItem>Сначала большая цена</FilterListItem>
            <FilterListItem>Популярное</FilterListItem>
          </FilterList>
        </div>
      </FilterBox>
    </FiltersContainer>
  );
};
