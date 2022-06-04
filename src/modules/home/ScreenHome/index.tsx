import React from "react";

import {
  Barner,
  BarnerTitle,
  LegalDesign,
  BarnerFooter,
  StartNowLabel,
  ContainerDocItem,
  UpdatesLabel,
  GridContainerTemplates,
  BoxUpdatesLabel,
  ButtonNewProject
} from "./styles";
import PersonalizedIcon from "../../../shared/assets/customIcons/PersonalizedIcon";
import MountIcons from "../../../shared/utils/MountIcons";
import Template from "../components/Template";
import { useHeaderEditor } from "../../editor/hooks/headerEditor";
import { TextContent, Text } from "../../myclausules/screen/styles";

const ScreenHome: React.FC = () => {
  const { handleCreateNewProject } = useHeaderEditor();

  return (
    <>
      <Barner>
        <BarnerTitle>Crie você mesmo o seu documento em</BarnerTitle>
        <LegalDesign>LEGAL DESIGN</LegalDesign>
        <BarnerFooter>
          <PersonalizedIcon
            className="create-project-main"
            isActive={true}
            activeColor="#FFF"
            width={34}
            height={34}
            viewBox="0 0 34 34"
            dPath={MountIcons.NewProjectIcon.dPath}
          />
          <ButtonNewProject onClick={() => handleCreateNewProject()}>
            <StartNowLabel> Comece agora </StartNowLabel>
          </ButtonNewProject>
          <ContainerDocItem>
            <PersonalizedIcon
              isActive={true}
              activeColor="#FFF"
              width={34}
              height={34}
              viewBox="0 0 35 39"
              dPath={MountIcons.UxDoc.dPath}
            />
          </ContainerDocItem>
        </BarnerFooter>
      </Barner>
      {/* <BoxUpdatesLabel>
        <UpdatesLabel>Novidades</UpdatesLabel>
      </BoxUpdatesLabel> */}
      <GridContainerTemplates>
        <TextContent>
          <Text>
            Sejam bem-vindos à versão beta da plataforma de Legal Design da Bits
            Academy. Aqui, você conseguirá criar documentos jurídicos a partir
            de templates pré-definidos e personalizáveis.
          </Text>
        </TextContent>
        {/* <Template
          name="Nome do projeto"
          url="https://i.ibb.co/N63zcW0/prestacao-contrato-servicos.png"
        />
        <Template
          name="Nome do projeto"
          url="https://i.ibb.co/p05WJdD/contracto-de-credito.png"
        />
        <Template
          name="Nome do projeto"
          url="https://i.ibb.co/NngLzxh/credito.png"
        />
        <Template
          name="Nome do projeto"
          url="https://i.ibb.co/Vj06MQq/codigo-de-etica.png "
        />
        <Template
          name="Nome do projeto"
          url="https://i.ibb.co/zXrvG0s/termo-parceria.png"
        />
        <Template
          name="Nome do projeto"
          url="https://i.ibb.co/p05WJdD/contracto-de-credito.png"
        />
        <Template
          name="Nome do projeto"
          url="https://i.ibb.co/Vj06MQq/codigo-de-etica.png"
        />
        <Template
          name="Nome do projeto"
          url="https://i.ibb.co/zXrvG0s/termo-parceria.png"
        />
        <Template
          name="Nome do projeto"
          url="https://i.ibb.co/p05WJdD/contracto-de-credito.png"
        /> */}
      </GridContainerTemplates>
    </>
  );
};

export default ScreenHome;
