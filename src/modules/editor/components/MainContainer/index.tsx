import React, { ReactNode } from "react";
import { useRightMenuContext } from "../../../../contexts/RightMenuContext";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import RightClickMenu from "../RightClickMenu";
import { GridContainer } from "./styles";

// import { Container } from './styles';

interface IMainContainer {
  children: ReactNode;
}

const MainContainer: React.FC<IMainContainer> = ({ children }) => {
  const { width, height } = useWindowDimensions();
  const { isShowRightClickMenu, setDataPoints, points, handleShowRightClick } =
    useRightMenuContext();

  return (
    <GridContainer
      onContextMenu={e => {
        handleShowRightClick();
        e.preventDefault();
        setDataPoints(e.pageY, e.pageX);
      }}
      width={`${width}px`}
      height={`${height}px`}
    >
      <RightClickMenu
        isShow={isShowRightClickMenu}
        left={points.x}
        top={points.y}
      />
      {children}
    </GridContainer>
  );
};

export default MainContainer;
