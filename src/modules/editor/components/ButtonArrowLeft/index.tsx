import React from "react";
import { Button } from "./styles";
import arrowLeftIcon from "../../../../assets/icon-left-right.svg";

// import { Container } from './styles';

interface ButtonClickProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonArrowLeft: React.FC<ButtonClickProps> = ({ onClick }) => {
  return (
    <div>
      <Button onClick={onClick}>
        {" "}
        <img
          src={arrowLeftIcon}
          style={{ width: "10px", height: "10px" }}
          alt=""
        />{" "}
      </Button>
    </div>
  );
};

export default ButtonArrowLeft;

