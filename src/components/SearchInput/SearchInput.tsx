import search from "assets/images/serch.svg";
import mail from "assets/images/mail.svg";
import sprite from "assets/images/sprite.svg";

import { Form, Input, SubmitButton, Svg } from "./SearchInput.styled";

interface SerchInputProps {
  placeholder: string;
  icon: string;
}

export const SearchInput = ({ placeholder }: SerchInputProps) => {
  return (
    <Form>
      <label>
        <Input type="text" placeholder={placeholder} />
      </label>
      <SubmitButton type="submit">
        <Svg style={{ width: "28px", height: "28px" }}>
          <use href={`${sprite}#icon-serch`} />
        </Svg>
      </SubmitButton>
    </Form>
  );
};
