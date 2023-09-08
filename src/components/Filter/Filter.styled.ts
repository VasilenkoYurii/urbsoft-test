import styled from "@emotion/styled";

export const FiltersContainer = styled.div`
  display: flex;
  gap: 100px;
  position: relative;
`;

export const FilterBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const FilterNamePrg = styled.p`
  color: var(--main-text-color);
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FilterGroupButtonFilter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  color: var(--light-section-text);
  font-family: "Ubuntu";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border: none;
  background-color: inherit;

  cursor: pointer;

  &:hover {
    + .option-menu-filter,
    .option-menu-filter:hover {
      display: block;
    }
  }
`;

export const FilterGroupButtonSort = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  color: var(--light-section-text);
  font-family: "Ubuntu";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border: none;
  background-color: inherit;

  cursor: pointer;

  &:hover {
    + .option-menu-sort,
    .option-menu-sort:hover {
      display: block;
    }
  }
`;

export const Svg = styled.svg`
  fill: var(--light-section-text);
`;
