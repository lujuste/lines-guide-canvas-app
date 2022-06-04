import React, { useEffect, useState } from "react";
import useComponentVisible from "../../../hooks/useComponentVisible";
import ButtonToolbar from "../ButtonToolbar";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  Flex,
  HorizontalStack,
  LineBarNormal,
  LineWithDash
} from "./styles";

import { motion } from "framer-motion";
import { useToolbarEditor } from "../../../hooks/toolbarEditor";

// import { Container } from './styles';

interface DropdownDashProps {
  isActive?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  tooltipText: string;
  onClick?: any;
  component?: string;
}

const DropdownDash: React.FC<DropdownDashProps> = ({
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
  const { toggleElementDash } = useToolbarEditor();
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
            tooltipText="Traço"
            onClick={onClick}
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
            <HorizontalStack>
              <LineBarNormal onMouseEnter={() => toggleElementDash(0)} />
              <LineWithDash onMouseEnter={() => toggleElementDash(5)} />
            </HorizontalStack>
          </DropDownList>
        </DropDownListContainer>
      )}
    </Flex>
  );
};

export default DropdownDash;
