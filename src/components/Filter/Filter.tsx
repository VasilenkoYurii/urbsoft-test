import sprite from "assets/images/sprite.svg";

import {
  FiltersContainer,
  FilterBox,
  FilterNamePrg,
  FilterGroupButtonFilter,
  FilterGroupButtonSort,
  Svg,
} from "./Filter.styled";

export const Filter = () => {
  return (
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
  );
};
