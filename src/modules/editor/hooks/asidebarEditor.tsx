import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from "react";
import SwitchComponents from "../utils/SwitchComponents";

interface AsidebarEditorProps {
  children: ReactNode;
}

interface AsidebarEditorData {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  template: boolean;
  setTemplate: React.Dispatch<React.SetStateAction<boolean>>;
  clauses: boolean;
  setClauses: React.Dispatch<React.SetStateAction<boolean>>;
  elements: boolean;
  setElements: React.Dispatch<React.SetStateAction<boolean>>;
  uniqueElement: boolean;
  setUniqueElement: React.Dispatch<React.SetStateAction<boolean>>;
  uploadImages: boolean;
  setUploadImages: React.Dispatch<React.SetStateAction<boolean>>;
  cloud: boolean;
  setCloud: React.Dispatch<React.SetStateAction<boolean>>;
  comments: boolean;
  setComments: React.Dispatch<React.SetStateAction<boolean>>;
  isVersioning: boolean;
  setIsVersioning: React.Dispatch<React.SetStateAction<boolean>>;
  handleNavigate: (e: string) => void;
  handleActiveButton: () => void;
  visibilityIconsOptionsClauses: {
    visible: boolean;
    index: number;
  };
  setVisibilityIconsOptionsClauses: React.Dispatch<
    React.SetStateAction<{
      visible: boolean;
      index: number;
    }>
  >;
  handleHoverClauses: (visible: boolean, index: number) => void;
  exitHoverClauses: (visible: boolean, index: number) => void;
  handleUploadImage: () => void;
  grab?: {
    active: boolean;
    index?: number;
  };
  setIsGrab?: React.Dispatch<
    React.SetStateAction<{ active: boolean; index?: number }>
  >;
  handleDragStart?: (active: boolean, index: number) => void;
  handleDragEnd?: (active: boolean, index: number) => void;
}

const AsidebarEditorContext = createContext<AsidebarEditorData>(
  {} as AsidebarEditorData
);

const AsidebarEditorProvider: React.FC = ({
  children
}: AsidebarEditorProps) => {
  const [isActive, setIsActive] = useState(true);
  const [template, setTemplate] = useState(true);
  const [clauses, setClauses] = useState(false);
  const [elements, setElements] = useState(false);
  const [uniqueElement, setUniqueElement] = useState(false);
  const [uploadImages, setUploadImages] = useState(false);
  const [cloud, setCloud] = useState(false);
  const [comments, setComments] = useState(false);
  const [isVersioning, setIsVersioning] = useState(false);
  const [grab, setIsGrab] = useState({
    active: false,
    index: 0
  });

  const handleNavigate = (e: string) => {
    SwitchComponents(
      e,
      setTemplate,
      setClauses,
      setElements,
      setUniqueElement,
      setUploadImages,
      setCloud,
      setComments,
      setIsVersioning
    );
  };

  function handleActiveButton() {
    setIsActive(!isActive);
  }

  const [visibilityIconsOptionsClauses, setVisibilityIconsOptionsClauses] =
    useState({
      visible: false,
      index: 0
    });

  const handleHoverClauses = (visible: boolean, index: number) => {
    setVisibilityIconsOptionsClauses({
      visible,
      index
    });
  };

  const exitHoverClauses = (visible: boolean, index: number) => {
    setVisibilityIconsOptionsClauses({
      visible,
      index
    });
  };

  const handleDragStart = (active: boolean, index: number) => {
    setIsGrab({
      active,
      index
    });
  };

  const handleDragEnd = (active: boolean, index: number) => {
    setIsGrab({
      active,
      index
    });
  };

  const handleUploadImage = useCallback(() => {
    console.log("upload Images");
  }, []);

  return (
    <AsidebarEditorContext.Provider
      value={{
        isActive,
        setIsActive,
        template,
        setTemplate,
        clauses,
        setClauses,
        elements,
        setElements,
        uniqueElement,
        setUniqueElement,
        uploadImages,
        setUploadImages,
        cloud,
        setCloud,
        comments,
        setComments,
        isVersioning,
        setIsVersioning,
        handleNavigate,
        handleActiveButton,
        visibilityIconsOptionsClauses,
        setVisibilityIconsOptionsClauses,
        handleHoverClauses,
        exitHoverClauses,
        handleUploadImage,
        grab,
        setIsGrab,
        handleDragStart,
        handleDragEnd
      }}
    >
      {children}
    </AsidebarEditorContext.Provider>
  );
};

// creating hook

function useAsidebarEditor(): AsidebarEditorData {
  const context = useContext(AsidebarEditorContext);

  if (!context) {
    throw new Error("useAuth must be used with an HeaderEditorProvider");
  }

  return context;
}

export { AsidebarEditorProvider, useAsidebarEditor };

