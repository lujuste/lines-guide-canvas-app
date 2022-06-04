import React, { useEffect, useState } from "react";

import ButtonIcons from "../../../../../../shared/components/ButtonIcons";
import { useIconsColors } from "../../../../hooks/iconsColors";
import Divider from "../../../Divider";
import DropdownToolbar from "../../../DropdownToolbar";
import DropdownZoom from "../../../DropdownZoom";
import IconToolbar from "../../../IconToolbar";
import SelectNumberOfFont from "../../../SelectNumberOfFont";
import Tooltip from "../../../Tooltip";
import { ButtonColor } from "../../ButtonColor";
import ButtonToolbar from "../../ButtonToolbar";
import LockedIcon from "../../icons/LockedIcon";
import UnlockIcon from "../../icons/UnlockIcon";
import {
  ButtonToolbarIsolate,
  Container,
  ContainerLeft,
  ContainerText,
  ContainerTextRight,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListAlign,
  DropDownListContainer,
  DropDownListContainerAlign,
  Flex,
  FlexContainer,
  ListItem,
  ListItemAlign,
  Text,
  VerticalStack
} from "./styles";

import { animate, useAnimation, useMotionValue, motion } from "framer-motion";
import useComponentVisible from "../../../../hooks/useComponentVisible";
import { useToolbarEditor } from "../../../../hooks/toolbarEditor";
import iconAlignCenter from "../../../../assets/icon-align-center.svg";
import iconAlignRight from "../../../../assets/icon-align-right.svg";
import iconAlignJustify from "../../../../assets/icon-align-justify.svg";
import iconAlignLeft from "../../../../assets/icon-align-left.svg";
import IconSvg from "../../../IconSvg";

interface TextToolProps {
  VectorOfColors: string[];
  color: string;
  isFavoriteColor: string[][];
  selectedOption: any;
  setSelectedOption: React.Dispatch<any>;
  colorsSelectVector: string[];
  setColor: React.Dispatch<React.SetStateAction<string>>;
  handleColorPickerClick: () => void;
  handleCloseColorPickerClick: () => void;
  isDisplayColorPicker: boolean;
  setIsDisplayColorPicker: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: (color: any) => void;
  randomColor: boolean;
  handleInputChange: (e: any) => void;
  handleClickBringToForwardIcon: () => void;
  handleClickTakeBackIcon: () => void;
  handleDeleteElement: () => void;
  handleToggleBlockElement: () => void;
  isDraggable: boolean;
  iconTrash: string;
}

const TextTool: React.FC<TextToolProps> = ({
  VectorOfColors,
  color,
  isFavoriteColor,
  selectedOption,
  setSelectedOption,
  colorsSelectVector,
  setColor,
  handleColorPickerClick,
  handleCloseColorPickerClick,
  isDisplayColorPicker,
  setIsDisplayColorPicker,
  handleChange,
  randomColor,
  handleInputChange,
  handleClickBringToForwardIcon,
  handleClickTakeBackIcon,
  handleDeleteElement,
  handleToggleBlockElement,
  iconTrash,
  isDraggable
}) => {
  //data lineHeight
  const valuesOfLineHeight = [
    { name: "Simples", lineHeight: "1" },
    { name: "1,15", lineHeight: "1.15" },
    { name: "1,5", lineHeight: "1.5" },
    { name: "Duplo", lineHeight: "2" }
  ];

  const alignOfText = [
    { icon: iconAlignLeft, valueOfAlign: "left" },
    { icon: iconAlignRight, valueOfAlign: "right" },
    { icon: iconAlignCenter, valueOfAlign: "center" },
    { icon: iconAlignJustify, valueOfAlign: "justify" }
  ];

  const {
    isActiveBringToForward,
    isActiveTakeBack,
    isGroupButton,
    handleClickGroupButton,
    isStrong,
    handleClickStrongButton,
    isItalic,
    handleItalicIcon,
    isUnderline,
    handleUnderlineIcon,
    isUpLowerCase,
    handleIsUpLowerCase,
    isAlign,
    handleIsAlignIcon,
    isList,
    handleListIcon,
    isLineHeight,
    handleLineHeightIcon
  } = useIconsColors();

  const {
    toggleLineHeight,
    isOpen,
    setIsOpen,
    isOpenAlign,
    setIsOpenAlign,
    handleSetIsOpenAlign,
    toggleAlignText
  } = useToolbarEditor();

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsOpenAlign(false);
  };
  const handleClickAlign = () => setIsOpenAlign(!isOpenAlign);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  useEffect(() => {
    if (!isComponentVisible) {
      setIsOpen(false);
      setIsComponentVisible(true);
    } else {
      return;
    }
  }, [isComponentVisible]);

  useEffect(() => {
    if (!isComponentVisible) {
      setIsOpenAlign(false);
      setIsComponentVisible(true);
    } else {
      return;
    }
  }, [isComponentVisible]);

  //animations
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

  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3
      }
    }),
    hidden: { opacity: 0 }
  };

  return (
    <>
      <ContainerText>
        <ContainerLeft>
          <ButtonColor
            colorsDefault={VectorOfColors}
            newColor={color}
            isFavoriteColor={isFavoriteColor}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            colorsSelectVector={colorsSelectVector}
            addNewColor={setColor}
            handleColorPickerClick={handleColorPickerClick}
            handleCloseColorPickerClick={handleCloseColorPickerClick}
            isDisplayColorPicker={isDisplayColorPicker}
            setIsDisplayColorPicker={setIsDisplayColorPicker}
            handleChange={handleChange}
            randomColor={randomColor}
            handleInputChange={handleInputChange}
          ></ButtonColor>

          <ButtonToolbar
            isActive={isActiveBringToForward}
            className="btn-toolbar"
            type="button"
            tooltipText="Para frente"
            onClick={handleClickBringToForwardIcon}
            component="toFront"
          />

          <ButtonToolbar
            isActive={isActiveTakeBack}
            className="btn-toolbar"
            type="button"
            component="toBack"
            tooltipText="Para trás"
            onClick={handleClickTakeBackIcon}
          />
        </ContainerLeft>

        {/* <ButtonIcons
          width="40px"
          margin={"1.6rem 1.6rem 1.6rem 1.6rem"}
          type="button"
        >
          <Text
            margin="0 1.6rem 0 1.6rem"
            isActive={isGroupButton}
            onClick={handleClickGroupButton}
          >
            {isGroupButton ? "Desagrupar" : "Agrupar"}
          </Text>
        </ButtonIcons> */}

        <Divider />
        <DropdownToolbar />
        <SelectNumberOfFont />
        <FlexContainer>
          <ButtonToolbar
            isActive={isStrong}
            className="btn-toolbar"
            type="button"
            component="isStrong"
            tooltipText="Negrito"
            onClick={handleClickStrongButton}
          />

          <ButtonToolbar
            isActive={isItalic}
            className="btn-toolbar"
            type="button"
            component="isItalic"
            tooltipText="Itálico"
            onClick={handleItalicIcon}
          />

          <ButtonToolbar
            isActive={isUnderline}
            className="btn-toolbar"
            type="button"
            component="isUnderline"
            tooltipText="Sublinhado"
            onClick={handleUnderlineIcon}
          />

          <ButtonToolbar
            isActive={isUpLowerCase}
            className="btn-toolbar"
            type="button"
            component="isUpLowerCase"
            tooltipText="Maiúscula e Minúscula"
            onClick={handleIsUpLowerCase}
          />
        </FlexContainer>
        <Divider />
        <Flex>
          <DropDownContainer ref={ref}>
            <DropDownHeader Open={isOpenAlign} onClick={handleSetIsOpenAlign}>
              <ButtonToolbar
                isActive={isOpenAlign}
                className="btn-toolbar"
                type="button"
                component="isAlign"
                tooltipText="Alinhamento"
              />
            </DropDownHeader>
          </DropDownContainer>
          {isOpenAlign && (
            <DropDownListContainerAlign onClick={handleSetIsOpenAlign}>
              <DropDownListAlign
                variants={list}
                initial="hidden"
                animate="visible"
                as={motion.ul}
              >
                {alignOfText.map((value, index) => (
                  <ListItemAlign
                    key={value.valueOfAlign}
                    onClick={() => toggleAlignText(value.valueOfAlign)}
                    onMouseEnter={() => toggleAlignText(value.valueOfAlign)}
                  >
                    <ButtonToolbarIsolate>
                      <IconSvg
                        src={value.icon}
                        className="icons-align-toolbar"
                        description="icon"
                      />
                    </ButtonToolbarIsolate>
                  </ListItemAlign>
                ))}
              </DropDownListAlign>
            </DropDownListContainerAlign>
          )}
        </Flex>

        <Divider />

        {/* <ButtonToolbar
          isActive={isList}
          className="btn-toolbar"
          type="button"
          component="isList"
          tooltipText="Lista"
          onClick={handleListIcon}
        /> */}
        <Flex>
          <DropDownContainer ref={ref}>
            <DropDownHeader Open={isOpen} onClick={handleClick}>
              <ButtonToolbar
                isActive={isOpen}
                className="btn-toolbar"
                type="button"
                component="isLineHeight"
                tooltipText="Altura do texto"
              />
            </DropDownHeader>
          </DropDownContainer>
          {isOpen && (
            <DropDownListContainer onClick={handleClick}>
              <DropDownList
                variants={list}
                initial="hidden"
                animate="visible"
                as={motion.ul}
              >
                {valuesOfLineHeight.map((value, index) => (
                  <ListItem
                    key={value.lineHeight}
                    as={motion.li}
                    onMouseEnter={() =>
                      toggleLineHeight(Number(value.lineHeight))
                    }
                    value={Number(value.lineHeight)}
                    onClick={() => toggleLineHeight(Number(value.lineHeight))}
                  >
                    {value.name}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </Flex>
        <Divider />
      </ContainerText>

      <ContainerTextRight>
        <button onClick={handleToggleBlockElement} className="btn-toolbar">
          <Tooltip text="Bloquear elemento" position="bottom">
            {isDraggable ? (
              <UnlockIcon className="width-unlock-icon" />
            ) : (
              <LockedIcon className="width-block-icon" />
            )}
          </Tooltip>
        </button>

        <button className="btn-toolbar" onClick={handleDeleteElement}>
          <Tooltip text="Lixeira" position="bottom">
            <IconToolbar
              className="width-spam-icon"
              src={iconTrash}
              description="Excluir"
            />
          </Tooltip>
        </button>
        <DropdownZoom />
      </ContainerTextRight>
    </>
  );
};

export default TextTool;

