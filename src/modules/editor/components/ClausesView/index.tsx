import React from "react";
import { useModalContext } from "../../../../contexts/ModalContext";
import ButtonIcons from "../../../../shared/components/ButtonIcons";
import EditClausesIcon from "../../assets/icons/EditClausesIcon";
import RemoveClausesIcon from "../../assets/icons/RemoveClausesIcon";
import StarClausesIcon from "../../assets/icons/StarClausesIcon";
import { useAsidebarEditor } from "../../hooks/asidebarEditor";
import ButtonPrimary from "../ButtonPrimary";
import List from "../List";
import ListItem from "../ListItem";
import { SearchInput } from "../SearchInput";
import CheckButtonClauses from "../Sidebar/components/CheckButtonClauses";
import CheckClausesContainer from "../Sidebar/components/CheckClausesContainer";
import { ContainerSidebarNav } from "../Sidebar/components/ContainerSidebar/styles";
import { FlexBar, FlexSearch, TextContent, VStack, Text } from "./styles";

// import { Container } from './styles';

const bankOfClausesData = [
  { clause: "Banco de cláusulas" },
  { clause: "Banco de cláusulas" },
  { clause: "Banco de cláusulas" },
  { clause: "Banco de cláusulas" },
  { clause: "Banco de cláusulas" },
  { clause: "Banco de cláusulas" },
  { clause: "Banco de cláusulas" }
];

const clausesData = [
  { clause: "Nova cláusula criada" },
  { clause: "Nova cláusula criada" },
  { clause: "Nova cláusula criada" },
  { clause: "Nova cláusula criada" }
];

interface IClausesViewProps {
  isActive: boolean;
  handleActiveButton: () => void;
}

const ClausesView: React.FC<IClausesViewProps> = ({
  isActive,
  handleActiveButton
}) => {
  const {
    visibilityIconsOptionsClauses,
    setVisibilityIconsOptionsClauses,
    handleHoverClauses,
    exitHoverClauses
  } = useAsidebarEditor();

  const { handleOpenNewClausesModal } = useModalContext();

  return (
    <ContainerSidebarNav>
      <CheckClausesContainer>
        <CheckButtonClauses
          isActive={isActive}
          label="Minhas cláusulas"
          onClick={() => handleActiveButton()}
        />
        <CheckButtonClauses
          isActive={!isActive}
          label="Banco de cláusulas"
          onClick={() => handleActiveButton()}
        />
      </CheckClausesContainer>
      {isActive ? (
        // My Clauses
        <VStack height="100%">
          {/* <FlexSearch>
            <SearchInput label="Pesquisar" />
          </FlexSearch> */}

          {/* <List>
            {clausesData.map((item, index) => (
              <>
                <ListItem
                  key={index}
                  onMouseEnter={() => handleHoverClauses(true, index)}
                  onMouseLeave={() => exitHoverClauses(false, index)}
                >
                  {item.clause}

                  <FlexBar>
                    {visibilityIconsOptionsClauses.visible &&
                      visibilityIconsOptionsClauses.index === index && (
                        <>
                          <ButtonIcons width="30px">
                            <StarClausesIcon />
                          </ButtonIcons>
                          <ButtonIcons margin="0 0 0 10px" width="30px">
                            <EditClausesIcon />
                          </ButtonIcons>
                          <ButtonIcons margin="0 0 0 10px" width="30px">
                            <RemoveClausesIcon />
                          </ButtonIcons>
                        </>
                      )}
                  </FlexBar>
                </ListItem>
              </>
            ))}
          </List> */}
          {/* <ButtonPrimary onClick={handleOpenNewClausesModal}>
            Cadastrar nova cláusula
          </ButtonPrimary> */}
          <TextContent>
            <Text>
              A funcionalidade <strong>Minhas Cláusulas</strong>, que é uma
              ferramenta de cadastro personalizado e automatização das cláusulas
              dentro do seu documento, ainda não está disponível nesta versão
              beta. Ela estará pronta para uso em breve.
            </Text>
          </TextContent>
        </VStack>
      ) : (
        // Bank of Clauses
        <VStack height="100%">
          {/* <FlexSearch>
            <SearchInput label="Pesquisar" />
          </FlexSearch>
          <List>
            {bankOfClausesData.map(item => (
              <ListItem> {item.clause} </ListItem>
            ))}
          </List> */}
          <TextContent>
            <Text>
              A funcionalidade <strong>Banco de Cláusulas</strong>, que são
              cláusulas previamente cadastradas no editor e que não podem ser
              personalizadas, ainda não está disponível nesta versão beta. Ela
              estará pronta para uso em breve.
            </Text>
          </TextContent>
        </VStack>
      )}
    </ContainerSidebarNav>
  );
};

export default ClausesView;

