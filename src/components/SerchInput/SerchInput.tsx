import search from "assets/images/serch.svg";
import mail from "assets/images/mail.svg";

import { Form, Input, SubmitButton } from "./SerchInput.styled";

interface SerchInputProps {
  placeholder: string;
  icon: string;
}

export const SerchInput = ({ placeholder, icon }: SerchInputProps) => {
  return (
    <Form>
      <label>
        <Input type="text" placeholder={placeholder} />
      </label>
      <SubmitButton type="submit">
        <img src={icon === "search" ? search : mail} alt="" />
      </SubmitButton>
    </Form>
  );
};
