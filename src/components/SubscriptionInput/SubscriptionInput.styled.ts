import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;

  & label {
    position: relative;
  }
`;

export const Input = styled.input`
  width: 400px;
  height: 60px;
  flex-shrink: 0;

  border-radius: 3px;
  border: 1px solid var(--primary-color);

  background-color: inherit;

  padding-left: 25px;

  color: var(--light-input-text);
  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder,
  &:-ms-input-placeholder,
  &::-ms-input-placeholder {
    color: var(--light-input-text);
  }
`;

export const Svg = styled.svg`
  position: absolute;
  top: 16px;
  right: 25px;

  fill: var(--primary-text-color);
`;

export const MoreContainer = styled.div`
  margin-left: 50px;
`;
