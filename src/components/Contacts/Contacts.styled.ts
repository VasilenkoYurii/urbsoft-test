import styled from "@emotion/styled";

export const ContactsContainer = styled.div`
  width: 840px;
  height: 724px;

  background-color: var(--white-bg-color);

  padding-top: 150px;
  padding-left: 80px;

  position: relative;
`;

export const ContactsBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;

  margin-top: 21px;
  gap: 40px;
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
`;

export const ContactsPrg = styled.p`
  color: var(--light-section-text);
  font-family: "Ubuntu", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  max-width: 270px;
  gap: 8px;

  color: var(--icon-color);

  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  transition: all 500ms;

  &:hover {
    color: var(--primary-text-color);

    svg {
      fill: var(--primary-text-color);
    }
  }
`;

export const SocialBox = styled.div`
  display: flex;
  gap: 40px;
`;

export const SocialLink = styled.a`
  color: var(--icon-color);
  font-family: "Sansation", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100.914%;

  transition: all 500ms;

  &:hover {
    color: var(--primary-text-color);
  }
`;

export const Map = styled.iframe`
  border: 0;
  border-radius: 4px;

  position: absolute;
  bottom: 135px;
  right: 77px;
`;

export const Svg = styled.svg`
  fill: var(--icon-color);
  transition: all 500ms;
`;
