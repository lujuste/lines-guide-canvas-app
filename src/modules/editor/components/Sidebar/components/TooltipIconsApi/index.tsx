import { animate, motion, useAnimation, useMotionValue } from "framer-motion";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { useSelection } from "../../../../hooks/selection";
import {
  CenterContainer,
  TooltipBox,
  TooltipTarget,
  TooltipWrapper
} from "./styles";

interface TooltipProps {
  children: ReactNode;
  text: string;
  position?: string;
  positionAt?: any;
}

const list = {
  visible: {
    opacity: 1,
    y: 5,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  },
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      when: "afterChildren"
    }
  }
};

const variants = {
  visible: i => ({
    opacity: 1,
    transition: {
      delay: i * 0.3
    }
  }),
  hidden: { opacity: 0 }
};

const TooltipIconsApi = ({
  children,
  text,
  position,
  positionAt
}: TooltipProps) => {
  const [hovered, setHovered] = useState(false);
  const targetRef = useRef();
  const showTooltip = true;
  const controls = useAnimation();
  const x = useMotionValue(0);

  const { selectedObject } = useSelection();

  useEffect(() => {
    const controls = animate(x, 100, {
      type: "spring",
      stiffness: 2000
    });

    return controls.stop;
  });

  return (
    <TooltipWrapper
      onMouseEnter={useCallback(() => setHovered(true), [hovered])}
      onMouseLeave={useCallback(() => setHovered(false), [hovered])}
    >
      <TooltipTarget>{children}</TooltipTarget>
      {hovered && (
        <CenterContainer positionAt={positionAt} position={position}>
          <TooltipBox> {text} </TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
};

export default TooltipIconsApi;

