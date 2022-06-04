import React, { useCallback, useState } from "react";
import SearchBar from "../components/SearchBar";
import {
  Container,
  DivBorder,
  Line,
  ModalContainer,
  InputTextArea,
  InputText,
  Warning,
  DivBorderBottom,
  SaveButton,
  SaveButtonLabel,
  ClausuleItemContainer,
  ClausuleItem,
  ClausuleLabel,
  ModalCreateClausule,
  TextShowTitle,
  LabelShowTitle,
  ModalShowClausule,
  TextContent,
  Text
} from "./styles";
import Modal from "react-modal";

const modalStyleCreateClausule = {
  content: {
    padding: 0,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "85%",
    borderRadius: 20
  }
};

const modalStyleShowClausule = {
  content: {
    padding: 0,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "60%",
    borderRadius: 10
  }
};

interface IClausulesProps {
  title: string;
  text: string;
}

const MyClausules: React.FC = () => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<
    "showClausules" | "createClausules" | "editClausules"
  >();
  const [clausules, setClausules] = useState<IClausulesProps[]>([]);

  const [activeClausule, setActiveClausule] = useState({} as IClausulesProps);
  let subtitle;

  const fakeClausules = [
    {
      title: "Forma de pagamento",
      text: "Os pagamentos devidos à Contratada, decorrentes deste Contrato, serão realizados pela Contratante por meio de depósito bancário, documento de ordem de crédito (“DOC”), transferência eletrônica disponível (“TED”) ou boleto bancário, a ser realizado em conta de titularidade da Contratada, a ser informada à Contratante."
    },
    {
      title: "Garantia",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "Nota fiscal, fatura, faturamento",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ];

  function openModal() {
    setIsModalOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const handleAddClausule = useCallback(() => {}, []);

  const handleShowClausule = (item: IClausulesProps, index: number) => {
    setActiveModal("showClausules");
    setActiveClausule({
      title: item.title,
      text: item.text
    });
    setIsModalOpen(true);
  };

  const handleCreateNewClausule = () => {
    setActiveModal("createClausules");
    setIsModalOpen(true);
  };

  return (
    <Container>
      <TextContent>
        <Text>
          A funcionalidade <strong> Minha Cláusula </strong>, que é uma
          ferramenta de cadastro personalizado e automatização das cláusulas
          dentro do seu documento, ainda não está disponível nesta versão beta.
          Ela estará pronta para uso em breve.
        </Text>
      </TextContent>

      {/* <SearchBar onClickSearchButton={handleCreateNewClausule} />
      <ClausuleItemContainer>
        {fakeClausules.map((item, index) => {
          return (
            <ClausuleItem
              onClick={() => {
                handleShowClausule(item, index);
              }}
            >
              <ClausuleLabel>{item.title}</ClausuleLabel>
            </ClausuleItem>
          );
        })}
      </ClausuleItemContainer>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={
          activeModal === "showClausules"
            ? modalStyleShowClausule
            : activeModal === "createClausules"
            ? modalStyleCreateClausule
            : modalStyleShowClausule
        }
        contentLabel="Example Modal"
      >
        {activeModal === "createClausules" && (
          <ModalCreateClausule>
            <ModalContainer>
              <InputText placeholder="TÍTULO" />
              <Line />
              <DivBorder>
                <InputTextArea placeholder="Digite sua cláusula." />
              </DivBorder>
              <DivBorderBottom>
                <Warning>
                  Não coloque nenhuma informação confidencial de cliente ao
                  redigir esta cláusula pois ela será adicionada ao banco de
                  cláusulas. Coloque informações confidenciais de clientes
                  apenas no modelo de documento que você está criando.
                </Warning>
              </DivBorderBottom>
              <SaveButton>
                <SaveButtonLabel>Salvar</SaveButtonLabel>
              </SaveButton>
            </ModalContainer>
          </ModalCreateClausule>
        )}

        {activeModal === "showClausules" && (
          <ModalShowClausule>
            <ModalContainer>
              <LabelShowTitle>{activeClausule?.title}</LabelShowTitle>
              <Line
                style={{
                  backgroundColor: "#A5A5A5"
                }}
              />
              <DivBorder>
                <TextShowTitle>{activeClausule.text}</TextShowTitle>
              </DivBorder>
              <SaveButton
                onClick={() => {
                  setActiveModal("editClausules");
                }}
              >
                <SaveButtonLabel>Editar</SaveButtonLabel>
              </SaveButton>
            </ModalContainer>
          </ModalShowClausule>
        )}

        {activeModal === "editClausules" && (
          <ModalShowClausule>
            <ModalContainer>
              <InputText
                placeholder="Digite sua cláusula."
                defaultValue={activeClausule.title}
              />

              <Line
                style={{
                  backgroundColor: "#A5A5A5"
                }}
              />
              <DivBorder>
                <InputTextArea
                  placeholder="Digite sua cláusula."
                  defaultValue={activeClausule.text}
                />
              </DivBorder>
              <SaveButton>
                <SaveButtonLabel>Salvar edição</SaveButtonLabel>
              </SaveButton>
            </ModalContainer>
          </ModalShowClausule>
        )}
      </Modal> */}
    </Container>
  );
};

export default MyClausules;
