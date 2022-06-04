import React, { useCallback, useEffect, useState } from "react";

import {
  UpdatesLabel,
  GridContainerTemplates,
  Container,
  Header
} from "./styles";
import Template from "../components/Template";
import api from "../../../services/api";
import { AllMyProjects } from "../../../dtos/AllMyProjects";
import { useNavigate } from "react-router-dom";

const MyProjects: React.FC = () => {
  const [templateIDSelectedPopUp, setTemplateIDSelectedPopUp] =
    useState<string>("");

  const navigator = useNavigate();

  const [allMyProjects, setAllMyProjects] = useState<AllMyProjects[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const fetchAllMyTemplates = await api.get("user-templates");

        setAllMyProjects(fetchAllMyTemplates.data as AllMyProjects[]);
      } catch (error) {
        console.log("ERROR GETTING TEMPLATES " + error);
      }
      api.get("user-templates");
    })();
  }, []);

  // Closing popUp
  useEffect(() => {
    window.addEventListener("click", (event: any) => {
      let aboutElement = event.target.getAttribute("about");

      if (aboutElement !== "button-popup") setTemplateIDSelectedPopUp("");
    });
  }, []);

  const handleChooseTemplate = (myProject: AllMyProjects) => {
    //currentTemplateInfo.current = myProject;
    navigator(`editor/my-template/${myProject.id}`);
  };

  const handleDeleteDocument = async (document_id: string) => {
    try {
      if (window.confirm("Tem certeza que deseja excluir este documento ?")) {
        await api.delete(`user-templates/${document_id}`);

        setAllMyProjects(prevState => {
          let newArray = prevState.filter(document => {
            return document.id !== document_id;
          });

          return newArray;
        });
      } else {
      }
    } catch (error) {
      console.log("error trying to delete document", error);
    }
  };

  const handleChangeDocumentName = useCallback(
    (userDocument: AllMyProjects, newDocumentName: string) => {
      try {
        api.put("user-templates", {
          user_template_id: userDocument.id,
          template: {
            ...userDocument.template
          },
          title: newDocumentName,
          description: userDocument.description
        });
      } catch (error: any) {
        console.log(
          "Error trying to update document's name",
          error.response.data
        );
      }
    },
    []
  );

  return (
    <Container>
      <Header>
        <UpdatesLabel>Meus Projetos</UpdatesLabel>
      </Header>

      <GridContainerTemplates>
        {allMyProjects.map((item, index) => {
          let defaultIMG = false;
          let splitURL = item.thumbnail_url.split("/");

          if (splitURL[splitURL.length - 1] === "default") defaultIMG = true;

          return (
            <Template
              key={String(Math.random())}
              userDocument={item}
              handleChangeDocumentName={handleChangeDocumentName}
              index={1}
              handleChooseTemplate={() => {
                handleChooseTemplate(item);
              }}
              handleDelete={() => {
                handleDeleteDocument(item.id);
              }}
              handleDownload={() => {}}
              handleChangeProjectsName={() => {}}
              handleMakeCopy={() => {}}
              templateIDSelectedPopUp={templateIDSelectedPopUp}
              setTemplateIDSelectedPopUp={setTemplateIDSelectedPopUp}
              name={item.title}
              url={
                defaultIMG
                  ? "https://picnic.com.br/wp-content/uploads/2017/12/pagina-em-branco-catalogo-1.jpg"
                  : item.thumbnail_url
              }
            />
          );
        })}
        {/* <Template
          index={1}
          setComponentTarget={setComponentTarget}
          mouseTarget={targetClick}
          handleDelete={() => {}}
          handleDownload={() => {}}
          handleChangeProjectsName={() => {}}
          handleMakeCopy={() => {}}
          name="Página em branco"
          url="https://i.ibb.co/PDg8K0n/blank-page.png"
        />
        <Template
          index={1}
          setComponentTarget={setComponentTarget}
          mouseTarget={targetClick}
          handleDelete={() => {}}
          handleDownload={() => {}}
          handleChangeProjectsName={() => {}}
          handleMakeCopy={() => {}}
          name="Página em branco"
          url="https://i.ibb.co/PDg8K0n/blank-page.png"
        />
        <Template
          index={1}
          setComponentTarget={setComponentTarget}
          mouseTarget={targetClick}
          handleDelete={() => {}}
          handleDownload={() => {}}
          handleChangeProjectsName={() => {}}
          handleMakeCopy={() => {}}
          name="Página em branco"
          url="https://i.ibb.co/PDg8K0n/blank-page.png"
        />
        <Template
          index={1}
          setComponentTarget={setComponentTarget}
          mouseTarget={targetClick}
          handleDelete={() => {}}
          handleDownload={() => {}}
          handleChangeProjectsName={() => {}}
          handleMakeCopy={() => {}}
          name="Página em branco"
          url="https://i.ibb.co/PDg8K0n/blank-page.png"
        />
        <Template
          index={1}
          setComponentTarget={setComponentTarget}
          mouseTarget={targetClick}
          handleDelete={() => {}}
          handleDownload={() => {}}
          handleChangeProjectsName={() => {}}
          handleMakeCopy={() => {}}
          name="Página em branco"
          url="https://i.ibb.co/PDg8K0n/blank-page.png"
        />
        <Template
          index={1}
          setComponentTarget={setComponentTarget}
          mouseTarget={targetClick}
          handleDelete={() => {}}
          handleDownload={() => {}}
          handleChangeProjectsName={() => {}}
          handleMakeCopy={() => {}}
          name="Página em branco"
          url="https://i.ibb.co/PDg8K0n/blank-page.png"
        /> */}

        {/* <Template
          mouseTarget={targetClick}
          handleDelete={() => {}}
          handleDownload={() => {}}
          handleChangeProjectsName={() => {}}
          handleMakeCopy={() => {}}
          name="Nome do projeto"
          url="https://i.ibb.co/9sVqjTp/contrato-locacao.png"
        />
        <Template
          mouseTarget={targetClick}
          handleDelete={() => {}}
          handleDownload={() => {}}
          handleChangeProjectsName={() => {}}
          handleMakeCopy={() => {}}
          name="Nome do projeto"
          url="https://i.ibb.co/BzYs4Jh/contrato-de-trabalho.png"
        />
        <Template
          mouseTarget={targetClick}
          handleDelete={() => {}}
          handleDownload={() => {}}
          handleChangeProjectsName={() => {}}
          handleMakeCopy={() => {}}
          name="Nome do projeto"
          url="https://i.ibb.co/bd75N7g/procuracao.png"
        />
        <Template
          mouseTarget={targetClick}
          handleDelete={() => {}}
          handleDownload={() => {}}
          handleChangeProjectsName={() => {}}
          handleMakeCopy={() => {}}
          name="Nome do projeto"
          url="https://i.ibb.co/BzYs4Jh/contrato-de-trabalho.png"
        />
        <Template
          mouseTarget={targetClick}
          handleDelete={() => {}}
          handleDownload={() => {}}
          handleChangeProjectsName={() => {}}
          handleMakeCopy={() => {}}
          name="Nome do projeto"
          url="https://i.ibb.co/NKp4XDt/contrato-de-servico.png"
        /> */}
      </GridContainerTemplates>
    </Container>
  );
};

export default MyProjects;
