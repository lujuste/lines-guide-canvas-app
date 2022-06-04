import Konva from "konva";
import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState
} from "react";

interface SelectionContextData {
  selectedObject: Konva.Shape;
  setSelectedObject: React.Dispatch<
    React.SetStateAction<Konva.Shape | Konva.Group>
  >;

  selectedObjects: Konva.Shape[];
  setSelectedObjects: React.Dispatch<React.SetStateAction<Konva.Shape[]>>;
  multipleSelectionRefs: React.MutableRefObject<Konva.Transformer[]>;
  currentMultipleSelection: React.MutableRefObject<Konva.Transformer | null>;
  addToMultipleSelectionRef: (transformer: Konva.Transformer) => void;

  text: any;
  setText: any;
}

const SelectionContext = createContext<SelectionContextData>(
  {} as SelectionContextData
);

const SelectionHookProvider: React.FC = ({ children }) => {
  const [selectedObject, setSelectedObject] = useState<Konva.Shape | null>(
    null
  );

  const masterTransformersRef = useRef<Konva.Transformer[]>(null);
  const masterTransformer = useRef(null);
  const [text, setText] = useState(selectedObject?.attrs?.text);

  const [selectedObjects, setSelectedObjects] = useState<Konva.Shape[]>([]);


  const currentMultipleSelection = useRef<Konva.Transformer | null>(null);
  const multipleSelectionRefs = useRef<Konva.Transformer[]>([]);

  const addToMultipleSelectionRef = useCallback(
    (transformer: Konva.Transformer) => {
      if (transformer && !multipleSelectionRefs.current.includes(transformer)) {
        multipleSelectionRefs.current.push(transformer);
      }
    },
    []
  );

  return (
    <SelectionContext.Provider
      value={{
        setSelectedObject,
        selectedObject,
        multipleSelectionRefs,
        addToMultipleSelectionRef,
        currentMultipleSelection,
        text,
        setText,
        selectedObjects,
        setSelectedObjects

      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

// creating hook

function useSelection(): SelectionContextData {
  const context = useContext(SelectionContext);

  if (!context) {
    throw new Error("useSelection must be used with an selectionProvider");
  }

  return context;
}

export { SelectionHookProvider, useSelection };

