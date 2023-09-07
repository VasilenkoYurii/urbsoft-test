import { Formik, Form, Field, ErrorMessage } from "formik";

import { MoreButton } from "components/MoreButton/MoreButton";

import {
  FormContainer,
  FormTitle,
  Input,
  StyledForm,
  InputsContainer,
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
  const handleSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);

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
            errors.email = "Invalid email address";
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
              <label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
                <ErrorMessage name="name" component="div" />
              </label>

              <label>
                <Input type="email" name="email" placeholder="Почта" required />
                <ErrorMessage name="email" component="div" />
              </label>

              <label>
                <Input type="tel" name="phone" placeholder="Телефон" required />
                <ErrorMessage name="phone" component="div" />
              </label>
            </InputsContainer>

            <MoreButton text="Заказать звонок" />
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  );
};
