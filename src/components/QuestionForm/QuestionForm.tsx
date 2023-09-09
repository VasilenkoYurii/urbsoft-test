import { Formik } from "formik";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux/es/exports";

import { MoreButton } from "components/MoreButton/MoreButton";
import { postUser } from "redux/operations";
import { FormValues } from "helpers/interfaces";
import { validateFormBody } from "helpers/validateFormBody";

import {
  FormContainer,
  FormTitle,
  Input,
  StyledForm,
  InputsContainer,
  Label,
  ErrorText,
} from "./QuestionForm.styled";

export const QuestionForm = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    dispatch(postUser(values));

    resetForm();
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{ name: "", email: "", phone: "" }}
        onSubmit={handleSubmit}
        validate={(values: FormValues) => validateFormBody(values)}
      >
        {({ isSubmitting }) => (
          <StyledForm autoComplete="off">
            <FormTitle>Запит пропозицій</FormTitle>

            <InputsContainer>
              <Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
                <ErrorText name="name" component="div" />
              </Label>

              <Label>
                <Input type="email" name="email" placeholder="Почта" required />
                <ErrorText name="email" component="div" />
              </Label>

              <Label>
                <Input type="tel" name="phone" placeholder="Телефон" required />
                <ErrorText name="phone" component="div" />
              </Label>
            </InputsContainer>

            <MoreButton text="Заказать звонок" />
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  );
};
