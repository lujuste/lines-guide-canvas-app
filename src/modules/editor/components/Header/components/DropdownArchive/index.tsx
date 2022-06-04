import { useEffect, useState } from "react";
import {
  Text,
  DropDownContainer,
  DropDownList,
  DropDownListContainer,
  ListItem,
  Flex,
  Container,
  Button,
  WrapperButtons,
  MiniBox
} from "./styles";
import { animate, motion, useAnimation, useMotionValue } from "framer-motion";

import useComponentVisible from "../../../../hooks/useComponentVisible";

import DividerHorizontal from "../DividerHorizontal";
import IconSvg from "../../../IconSvg";
import iconInfo from "../../../../assets/icon-info.svg";
import { useHeaderEditor } from "../../../../hooks/headerEditor";

const list = {
  visible: {
    opacity: 1,
    y: 10,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  },
  hidden: {
    opacity: 0,
    y: 0,
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

interface DropProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const DropdownArchive = ({ isOpen, setIsOpen }: DropProps) => {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);
  const {
    handleSaveNewVersion,
    handleSaveTemplate,
    generatePDF,
    handleCreateNewProject
  } = useHeaderEditor();

  useEffect(() => {
    const controls = animate(x, 100, {
      type: "spring",
      stiffness: 2000
    });

    return controls.stop;
  });

  const handleClick = () => setIsOpen(!isOpen);

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
          <Flex>
            <Text margin="0 auto" onClick={handleClick}>
              Arquivo
            </Text>
          </Flex>
          {isOpen && isComponentVisible && (
            <DropDownListContainer onClick={handleClick}>
              <DropDownList
                variants={list}
                initial="hidden"
                animate="visible"
                as={motion.ul}
              >
                <ListItem as={motion.li} animate={controls} variants={variants}>
                  Tamanho: A4 (21cm x 29,7cm)
                </ListItem>
                <DividerHorizontal margin="0 0 1rem 0" />

                <WrapperButtons>
                  <Button onClick={handleCreateNewProject}>
                    Novo projeto {/*<MiniBox>ctrl + n</MiniBox> */}
                  </Button>
                  <Button onClick={handleSaveTemplate}>
                    Salvar {/* <MiniBox>ctrl + s</MiniBox> */}
                  </Button>
                  {/* <Button>
                    Cópia do projeto{" "}
                    <IconSvg description="Info" src={iconInfo} />{" "}
                  </Button> */}
                  {/* <Button onClick={handleSaveNewVersion}>
                    Nova versão <IconSvg description="Info" src={iconInfo} />
                  </Button> */}

                  <Button onClick={generatePDF}>Baixar</Button>
                </WrapperButtons>
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Container>
    </>
  );
};

export default DropdownArchive;
