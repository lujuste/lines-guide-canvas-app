import React from "react";
import { TextContent, Text } from "../ClausesView/styles";
import { ContainerSidebarNav } from "./styles";

// import { Container } from './styles';

const VersioningProject: React.FC = () => {
  return (
    <ContainerSidebarNav>
      {/* <VStack margin={"1rem 0 0 0"}>
      <ButtonPrimary>Criar nova versão</ButtonPrimary>
    </VStack>
    <VStack>
      <CompareVersionBox />
    </VStack> */}

      <TextContent>
        <Text>
          A opção de <strong>Versionamento ou Controle de Versão</strong> serve
          para visualizar o histórico de edições do documento e recuperar
          versões anteriores se necessário. No entanto, essa funcionalidade
          ainda não está ativa nesta versão beta. Ela será lançada em breve.
        </Text>
      </TextContent>
    </ContainerSidebarNav>
  );
};

export default VersioningProject;

