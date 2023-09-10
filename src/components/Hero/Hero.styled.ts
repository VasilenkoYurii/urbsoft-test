import styled from "@emotion/styled";

export const HeroSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 1080px;
  padding-top: 126px;
  background-color: var(--main-bg-color);

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1920px;
  height: 954px;
  height: 100%;
  display: flex;
  justify-content: flex-start;

  position: relative;
`;

export const ArrowBox = styled.div`
  width: 133px;
  height: 82px;

  position: absolute;
  z-index: 5;
  left: 862px;
  bottom: 77px;
`;

export const ArrowPrg = styled.p`
  color: var(--light-input-text);
  font-family: "Sansation", sans-serif;
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;

export const ArrowSpan = styled.span`
  color: var(--accent-text-color);
  font-family: "Sansation", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 100.914%;
`;

export const ArrowLeft = styled.button`
  position: absolute;

  bottom: -28px;
  left: 0;

  background-color: inherit;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const ArrowRight = styled.button`
  position: absolute;

  bottom: -28px;
  right: 0;

  background-color: inherit;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const SvgArL = styled.svg`
  fill: ${(props: { page: number }) =>
    props.page === 1
      ? "var(--accent-text-color)"
      : "var(--light-section-text)"};
  transition: all 500ms;
`;

export const SvgArR = styled.svg`
  fill: ${(props: { page: number }) =>
    props.page === 5
      ? "var(--accent-text-color)"
      : "var(--light-section-text)"};
  transition: all 500ms;
`;
