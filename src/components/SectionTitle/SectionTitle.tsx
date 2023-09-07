import { StyledSectionTitle } from "./SectionTitle.styled";

interface SectionTitleProps {
  text: string;
}

export const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <>
      <StyledSectionTitle>{text}</StyledSectionTitle>
    </>
  );
};
