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

const Triangle = ({
  selectedObject,
  shapeProps,
  setSelectedObject,
  addToHistory,
  isMasterTransformerActive
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const shapeRef = useRef<Konva.Shape>();
  const trRef = useRef<Konva.Transformer>();

  useEffect(() => {
    if (shapeRef.current === selectedObject && !isMasterTransformerActive) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedObject, isSelected, isMasterTransformerActive]);

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
        draggable={true}
        numPoints={3}
        rotation={360}
        onClick={(event: Konva.KonvaEventObject<MouseEvent>) => {
          setSelectedObject(event.target);
        }}
        onDragStart={(event: Konva.KonvaEventObject<MouseEvent>) => {
          addToHistory(event.target);
          setSelectedObject(event.target);
        }}
        onDragEnd={(event: Konva.KonvaEventObject<MouseEvent>) => {}}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          onTransformStart={(event: Konva.KonvaEventObject<MouseEvent>) => {
            addToHistory(event.target);
          }}
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

export default Triangle;

