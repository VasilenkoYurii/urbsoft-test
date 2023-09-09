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

  & {
    p {
      height: 21px;
    }
  }

  &:hover {
    + .option-menu-filter,
    .option-menu-filter:hover {
      display: block;
      opacity: 1;
    }

    svg {
      transform: rotate(180deg);
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

  & {
    p {
      height: 21px;
    }
  }

  &:hover {
    + .option-menu-sort,
    .option-menu-sort:hover {
      display: block;
    }

    svg {
      transform: rotate(180deg);
    }
  }
`;

export const Svg = styled.svg`
  fill: var(--light-section-text);

  transition: all 500ms;
`;

export const FilterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  padding: 15px;
`;

export const FilterListItem = styled.li`
  color: var(--light-section-text);
  font-family: "Ubuntu";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;
`;
