import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from "react";

import { useMainHook } from "../../../hooks/main";
import { useSelection } from "./selection";

import { useToolbarEditor } from "./toolbarEditor";

interface IconsColorsProviderProps {
  children: ReactNode;
}
interface IconsColorsData {
  handleItalicIcon: () => void;
  handleClickGroupButton: () => void;
  handleClickStrongButton: () => void;
  handleColorPickerClick: () => void;
  handleColorPickerClickBorder: () => void;
  handleCloseColorPickerClick: () => void;
  handleBlockElements: () => void;
  handleUnderlineIcon: () => void;
  handleLineHeightIcon: (spacing: string) => void;
  handleListIcon: () => void;
  handleIsAlignIcon: () => void;
  handleIsUpLowerCase: () => void;
  isGroupButton: boolean;
  isStrong: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  isUpLowerCase: boolean;
  isAlign: boolean;
  isList: boolean;
  isLineHeight: boolean;
  blockElements: boolean;
  isDisplayColorPicker: boolean;
  isActiveBringToForward: boolean;
  isActiveTakeBack: boolean;
  setIsDisplayColorPicker: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseColorPickerClickBorder: () => void;
  isDisplayColorPickerBorder: boolean;
  setIsDisplayColorPickerBorder: React.Dispatch<React.SetStateAction<boolean>>;
}

const IconsColorsContext = createContext<IconsColorsData>(
  {} as IconsColorsData
);

const IconsColorsProvider: React.FC<IconsColorsProviderProps> = ({
  children
}) => {
  const [isActiveBringToForward, setIsActiveBringToForward] = useState(false);
  const [isActiveTakeBack, setIsActiveTakeBack] = useState(false);
  const [isGroupButton, setIsGroupButton] = useState(false);
  const [isAlign, setIsAlign] = useState(false);
  const [isList, setIsList] = useState(false);
  const [isLineHeight, setIsLineHeight] = useState(false);
  const [blockElements, setBlockElements] = useState(false);
  const [isDisplayColorPicker, setIsDisplayColorPicker] = useState(false);
  const [isDisplayColorPickerBorder, setIsDisplayColorPickerBorder] =
    useState(false);
  const { toggleBlockElement } = useToolbarEditor();

  const {
    strongFontWeight,
    isStrong,
    setIsStrong,
    isItalic,
    setIsItalic,
    italicElement,
    isUnderline,
    setIsUnderline,
    elementUnderline,
    toggleLowerOrUppercase
  } = useToolbarEditor();

  const { isUpLowerCase, setIsUpLowerCase } = useMainHook();

  const { selectedObject } = useSelection();

  const handleItalicIcon = useCallback(() => {
    italicElement();
  }, [selectedObject, isItalic]);

  const handleClickGroupButton = useCallback(() => {
    setIsGroupButton(!isGroupButton);
  }, [selectedObject, isGroupButton]);

  const handleClickStrongButton = useCallback(() => {
    strongFontWeight();
  }, [isStrong, selectedObject]);

  const handleColorPickerClick = useCallback(() => {
    if (!isDisplayColorPicker) {
      setIsDisplayColorPicker(true);
    } else {
      setIsDisplayColorPicker(true);
    }
  }, [isDisplayColorPicker]);

  const handleColorPickerClickBorder = useCallback(() => {
    if (!isDisplayColorPickerBorder) {
      setIsDisplayColorPickerBorder(true);
    } else {
      setIsDisplayColorPickerBorder(true);
    }
  }, [isDisplayColorPicker]);

  const handleCloseColorPickerClick = () => {
    setIsDisplayColorPicker(false);
  };
  const handleCloseColorPickerClickBorder = () => {
    setIsDisplayColorPickerBorder(false);
  };

  const handleBlockElements = () => {
    setBlockElements(!blockElements);
  };

  const handleUnderlineIcon = useCallback(() => {
    elementUnderline();
  }, [isUnderline, selectedObject]);

  const handleIsUpLowerCase = () => {
    setIsUpLowerCase(!isUpLowerCase);
    toggleLowerOrUppercase();
  };

  const handleIsAlignIcon = () => {
    setIsAlign(!isAlign);
  };

  const handleListIcon = () => {
    setIsList(!isList);
  };

  const handleLineHeightIcon = useCallback(
    (spacing: string) => {},
    [selectedObject, isLineHeight]
  );

  return (
    <IconsColorsContext.Provider
      value={{
        handleLineHeightIcon,
        handleListIcon,
        handleIsAlignIcon,
        handleIsUpLowerCase,
        handleUnderlineIcon,
        handleBlockElements,
        handleCloseColorPickerClick,
        handleColorPickerClick,
        handleClickStrongButton,
        handleClickGroupButton,
        handleItalicIcon,
        isGroupButton,
        isStrong,
        isItalic,
        isUnderline,
        isUpLowerCase,
        isAlign,
        isList,
        isLineHeight,
        blockElements,
        isDisplayColorPicker,
        isActiveBringToForward,
        isActiveTakeBack,
        setIsDisplayColorPicker,
        handleColorPickerClickBorder,
        handleCloseColorPickerClickBorder,
        isDisplayColorPickerBorder,
        setIsDisplayColorPickerBorder
      }}
    >
      {children}
    </IconsColorsContext.Provider>
  );
};

// creating hook

function useIconsColors(): IconsColorsData {
  const context = useContext(IconsColorsContext);

  if (!context) {
    throw new Error("useAuth must be used with an HeaderEditorProvider");
  }

  return context;
}

export { IconsColorsProvider, useIconsColors };
