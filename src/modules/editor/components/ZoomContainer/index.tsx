import React, { ReactNode, useEffect, useState } from "react";
import { MapInteraction } from "react-map-interaction";
import { useToolbarEditor } from "../../hooks/toolbarEditor";

// import { Container } from './styles';

interface ZoomProps {
  children: ReactNode;
  isPan?: boolean;
  isZoom?: boolean;
}

const ZoomContainer: React.FC<ZoomProps> = props => {
  const {
    isScale,
    setIsScale,
    isTranslationX,
    setIsTranslationX,
    setIsTranslationY,
    isTranslationY,
    valueZoom,
    setValueZoom
  } = useToolbarEditor();

  const [isChangeTranslationX, setIsChangeTranslationX] = useState(null);
  const [isChangeTranslationY, setIsChangeTranslationY] = useState(null);

  useEffect(() => {
    setIsTranslationX(isChangeTranslationX);
    setIsTranslationY(isChangeTranslationY);
  }, [isChangeTranslationX, isChangeTranslationY]);

  return (
    <MapInteraction disablePan={true} disableZoom={true} {...props}>
      {({ translation, scale }) => {
        const transform = `translate(${
          isChangeTranslationX ? isChangeTranslationX : isTranslationX
        }px, ${
          isChangeTranslationY ? isChangeTranslationY : isTranslationY
        }px) scale(${valueZoom ? valueZoom : isScale})`;
        setIsScale(scale);
        setIsTranslationX(translation.x);
        setIsTranslationY(translation.y);
        setIsChangeTranslationX(translation.x);
        setIsChangeTranslationY(translation.y);

        return (
          <div
            style={{
              flex: 0,
              position: "relative",
              overflow: "auto",
              touchAction: "none",
              msTouchAction: "none",
              cursor: "all-scroll",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none"
            }}
          >
            <div
              style={{
                display: "inline-block",
                transform: transform,
                flex: 0,
                width: "100%",
                height: "100%",
                transformOrigin: "0 0 "
              }}
            >
              {props.children}
            </div>
          </div>
        );
      }}
    </MapInteraction>
  );
};

export default ZoomContainer;
