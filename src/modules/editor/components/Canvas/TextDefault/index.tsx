import Konva from "konva";
import React, { useRef, useEffect, useState } from "react";
import { Transformer, Text, Group } from "react-konva";
import { useTextEditor } from "../../../hooks/editorText";
import { TextDefaultWithoutHeight } from "../TextDefaultWithoutHeight";

interface ICursorProps {
  x?: number;
  y?: number;
}

const TextDefault = ({
  selectedObject,
  shapeProps,
  setSelectedObject,
  addToHistory,
  onChange,

  currentMultipleSelection
}) => {
  let MAX_WIDTH = 596;
  const [isSelected, setIsSelected] = useState(false);
  const shapeRef = useRef<Konva.Shape>();
  const trRef = useRef<Konva.Transformer>();
  const [text, setText] = useState(shapeProps?.text);
  const [width, setWidth] = useState(Number(shapeProps?.width));
  const [editorEnabled, setEditorEnabled] = useState<boolean>(false);
  const [isCursor, setIsCursor] = useState<ICursorProps>({});

  function getCorner(pivotX, pivotY, diffX, diffY, angle) {
    const distance = Math.sqrt(diffX * diffX + diffY * diffY);

    /// find angle from pivot to corner
    angle += Math.atan2(diffY, diffX);

    /// get new x and y and round it off to integer
    const x = pivotX + distance * Math.cos(angle);
    const y = pivotY + distance * Math.sin(angle);

    return { x: x, y: y };
  }

  function getClientRect(rotatedBox) {
    const { x, y, width, height } = rotatedBox;
    const rad = rotatedBox.rotation;

    const p1 = getCorner(x, y, 0, 0, rad);
    const p2 = getCorner(x, y, width, 0, rad);
    const p3 = getCorner(x, y, width, height, rad);
    const p4 = getCorner(x, y, 0, height, rad);

    const minX = Math.min(p1.x, p2.x, p3.x, p4.x);
    const minY = Math.min(p1.y, p2.y, p3.y, p4.y);
    const maxX = Math.max(p1.x, p2.x, p3.x, p4.x);
    const maxY = Math.max(p1.y, p2.y, p3.y, p4.y);

    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }

  function getTotalBox(boxes) {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    boxes.forEach(box => {
      minX = Math.min(minX, box.x);
      minY = Math.min(minY, box.y);
      maxX = Math.max(maxX, box.x + box.width);
      maxY = Math.max(maxY, box.y + box.height);
    });
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }

  useEffect(() => {
    if (
      shapeRef?.current?.attrs?.text !== selectedObject?.attrs?.text ||
      shapeRef?.current?.attrs?.id !== selectedObject?.attrs?.id
    ) {
      setEditorEnabled(false);
    }
  }, [editorEnabled, text, selectedObject]);

  useEffect(() => {
    if (shapeRef.current === selectedObject) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
      setEditorEnabled(false);
    }
  }, [selectedObject, isSelected]);

  useEffect(() => {
    trRef.current?.setNodes([shapeRef.current]);
    trRef.current?.getLayer().batchDraw();
  }, [isSelected]);

  return (
    <>
      <Text
        ref={shapeRef}
        {...shapeProps}
        width={shapeProps.width}
        keepRatio={true}
        visible={!editorEnabled}
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
        onDblClick={e => {
          let currentWidth = trRef.current.width();
          selectedObject.setAttrs({
            width: currentWidth,
            scaleX: 1,
            scaleY: 1
          });
          if (shapeRef?.current?.attrs?.text === selectedObject?.attrs?.text) {
            const absPosition = e.target.getAbsolutePosition();
            setText(shapeProps.text);
            setIsCursor(absPosition);
            setEditorEnabled(!editorEnabled);
          } else {
            setEditorEnabled(false);
          }
        }}
        onDragMove={(event: Konva.KonvaEventObject<MouseEvent>) => {
          const boxes = trRef.current.nodes().map(node => node.getClientRect());
          const box = getTotalBox(boxes);

          trRef.current.nodes().forEach(shape => {
            const absPos = shape.getAbsolutePosition();
            const offsetX = box.x - absPos.x;
            const offsetY = box.y - absPos.y;

            const newAbsPos = { ...absPos };
            if (box.x < 0) {
              newAbsPos.x = -offsetX;
            }
            if (box.y < 0) {
              newAbsPos.y = -offsetY;
            }
            if (box.x + box.width > event.target.getStage().width()) {
              newAbsPos.x =
                event.target.getStage().width() - box.width - offsetX;
            }
            if (box.y + box.height > event.target.getStage().height()) {
              newAbsPos.y =
                event.target.getStage().height() - box.height - offsetY;
            }
            shape.setAbsolutePosition(newAbsPos);
          });
        }}
        onTransform={(event: Konva.KonvaEventObject<MouseEvent>) => {
          setSelectedObject(event.target);
          let currentWidth = trRef.current.width();
          let stageWidth = event.target.getStage().width();
          let absPositionX = event.target.getAbsolutePosition().x;
          MAX_WIDTH = stageWidth - absPositionX;

          selectedObject.setAttrs({
            width: currentWidth,
            scaleX: 1,
            scaleY: 1
          });
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
        onChange={(event: Konva.KonvaEventObject<MouseEvent>) => {
          setSelectedObject(event.target);
          addToHistory(event.target);
        }}
      />
      {editorEnabled && (
        <TextDefaultWithoutHeight
          value={shapeProps}
          cursorPosition={isCursor}
          editorEnabled={editorEnabled}
          textNodeRef={shapeRef}
          setEditorEnabled={setEditorEnabled}
          onChange={(shapeProps.text = text)}
          text={text}
          setText={setText}
          onBlur={(e: any) => {
            shapeProps.text = text;
            setEditorEnabled(false);
          }}
        />
      )}

      {isSelected && (
        <Transformer
          ref={trRef}
          keepRatio={true}
          enabledAnchors={["middle-left", "middle-right"]}
          rotateEnabled={false}
          resizeEnabled={true}
          onTransformStart={(event: Konva.KonvaEventObject<MouseEvent>) => {
            addToHistory(event.target);
          }}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width > MAX_WIDTH) {
              console.log(newBox.width, "width");
              return oldBox;
            }
            // newBox.width = Math.max(30, newBox.width);
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default TextDefault;

