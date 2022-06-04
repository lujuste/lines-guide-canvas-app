import React, { useCallback, useState } from "react";
import IconHome from "../../../shared/assets/icon-home.svg";
import IconAdd from "../../../shared/assets/icon-add.svg";
import IconDocuments from "../../../shared/assets/icon-documents.svg";
import IconProject from "../../../shared/assets/icon-project.svg";
import { useNavigate } from "react-router-dom";

import { Button, Container } from "./styles";
import HomeIcon from "../../assets/customIcons/HomeIcon";
import AddIcon from "../../assets/customIcons/AddIcon";
import PersonalizedIcon from "../../assets/customIcons/PersonalizedIcon";
import MountIcons from "../../utils/MountIcons";

const AsideComponent: React.FC = () => {
  const [activeButton, setActiveButton] = useState("");
  const navigate = useNavigate();

  const moveToURL = (url: string) => {
    navigate(url);
  };

  const handleActiveButton = useCallback((buttonName: string) => {
    setActiveButton(buttonName);
  }, []);

  return (
    <Container>
      <ul>
        <li>
          <Button
            onMouseOver={() => {
              handleActiveButton("Home");
            }}
            onMouseOut={() => {
              setActiveButton("");
            }}
            onClick={() => {
              moveToURL("/");
            }}
          >
            <PersonalizedIcon
              className="icons"
              isActive={activeButton === "Home" ? true : false}
              width={33}
              height={33}
              dPath={MountIcons.HomeIcon.dPath}
            />
            <label>Ínicio</label>
          </Button>
        </li>
        <li>
          <Button
            onMouseOver={() => {
              handleActiveButton("NewProject");
            }}
            onMouseOut={() => {
              setActiveButton("");
            }}
            onClick={() => {
              moveToURL("/Editor");
            }}
          >
            <PersonalizedIcon
              className="icons"
              isActive={activeButton === "NewProject" ? true : false}
              width={33}
              height={33}
              dPath={MountIcons.NewProjectIcon.dPath}
            />
            <label>Criar novo projeto</label>
          </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              moveToURL("/");
            }}
            onMouseOver={() => {
              handleActiveButton("MyProjects");
            }}
            onMouseOut={() => {
              setActiveButton("");
            }}
          >
            <PersonalizedIcon
              className="icons"
              isActive={activeButton === "MyProjects" ? true : false}
              width={33}
              height={33}
              dPath={MountIcons.MyProjectsIcon.dPath}
            />
            <label>Meus projetos</label>
          </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              moveToURL("/");
            }}
            onMouseOver={() => {
              handleActiveButton("MyClauses");
            }}
            onMouseOut={() => {
              setActiveButton("");
            }}
          >
            <PersonalizedIcon
              className="icons"
              isActive={activeButton === "MyClauses" ? true : false}
              width={33}
              height={33}
              dPath={MountIcons.MyClausesIcon.dPath}
            />
            <label>Minhas cláusulas</label>
          </Button>
        </li>
      </ul>
    </Container>
  );
};

export default AsideComponent;
