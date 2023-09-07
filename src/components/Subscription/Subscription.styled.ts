import styled from "@emotion/styled";

export const Section = styled.section`
  width: 100%;
  height: 340px;
  background-color: var(--main-bg-color);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 1680px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  margin-right: 98px;
`;

export const SectionDescription = styled.p`
  color: #b4aea7;
  font-family: "Ubuntu", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MoreContainer = styled.div`
  margin-left: 50px;
`;
