import sprite from "assets/images/sprite.svg";
import { MoreButtonProps } from "helpers/interfaces";

import { Button, BottonPrg, SvgEllipse, SvgArrow } from "./MoreButton.styled";

/**
 * Перееиспользуемый компонент который рендерит кнопку, принимает
 * text в виде строки как обязательный параметр,
 * и fun в видел функции если такая есть
 */

export const MoreButton = ({ text, fun }: MoreButtonProps) => {
  const hendleClick = () => {
    if (fun !== undefined) {
      fun();
    }
    return;
  };

  return (
    <Button type="submit" onClick={hendleClick}>
      <SvgEllipse style={{ width: "50px", height: "50px" }}>
        <use href={`${sprite}#icon-ellipse`} />
      </SvgEllipse>

      <BottonPrg>{text}</BottonPrg>

      <SvgArrow style={{ width: "36px", height: "36px" }}>
        <use href={`${sprite}#icon-arrow-r`} />
      </SvgArrow>
    </Button>
  );
};
