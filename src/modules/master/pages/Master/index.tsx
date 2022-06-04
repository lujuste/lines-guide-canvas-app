import { useNavigate } from "react-router-dom";

import {
  Aside,
  AsideFooter,
  AsideGap,
  AsideMain,
  AsideTop,
  CentralBoxHeader,
  CentralBoxMain,
  Container,
  Header,
  Main,
  TopLine
} from "./styles";
import { useAuth } from "../../../../hooks/auth";
import { useState } from "react";
import MountIcons from "../../../../shared/utils/MountIcons";
import PagesButton from "../../../../shared/components/PageButton";
import UxDocLogoComponent from "../../../../shared/components/UxDocLogo";
import { ComponentAvatar } from "../../../../shared/components/Avatar/styles";
import ScreenHome from "../../../home/ScreenHome";
import ScreenCreateNewProject from "../../../createproject/screen";
import MyProjects from "../../../myprojects/screen";
import MyClausules from "../../../myclausules/screen";

const Master: React.FC = () => {
  const { signOut } = useAuth();
  const navigate: any = useNavigate();
  const [screen, setScreen] = useState<
    "Home" | "CreateNewProject" | "MyProjects" | "MyClausules"
  >("Home");
  const [activeButton, setActiveButton] = useState("");

  const moveToURL = (url: string) => {
    navigate(url);
  };

  return (
    <Container>
      <Header>
        <CentralBoxHeader>
          {/* <ComponentAvatar /> */}
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
              setScreen("Home");
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
              setScreen("CreateNewProject");
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
              setScreen("MyProjects");
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
              setScreen("MyClausules");
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
          {/* <PagesButton
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
          /> */}
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
        {/*INTIAL MAIN CONTENT */}
        <CentralBoxMain>
          {screen === "Home" && <ScreenHome />}
          {screen === "CreateNewProject" && <ScreenCreateNewProject />}
          {screen === "MyProjects" && <MyProjects />}
          {screen === "MyClausules" && <MyClausules />}
        </CentralBoxMain>
        {/*END MAIN CONTENT*/}
      </Main>
    </Container>
  );
};

export default Master;
