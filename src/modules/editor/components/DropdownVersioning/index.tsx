import { useEffect, useState } from "react";
import useComponentVisible from "../../hooks/useComponentVisible";
import {
  Container,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem
} from "./styles";

interface DropdownVersioningProps {
  borderRadius?: string;
}

const options = ["01", "02", "03"];

const DropdownVersioning: React.FC<DropdownVersioningProps> = ({
  borderRadius
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const handleClick = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isComponentVisible) {
      setIsOpen(false);
      setIsComponentVisible(true);
    } else {
      return;
    }
  }, [isComponentVisible, setIsComponentVisible]);

  return (
    <>
      <Container borderRadius={borderRadius}>
        <DropDownContainer ref={ref}>
          <DropDownHeader Open={isOpen} onClick={handleClick}>
            {selectedOption || "Versão"}
          </DropDownHeader>
          {isOpen && isComponentVisible && (
            <DropDownListContainer onClick={handleClick}>
              <DropDownList>
                {options.map(option => (
                  <ListItem
                    onClick={onOptionClicked(option)}
                    value={option}
                    key={Math.random()}
                  >
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Container>
    </>
  );
};

export default DropdownVersioning;
