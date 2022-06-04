import cloneDeep from "lodash/cloneDeep";
import React, { ReactNode } from "react";

import { useRightMenuContext } from "../../../../../contexts/RightMenuContext";
import { useMainHook } from "../../../../../hooks/main";
import api from "../../../../../services/api";
import { useAsidebarEditor } from "../../../hooks/asidebarEditor";
import { usePagesEditor } from "../../../hooks/pagesEditor";
import { useWorkspaceEditor } from "../../../hooks/workspaceEditor";
import { Canvas, FlexDesignArea } from "./styles";

// import { Container } from './styles';

interface CanvasMainProps {
  children: ReactNode;
}

const CanvasMain: React.FC = ({ children }: CanvasMainProps) => {
  const { handleEnterMouse, handleOutside } = useWorkspaceEditor();
  const { setObjectScreen, stageRef, dragUrl } = useMainHook();
  const { idPage } = usePagesEditor();
  const { setDataPoints, handleShowRightClick } = useRightMenuContext();
  const { grab, setIsGrab } = useAsidebarEditor();

  return (
    <Canvas
      onMouseEnter={handleEnterMouse}
      onMouseLeave={handleOutside}
      style={{ cursor: "default" }}
      onContextMenu={e => {
        handleShowRightClick();
        e.preventDefault();
        setDataPoints(e.pageX, e.pageY);
      }}
      onDrop={async e => {
        setIsGrab({ active: true });
        const [instanceObject, object] = dragUrl.current.alt.split("#@@#");
        if (instanceObject === "konvashape") {
          e.preventDefault();
          let cloneStage = [...stageRef.current];
          const findStage = cloneStage.find(
            el => el.attrs.id === String(idPage)
          );
          findStage.setPointersPositions(e);
          setObjectScreen(prevState => {
            let cloneState = [...prevState];
            let myObjectShape = null;
            switch (object) {
              case "rectangle":
                myObjectShape = {
                  object: object,
                  width: 160,
                  height: 100,
                  fill: "#A6A6A6",
                  draggable: true,
                  id: String(Math.random())
                };
                break;
              case "circle":
                myObjectShape = {
                  object: object,
                  radius: 70,
                  fill: "#A6A6A6",
                  draggable: true,
                  id: String(Math.random())
                };
                break;
              case "simpleLine":
                myObjectShape = {
                  object: object,
                  rotation: 0,
                  strokeWidth: 2,
                  setPoints: 360,
                  stroke: "#A6A6A6",
                  draggable: true,
                  id: String(Math.random())
                };
                break;
              case "square":
                myObjectShape = {
                  object: object,
                  width: 100,
                  height: 100,
                  fill: "#A6A6A6",
                  draggable: true,
                  id: String(Math.random())
                };
                break;
              case "star":
                myObjectShape = {
                  object: object,
                  numPoints: 5,
                  fill: "#A6A6A6",
                  draggable: true,
                  id: String(Math.random())
                };
                break;

              case "triangle2":
                myObjectShape = {
                  object: object,
                  fill: "#A6A6A6",
                  draggable: true,
                  id: String(Math.random())
                };
                break;

              case "text":
                myObjectShape = {
                  object: object,
                  fontFamily: "Roboto",
                  fill: "#000",
                  text: "Texto padrão",
                  fontSize: 28,
                  draggable: true,
                  id: String(Math.random())
                };
                break;

              default:
                break;
            }
            cloneState[idPage - 1].renderObjects.push({
              ...findStage.getPointerPosition(),
              ...myObjectShape
            });

            return cloneState;
          });
        }
        if (instanceObject === "img") {
          e.preventDefault();
          let cloneStage = [...stageRef.current];
          const findStage = cloneStage.find(
            el => el.attrs.id === String(idPage)
          );

          findStage.setPointersPositions(e);
          setObjectScreen(prevState => {
            let cloneState = [...prevState];
            cloneState[idPage - 1].renderObjects.push({
              ...findStage.getPointerPosition(),
              src: dragUrl.current.src,
              object: "dropImage",
              id: String(Math.random()),
              draggable: true
            });
            return cloneState;
          });
        }
        if (instanceObject === "template") {
          e.preventDefault();

          // let cloneStage = [...stageRef.current];
          let cloneStage = cloneDeep(stageRef.current);
          const findStage = cloneStage.find(
            el => el.attrs.id === String(idPage)
          );
          try {
            const fetchBitsTemplate = await api.get(`bits-templates/${object}`);
            let cloneTemplate = cloneDeep(
              fetchBitsTemplate.data.template.arrayOfPages
            );
            setObjectScreen(cloneTemplate);
          } catch (err) {
            console.log(err);
          }
        }

        if (instanceObject === "icon") {
          e.preventDefault();
          let cloneStages = [...stageRef.current];
          const foundStage = cloneStages.find(
            stage => stage.attrs.id === String(idPage)
          );
          foundStage.setPointersPositions(e);

          setObjectScreen(prevState => {
            let cloneState = [...prevState];
            cloneState[idPage - 1].renderObjects.push({
              ...foundStage.getPointerPosition(),
              dpath: dragUrl.current.dpath,
              src: dragUrl.current.src,
              object: "icon",
              id: String(Math.random()),
              stroke: "black",
              draggable: true
            });
            return cloneState;
          });
        }
      }}
      onDragOver={e => e.preventDefault()}
    >
      <FlexDesignArea>{children}</FlexDesignArea>
    </Canvas>
  );
};

export default CanvasMain;

