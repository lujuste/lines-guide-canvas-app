import React, { useEffect, useState } from "react";
import useComponentVisible from "../../../hooks/useComponentVisible";
import { animate, useAnimation, useMotionValue, motion } from "framer-motion";
import ButtonToolbar from "../ButtonToolbar";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  Flex,
  HorizontalStack,
  StrokeBar,
  TextStroke
} from "./styles";

// import { Container } from './styles';

interface ButtonToolbarProps {
  isActive?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  tooltipText: string;
  onClick?: any;
  component: string;
  handleChangeStroke?: any;
}

const strokeVariants = [
  { name: "Sem borda", borderSize: 0 },
  { name: "1px", borderSize: 2 },
  { name: "2px", borderSize: 3 },
  { name: "3px", borderSize: 4 },
  { name: "4px", borderSize: 5 },
  { name: "5px", borderSize: 6 },
  { name: "6px", borderSize: 7 },
  { name: "7px", borderSize: 8 },
  { name: "8px", borderSize: 9 }
];

const DropdownStroke: React.FC<ButtonToolbarProps> = ({
  isActive,
  className,
  type,
  tooltipText,
  handleChangeStroke,
  component
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const handleClick = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isComponentVisible) {
      setIsOpen(false);
      setIsComponentVisible(true);
    } else {
      return;
    }
  }, [isComponentVisible, setIsComponentVisible]);

  //animations
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
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3
      }
    }),
    hidden: { opacity: 0 }
  };

  return (
    <Flex>
      <DropDownContainer ref={ref}>
        <DropDownHeader Open={isOpen} onClick={handleClick}>
          <ButtonToolbar
            isActive={isOpen}
            className={className}
            type={type}
            tooltipText={tooltipText}
            component={component}
          />
        </DropDownHeader>
      </DropDownContainer>
      {isOpen && isComponentVisible && (
        <DropDownListContainer onClick={handleClick}>
          <DropDownList
            as={motion.ul}
            variants={list}
            initial="hidden"
            animate="visible"
          >
            {strokeVariants.map((stroke, index) => (
              <HorizontalStack
                key={String(Math.random())}
                onMouseEnter={() => handleChangeStroke(stroke.borderSize)}
              >
                <TextStroke key={stroke.name}> {stroke.name} </TextStroke>
                {index === 0 ? null : <StrokeBar size={stroke.borderSize} />}
              </HorizontalStack>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </Flex>
  );
};

export default DropdownStroke;

