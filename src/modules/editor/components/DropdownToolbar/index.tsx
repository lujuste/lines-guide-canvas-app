import { useEffect, useState } from "react";
import {
  Container,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem
} from "./styles";
import { animate, motion, useAnimation, useMotionValue } from "framer-motion";
import iconArrow from "../../assets/icon-arrow-dropdown.svg";
import useComponentVisible from "../../hooks/useComponentVisible";
import { useToolbarEditor } from "../../hooks/toolbarEditor";

//options for fonts data below
const options = [
  { name: "Roboto", valueFont: "Roboto" }
  // { name: "Montserrat", valueFont: "Montserrat" },
  // { name: "Poppins", valueFont: "Poppins" },
  // { name: "Open Sans", valueFont: "Open Sans" },
  // { name: "Oswald", valueFont: "Oswald" }
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

const DropdownToolbar = () => {
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
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const { selectedOptionFont, setSelectedOptionFont, selectedNewFont } =
    useToolbarEditor();

  const handleClick = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => {
    setIsOpen(false);
    setSelectedOptionFont(String(value));
    selectedNewFont(value);
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
            {selectedOptionFont || "Fonte"}{" "}
            <img className="effect-arrow" src={iconArrow} alt="Fonte" />
          </DropDownHeader>
          {isOpen && isComponentVisible && (
            <DropDownListContainer onClick={handleClick}>
              <DropDownList
                variants={list}
                initial="hidden"
                animate="visible"
                as={motion.ul}
              >
                {options.map((option, index) => (
                  <ListItem
                    as={motion.li}
                    onClick={() => onOptionClicked(option.valueFont)}
                    value={option.valueFont}
                    key={option.valueFont}
                    animate={controls}
                    variants={variants}
                  >
                    {option.name}
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

export default DropdownToolbar;
