import Konva from "konva";
import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState
} from "react";
interface IRenderedObject {
  x: number;
  y: number;
  width: number;
  align?: "justify" | "center" | "left" | "right";
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  fill?: string;
  id: string;
  object: string;
  setPoints?: number;
  stroke?: string;
  strokeWidth?: string;
  src?: string;
  dash?: number[];
}

interface PagesProps {
  pageNumber: number;
  renderObjects: IRenderedObject[];
}

interface AllMyProjects {
  id: string;
  user_id: string;
  template: {
    arrayOfPages: PagesProps[];
  };
}
interface IHistory {
  currentStep: number;
  step: {
    stepNumber: number;
    attrs: {
      id: string;
    };
  }[];
}

interface MainContextData {
  addToRefs: (element: Konva.Stage) => void;
  clearStages: () => void;
  currentTemplateInfo: React.MutableRefObject<AllMyProjects>;
  objectScreen: PagesProps[];
  stageRef: React.MutableRefObject<any>;
  setObjectScreen: React.Dispatch<React.SetStateAction<PagesProps[]>>;
  objectSelectId: string;
  setObjectSelectId: (id: string) => void;
  dragUrl: React.MutableRefObject<any>;
  history: IHistory;
  setHistory: React.Dispatch<React.SetStateAction<IHistory>>;
  addToHistory: (event: Konva.Shape) => void;
  isUpLowerCase: boolean;
  setIsUpLowerCase: React.Dispatch<React.SetStateAction<boolean>>;
  selectedGroup: Konva.Group;
  setSelectedGroup: React.Dispatch<React.SetStateAction<Konva.Group>>;
  documentName: React.MutableRefObject<string>;
}

const MainContext = createContext<MainContextData>({} as MainContextData);

const MainHookProvider: React.FC = ({ children }) => {
  const [objectScreen, setObjectScreen] = useState<PagesProps[]>([]);
  const [objectSelectId, setObjectSelectId] = useState("");

  const [selectedGroup, setSelectedGroup] = useState<Konva.Group | null>(null);
  const [isUpLowerCase, setIsUpLowerCase] = useState<boolean>(false);
  const [history, setHistory] = useState<IHistory>({
    currentStep: 0,
    step: [{ stepNumber: 0, attrs: { id: "neutro" } }]
  });

  const currentTemplateInfo = useRef(null);
  const dragUrl = useRef(null);
  const stageRef = useRef<Konva.Stage[]>(null);

  const documentName = useRef("");
  stageRef.current = [];

  const addToRefs = useCallback(
    el => {
      if (el && !stageRef.current.includes(el)) {
        stageRef.current.push(el);
      }
    },
    [stageRef]
  );

  const clearStages = useCallback(() => {
    stageRef.current = [];
  }, []);

  const addToHistory = useCallback(
    (konvaObject: Konva.Shape) => {
      setHistory((prevState: IHistory) => {
        //if you have steps ahead from your currentStep cut them off
        if (prevState.currentStep < prevState.step.length - 1) {
          const mySlicedArray = prevState.step.slice(
            0,
            prevState.currentStep + 1
          );
          prevState = {
            ...prevState,
            step: mySlicedArray
          };
        }

        let cloneAttr = { ...konvaObject.attrs };
        prevState.currentStep = prevState.currentStep + 1;

        prevState.step.push({
          stepNumber: prevState.currentStep,
          attrs: { ...cloneAttr }
        });

        return prevState;
      });
    },
    [history]
  );

  return (
    <MainContext.Provider
      value={{
        addToRefs,
        addToHistory,
        clearStages,
        currentTemplateInfo,
        objectScreen,
        objectSelectId,
        stageRef,
        dragUrl,
        history,
        setObjectScreen,
        setObjectSelectId,
        setHistory,
        isUpLowerCase,
        setIsUpLowerCase,
        selectedGroup,
        setSelectedGroup,
        documentName
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

// creating hook

function useMainHook(): MainContextData {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("useAuth must be used with an MainHookProvider");
  }

  return context;
}

export { MainHookProvider, useMainHook };
