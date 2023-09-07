import ellipse from "assets/images/ellipse.svg";
import arrowRight from "assets/images/arrow-r.svg";

import { Button, BottonPrg, EllipseImg, ArrowImg } from "./MoreButton.styled";

interface MoreButtonProps {
  text: string;
}

export const MoreButton = ({ text }: MoreButtonProps) => {
  return (
    <Button type="submit">
      <EllipseImg src={ellipse} alt="Ellipse icon" />
      <BottonPrg>{text}</BottonPrg>
      <ArrowImg src={arrowRight} alt="Arrow right" />
    </Button>
  );
};
