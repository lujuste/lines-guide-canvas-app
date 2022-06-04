import React from "react";
import { useMainHook } from "../../../../../../hooks/main";
import Tooltip2 from "../../../Sidebar/components/Tooltip2";
import Tooltip from "../../../Tooltip";

// import { Container } from './styles';

interface ImageDragProps {
  draggable?: boolean;
  className?: string;
  grab?: boolean;
  setIsGrab?: any;
  imageSrc?: any;
  index?: number;
  alt?: string;
  indexGrab?: any;
}

const ImageDrag: React.FC<ImageDragProps> = ({
  draggable,
  className,
  grab,
  setIsGrab,
  imageSrc,
  index,
  alt,
  indexGrab
}) => {
  const { dragUrl } = useMainHook();

  return (
    <Tooltip2 text="Arraste para usar" position="bottom">
      <img
        draggable={draggable}
        className={className}
        style={{
          opacity: grab && index === indexGrab ? "0.1" : "1",
          cursor:
            grab && index === indexGrab
              ? "-webkit-grabbing !important"
              : "-webkit-grab !important",
          transition: "all 0.1s linear",
          position: "relative"

          /* W3C standards syntax, should come least */
        }}
        onDragStartCapture={e => setIsGrab({ active: true })}
        onDragEnd={e => setIsGrab({ active: false })}
        onDragStart={(e: any) => {
          setIsGrab({ active: true, index: index });
          dragUrl.current = e.target;
        }}
        src={imageSrc}
        alt={alt}
      />
    </Tooltip2>
  );
};

export default ImageDrag;

