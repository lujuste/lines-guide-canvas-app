import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

interface CoordinatesProps {
  x: number;
  y: number;
}

interface RightMenuContext {
  isShowRightClickMenu: boolean;
  setDataPoints: (x: number, y: number) => void;
  points: CoordinatesProps;
  handleShowRightClick: () => void;
}

interface RightMenuContextProviderProps {
  children: ReactNode;
}

const RightMenuContext = createContext({} as RightMenuContext);

export function RightMenuContextProvider({
  children
}: RightMenuContextProviderProps) {
  const [isShowRightClickMenu, setIsShowRightClickMenu] = useState(false);
  const [points, setPoints] = useState({ y: 0, x: 0 });

  useEffect(() => {
    const handleClick = () => setIsShowRightClickMenu(false);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  function handleShowRightClick() {
    setIsShowRightClickMenu(true);
  }

  function setDataPoints(y: number, x: number) {
    setPoints({ y: y, x: x });
  }

  return (
    <RightMenuContext.Provider
      value={{
        isShowRightClickMenu,
        setDataPoints,
        points,
        handleShowRightClick
      }}
    >
      {children}
    </RightMenuContext.Provider>
  );
}

export const useRightMenuContext = () => useContext(RightMenuContext);
