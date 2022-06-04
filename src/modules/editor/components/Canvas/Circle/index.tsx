import Konva from "konva";
import { useRef, useEffect, useState } from "react";
import { Transformer, Circle } from "react-konva";

const CircleShape = ({
  shapeProps,
  selectedObject,
  setSelectedObject,
  addToHistory,
  currentMultipleSelection
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const shapeRef = useRef<any>();
  const trRef = useRef<any>();

  // ======>
  let isDraggable = shapeRef?.current?.draggable();
  //this code below verify if elements stay block and remove anchors for editions in scale
  // when element is block
  useEffect(() => {
    if (shapeRef.current) {
      isDraggable = shapeRef.current.draggable();
    }
  }, [isSelected, shapeRef?.current?.draggable()]);
  // <-------

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
      <Circle
        radius={70}
        ref={shapeRef}
        name="circle"
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

          const isTargetInsideMultipleSelection =
            currentMultipleSelection.current?.nodes().includes(event.target);

          //if mutipleSelection includes element being dragged
          if (isTargetInsideMultipleSelection) {
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
          enabledAnchors={
            isDraggable
              ? ["top-left", "top-right", "bottom-right", "bottom-left"]
              : []
          }
          rotateEnabled={isDraggable ? true : false}
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
          ref={trRef}
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

export default CircleShape;
