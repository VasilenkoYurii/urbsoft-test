import { StyledSectionTitle } from "./SectionTitle.styled";

export const SectionTitle = ({ text }: { text: string }) => {
  return (
    <>
      <StyledSectionTitle>{text}</StyledSectionTitle>
    </>
  );
};
