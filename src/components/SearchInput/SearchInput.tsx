import sprite from "assets/images/sprite.svg";

import { Form, Input, SubmitButton, Svg } from "./SearchInput.styled";

/**
 * Переиспользуемый компонент который используется в Header, Footer
 * принимает placeholder втде строки как обязательный параметр
 */

export const SearchInput = ({ placeholder }: { placeholder: string }) => {
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
