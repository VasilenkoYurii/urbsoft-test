import { StyledSectionTitle } from "./SectionTitle.styled";

/**
 * Переиспользуемый компонент для секций который рендерит главный заголовок секции
 * принимает text в виде строки как обязательный параметр
 */

export const SectionTitle = ({ text }: { text: string }) => {
  return (
    <>
      <StyledSectionTitle>{text}</StyledSectionTitle>
    </>
  );
};
