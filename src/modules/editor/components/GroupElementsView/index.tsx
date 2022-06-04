import React from "react";
import { TextContent, Text } from "../ClausesView/styles";
import { SearchInput } from "../SearchInput";
import CardElements from "../Sidebar/components/CardElements";
import { ContainerSidebarNav } from "../Sidebar/components/ContainerSidebar/styles";
import GridElements from "../Sidebar/components/GridElements";
import GridItemElements from "../Sidebar/components/GridItemElements";
import { FlexSearch } from "./styles";

// import { Container } from './styles';

const elementsData = [
  { element: "newElement" },
  { element: "newElement" },
  { element: "newElement" },
  { element: "newElement" },
  { element: "newElement" }
];

const GroupElements: React.FC = () => {
  return (
    <ContainerSidebarNav>
      <TextContent>
        <Text>
          Os <strong>Blocos de Elementos</strong> são grupos de componentes que
          podem ser colocados num documento, como figuras, caixas de texto,
          distribuição de títulos ou blocos agrupados personalizáveis, por
          exemplo. No entanto, essa funcionalidade ainda não está disponível
          nesta versão beta e estará pronta para uso em breve.
        </Text>
      </TextContent>
      {/* <FlexSearch style={{ margin: "0 0 1rem 0" }}>
        <SearchInput label="Pesquisar" />
      </FlexSearch>
      <GridElements columns={2}>
        {elementsData.map(element => (
          <GridItemElements>
            <CardElements />
          </GridItemElements>
        ))}
      </GridElements> */}
    </ContainerSidebarNav>
  );
};

export default GroupElements;

