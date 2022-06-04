import React, { useEffect, useState } from "react";
import ButtonToolbar from "../ButtonToolbar";
import { animate, useAnimation, useMotionValue, motion } from "framer-motion";
import useComponentVisible from "../../../hooks/useComponentVisible";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  Flex,
  HStack
} from "./styles";
import SelectBorderRadius from "../SelectBorderRadius";

interface DropdownRadiusProps {
  isActive?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  tooltipText: string;
  onClick?: any;
  component?: string;
}

// import { Container } from './styles';

const DropdownRadius: React.FC<DropdownRadiusProps> = ({
  isActive,
  className,
  type,
  tooltipText,
  onClick,
  component
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const handleClick = () => setIsOpen(true);

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
            onClick={onClick}
            component={component}
          />
          {isOpen && (
            <DropDownListContainer>
              <HStack>
                <DropDownList
                  as={motion.ul}
                  variants={list}
                  initial="hidden"
                  animate="visible"
                >
                  <SelectBorderRadius />
                </DropDownList>
              </HStack>
            </DropDownListContainer>
          )}
        </DropDownHeader>
      </DropDownContainer>
    </Flex>
  );
};

export default DropdownRadius;
