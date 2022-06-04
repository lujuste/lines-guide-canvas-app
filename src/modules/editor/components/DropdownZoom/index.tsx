import { useEffect, useState } from "react";
import {
  Container,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem
} from "./styles";

import iconArrow from "../../assets/icon-arrow-dropdown.svg";
import useComponentVisible from "../../hooks/useComponentVisible";
import { animate, useAnimation, useMotionValue, motion } from "framer-motion";
import { useToolbarEditor } from "../../hooks/toolbarEditor";
import { usePagesEditor } from "../../hooks/pagesEditor";
import { useSelection } from "../../hooks/selection";

const options = [
  // { number: "40%", scale: 0.4, translatex: "-50%", translatey: "-50%" },
  // { number: "50%", scale: 0.5, translatex: "-50%", translatey: "-50%" },
  // { number: "60%", scale: 0.6, translatex: "-50%", translatey: "-50%" },
  { number: "70%", scale: 0.7, translatex: "-50%", translatey: "-50%" },
  { number: "80%", scale: 0.8, translatex: "-50%", translatey: "-50%" },
  { number: "90%", scale: 0.9, translatex: "-50%", translatey: "-50%" },
  { number: "100%", scale: 1, translatex: "-50%", translatey: "-50%" },
  { number: "110%", scale: 1.1, translatex: "-50%", translatey: "-50%" },
  { number: "120%", scale: 1.2, translatex: "-50%", translatey: "-50%" },
  { number: "140%", scale: 1.4, translatex: "-50%", translatey: "-50%" }
  // { number: "160%", scale: 1.6, translatex: "-50%", translatey: "-50%" },
  // { number: "200%", scale: 2, translatex: "-50%", translatey: "-50%" }
];

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

const DropdownZoom: React.FC = () => {
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
  const controls = useAnimation();
  const x = useMotionValue(0);

  useEffect(() => {
    const controls = animate(x, 100, {
      type: "spring",
      stiffness: 2000
    });

    return controls.stop;
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectValueZoom, setSelectValueZoom] = useState(1);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const { scaleForZoom, setScaleForZoom } = usePagesEditor();

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (
      selectedObject?.attrs?.object === "text" ||
      selectedObject?.attrs?.object === "simpleText"
    ) {
      setSelectedObject(null);
      setIsOpen(false);
    }
  };

  const { selectedObject, setSelectedObject } = useSelection();

  const onOptionClicked = (value: string, scale: number) => {
    setSelectedOption(String(value));
    setSelectValueZoom(scale);
    setScaleForZoom({ x: 0, y: 0, scale: scale });
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isComponentVisible) {
      setIsOpen(false);
      setIsComponentVisible(true);
    } else {
      return;
    }
  }, [isComponentVisible]);

  return (
    <>
      <Container>
        <DropDownContainer ref={ref}>
          <DropDownHeader Open={isOpen} onClick={handleClick}>
            {/* {scaleForZoom.scale === 0.4 && "40%"}
            {scaleForZoom.scale === 0.5 && "50%"}
            {scaleForZoom.scale === 0.6 && "60%"} */}
            {scaleForZoom.scale === 0.7 && "70%"}
            {scaleForZoom.scale === 0.8 && "80%"}
            {scaleForZoom.scale === 0.9 && "90%"}
            {scaleForZoom.scale === 1 && "100%"}
            {scaleForZoom.scale === 1.1 && "110%"}
            {scaleForZoom.scale === 1.2 && "120%"}
            {scaleForZoom.scale === 1.4 && "140%"}
            {/* {scaleForZoom.scale === 1.6 && "160%"}
            {scaleForZoom.scale === 2 && "200%"} */}
            <img className="effect-arrow" src={iconArrow} alt="Fonte" />
          </DropDownHeader>
          {isOpen && isComponentVisible && (
            <DropDownListContainer onClick={handleClick}>
              <DropDownList
                as={motion.ul}
                variants={list}
                initial="hidden"
                animate="visible"
              >
                {options.map((option, index) => (
                  <ListItem
                    onClick={() =>
                      setScaleForZoom({ x: 0, y: 0, scale: option.scale })
                    }
                    key={Math.random()}
                    value={option.scale}
                  >
                    {option.number}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Container>
    </>
  );
};

export default DropdownZoom;
