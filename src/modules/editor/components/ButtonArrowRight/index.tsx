import React from "react";
import arrowRightIcon from "../../../../assets/icon-right-arrow.svg";
import { Button } from "./styles";
// import { Container } from './styles';

interface ButtonClickProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  ref?: any;
}

const ButtonArrowRight: React.FC<ButtonClickProps> = ({
  onClick,
  ref,
  ...rest
}) => {
  return (
    <div ref={ref} {...rest}>
      <Button onClick={onClick}>
        {" "}
        <img
          src={arrowRightIcon}
          style={{ width: "10px", height: "10px" }}
          alt=""
        />{" "}
      </Button>
    </div>
  );
};

export default ButtonArrowRight;

