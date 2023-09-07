import { Formik } from "formik";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux/es/exports";

import { MoreButton } from "components/MoreButton/MoreButton";
import { postUser } from "redux/operations";

import {
  FormContainer,
  FormTitle,
  Input,
  StyledForm,
  InputsContainer,
  Label,
  ErrorText,
} from "./QuestionForm.styled";

const emailRegexp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const nameRegexp = /^.{3,}$/;
const phoneRegexp = /^[\d+() -]*\d{5,}$/;

interface FormValues {
  name: string;
  email: string;
  phone: string;
}
export const QuestionForm = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);

    dispatch(postUser(values));

    resetForm();
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{ name: "", email: "", phone: "" }}
        onSubmit={handleSubmit}
        validate={(values: FormValues) => {
          const errors: Partial<FormValues> = {};

          if (!nameRegexp.test(values.name)) {
            errors.name = "Name must be at least 3 characters long";
          }

          if (!emailRegexp.test(values.email)) {
            errors.email = `Invalid email address`;
          }

          if (!phoneRegexp.test(values.phone)) {
            errors.phone = "Invalid phone number";
          }

          return errors;
        }}
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
