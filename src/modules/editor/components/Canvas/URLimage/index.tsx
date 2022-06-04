import Konva from "konva";
import React, { useRef, useState, useEffect } from "react";
import { Transformer, Image } from "react-konva";
import useImage from "use-image";

const URLImage = ({
  shapeProps,
  selectedObject,
  setSelectedObject,
  addToHistory,

  currentMultipleSelection
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [image] = useImage(shapeProps.src);
  const shapeRef = useRef<any>();
  const trRef = useRef<any>();

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
      <Image
        image={image}
        ref={shapeRef}
        {...shapeProps}
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
      />
      {isSelected && (
        <Transformer
          onTransformStart={(event: Konva.KonvaEventObject<MouseEvent>) => {
            addToHistory(event.target);
          }}
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
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

export default URLImage;
