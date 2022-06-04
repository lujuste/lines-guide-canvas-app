import Konva from "konva";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { Rect, Transformer } from "react-konva";

interface IHistory {
  currentStep: number;
  step: {
    stepNumber: number;
    attrs: {};
  }[];
}

const Rectangle = ({
  selectedObject,
  shapeProps,
  setSelectedObject,
  addToHistory,
  currentMultipleSelection
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const shapeRef = useRef<Konva.Shape>();
  const trRef = useRef<Konva.Transformer>();

  // ======>
  let isDraggable = shapeRef?.current?.draggable();
  //this code below verify if elements stay block and remove anchors for editions in scale
  // when element is block
  useEffect(() => {
    if (shapeRef.current) {
      isDraggable = shapeRef.current.draggable();
    }
  }, [isSelected, shapeRef?.current?.draggable()]);
  // <=======

  useEffect(() => {
    if (shapeRef.current === selectedObject) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedObject, isSelected]);

  useEffect(() => {
    trRef.current?.setNodes([shapeRef.current]);
    trRef.current?.getLayer().batchDraw();
  }, [isSelected]);

  return (
    <>
      <Rect
        ref={shapeRef}
        {...shapeProps}
        name="rectangle"
        onClick={(event: Konva.KonvaEventObject<MouseEvent>) => {
          const isTargetInsideMultipleSelection =
            currentMultipleSelection.current.nodes()?.includes(event.target);

          if (isTargetInsideMultipleSelection) {
            setSelectedObject(null);
          } else {
            setSelectedObject(event.target);
            currentMultipleSelection.current?.setNodes([]);
          }
        }}
        onDragStart={(event: Konva.KonvaEventObject<MouseEvent>) => {
          addToHistory(event.target);

          //if mutipleSelection includes element being dragged
          if (
            currentMultipleSelection.current?.nodes().includes(event.target)
          ) {
            setSelectedObject(null);
          } else {
            setSelectedObject(event.target);
            currentMultipleSelection.current?.setNodes([]);
          }
        }}
        onDragEnd={(event: Konva.KonvaEventObject<MouseEvent>) => {}}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          onTransformEnd={(event: Konva.KonvaEventObject<MouseEvent>) => {
            let myWidth = trRef?.current?.width();
            let myHeight = trRef?.current?.height();

            if (myWidth && myHeight) {
              shapeRef.current.width(myWidth);
              shapeRef.current.height(myHeight);
              shapeRef.current.scaleX(1);
              shapeRef.current.scaleY(1);
            }
          }}
          enabledAnchors={
            isDraggable
              ? ["top-left", "top-right", "bottom-right", "bottom-left"]
              : []
          }
          rotateEnabled={isDraggable ? true : false}
          onTransformStart={(event: Konva.KonvaEventObject<MouseEvent>) => {
            addToHistory(event.target);
          }}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default Rectangle;
