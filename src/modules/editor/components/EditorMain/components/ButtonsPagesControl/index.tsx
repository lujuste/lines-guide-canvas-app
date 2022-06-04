import React from "react";
import AddPageEditor from "../AddPageEditor";
import DuplicatePageEditor from "../DuplicatePageEditor";
import MoveDownPage from "../MoveDownPage";
import MoveUpPage from "../MoveUpPage";
import RemovePageEditor from "../RemovePageEditor";

// import { Container } from './styles';

interface ButtonsPagesControlProps {
  item: any;
  index: number;
}

const ButtonsPagesControl: React.FC<ButtonsPagesControlProps> = ({
  item,
  index
}) => {
  return (
    <>
      <MoveUpPage index={index} item={item} />
      <MoveDownPage index={index} item={item} />
      <AddPageEditor index={index} item={item} />
      <DuplicatePageEditor index={index} item={item} />
      <RemovePageEditor index={index} item={item} />
    </>
  );
};

export default ButtonsPagesControl;
