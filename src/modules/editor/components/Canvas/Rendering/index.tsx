import Konva from "konva";
import React from "react";
import CircleShape from "../Circle";
import Rectangle from "../Rectangle";
import SimpleLine from "../SimpleLine";
import SimpleText from "../SimpleText";
import StarIcon from "../Star";
import SvgElement from "../SvgShape";
import TextDefault from "../TextDefault";
import TriangleNew from "../TriangleNew";
import URLImage from "../URLimage";
import URLImageDrag from "../URLImageDrag";

interface RenderingProps {
  objectProps: {
    id: string;
    object: string;
    x: number;
    y: number;
    src?: string;
    width?: number;
    height?: number;
    fill?: string;
    text?: string;
    fontSize?: number;
    setPoints?: number;
  };

  setSelectedObject: React.Dispatch<React.SetStateAction<Konva.Shape>>;
  selectedObject: Konva.Shape;
  addToHistory: (konvaObject: Konva.Shape) => void;
  onChange?: any;
  currentMultipleSelection: React.MutableRefObject<Konva.Transformer>;
}

export default function Rendering({
  objectProps,
  setSelectedObject,
  selectedObject,
  addToHistory,
  currentMultipleSelection
}: RenderingProps) {
  let RenderObject = null;

  switch (objectProps.object) {
    case "image":
      RenderObject = (
        <URLImage
          shapeProps={objectProps}
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
          addToHistory={addToHistory}
          currentMultipleSelection={currentMultipleSelection}
        />
      );
      break;
    case "circle":
      RenderObject = (
        <CircleShape
          shapeProps={objectProps}
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
          addToHistory={addToHistory}
          currentMultipleSelection={currentMultipleSelection}
        />
      );

      break;

    case "rectangle":
      RenderObject = (
        <Rectangle
          shapeProps={objectProps}
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
          addToHistory={addToHistory}
          currentMultipleSelection={currentMultipleSelection}
        />
      );

      break;

    case "square":
      RenderObject = (
        <Rectangle
          shapeProps={objectProps}
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
          addToHistory={addToHistory}
          currentMultipleSelection={currentMultipleSelection}
        />
      );

      break;

    case "simpleLine":
      RenderObject = (
        <SimpleLine
          shapeProps={objectProps}
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
          addToHistory={addToHistory}
          currentMultipleSelection={currentMultipleSelection}
        />
      );

      break;

    case "simpleText":
      RenderObject = (
        <SimpleText
          shapeProps={objectProps}
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
          addToHistory={addToHistory}
          currentMultipleSelection={currentMultipleSelection}
          onChange={newAttrs => {
            console.log(newAttrs, "");
          }}
        />
      );

      break;

    case "dropImage":
      RenderObject = (
        <URLImageDrag
          shapeProps={objectProps}
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
          addToHistory={addToHistory}
          currentMultipleSelection={currentMultipleSelection}
        />
      );

      break;

    case "star":
      RenderObject = (
        <StarIcon
          shapeProps={objectProps}
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
          addToHistory={addToHistory}
          currentMultipleSelection={currentMultipleSelection}
        />
      );

      break;

    case "triangle2":
      RenderObject = (
        <TriangleNew
          shapeProps={objectProps}
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
          addToHistory={addToHistory}
          currentMultipleSelection={currentMultipleSelection}
        />
      );

      break;

    case "text":
      RenderObject = (
        <SimpleText
          shapeProps={objectProps}
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
          addToHistory={addToHistory}
          currentMultipleSelection={currentMultipleSelection}
          onChange={newAttrs => {
            console.log(newAttrs);
          }}
        />
      );

      break;

    case "icon":
      RenderObject = (
        <SvgElement
          shapeProps={objectProps}
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
          addToHistory={addToHistory}
          currentMultipleSelection={currentMultipleSelection}
        />
      );
      break;

    default:
      RenderObject = null;
      break;
  }

  return <>{RenderObject && RenderObject}</>;
}
