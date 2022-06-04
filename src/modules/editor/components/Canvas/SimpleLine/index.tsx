import Konva from "konva";
import React, { useRef, useEffect, useState } from "react";
import { Transformer, Line } from "react-konva";

const SimpleLine = ({
  shapeProps,
  selectedObject,
  setSelectedObject,
  addToHistory,
  currentMultipleSelection
}) => {
  const shapeRef = useRef<any>();
  const trRef = useRef<any>();
  const trPreSelected = useRef<any>();
  const [isSelected, setIsSelected] = useState(false);
  const [isPreSelected, setIsPreSelected] = useState(false);

  if (shapeProps?.strokeWidth === 1) shapeProps.strokeWidth = 2;

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

  useEffect(() => {
    trPreSelected.current?.setNodes([shapeRef.current]);
    trPreSelected.current?.getLayer().batchDraw();
  }, [isPreSelected]);

  return (
    <>
      <Line
        ref={shapeRef}
        points={[0, 0, shapeProps.setPoints, 0]}
        closed
        fillAfterStrokeEnabled
        {...shapeProps}
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
        onMouseEnter={(event: Konva.KonvaEventObject<MouseEvent>) => {
          if (event.target !== selectedObject) {
            setIsPreSelected(true);
          }
        }}
        onMouseOut={(event: Konva.KonvaEventObject<MouseEvent>) => {
          setIsPreSelected(false);
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
        onDragEnd={(event: Konva.KonvaEventObject<MouseEvent>) => {
          setSelectedObject(event.target);
        }}
      />

      {isSelected && (
        <Transformer
          ref={trRef}
          onTransformStart={(event: Konva.KonvaEventObject<MouseEvent>) => {
            addToHistory(event.target);
          }}
          enabledAnchors={isDraggable ? ["middle-left", "middle-right"] : []}
          rotateEnabled={isDraggable ? true : false}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 1 || newBox.height < 1) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}

      {isPreSelected && (
        <Transformer
          ref={trPreSelected}
          padding={2}
          enabledAnchors={isDraggable ? ["middle-left", "middle-right"] : []}
          onTransformStart={(event: Konva.KonvaEventObject<MouseEvent>) => {
            addToHistory(event.target);
          }}
          onClick={(event: Konva.KonvaEventObject<MouseEvent>) => {
            setSelectedObject(shapeRef.current);
          }}
          rotateEnabled={isDraggable ? true : false}
          resizeEnabled={isDraggable ? true : false}
          borderStroke="purple"
        />
      )}
    </>
  );
};

export default SimpleLine;
