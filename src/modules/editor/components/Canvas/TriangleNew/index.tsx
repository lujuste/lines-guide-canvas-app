import Konva from "konva";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { Star, Transformer } from "react-konva";

interface IHistory {
  currentStep: number;
  step: {
    stepNumber: number;
    attrs: {};
  }[];
}

const TriangleNew = ({
  selectedObject,
  shapeProps,
  setSelectedObject,
  addToHistory,

  currentMultipleSelection
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const shapeRef = useRef<Konva.Shape>();
  const trRef = useRef<Konva.Transformer>();

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
      <Star
        ref={shapeRef}
        {...shapeProps}
        innerRadius={20}
        outerRadius={40}
        numPoints={3}
        rotation={360}
        onClick={(event: Konva.KonvaEventObject<MouseEvent>) => {
          const isTargetInsideMultipleSelection =
            currentMultipleSelection.current?.nodes().includes(event.target);

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
          if (currentMultipleSelection.current?.nodes().includes(event.target)) {
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

export default TriangleNew;
