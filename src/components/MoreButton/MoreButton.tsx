import sprite from "assets/images/sprite.svg";

import { Button, BottonPrg, SvgEllipse, SvgArrow } from "./MoreButton.styled";

interface MoreButtonProps {
  text: string;
}

export const MoreButton = ({ text }: MoreButtonProps) => {
  return (
    <Button type="submit">
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
