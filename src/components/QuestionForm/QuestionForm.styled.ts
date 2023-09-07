import styled from "@emotion/styled";
import { Form, Field, ErrorMessage } from "formik";

export const FormContainer = styled.div`
  width: 840px;
  height: 100%;
`;

export const FormTitle = styled.h2`
  font-family: "SourceSansPro";
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.25px;
  text-transform: uppercase;

  margin-bottom: 71px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 25px;

  margin-bottom: 19px;
`;

export const Input = styled(Field)`
  width: 381px;
  height: 64px;

  border-radius: 6px;
  border: 1px solid var(--primary-text-color);
  background: #fff;
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.05);

  text-align: center;

  color: #000;
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

export const Label = styled.label`
  position: relative;
`;

export const ErrorText = styled(ErrorMessage)`
  position: absolute;

  color: #d5466c;
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
