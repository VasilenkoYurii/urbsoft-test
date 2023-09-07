import styled from "@emotion/styled";

export const Form = styled.form`
  position: relative;
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

  &::placeholder {
    color: var(--light-input-text);
  }

  &:-ms-input-placeholder {
    color: var(--light-input-text);
  }

  &::-ms-input-placeholder {
    color: var(--light-input-text);
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  top: 16px;
  right: 25px;

  padding: 0;
  border: none;
  background-color: inherit;
`;
