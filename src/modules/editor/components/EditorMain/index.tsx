import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useModalContext } from "../../../../contexts/ModalContext";
import { AllMyProjects } from "../../../../dtos/AllMyProjects";
import { useMainHook } from "../../../../hooks/main";
import api from "../../../../services/api";
import { usePagesEditor } from "../../hooks/pagesEditor";
import { useWorkspaceEditor } from "../../hooks/workspaceEditor";
import {
  CanvasContainer,
  FlexEditor,
  SpaceOfContainer
} from "../../screen/styles";
import { NewClausesModal } from "../NewClausesModal";
import { FlexRow, HorizontalStack } from "./styles";
import ButtonAddPageCanva from "../ButtonAddPageCanva";
import CanvasMain from "../Canvas/CanvasMain";
import SceneKonva from "../Canvas/SceneKonva";
import LoadingEditor from "../Canvas/LoadingEditor";
import TitleOfPage from "./components/TitleOfPage";
import ButtonsPagesControl from "./components/ButtonsPagesControl";

const EditorMain: React.FC = () => {
  const { isNewClausesModalOpen, handleCloseNewClausesModal } =
    useModalContext();

  const { loadingTemplate, setLoadingTemplate } = useWorkspaceEditor();
  const { scaleForZoom } = usePagesEditor();

  const { objectScreen, setObjectScreen, documentName, currentTemplateInfo } =
    useMainHook();

  const { handleAddNewPage, isVisibleAddPage } = usePagesEditor();

  const { templateid, typetemplate } = useParams();

  useEffect(() => {
    (async () => {
      if (typetemplate === "my-template") {
        try {
          const fetchMyTemplate = await api.get(`user-templates/${templateid}`);
          const { template } = fetchMyTemplate.data as AllMyProjects;
          currentTemplateInfo.current = fetchMyTemplate.data;
          documentName.current = fetchMyTemplate.data.title;
          setObjectScreen(template.arrayOfPages);
          setLoadingTemplate(false);
        } catch (error) {
          console.log("Error loading my templatess " + error);
        }
      }
    })();
  }, []);

  return (
    <FlexEditor zoomValue={scaleForZoom.scale}>
      <NewClausesModal
        isOpen={isNewClausesModalOpen}
        onRequestClose={handleCloseNewClausesModal}
      />

      <CanvasContainer>
        {loadingTemplate ? (
          <LoadingEditor />
        ) : (
          <>
            {objectScreen.map((item, index) => (
              <div key={index.toString()}>
                <HorizontalStack>
                  <TitleOfPage index={index} />
                  <FlexRow>
                    <ButtonsPagesControl item={item} index={index} />
                  </FlexRow>
                </HorizontalStack>
                <CanvasMain>
                  <SceneKonva item={item} index={index} />
                </CanvasMain>
              </div>
            ))}
          </>
        )}

        {isVisibleAddPage && !loadingTemplate ? (
          <ButtonAddPageCanva
            onClick={() => handleAddNewPage(1)}
            text="Adicionar Página"
          ></ButtonAddPageCanva>
        ) : (
          <SpaceOfContainer />
        )}
      </CanvasContainer>
    </FlexEditor>
  );
};

export default EditorMain;
