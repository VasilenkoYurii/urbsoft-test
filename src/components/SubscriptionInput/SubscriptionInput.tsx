import sprite from "assets/images/sprite.svg";
import { MoreButton } from "components/MoreButton/MoreButton";

import { Form, Input, Svg, MoreContainer } from "./SubscriptionInput.styled";

interface SerchInputProps {
  placeholder: string;
  textForButton: string;
}

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
