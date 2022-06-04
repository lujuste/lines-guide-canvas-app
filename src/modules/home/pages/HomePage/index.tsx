import { useNavigate } from "react-router-dom";

import {
  Aside,
  AsideFooter,
  AsideGap,
  AsideMain,
  AsideTop,
  Barner,
  CentralBoxHeader,
  CentralBoxMain,
  Container,
  Header,
  Main,
  TopLine,
  BarnerTitle,
  LegalDesign,
  BarnerFooter,
  StartNowLabel,
  ContainerDocItem,
  GridContainerTemplates,
  UpdatesLabel
} from "./styles";
import { useAuth } from "../../../../hooks/auth";
import PersonalizedIcon from "../../../../shared/assets/customIcons/PersonalizedIcon";
import { useState } from "react";
import MountIcons from "../../../../shared/utils/MountIcons";
import PagesButton from "../../../../shared/components/PageButton";
import UxDocLogoComponent from "../../../../shared/components/UxDocLogo";
import { ComponentAvatar } from "../../../../shared/components/Avatar/styles";

const HomePage: React.FC = () => {
  //get user context

  const { signOut } = useAuth();
  const navigate: any = useNavigate();

  const [activeButton, setActiveButton] = useState("");

  const moveToURL = (url: string) => {
    navigate(url);
  };

  return (
    <Container>
      <Header>
        <CentralBoxHeader>
          <ComponentAvatar />
          <TopLine />
        </CentralBoxHeader>
      </Header>
      <Aside>
        <AsideGap></AsideGap>
        <AsideTop>
          <UxDocLogoComponent />
        </AsideTop>
        <AsideMain>
          <PagesButton
            onClick={() => {
              moveToURL("/");
            }}
            onMouseEnter={() => {
              setActiveButton("Home");
            }}
            onMouseOut={() => {
              setActiveButton("");
            }}
            onMouseLeave={() => {}}
            isActive={activeButton === "Home" ? true : false}
            buttonLabel="Home"
            dPath={MountIcons.HomeIcon.dPath}
            iconWidth={33}
            iconHeight={33}
            classNameIcon="icon"
          />
          <PagesButton
            onClick={() => {
              moveToURL("/Editor");
            }}
            onMouseEnter={() => {
              setActiveButton("CreateNewProject");
            }}
            onMouseOut={() => {
              setActiveButton("");
            }}
            onMouseLeave={() => {}}
            isActive={activeButton === "CreateNewProject" ? true : false}
            buttonLabel="Criar novo projeto"
            dPath={MountIcons.NewProjectIcon.dPath}
            iconWidth={33}
            iconHeight={33}
            classNameIcon="icon"
          />
          <PagesButton
            onClick={() => {
              moveToURL("/MyProjects");
            }}
            onMouseEnter={() => {
              setActiveButton("MyProjects");
            }}
            onMouseOut={() => {
              setActiveButton("");
            }}
            onMouseLeave={() => {}}
            isActive={activeButton === "MyProjects" ? true : false}
            buttonLabel="Meus projetos"
            dPath={MountIcons.MyProjectsIcon.dPath}
            iconWidth={33}
            iconHeight={33}
            classNameIcon="icon"
          />
          <PagesButton
            onClick={() => {
              moveToURL("/MyClausules");
            }}
            onMouseEnter={() => {
              setActiveButton("MyClausules");
            }}
            onMouseOut={() => {
              setActiveButton("");
            }}
            onMouseLeave={() => {}}
            isActive={activeButton === "MyClausules" ? true : false}
            buttonLabel="Minhas cláusulas"
            dPath={MountIcons.HomeIcon.dPath}
            iconWidth={33}
            iconHeight={33}
            classNameIcon="icon"
          />
        </AsideMain>
        <AsideFooter>
          <PagesButton
            onClick={() => {
              moveToURL("/Feedback");
            }}
            onMouseEnter={() => {
              setActiveButton("Feedback");
            }}
            onMouseOut={() => {
              setActiveButton("");
            }}
            onMouseLeave={() => {}}
            isActive={activeButton === "Feedback" ? true : false}
            buttonLabel="Feedback"
            dPath={MountIcons.InfoIcon.dPath}
            iconWidth={33}
            iconHeight={33}
            classNameIcon="icon"
          />
          <PagesButton
            onClick={() => {
              signOut();
            }}
            onMouseEnter={() => {
              setActiveButton("Logout");
            }}
            onMouseOut={() => {
              setActiveButton("");
            }}
            onMouseLeave={() => {}}
            isActive={activeButton === "Logout" ? true : false}
            buttonLabel="Sair"
            dPath={MountIcons.ExitIcon.dPath}
            iconWidth={33}
            iconHeight={33}
            classNameIcon="icon"
          />
        </AsideFooter>
      </Aside>
      <Main>
        <CentralBoxMain>
          <Barner>
            <BarnerTitle>Crie você mesmo o seu documento em</BarnerTitle>
            <LegalDesign>LEGAL DESIGN!!!!</LegalDesign>
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

              <StartNowLabel> Comece agora</StartNowLabel>
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
          <UpdatesLabel>Novidades</UpdatesLabel>
          <GridContainerTemplates>
            {/* <Template url="https://i.ibb.co/N63zcW0/prestacao-contrato-servicos.png" />
            <Template url="https://i.ibb.co/p05WJdD/contracto-de-credito.png" />
            <Template url="https://i.ibb.co/NngLzxh/credito.png" />
            <Template url="https://i.ibb.co/Vj06MQq/codigo-de-etica.png " />
            <Template url="https://i.ibb.co/zXrvG0s/termo-parceria.png" />
            <Template url="https://i.ibb.co/p05WJdD/contracto-de-credito.png" /> */}
          </GridContainerTemplates>
        </CentralBoxMain>
      </Main>
    </Container>
  );
};

export default HomePage;
