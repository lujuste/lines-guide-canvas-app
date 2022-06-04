import {
  Container,
  ContainerBlankPage,
  ContainerDefaultPage,
  ContainerImage,
  ContainerImageLeft,
  ContainerLeftBlankPage,
  ContainerRightBlankPage,
  ContainerRightDefaultPage,
  Text
} from "./styles";
import ButtonIcons from "../../../../shared/components/ButtonIcons";
import { VectorOfColors } from "../../../../utils/VectorOfColors";

//icons

import iconTrash from "../../assets/icon-trash.svg";
import IconToolbar from "../IconToolbar";
import DropdownZoom from "../DropdownZoom";

import { useCallback, useEffect, useState } from "react";

import { ButtonColor } from "./ButtonColor";
import Tooltip from "../Tooltip";
import LockedIcon from "./icons/LockedIcon";
import UnlockIcon from "./icons/UnlockIcon";
import ButtonToolbar from "./ButtonToolbar";
import TextTool from "./Components/TextTool";
import { useMainHook } from "../../../../hooks/main";
import { useIconsColors } from "../../hooks/iconsColors";
import { useToolbarEditor } from "../../hooks/toolbarEditor";
import { ButtonBorderColor } from "./ButtonBorderColor";
import DropdownStroke from "./DropdownStroke";
import DropdownDash from "./DropdownDash";
import DropdownRadius from "./DropdownRadius";
import { useSelection } from "../../hooks/selection";
import Konva from "konva";

interface ElementForShowProps {
  elementForShow: "Default" | "Image" | "Text" | "BlankPage" | "MultipleItems";
}

// colors bar

const colorsSelectVector = ["#000"];
const colorsBorderSelectVector = ["#000"];

const ToolbarByElement: React.FC<ElementForShowProps> = ({
  elementForShow
}) => {
  const [isFavoriteColor, setIsFavoriteColor] = useState([colorsSelectVector]);
  const [isFavoriteColorBorder, setIsFavoriteColorBorder] = useState([
    colorsBorderSelectVector
  ]);
  const [color, setColor] = useState("");
  const [borderColor, setColorBorder] = useState("");
  const [randomColor, setRandomColor] = useState(false);
  const [getColorBorder, setGetColorBorder] = useState(null);
  const [randomColorBorder, setRandomColorBorder] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionBorder, setSelectedOptionBorder] = useState(null);
  const [isActiveDash, setIsActiveDash] = useState(false);
  const [isActiveBorderRadius, setIsActiveBorderRadius] = useState(false);

  const { stageRef } = useMainHook();

  const { selectedObject, selectedObjects } = useSelection();
  const debouncedSearchTerm = useDebounce(color, 2500);

  const {
    handleBlockElements,
    handleCloseColorPickerClick,
    handleColorPickerClick,
    handleColorPickerClickBorder,
    isGroupButton,
    isDisplayColorPicker,
    isActiveBringToForward,
    isActiveTakeBack,
    setIsDisplayColorPicker,
    handleCloseColorPickerClickBorder,
    isDisplayColorPickerBorder,
    setIsDisplayColorPickerBorder
  } = useIconsColors();

  const {
    setColorToElement,
    deleteElement,
    bringElementToFront,
    pushElementToBehind,
    toggleBlockElement,
    isDraggable,
    setColorToElementBorder,
    toggleChangeStroke,
    makeGroup,
    ungroup
  } = useToolbarEditor();

  //
  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsFavoriteColor([...isFavoriteColor, debouncedSearchTerm]);
    }
  }, [debouncedSearchTerm]);

  // Getting stroke of object to show for user
  useEffect(() => {
    if (selectedObject) {
      if (selectedObject instanceof Konva.Shape) {
        setGetColorBorder(selectedObject?.stroke());
      }
    }
  }, [selectedObject, getColorBorder]);

  // Getting fill of object to show for user
  useEffect(() => {
    if (selectedObject) {
      if (selectedObject instanceof Konva.Shape) {
        setColor(selectedObject?.fill());
      }
    }
  }, [selectedObject]);

  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
    return debouncedValue;
  }

  const handleClickBringToForwardIcon = useCallback(() => {
    bringElementToFront();
  }, [selectedObject]);

  const handleClickRadius = useCallback(() => {
    setIsActiveBorderRadius(!isActiveBorderRadius);
  }, [selectedObject, isActiveBorderRadius]);

  const handleChangeStroke = useCallback(
    (stroke: number) => {
      if (selectedObject) {
        toggleChangeStroke(stroke);
      } else {
        return;
      }
    },
    [selectedObject]
  );

  const handleClickDash = useCallback(() => {
    setIsActiveDash(!isActiveDash);
  }, [isActiveDash, selectedObject]);

  const handleClickTakeBackIcon = useCallback(() => {
    pushElementToBehind();
  }, [selectedObject]);

  const handleInputChange = useCallback(
    (e: any) => {
      e.preventDefault();
      setColor(e.target.value);
    },
    [color]
  );

  const handleInputChangeBorder = (e: any, color: string) => {
    e.preventDefault();
    setColorBorder(e.target.value);

    setColorToElementBorder(color);
  };

  const handleDeleteElement = useCallback(() => {
    deleteElement();
  }, [selectedObject, selectedObjects]);

  const handleChange = useCallback(
    (color: any) => {
      setColorToElement(color.hex);
      setColor(color.hex);
    },
    [selectedObject]
  );

  const handleChangeBorder = useCallback(
    (color: any) => {
      setColorToElementBorder(color.hex);
      setColorBorder(color);
    },
    [selectedObject, borderColor, isDraggable]
  );

  const handleToggleBlockElement = useCallback(() => {
    toggleBlockElement();
  }, [selectedObject, selectedObjects]);

  return (
    <>
      {elementForShow === "Text" && (
        <TextTool
          VectorOfColors={VectorOfColors}
          color={color}
          isFavoriteColor={isFavoriteColor}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          colorsSelectVector={colorsSelectVector}
          handleColorPickerClick={handleColorPickerClick}
          handleCloseColorPickerClick={handleCloseColorPickerClick}
          isDisplayColorPicker={isDisplayColorPicker}
          setIsDisplayColorPicker={setIsDisplayColorPicker}
          handleChange={handleChange}
          randomColor={randomColor}
          handleInputChange={handleInputChange}
          handleClickBringToForwardIcon={handleClickBringToForwardIcon}
          handleClickTakeBackIcon={handleClickTakeBackIcon}
          handleToggleBlockElement={handleToggleBlockElement}
          isDraggable={isDraggable}
          iconTrash={iconTrash}
          setColor={setColor}
          handleDeleteElement={handleDeleteElement}
        />
      )}

      {elementForShow === "Default" && (
        <>
          <ContainerDefaultPage>
            <ButtonColor
              colorsDefault={VectorOfColors}
              newColor={color}
              isFavoriteColor={isFavoriteColor}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              colorsSelectVector={colorsSelectVector}
              addNewColor={setColor}
              handleColorPickerClick={handleColorPickerClick}
              handleCloseColorPickerClick={handleCloseColorPickerClickBorder}
              isDisplayColorPicker={isDisplayColorPicker}
              setIsDisplayColorPicker={setIsDisplayColorPicker}
              handleChange={handleChange}
              randomColor={randomColor}
              handleInputChange={handleInputChange}
            ></ButtonColor>

            <ButtonBorderColor
              colorsDefault={VectorOfColors}
              newColorBorder={borderColor}
              isFavoriteColor={isFavoriteColorBorder}
              selectedOption={selectedOptionBorder}
              setSelectedOption={setSelectedOptionBorder}
              colorsSelectVector={colorsBorderSelectVector}
              isStrokeColor={getColorBorder}
              addNewColor={setColorBorder}
              handleColorPickerClick={handleColorPickerClickBorder}
              handleCloseColorPickerClick={handleCloseColorPickerClickBorder}
              isDisplayColorPickerBorder={isDisplayColorPickerBorder}
              setIsDisplayColorPicker={setIsDisplayColorPickerBorder}
              handleChangeBorder={handleChangeBorder}
              randomColor={randomColorBorder}
              handleInputChange={handleInputChangeBorder}
            ></ButtonBorderColor>

            <DropdownStroke
              component="isStroke"
              handleChangeStroke={handleChangeStroke}
              className="btn-toolbar"
              type="button"
              tooltipText="Espessura"
            />

            <DropdownDash
              isActive={isActiveDash}
              className="btn-toolbar"
              type="button"
              tooltipText="Traço"
              onClick={handleClickDash}
              component="isDash"
            />

            <DropdownRadius
              tooltipText="Canto"
              component="isBorderRadius"
              onClick={handleClickRadius}
              type="button"
              isActive={isActiveBorderRadius}
              className="btn-toolbar"
            />

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

            <ButtonIcons
              width="40px"
              margin={"1.6rem 1.6rem 1.6rem 1.6rem"}
              type="button"
              onClick={() => {
                !isGroupButton ? makeGroup() : ungroup();
              }}
            >
              {/* <Text
                margin="0 1.6rem 0 1.6rem"
                isActive={!isGroupButton}
                onClick={handleClickGroupButton}
              >
                {isGroupButton ? "Desagrupar" : "Agrupar"}
              </Text> */}
            </ButtonIcons>
          </ContainerDefaultPage>
          <Container maxWidth="720px"></Container>
          <ContainerRightDefaultPage>
            <button
              onClick={() => {
                handleBlockElements();
                handleToggleBlockElement();
              }}
              className="btn-toolbar"
            >
              <Tooltip text="Bloquear elemento" position="bottom">
                {isDraggable ? (
                  <UnlockIcon className="width-unlock-icon" />
                ) : (
                  <LockedIcon className="width-lock-icon" />
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
          </ContainerRightDefaultPage>
        </>
      )}

      {elementForShow === "BlankPage" && (
        <>
          <ContainerBlankPage>
            <ContainerLeftBlankPage>
              {/* <ButtonColor
                colorsDefault={VectorOfColors}
                newColor={color}
                isFavoriteColor={isFavoriteColor}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                colorsSelectVector={colorsBorderSelectVector}
                addNewColor={setColorBorder}
                handleColorPickerClick={handleColorPickerClick}
                handleCloseColorPickerClick={handleCloseColorPickerClick}
                isDisplayColorPicker={isDisplayColorPicker}
                setIsDisplayColorPicker={setIsDisplayColorPicker}
                handleChange={handleChange}
                randomColor={randomColor}
                handleInputChange={handleInputChange}
              ></ButtonColor> */}

              {/*  <button
          className="btn-toolbar"
          type="button"
          onClick={handleClickBringToForwardIcon}
        >
          <Tooltip text="Trazer para frente" position="bottom">
            <BringToForwardIcon isActive={isActiveBringToForward} />
          </Tooltip>
        </button> */}
            </ContainerLeftBlankPage>

            {/* <ButtonIcons
              width="40px"
              margin={"1.6rem 1.6rem 1.6rem 1.6rem"}
              type="button"
              onClick={() => {
                !isGroupButton ? makeGroup() : ungroup();
              }}
            >
              <Text
                margin="0 1.6rem 0 1.6rem"
                isActive={!isGroupButton}
                onClick={handleClickGroupButton}
              >
                {isGroupButton ? "Desagrupar" : "Agrupar"}
              </Text>
            </ButtonIcons> */}
          </ContainerBlankPage>
          {/* <Container maxWidth="720px"></Container> */}
          <ContainerRightBlankPage>
            {/* <button
              onClick={() => {
                handleBlockElements();
                handleToggleBlockElement();
              }}
              className="btn-toolbar"
            >
              <Tooltip text="Bloquear elemento" position="bottom">
                {isDraggable ? (
                  <UnlockIcon className="width-unlock-icon" />
                ) : (
                  <LockedIcon className="width-lock-icon" />
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
            </button> */}
            <DropdownZoom />
          </ContainerRightBlankPage>
        </>
      )}

      {elementForShow === "Image" && (
        <>
          <ContainerImageLeft>
            <ContainerImage>
              <ButtonToolbar
                isActive={isActiveBringToForward}
                className="btn-toolbar"
                type="button"
                tooltipText="Para frente"
                onClick={handleClickBringToForwardIcon}
                component="toFront"
              />
            </ContainerImage>

            <ButtonToolbar
              isActive={isActiveTakeBack}
              className="btn-toolbar"
              type="button"
              component="toBack"
              tooltipText="Para trás"
              onClick={handleClickTakeBackIcon}
            />
            {/* <ButtonIcons
              width="40px"
              margin={"1.6rem 1.6rem 1.6rem 1.6rem"}
              type="button"
              onClick={() => {
                !isGroupButton ? makeGroup() : ungroup();
              }}
            >
              <Text
                margin="0 1.6rem 0 -3.6rem"
                isActive={!isGroupButton}
                onClick={handleClickGroupButton}
              >
                {isGroupButton ? "Desagrupar" : "Agrupar"}
              </Text>
            </ButtonIcons> */}
          </ContainerImageLeft>
          <Container maxWidth="720px"></Container>
          <Container maxWidth="180px">
            <button
              onClick={() => {
                handleBlockElements();
                handleToggleBlockElement();
              }}
              className="btn-toolbar"
            >
              <Tooltip text="Bloquear elemento" position="bottom">
                {isDraggable ? (
                  <UnlockIcon className="width-unlock-icon" />
                ) : (
                  <LockedIcon className="width-lock-icon" />
                )}
              </Tooltip>
            </button>

            <button className="btn-toolbar" onClick={handleDeleteElement}>
              <Tooltip text="Lixeira" position="bottom">
                <IconToolbar src={iconTrash} description="Excluir" />
              </Tooltip>
            </button>
            <DropdownZoom />
          </Container>
        </>
      )}

      {elementForShow === "MultipleItems" && (
        <>
          <ContainerImageLeft></ContainerImageLeft>
          <Container maxWidth="720px"></Container>
          <Container maxWidth="180px">
            <button
              onClick={() => {
                handleToggleBlockElement();
              }}
              className="btn-toolbar"
            >
              <Tooltip text="Bloquear elemento" position="bottom">
                {isDraggable ? (
                  <UnlockIcon className="width-unlock-icon" />
                ) : (
                  <LockedIcon className="width-lock-icon" />
                )}
              </Tooltip>
            </button>

            <button className="btn-toolbar" onClick={handleDeleteElement}>
              <Tooltip text="Lixeira" position="bottom">
                <IconToolbar src={iconTrash} description="Excluir" />
              </Tooltip>
            </button>
            <DropdownZoom />
          </Container>
        </>
      )}
    </>
  );
};

export default ToolbarByElement;
