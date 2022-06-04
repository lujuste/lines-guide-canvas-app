import React, { useEffect, useReducer, useState } from "react";
import { useSelection } from "../../hooks/selection";
import ToolbarByElement from "../ToolbarByElement";
import { FlexToolbar, ToolsbarEditor } from "./styles";

const reducer = (state: string, action: { type: string }) => {
  switch (action.type) {
    case "Text":
      return "Text";

    case "Default":
      return "Default";

    case "Image":
      return "Image";

    case "dropImage":
      return "Image";

    case "BlankPage":
      return "BlankPage";

    case "MultipleItems":
      return "MultipleItems";

    default:
      break;
  }
};

const ToolbarMain: React.FC = () => {
  const {
    selectedObject,
    setSelectedObject,
    currentMultipleSelection,
    selectedObjects
  } = useSelection();
  const initialState = "Default";
  const [elements, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (selectedObjects.length === 1) {
      currentMultipleSelection.current.setNodes([]);
      setSelectedObject(selectedObjects[0]);
    }

    if (selectedObjects.length > 1) {
      return dispatch({ type: "MultipleItems" });
    }

    if (selectedObject) {
      if (
        selectedObject?.attrs?.object === "simpleText" ||
        selectedObject?.attrs?.object === "text"
      ) {
        return dispatch({ type: "Text" });
      }
      if (selectedObject?.attrs?.object === "image") {
        return dispatch({ type: "Image" });
      }

      if (selectedObject?.attrs?.object === "dropImage") {
        return dispatch({ type: "Image" });
      }
    }

    if (!selectedObject) {
      return dispatch({ type: "BlankPage" });
    }

    return dispatch({ type: "Default" });
  }, [selectedObject, currentMultipleSelection, selectedObjects]);

  return (
    <ToolsbarEditor>
      <FlexToolbar>
        <ToolbarByElement elementForShow={elements} />
      </FlexToolbar>
    </ToolsbarEditor>
  );
};

export default ToolbarMain;
