import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import { useMainHook } from "../../../hooks/main";

interface WorkspaceEditorContextProviderProps {
  children: ReactNode;
}

interface WorkspaceEditorData {
  isZoom: boolean;
  setIsZoom: React.Dispatch<React.SetStateAction<boolean>>;
  isPan: boolean;
  setIsPan: React.Dispatch<React.SetStateAction<boolean>>;
  loadingTemplate: boolean;
  setLoadingTemplate: React.Dispatch<React.SetStateAction<boolean>>;

  isActiveUpPage: boolean;
  setIsActiveUpPage: React.Dispatch<React.SetStateAction<boolean>>;
  isActiveHoverMoveUpPage: {
    visible: boolean;
    index: number;
  };
  setIsActiveHoverMoveUpPage: React.Dispatch<React.SetStateAction<any>>;
  isHandleHoverIconMoveDownPage: {
    visible: boolean;
    index: number;
  };
  setIsHandleHoverIconMoveDownPage: React.Dispatch<React.SetStateAction<any>>;
  handleHoverMoveUpPage: (index: number, visible: boolean) => void;
  handleHovePageMoveDown: (index: number, visible: boolean) => void;
  handleEnterMouse: () => void;
  handleOutside: () => void;
  checkDeselect: (e: any) => void;
}

const WorkspaceEditorContext = createContext({} as WorkspaceEditorData);

const WorkspaceEditorProvider: React.FC<
  WorkspaceEditorContextProviderProps
> = ({ children }) => {
  const { setObjectSelectId, objectScreen, setObjectScreen } = useMainHook();

  const [isZoom, setIsZoom] = useState(true);
  const [isPan, setIsPan] = useState(true);
  const [isActiveUpPage, setIsActiveUpPage] = useState(true);
  const [loadingTemplate, setLoadingTemplate] = useState(true);

  const [isActiveHoverMoveUpPage, setIsActiveHoverMoveUpPage] = useState({
    visible: false,
    index: 0
  });

  const [isHandleHoverIconMoveDownPage, setIsHandleHoverIconMoveDownPage] =
    useState({
      visible: false,
      index: 0
    });

  const handleHoverMoveUpPage = (index: number, visible: boolean) => {
    setIsActiveHoverMoveUpPage({
      visible,
      index
    });
  };

  const handleHovePageMoveDown = (index: number, visible: boolean) => {
    setIsHandleHoverIconMoveDownPage({
      visible,
      index
    });
  };

  const handleEnterMouse = () => {
    setIsPan(true);
    setIsZoom(false);
  };

  const handleOutside = () => {
    setIsPan(false);
    setIsZoom(true);
  };

  const checkDeselect = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setObjectSelectId(null);
    }
  };

  return (
    <WorkspaceEditorContext.Provider
      value={{
        isZoom,
        setIsZoom,
        isPan,
        setIsPan,
        loadingTemplate,
        setLoadingTemplate,

        isActiveUpPage,
        setIsActiveUpPage,
        isActiveHoverMoveUpPage,
        setIsActiveHoverMoveUpPage,
        isHandleHoverIconMoveDownPage,
        setIsHandleHoverIconMoveDownPage,
        handleHoverMoveUpPage,
        handleHovePageMoveDown,
        handleEnterMouse,
        handleOutside,
        checkDeselect
      }}
    >
      {children}
    </WorkspaceEditorContext.Provider>
  );
};

// creating hook

function useWorkspaceEditor(): WorkspaceEditorData {
  const context = useContext(WorkspaceEditorContext);

  if (!context) {
    throw new Error(
      "useWorkspaceEditor must be used with an WorkspaceEditorContext"
    );
  }

  return context;
}

export { WorkspaceEditorProvider, useWorkspaceEditor };
