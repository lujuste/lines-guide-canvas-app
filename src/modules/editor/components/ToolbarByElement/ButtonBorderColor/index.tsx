import { animate, useMotionValue, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import useComponentVisible from "../../../hooks/useComponentVisible";
import ButtonIcons from "../../../../../shared/components/ButtonIcons";
import { SketchPicker } from "react-color";
import IconSvg from "../../IconSvg";
import {
  BoxColor,
  BoxColorInput,
  ButtonToolbarColor,
  Container,
  ContainerInputColor,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  Flex,
  Grid,
  GridItem,
  HorizontalStack,
  Text,
  VerticalStack
} from "./styles";

import iconButtonInputColors from "../../../assets/icon-button-colors.svg";
import { useMainHook } from "../../../../../hooks/main";
import { useToolbarEditor } from "../../../hooks/toolbarEditor";
import { useSelection } from "../../../hooks/selection";

interface ButtonColorProps {
  newColorBorder: string;
  colorsDefault?: string[];
  colors?: [];
  colorsSelectVector?: string[];
  addNewColor?: any;
  handleColorPickerClick?: () => void;
  handleCloseColorPickerClick?: () => void;
  isDisplayColorPickerBorder?: boolean;
  setIsDisplayColorPicker?: any;
  handleChangeBorder?: any;
  handleInputChange?: any;
  randomColor?: boolean;
  setSelectedOption?: any;
  selectedOption?: any;
  isFavoriteColor?: any;
  isStrokeColor?: string;
}

export const ButtonBorderColor: React.FC<ButtonColorProps> = ({
  colorsDefault,
  newColorBorder,
  colors,
  addNewColor,
  handleColorPickerClick,
  handleColorPickerClickBorder,
  isDisplayColorPickerBorder,
  setIsDisplayColorPicker,
  handleChangeBorder,
  handleInputChange,
  randomColor,
  isFavoriteColor,
  colorsSelectVector,
  setSelectedOption,
  isStrokeColor,
  selectedOption,
  ...rest
}: any) => {
  const list = {
    visible: {
      opacity: 1,
      y: 5,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        when: "afterChildren"
      }
    }
  };

  const { selectedObject } = useSelection();
  const { setColorToElementBorder } = useToolbarEditor();

  const variants = {
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.3
      }
    }),
    hidden: { opacity: 0 }
  };

  const x = useMotionValue(0);

  useEffect(() => {
    const controls = animate(x, 100, {
      type: "spring",
      stiffness: 2000
    });

    return controls.stop;
  });

  const [isOpen, setIsOpen] = useState(false);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const handleClick = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);

    // TODO - it is missing to implement { ... }
  };

  const handleSetColorBorder = useCallback(
    (color: string) => {
      setColorToElementBorder(color);
      addNewColor(color);
      setIsDisplayColorPicker(false);
    },
    [selectedObject, addNewColor]
  );

  useEffect(() => {
    if (!isComponentVisible) {
      setIsOpen(false);
      setIsComponentVisible(true);
      setIsDisplayColorPicker(false);
    } else {
      return;
    }
  }, [isComponentVisible]);

  return (
    <Container>
      <DropDownContainer ref={ref}>
        <DropDownHeader Open={isOpen} onClick={handleClick}>
          <ButtonToolbarColor
            isStrokeColor={isStrokeColor}
            ref={ref}
            {...rest}
            newColor={newColorBorder}
          ></ButtonToolbarColor>
        </DropDownHeader>
        {isOpen && isComponentVisible && (
          <DropDownListContainer>
            <DropDownList
              variants={list}
              initial="hidden"
              animate="visible"
              as={motion.ul}
            >
              <Flex>
                <Text>Cores padrão de borda</Text>
                <Grid>
                  {colorsDefault.map((color: string, index: number) => (
                    <>
                      <GridItem key={index}>
                        <BoxColor
                          onClick={() => handleSetColorBorder(color)}
                          value={color}
                          color={color}
                        />
                      </GridItem>
                    </>
                  ))}
                </Grid>
                <HorizontalStack>
                  <ContainerInputColor onSubmit={handleInputChange}>
                    <input
                      type="text"
                      name="color"
                      id="my-colors"
                      placeholder={newColorBorder}
                      value={newColorBorder}
                      onChange={e => handleSetColorBorder(e.target.value)}
                    />
                    <ButtonIcons justifyContent="space-between">
                      <IconSvg
                        src={iconButtonInputColors}
                        description={"Button de input de cores"}
                      />
                    </ButtonIcons>
                  </ContainerInputColor>

                  <BoxColorInput
                    randomColor={randomColor}
                    color={newColorBorder}
                  >
                    <button
                      onClick={() => setIsDisplayColorPicker(true)}
                      className="btn-get-colors"
                    >
                      {isDisplayColorPickerBorder && isComponentVisible && (
                        <div
                          className="popover-color"
                          onClick={() =>
                            setIsDisplayColorPicker(!isDisplayColorPickerBorder)
                          }
                        >
                          <div className="cover-color">
                            <SketchPicker
                              color={newColorBorder}
                              onChange={handleChangeBorder}
                            />
                          </div>
                        </div>
                      )}
                    </button>
                  </BoxColorInput>
                </HorizontalStack>
                {/* <VerticalStack>
                  <Text margin="0 0 1rem 0">Novas cores</Text>
                  <Grid>
                    {isFavoriteColor.map((value: string, index: number) => (
                      <>
                        <GridItem key={index}>
                          <BoxColor
                            onClick={() => addNewColor(value)}
                            value={value}
                            color={value}
                          />
                        </GridItem>
                      </>
                    ))}
                  </Grid>
                </VerticalStack> */}
              </Flex>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Container>
  );
};
