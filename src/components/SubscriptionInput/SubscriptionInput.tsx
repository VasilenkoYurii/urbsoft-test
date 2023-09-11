import sprite from "assets/images/sprite.svg";
import { SerchInputProps } from "helpers/interfaces";
import { MoreButton } from "components/MoreButton/MoreButton";

import { Form, Input, Svg, MoreContainer } from "./SubscriptionInput.styled";

/**
 * Переиспользуемый компонент который используется в секции подписки на новости
 * принимает placeholder и textForButton в виде строк как обязательные параметры
 */

export const SubscriptionInput = ({
  placeholder,
  textForButton,
}: SerchInputProps) => {
  return (
    <Form>
      <label>
        <Input type="text" placeholder={placeholder} />
        <Svg style={{ width: "28px", height: "28px" }}>
          <use href={`${sprite}#icon-mail`} />
        </Svg>
      </label>

      <MoreContainer>
        <MoreButton text={textForButton} />
      </MoreContainer>
    </Form>
  );
};
