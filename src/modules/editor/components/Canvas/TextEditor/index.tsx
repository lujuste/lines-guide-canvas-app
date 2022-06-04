import React, { useState, useRef, useEffect } from "react";
import { Html } from "react-konva-utils";
import { useMainHook } from "../../../../../hooks/main";
import { useToolbarEditor } from "../../../hooks/toolbarEditor";

interface IRenderedObject {
  width?: string;
  height?: string;
  fontSize?: string;
  border?: string;
  padding?: string;
  overflow?: string;
  background?: string;
  outline?: string;
  lineHeight?: string;
  resize?: string;
  fontFamily?: string;
  transformOrigin?: string;
  textAlign?: string;
  color: string;
  overflowWrap: string;
  whiteSpace: string;
  userSelect: string;
  wordBreak: string;
  fontWeight: string;
  textTransform: string;
  display: string;
}

export const TextEditor = ({
  textNodeRef,
  value,
  onBlur,
  onChange,
  cursorPosition,
  editorEnabled,
  setEditorEnabled,
  text,
  setText
}) => {
  const [style, setStyle] = React.useState<any>();
  const textArea = useRef(null);

  const handleClickTextArea = () => {
    textArea?.current && textArea?.current.focus();
    setEditorEnabled(true);
  };

  const { isUpLowerCase, setIsUpLowerCase } = useMainHook();

  useEffect(() => {
    if (textArea && textArea.current) {
      textArea.current.style.height = "0px";
      const scrollHeight = textArea.current.scrollHeight;
      textArea.current.style.height = scrollHeight + "px";
    }
  }, [textArea]);

  React.useLayoutEffect(() => {
    const textNode = textNodeRef?.current;

    const newStyle = {} as IRenderedObject;
    newStyle.width = textNode?.width() + textNode?.padding() * 2 + "px";
    newStyle.height = textNode?.height() + textNode?.padding() * 2 + 10 + "px";
    newStyle.fontSize = textNode?.fontSize() + "px";
    newStyle.border = "none";
    newStyle.padding = "0px";
    newStyle.overflow = "hidden";
    newStyle.background = "none";
    newStyle.outline = "none";
    newStyle.resize = "none";
    newStyle.lineHeight = textNode?.lineHeight() + 0.01;
    newStyle.fontFamily = '"' + textNode?.fontFamily() + '"';
    newStyle.transformOrigin = "left top";
    newStyle.textAlign = textNode?.align();
    newStyle.color = textNode?.fill();
    newStyle.whiteSpace = "normal";
    newStyle.userSelect = "text";
    newStyle.wordBreak = "normal";
    newStyle.fontWeight = textNode?.fontStyle();

    if (JSON?.stringify(newStyle) !== JSON?.stringify(style)) {
      setStyle(newStyle);
    }
  });

  return (
    <Html>
      <textarea
        style={{
          ...style,
          position: "absolute",
          top: `${cursorPosition?.y}px`,
          left: `${cursorPosition?.x}px`
        }}
        value={value?.text}
        onChange={(e: any) => {
          setText(e.target.value);
        }}
        ref={textArea}
        onClick={handleClickTextArea}
        onBlur={onBlur}
      />
    </Html>
  );
};

