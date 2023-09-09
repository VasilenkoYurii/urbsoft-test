import { FormValues } from "helpers/interfaces";
import { emailRegexp, nameRegexp, phoneRegexp } from "helpers/paterns";

export const validateFormBody = (values: FormValues) => {
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
};
