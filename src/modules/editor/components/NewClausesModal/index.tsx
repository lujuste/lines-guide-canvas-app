import React from "react";
import Modal from "react-modal";
import ButtonPrimary from "../ButtonPrimary";
import { InputModal } from "../InputModal";
import { Box, ContainerModal, Text, TextArea } from "./styles";
import { AnimatePresence, motion } from "framer-motion";

interface NewClausesModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewClausesModal: React.FC<NewClausesModalProps> = ({
  isOpen,
  onRequestClose
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      scale: 1.2,
      transition: {
        delayChildren: 0.5,
        type: "spring",
        duration: 1,
        stiffness: 100,
        staggerDirection: -1
      }
    }
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1.9,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <AnimatePresence>
        <ContainerModal
          as={motion.form}
          initial="hidden"
          animate="show"
          variants={container}
          exit={{
            opacity: 0,
            scale: 0.8,
            x: -300
          }}
          transition={{ duration: 1 }}
        >
          <InputModal
            borderBottom="solid"
            height="60px"
            textTransform="uppercase"
            placeholder="Título"
            name="title"
          />
          <TextArea
            as={motion.textarea}
            variants={item}
            placeholder="Digite aqui sua cláusula"
          ></TextArea>
          <Box>
            <Text as={motion.span} variants={item}>
              Não coloque nenhuma informação confidencial de cliente ao redigir
              esta cláusula pois ela será adicionada ao banco de cláusulas.
              Coloque informações confidenciais de clientes apenas no modelo de
              documento que você está criando.
            </Text>
          </Box>
          <ButtonPrimary>Salvar</ButtonPrimary>
        </ContainerModal>
      </AnimatePresence>
    </Modal>
  );
};
