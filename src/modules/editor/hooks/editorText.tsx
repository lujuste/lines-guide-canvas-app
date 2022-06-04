import Konva from "konva";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

interface EditorTextProps {
  children: ReactNode;
}

interface ICursorProps {
  x?: number;
  y?: number;
}

interface EditorTextContextData {
  editorEnabled: boolean;
  setEditorEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  isCursor: ICursorProps;
  setIsCursor: React.Dispatch<React.SetStateAction<ICursorProps>>;
}

const EditorTextContext = createContext<EditorTextContextData>(
  {} as EditorTextContextData
);

const EditorTextHookProvider: React.FC<EditorTextProps> = ({ children }) => {
  const [editorEnabled, setEditorEnabled] = useState<boolean>(false);
  const [isCursor, setIsCursor] = useState<ICursorProps>({});

  useEffect(() => {
    console.log("oi");
  }, []);

  return (
    <EditorTextContext.Provider
      value={{ editorEnabled, setEditorEnabled, isCursor, setIsCursor }}
    >
      {children}
    </EditorTextContext.Provider>
  );
};

// creating hook

function useTextEditor(): EditorTextContextData {
  const context = useContext(EditorTextContext);

  if (!context) {
    throw new Error(
      "useTextEditor must be used with an EditorTextHookProvider"
    );
  }

  return context;
}

export { EditorTextHookProvider, useTextEditor };

