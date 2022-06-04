import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import { useMainHook } from "../../../hooks/main";

import Konva from "konva";
import { useSelection } from "./selection";

interface ToolbarEditorProviderProps {
  children: ReactNode;
}

interface ToolbarEditorData {
  isScale: number;
  setIsScale: React.Dispatch<React.SetStateAction<number>>;
  isTranslationX: number;
  setIsTranslationX: React.Dispatch<React.SetStateAction<number>>;
  isTranslationY: number;
  setIsTranslationY: React.Dispatch<React.SetStateAction<number>>;
  valueZoom: number;
  setValueZoom: React.Dispatch<React.SetStateAction<number>>;
  reducer: (state: string, action: { type: string }) => void;
  elements: string;
  dispatch: (action: { type: string }) => void;
  setColorToElement: (color: string) => void;
  setColorToElementBorder: (color: string) => void;
  deleteElement: () => void;
  editFontSizeMax: (number: any) => void;
  editFontSizeMin: (number: any) => void;
  sizeOfFont: number | null;
  setSizeOfFont: (arg: number) => void;
  strongFontWeight: () => void;
  isStrong: boolean;
  setIsStrong: React.Dispatch<React.SetStateAction<boolean>>;
  isItalic: boolean;
  setIsItalic: React.Dispatch<React.SetStateAction<boolean>>;
  italicElement: () => void;
  isUnderline: boolean;
  setIsUnderline: React.Dispatch<React.SetStateAction<boolean>>;
  elementUnderline: () => void;
  bringElementToFront: () => void;
  pushElementToBehind: () => void;
  toggleBlockElement: () => void;
  isDraggable: boolean;
  toggleLowerOrUppercase: () => void;
  toggleLineHeight: (spacing: number) => void;
  selectedOptionFont: string;
  setSelectedOptionFont: React.Dispatch<React.SetStateAction<string>>;
  selectedNewFont: (font: string) => void;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  toggleAlignText: (value: string) => void;
  isOpenAlign: boolean;
  setIsOpenAlign: React.Dispatch<React.SetStateAction<boolean>>;
  handleSetIsOpenAlign: () => void;
  toggleChangeStroke: (size: any) => void;
  changeBorderRadius: number | null | undefined;
  setChangeBorderRadius: React.Dispatch<any>;
  elementBorderRadiusIncrement: (number: number) => void;
  elementBorderRadiusDecrement: (number: number) => void;
  makeGroup: () => void;
  ungroup: () => void;
  toggleElementDash: (number: number) => void;
  placeholderOfFont: any;
  setPlaceholderOfFont: any;
}

const ToolbarEditorContext = createContext({} as ToolbarEditorData);

const ToolbarEditorProvider: React.FC = ({
  children
}: ToolbarEditorProviderProps) => {
  const reducer = (state: string, action: { type: string }) => {
    switch (action.type) {
      case "Text":
        return "Text";
        break;
      case "Default":
        return "Default";
        break;
      case "dropImage":
        return "Image";
        break;
      case "image":
        return "Image";
        break;
      default:
        break;
    }
  };

  const initialState = "Default";

  const [isScale, setIsScale] = useState(1);
  const [isTranslationX, setIsTranslationX] = useState(0);
  const [isTranslationY, setIsTranslationY] = useState(0);
  const [valueZoom, setValueZoom] = useState(null);
  const [isDraggable, setIsDraggable] = useState(false);
  const {
    addToHistory,
    isUpLowerCase,
    setIsUpLowerCase,
    setSelectedGroup,
    selectedGroup
  } = useMainHook();

  const {
    setSelectedObject,
    selectedObject,
    selectedObjects,
    setSelectedObjects,
    currentMultipleSelection
  } = useSelection();
  const [selectedOptionFont, setSelectedOptionFont] = useState("");
  const [sizeOfFont, setSizeOfFont] = useState(null);
  const [placeholderOfFont, setPlaceholderOfFont] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrong, setIsStrong] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [elements, dispatch] = useReducer(reducer, initialState);
  const [isOpenAlign, setIsOpenAlign] = useState(false);
  const [changeBorderRadius, setChangeBorderRadius] = useState(null);

  /////////////////*** Change dash border ***/////////////////
  const toggleElementDash = useCallback(
    number => {
      selectedObject.setAttrs({
        dash: [number]
      });
    },
    [selectedObject]
  );

  /////////////////*** Change borderRadius size ***/////////////////
  const elementBorderRadiusDecrement = useCallback(
    number => {
      addToHistory(selectedObject);
      if (selectedObject) {
        if (changeBorderRadius >= 1) {
          setChangeBorderRadius(number - 1);
          selectedObject.setAttrs({
            ...selectedObject.attrs,
            cornerRadius: number - 1
          });
        } else {
          return setChangeBorderRadius(0);
        }
      }
    },
    [selectedObject, changeBorderRadius]
  );

  /////////////////*** Change borderRadius size ***/////////////////
  const elementBorderRadiusIncrement = useCallback(
    (number: number) => {
      addToHistory(selectedObject);
      if (selectedObject) {
        setChangeBorderRadius(number + 1);
        selectedObject.setAttrs({
          ...selectedObject.attrs,
          cornerRadius: number + 1
        });
      }
    },
    [selectedObject, changeBorderRadius]
  );

  useEffect(() => {
    if (selectedObject?.attrs?.cornerRadius === undefined) {
      selectedObject?.setAttrs({
        ...selectedObject.attrs,
        cornerRadius: 0
      });
    } else {
      setChangeBorderRadius(selectedObject?.attrs?.cornerRadius);
    }
  }, [selectedObject, changeBorderRadius]);

  /////////////////*** Change Stroke size ***/////////////////
  const toggleChangeStroke = (size: string) => {
    addToHistory(selectedObject);
    if (selectedObject)
      selectedObject?.setAttrs({
        strokeWidth: size
      });
  };

  /////////////////*** Change text align style ***/////////////////
  const handleSetIsOpenAlign = useCallback(() => {
    setIsOpenAlign(!isOpenAlign);
  }, [isOpenAlign]);

  const toggleAlignText = useCallback(
    value => {
      selectedObject?.setAttrs({
        align: value
      });
    },
    [selectedObject]
  );

  /////////////////*** Change text lineHeight ***/////////////////
  const toggleLineHeight = useCallback(
    (spacing: number) => {
      console.log(spacing, "AE");
      addToHistory(selectedObject);
      selectedObject?.setAttrs({
        ...selectedObject.attrs,
        lineHeight: spacing
      });
    },
    [selectedObject]
  );

  /////////////////*** Change text fontFamily ***/////////////////
  const selectedNewFont = useCallback(
    font => {
      addToHistory(selectedObject);
      selectedObject.setAttrs({
        ...selectedObject,
        fontFamily: font
      });
      setSelectedObject(null);
    },
    [selectedObject, selectedOptionFont]
  );
  //useEffect for get a current source font when clicked on each
  //text, change current font//////////////////////////
  useEffect(() => {
    setSelectedOptionFont(selectedObject?.attrs?.fontFamily);
  }, [selectedObject]);

  /////////////////*** Text decoration uppercase or lowercase ***/////////////////
  const toggleLowerOrUppercase = () => {
    addToHistory(selectedObject);
    const upperCase = selectedObject.attrs.text.toUpperCase();
    const lowerCase = selectedObject.attrs.text.toLowerCase();
    if (!isUpLowerCase) {
      setIsUpLowerCase(true);
      selectedObject.setAttrs({
        text: upperCase
      });
    } else {
      setIsUpLowerCase(false);
      selectedObject.setAttrs({
        text: lowerCase
      });
    }
  };

  /////////////////*** Text decoration underline ***/////////////////
  const elementUnderline = useCallback(() => {
    addToHistory(selectedObject);
    if (selectedObject) {
      if (
        selectedObject.attrs.textDecoration === undefined ||
        selectedObject.attrs.textDecoration === "none"
      ) {
        setIsUnderline(true);
        selectedObject.setAttrs({
          ...selectedObject.attrs,
          textDecoration: "underline"
        });
      } else {
        setIsUnderline(false);
        selectedObject.setAttrs({
          ...selectedObject.attrs,
          textDecoration: "none"
        });
      }
    }
  }, [selectedObject, isUnderline]);
  //useEffect for verify if text is underline or normal element
  useEffect(() => {
    if (selectedObject?.attrs?.textDecoration === "underline") {
      setIsUnderline(true);
    } else {
      setIsUnderline(false);
    }
  }, [selectedObject, isUnderline]);

  /////////////////*** For change colors border of elements ***/////////////////
  const setColorToElementBorder = useCallback(
    (color: string) => {
      if (selectedObject) {
        addToHistory(selectedObject);
        selectedObject?.setAttrs({
          stroke: color
        });
        // selectedObject.fill(color);
      }
    },
    [selectedObject]
  );

  /////////////////*** For change colors of elements ***/////////////////
  const setColorToElement = useCallback(
    (color: string) => {
      if (selectedObject) {
        addToHistory(selectedObject);
        selectedObject.fill(color);
      }
    },
    [selectedObject]
  );

  /////////////////*** Italic Text ***/////////////////
  const italicElement = useCallback(() => {
    addToHistory(selectedObject);
    if (selectedObject) {
      setIsItalic(true);
      if (
        selectedObject?.attrs?.fontStyle === "bold" ||
        selectedObject?.attrs?.fontStyle === "normal" ||
        selectedObject?.attrs?.fontStyle === undefined
      )
        selectedObject.setAttrs({
          ...selectedObject.attrs,
          fontStyle: "italic"
        });
      else {
        setIsItalic(false);
        selectedObject.setAttrs({
          ...selectedObject.attrs,
          fontStyle: "normal"
        });
      }
    }
  }, [selectedObject, isItalic]);

  /////////////////*** Strong Text ***/////////////////
  const strongFontWeight = useCallback(() => {
    addToHistory(selectedObject);
    if (selectedObject) {
      if (
        selectedObject?.attrs?.fontStyle === "normal" ||
        selectedObject?.attrs?.fontStyle === undefined ||
        selectedObject?.attrs?.fontStyle === "italic"
      ) {
        setIsStrong(true);
        selectedObject.setAttrs({
          ...selectedObject.attrs,
          fontStyle: "bold"
        });
      } else {
        setIsStrong(false);
        selectedObject.setAttrs({
          ...selectedObject.attrs,
          fontStyle: "normal"
        });
      }
    }
  }, [selectedObject, isStrong]);
  //useEffect for verify if text is bold or italic element//
  useEffect(() => {
    if (selectedObject?.attrs?.fontStyle === "bold") {
      setIsStrong(true);
      setIsItalic(false);
    } else {
      setIsStrong(false);
    }
    if (selectedObject?.attrs?.fontStyle === "italic") {
      setIsItalic(true);
      setIsStrong(false);
    } else {
      setIsItalic(false);
    }
  }, [selectedObject, isStrong, isItalic]);

  /////////////////*** Delete Element ***/////////////////
  const deleteElement = useCallback(() => {
    if (selectedObjects.length > 1) {
      // deleting mutiple elements
      selectedObjects.forEach(object => {
        object.destroy();
      });

      // "Removing" multiple transformer from canva
      currentMultipleSelection.current.setNodes([]);
      setSelectedObjects([]);

      return;
    }

    // deleting just one element
    if (selectedObject) {
      const layer: Konva.Layer = selectedObject.getParent() as Konva.Layer;

      // searching for the transfomer that contains our object
      const listOfTransformers = layer.children.filter(element => {
        return element instanceof Konva.Transformer;
      });

      const tranformerFromObject = listOfTransformers.filter(
        (transformer: Konva.Transformer) => {
          return transformer.nodes().includes(selectedObject);
        }
      );

      //onsole.log(tranformerFromObject[0]);

      const myTransformer = tranformerFromObject[0] as Konva.Transformer;

      myTransformer.setNodes([]);
      selectedObject.destroy();
      setSelectedObject(null);
    }
  }, [selectedObject, selectedObjects]);

  /////////////////*** Blocked Element ***/////////////////
  const toggleBlockElement = useCallback(() => {


    if (selectedObjects.length > 1) {
      let blockedPoints = 0;
      let unblockedPoints = 0;

      selectedObjects.forEach(object => {
        if (object.draggable()) {
          unblockedPoints += 1;
        } else {
          blockedPoints += 1;
        }
      });

      if (blockedPoints > unblockedPoints) {
        selectedObjects.forEach(object => {
          object.draggable(true);
          setIsDraggable(true);
        });
      } else {
        selectedObjects.forEach(object => {
          object.draggable(false);
          setIsDraggable(false);
        });
      }
    }


    if (selectedObject) {
      setIsDraggable(!selectedObject.draggable());
      selectedObject.setDraggable(!selectedObject.draggable());
    }
  }, [selectedObject, selectedObjects]);

  // automatic toggle block element
  useEffect(() => {
    if (selectedObjects.length > 1) {
      let blockedPoints = 0;
      let unblockedPoints = 0;

      selectedObjects.forEach(object => {
        if (object.draggable()) {
          unblockedPoints += 1;
        } else {
          blockedPoints += 1;
        }
      });

      if (blockedPoints > unblockedPoints) {
        setIsDraggable(false);
      } else {
        setIsDraggable(true);
      }
      return;
    }

    if (selectedObject) {
      setIsDraggable(selectedObject.draggable());
    }
  }, [selectedObject, selectedObjects]);

  /////////////////*** Element zIndex ***/////////////////
  const bringElementToFront = useCallback(() => {
    // cant add to history, because zIndex is outside of attrs.
    //addToHistory(selectedObject).
    if (selectedObject) {
      selectedObject.setZIndex(selectedObject.getZIndex() + 1);
    }
  }, [selectedObject]);

  const pushElementToBehind = useCallback(() => {
    // cant add to history, because zIndex is outside of attrs.
    //addToHistory(selectedObject).
    if (selectedObject) {
      selectedObject.setZIndex(selectedObject.getZIndex() - 1);
    }
  }, [selectedObject]);

  useEffect(() => {
    if (selectedObject) {
      setSizeOfFont(sizeOfFont);
      selectedObject.setAttrs({
        ...selectedObject.attrs,
        fontSize: sizeOfFont
      });
    }
  }, [sizeOfFont]);

  /////////////////*** increase font ***/////////////////
  const editFontSizeMax = useCallback(
    (number: number) => {
      addToHistory(selectedObject);
      if (selectedObject) {
        setSizeOfFont(number + 1);
        selectedObject.setAttrs({
          ...selectedObject.attrs,
          fontSize: number + 1
        });
      }
    },
    [selectedObject, sizeOfFont]
  );

  /////////////////*** decrease font ***/////////////////
  const editFontSizeMin = useCallback(
    (number: number) => {
      addToHistory(selectedObject);
      if (selectedObject) {
        setSizeOfFont(number - 1);
        selectedObject.setAttrs({
          ...selectedObject.attrs,
          fontSize: number - 1
        });
      }
    },
    [selectedObject, sizeOfFont]
  );

  // useEffect for verify if text is bold or normal element
  useEffect(() => {
    setPlaceholderOfFont(selectedObject?.attrs.fontSize);
  }, [selectedObject, sizeOfFont, placeholderOfFont]);

  //Make group
  const makeGroup = useCallback(() => {}, []);

  //Ungroup
  const ungroup = useCallback(() => {}, []);

  return (
    <ToolbarEditorContext.Provider
      value={{
        isScale,
        setIsScale,
        isTranslationX,
        setIsTranslationX,
        isTranslationY,
        setIsTranslationY,
        valueZoom,
        setValueZoom,
        reducer,
        elements,
        dispatch,
        setColorToElement,
        deleteElement,
        editFontSizeMax,
        sizeOfFont,
        setSizeOfFont,
        editFontSizeMin,
        strongFontWeight,
        isStrong,
        setIsStrong,
        isItalic,
        setIsItalic,
        italicElement,
        isUnderline,
        setIsUnderline,
        elementUnderline,
        bringElementToFront,
        pushElementToBehind,
        toggleBlockElement,
        isDraggable,
        toggleLowerOrUppercase,
        selectedOptionFont,
        setSelectedOptionFont,
        selectedNewFont,
        toggleLineHeight,
        isOpen,
        setIsOpen,
        toggleAlignText,
        isOpenAlign,
        setIsOpenAlign,
        handleSetIsOpenAlign,
        setColorToElementBorder,
        toggleChangeStroke,
        changeBorderRadius,
        setChangeBorderRadius,
        elementBorderRadiusIncrement,
        elementBorderRadiusDecrement,
        makeGroup,
        ungroup,
        toggleElementDash,
        placeholderOfFont,
        setPlaceholderOfFont
      }}
    >
      {children}
    </ToolbarEditorContext.Provider>
  );
};

// creating hook

function useToolbarEditor(): ToolbarEditorData {
  const context = useContext(ToolbarEditorContext);

  if (!context) {
    throw new Error(
      "useToolbarEditor must be used with an ToolbarEditorProvider"
    );
  }

  return context;
}

export { ToolbarEditorProvider, useToolbarEditor };
