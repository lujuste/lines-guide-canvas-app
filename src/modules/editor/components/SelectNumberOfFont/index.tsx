import { useToolbarEditor } from "../../hooks/toolbarEditor";
import {
  BoxDecrement,
  BoxIncrement,
  Flex,
  NumberArea,
  Container
} from "./styles";

const SelectNumberOfFont = () => {
  const {
    editFontSizeMax,
    editFontSizeMin,
    sizeOfFont,
    setSizeOfFont,
    placeholderOfFont,
    setPlaceholderOfFont
  } = useToolbarEditor();

  return (
    <Container>
      <BoxDecrement onClick={() => editFontSizeMin(placeholderOfFont)}>
        -
      </BoxDecrement>
      <Flex>
        <NumberArea
          placeholder={String(placeholderOfFont)}
          value={sizeOfFont}
          onChange={e => setSizeOfFont(Number(e.target.value))}
        ></NumberArea>
      </Flex>
      <BoxIncrement onClick={() => editFontSizeMax(placeholderOfFont)}>
        +
      </BoxIncrement>
    </Container>
  );
};

export default SelectNumberOfFont;
