import { useEffect } from "react";
import { useMainHook } from "../../../../../hooks/main";
import { useSelection } from "../../../hooks/selection";
import { useToolbarEditor } from "../../../hooks/toolbarEditor";
import {
  BoxDecrement,
  BoxIncrement,
  Flex,
  NumberArea,
  Container
} from "./styles";

const SelectBorderRadius = () => {
  const {
    changeBorderRadius,
    setChangeBorderRadius,
    elementBorderRadiusIncrement,
    elementBorderRadiusDecrement
  } = useToolbarEditor();

  const { selectedObject } = useSelection();

  return (
    <Container>
      <BoxDecrement
        onClick={() => elementBorderRadiusDecrement(changeBorderRadius)}
      >
        -
      </BoxDecrement>
      <Flex>
        <NumberArea
          value={changeBorderRadius}
          onChange={e => setChangeBorderRadius(Number(e.target.value))}
          //value={sizeOfFont}
          //  onChange={e => setSizeOfFont(Number(e.target.value))}
        ></NumberArea>
      </Flex>
      <BoxIncrement
        onClick={() => elementBorderRadiusIncrement(changeBorderRadius)}
      >
        +
      </BoxIncrement>
    </Container>
  );
};

export default SelectBorderRadius;
