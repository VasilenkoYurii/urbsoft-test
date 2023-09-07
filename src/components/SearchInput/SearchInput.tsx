import search from "assets/images/serch.svg";
import mail from "assets/images/mail.svg";

import { Form, Input, SubmitButton } from "./SearchInput.styled";

interface SerchInputProps {
  placeholder: string;
  icon: string;
}

export const SearchInput = ({ placeholder, icon }: SerchInputProps) => {
  return (
    <Form>
      <label>
        <Input type="text" placeholder={placeholder} />
      </label>
      <SubmitButton type="submit" icon={icon}>
        <img src={icon === "search" ? search : mail} alt="Button icon" />
      </SubmitButton>
    </Form>
  );
};
