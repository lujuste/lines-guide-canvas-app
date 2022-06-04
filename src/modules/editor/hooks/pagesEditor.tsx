import { arrayMoveImmutable } from "array-move";
import Konva from "konva";
import React, {
  cloneElement,
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";
import { useMainHook } from "../../../hooks/main";
import { useHeaderEditor } from "./headerEditor";
import { useSelection } from "./selection";
import cloneDeep from "lodash/cloneDeep";
import { forEach } from "lodash";

interface PagesEditorProviderProps {
  children: ReactNode;
}

interface PagesEditorData {
  handleRemovePage: (page: number) => void;
  handleOrderPageMoveDown: (page: number) => void;
  handleOrderPageMoveUp: (page: number, index: number) => void;
  handleDuplicatePage: (page: number, index: number) => void;
  isActiveNewPage: {
    visible: boolean;
    index: number;
  };
  setIsActiveNewPage: React.Dispatch<
    React.SetStateAction<{
      visible: boolean;
      index: number;
    }>
  >;
  handleAddNewPage: (page: number) => void;
  handleHoverIcon: (index: number, visible: boolean) => void;
  isActiveDuplicatePage: {
    visible: boolean;
    index: number;
  };
  setIsActiveDuplicatePage: React.Dispatch<
    React.SetStateAction<{
      visible: boolean;
      index: number;
    }>
  >;
  handleHoverIconDuplicatePage: (index: number, visible: boolean) => void;
  isActiveHoverIconRemovePage: {
    visible: boolean;
    index: number;
  };
  setIsActiveHoverIconRemovePage: React.Dispatch<
    React.SetStateAction<{
      visible: boolean;
      index: number;
    }>
  >;
  handleHoverIconRemovePage: (index: number, visible: boolean) => void;
  idPage: number;
  setIdPage: React.Dispatch<React.SetStateAction<number>>;
  isPageOneOnly: boolean;
  setIsPageOneOnly: React.Dispatch<React.SetStateAction<boolean>>;
  isVisibleAddPage: boolean;
  setIsVisibleAddPage: React.Dispatch<React.SetStateAction<boolean>>;
  disabledButton: {
    visible: boolean;
    index: number;
  };

  setDisabledButton: React.Dispatch<
    React.SetStateAction<{
      visible: boolean;
      index: number;
    }>
  >;
  stagePointerPosition: { x: number; y: number };
  setStagePointerPosition: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;

  copyObject: () => void;
  pasteObject: () => void;

  scaleForZoom: { x: number; y: number; scale: number };
  setScaleForZoom: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
      scale: number;
    }>
  >;
}

const PagesEditorContext = createContext({} as PagesEditorData);

const PagesEditorProvider: React.FC = ({
  children
}: PagesEditorProviderProps) => {
  const { objectScreen, setObjectScreen, setObjectSelectId, stageRef } =
    useMainHook();
  const { selectedObject, selectedObjects } = useSelection();
  const [idPage, setIdPage] = useState(1);
  const [stagePointerPosition, setStagePointerPosition] = useState({
    x: 0,
    y: 0
  });
  const [scaleForZoom, setScaleForZoom] = useState({ x: 0, y: 0, scale: 1 });
  const [isVisibleAddPage, setIsVisibleAddPage] = useState(false);
  const [isPageOneOnly, setIsPageOneOnly] = useState(false);
  const [, updateState] = useState<any>();
  const [copyElement, setCopyElement] = useState<Konva.Shape>(null);
  const [copyElements, setCopyElements] = useState<any>([]);
  const [disabledButton, setDisabledButton] = useState({
    visible: true,
    index: 0
  });

  const [isActiveDuplicatePage, setIsActiveDuplicatePage] = useState({
    visible: false,
    index: 0
  });

  const [isActiveNewPage, setIsActiveNewPage] = useState({
    visible: false,
    index: 0
  });

  const [isActiveHoverIconRemovePage, setIsActiveHoverIconRemovePage] =
    useState({
      visible: false,
      index: 0
    });

  const { handleSaveTemplate } = useHeaderEditor();

  let ctrlActive = false;
  let cActive = false;
  let vActive = false;

  React.useEffect(() => {
    document.body.addEventListener("keyup", event => {
      if (event.key == "Control") ctrlActive = false;
      if (event.code == "KeyC") cActive = false;
      if (event.code == "KeyV") vActive = false;
    });

    document.body.addEventListener("keydown", event => {
      if (event.key == "Control") ctrlActive = true;
      if (ctrlActive == true && event.code == "KeyC") {
        event.preventDefault();
        console.log("oi");
        copyObject();
      }

      if (ctrlActive == true && event.code == "KeyV") {
        event.preventDefault();
        console.log("tchau");
        pasteObject();
      }
    });
  }, []);

  const forceUpdate = React.useCallback(() => updateState({}), [scaleForZoom]);

  const handleAddNewPage = useCallback(
    (page?: number) => {
      setObjectScreen(prevState => {
        let numberOfpages = prevState.length;
        let cloneState = cloneDeep(prevState);
        let newCloneState = cloneState.map((el, index) => {
          return {
            pageNumber: index + 1,
            renderObjects: el?.renderObjects
          };
        });
        let arrayFinally = [...newCloneState];
        arrayFinally.push({
          pageNumber: Number(numberOfpages + 1),
          renderObjects: []
        });

        let lastPageNew = arrayFinally.length - 1;
        const fromIndex = page;
        const endArray = arrayMoveImmutable(
          arrayFinally,
          lastPageNew,
          fromIndex
        );

        const reorderPageNumber = endArray.map((el, index) => {
          return {
            pageNumber: index + 1,
            renderObjects: el.renderObjects
          };
        });

        console.log(reorderPageNumber, "reorder");

        return reorderPageNumber;
      });
    },
    [objectScreen]
  );

  const handleRemovePage = useCallback(
    (page: number) => {
      setObjectScreen(state => {
        let cloneState = cloneDeep(state);

        const myArray = [];

        cloneState.forEach((pageObject, index) => {
          if (Number(page) !== index + 1) {
            pageObject.pageNumber = myArray.length + 1;
            myArray.push(pageObject);
          }
        });

        return myArray;
      });
    },
    [objectScreen]
  );

  const handleOrderPageMoveDown = useCallback(
    (page: number) => {
      setObjectScreen(state => {
        let cloneState = cloneDeep(state);
        let pages = stageRef.current;
        const findPage = pages.findIndex(object => object.attrs.id == page);
        let formattedState = [];

        pages.forEach((objectPage, index) => {
          let pageNumberOfPages = index + 1;
          let renderObjectsOfPages = [];

          objectPage.children[0].children.forEach((item, index) => {
            let cloneAttrs = cloneDeep(item.attrs);
            renderObjectsOfPages.push(cloneAttrs);
          });

          formattedState.push({
            pageNumber: pageNumberOfPages,
            renderObjects: renderObjectsOfPages
          });
        });

        cloneState = formattedState;

        console.log(cloneState, "o que veio de state?");

        let fromIndex = findPage;
        let toIndex = findPage + 1;

        let newState = arrayMoveImmutable(cloneState, fromIndex, toIndex);

        newState.forEach((object, index) => {
          object.pageNumber = index + 1;
          object.renderObjects = object.renderObjects;
        });
        return newState;
      });
    },

    [objectScreen]
  );

  const handleOrderPageMoveUp = useCallback(
    (page: number, index: number) => {
      setObjectScreen(state => {
        let cloneState = cloneDeep(state);
        let pages = stageRef.current;
        const findPage = pages.findIndex(object => object.attrs.id == page);
        let formattedState = [];
        pages.forEach((objectPage, index) => {
          let pageNumberOfPages = index + 1;
          let renderObjectsOfPages = [];
          objectPage.children[0].children.forEach((item, index) => {
            let cloneAttrs = cloneDeep(item.attrs);
            renderObjectsOfPages.push(cloneAttrs);
          });
          formattedState.push({
            pageNumber: pageNumberOfPages,
            renderObjects: renderObjectsOfPages
          });
        });
        cloneState = formattedState;
        let fromIndex = findPage;
        let toIndex = findPage - 1;
        let newState = arrayMoveImmutable(cloneState, fromIndex, toIndex);
        newState.forEach((object, index) => {
          object.pageNumber = index + 1;
          object.renderObjects = object.renderObjects;
        });

        return newState;
      });
    },
    [objectScreen]
  );

  const handleDuplicatePage = useCallback(
    (page: number, index: number) => {
      setObjectScreen(prevState => {
        let cloneState = [...prevState];
        let arrayFinally = [...cloneState];
        let pages = stageRef.current;
        let newPages = [];
        const findStage = pages.find(el => el.attrs.id == page);
        const selectedObjs = findStage?.children[0].children;
        selectedObjs.forEach((values, index) => {
          let pageNumber = values.attrs.id;
          // let newObjs = { ...item.attrs, id: String(Math.random() * 2) };
          let cloneValues = { ...values };
          let cloneAttrs = {
            ...cloneValues.attrs
          };
          newPages.push(cloneAttrs);
        });

        arrayFinally.push({
          pageNumber: page + 1,
          renderObjects: newPages
        });

        let numberOfpages = arrayFinally.length;
        const fromIndex = numberOfpages - 1;
        const toIndex = page;
        const endArray = [
          ...arrayMoveImmutable(arrayFinally, fromIndex, toIndex)
        ];

        const reorderPageNumber = endArray.map((el, index) => {
          return {
            pageNumber: index + 1,
            renderObjects: [...el.renderObjects]
          };
        });

        return reorderPageNumber;
      });
    },
    [objectScreen]
  );

  const copyObject = useCallback(() => {
    if (selectedObject) {
      setCopyElement(selectedObject);
      setCopyElements([]);
    }

    if (selectedObjects.length > 1) {
      setCopyElements(selectedObjects);
    }
  }, [selectedObject, copyElement, copyElements, selectedObjects]);

  const pasteObject = useCallback(() => {
    setObjectScreen(prevState => {
      let pageId = idPage;
      let cloneState = cloneDeep(prevState);
      let pages = stageRef.current;
      let posX = stagePointerPosition.x;
      let posY = stagePointerPosition.y;
      const findStage = pages.find(el => el.attrs.id == pageId);
      const selectedObjs = findStage?.children[0].children;
      let newObjects = [];

      if (copyElement && copyElements.length === 0) {
        cloneState[idPage - 1].renderObjects.push({
          ...copyElement.attrs,
          id: String(Math.random()),
          x: posX ? posX : copyElement.attrs.x + 20,
          y: posY ? posY : copyElement.attrs.y + 20
        });
      }

      if (copyElements.length > 1) {
        copyElements.forEach((object, index) => {
          newObjects.push({
            ...object.attrs,
            id: String(Math.random()),
            x: object.attrs.x + 30,
            y: object.attrs.y + 30
          });
        });

        cloneState[idPage - 1].renderObjects.push(...newObjects);
      }

      return cloneState;
    });
  }, [
    selectedObject,
    copyElement,
    stagePointerPosition,
    idPage,
    selectedObjects,
    copyElements
  ]);

  const handleHoverIcon = (index: number, visible: boolean) => {
    setIsActiveNewPage({
      visible,
      index
    });
  };

  const handleHoverIconDuplicatePage = (index: number, visible: boolean) => {
    setIsActiveDuplicatePage({
      visible,
      index
    });
  };

  const handleHoverIconRemovePage = (index: number, visible: boolean) => {
    setIsActiveHoverIconRemovePage({
      visible,
      index
    });
  };

  useEffect(() => {
    const numberOfPages = objectScreen.length;
    if (numberOfPages > 1) {
      setIsVisibleAddPage(false);
      setIsPageOneOnly(false);
    } else {
      setIsVisibleAddPage(true);
      setIsPageOneOnly(true);
    }
  }, [objectScreen]);

  useEffect(() => {
    if (scaleForZoom) {
      forceUpdate();
      setObjectScreen(prevState => {
        const clone = [...prevState];
        return clone;
      });
    }
  }, [scaleForZoom]);

  return (
    <PagesEditorContext.Provider
      value={{
        handleRemovePage,
        handleOrderPageMoveDown,
        handleOrderPageMoveUp,
        handleDuplicatePage,
        setIsActiveNewPage,
        isActiveNewPage,
        handleAddNewPage,
        handleHoverIcon,
        handleHoverIconDuplicatePage,
        isActiveDuplicatePage,
        setIsActiveDuplicatePage,
        isActiveHoverIconRemovePage,
        setIsActiveHoverIconRemovePage,
        handleHoverIconRemovePage,
        idPage,
        setIdPage,
        isVisibleAddPage,
        setIsVisibleAddPage,
        isPageOneOnly,
        setIsPageOneOnly,
        disabledButton,
        setDisabledButton,
        copyObject,
        pasteObject,
        stagePointerPosition,
        setStagePointerPosition,
        scaleForZoom,
        setScaleForZoom
      }}
    >
      {children}
    </PagesEditorContext.Provider>
  );
};

// creating hook

function usePagesEditor(): PagesEditorData {
  const context = useContext(PagesEditorContext);

  if (!context) {
    throw new Error(
      "useToolbarEditor must be used with an ToolbarEditorProvider.. "
    );
  }

  return context;
}

export { PagesEditorProvider, usePagesEditor };

