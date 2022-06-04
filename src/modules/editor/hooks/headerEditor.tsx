import React, { createContext, useCallback, useContext } from "react";
import { useMainHook } from "../../../hooks/main";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import { toast } from "react-toastify";
import Konva from "konva";
import api from "../../../services/api";
import { useSelection } from "./selection";
interface HeaderEditorContextData {
  handleSaveNewVersion: () => void;
  handleSaveTemplate: () => void;
  handleGoHomePage: () => void;
  handleUndo: () => void;
  handleRedo: () => void;
  generatePDF: () => void;
  handleCreateNewProject: () => void;
}

const HeaderEditorContext = createContext<HeaderEditorContextData>(
  {} as HeaderEditorContextData
);

const HeaderEditorProvider: React.FC = ({ children }) => {
  const { objectScreen, currentTemplateInfo } = useMainHook();
  const { stageRef, clearStages, history, setHistory, documentName } =
    useMainHook();

  const { selectedObject } = useSelection();

  const navigator = useNavigate();

  const handleSaveNewVersion = useCallback(() => {}, [objectScreen]);

  const handleCreateNewProject = useCallback(async () => {
    const newProject = {
      template: {
        arrayOfPages: [{ pageNumber: 1, renderObjects: [] }]
      },
      title: "Novo documento",
      description: "Novo documento"
    };

    try {
      const request = await api.post("user-templates", newProject);
      const idNewProject = request.data.id;
      window.open(`/editor/my-template/${idNewProject}`, "_blank");
    } catch (err) {
      console.log(err, "deu erro!");
    }
  }, [objectScreen]);

  const handleSaveTemplate = useCallback(async () => {
    let stages = stageRef.current as Konva.Stage[];
    let formatedObjectToApi: any = [];

    const dataURL = stages[0].toDataURL();

    const blob = await (await fetch(dataURL)).blob();
    const file = new File([blob], "fileName.png", { type: "image/png" });

    let formData = new FormData();
    formData.append("thumbnail", file);

    try {
      const fetchUploadPicture = await api.patch(
        `user-templates/thumbnail-upload/${currentTemplateInfo.current.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    } catch (error) {
      console.log("error uploading thumbnail", error.response.data);
    }

    stages.forEach((stage, index) => {
      let pageNumber = stage.attrs.id;

      let renderObjects = [];

      //layer     //objects
      stage.children[0].children.forEach((object, indexObject) => {
        let objectWithExtractedImagePropertie = null;

        if (object?.attrs?.image) {
          let { image, ...rest } = object.attrs;

          objectWithExtractedImagePropertie = rest;
        }

        renderObjects.push(
          objectWithExtractedImagePropertie
            ? objectWithExtractedImagePropertie
            : object.attrs
        );
      });

      formatedObjectToApi.push({
        pageNumber,
        renderObjects
      });
    });

    try {
      api.put("/user-templates", {
        user_template_id: currentTemplateInfo.current.id,
        template: {
          arrayOfPages: formatedObjectToApi
        },
        title: documentName.current
          ? documentName.current
          : "Documento sem nome"
      });

      toast.success("Template salvo com sucesso!");
    } catch (error) {
      console.log("Error trying to save user template " + error);
    }
  }, [
    objectScreen,
    stageRef,
    currentTemplateInfo,
    selectedObject,
    documentName
  ]);

  const generatePDF = useCallback(async () => {
    let myDoc = new jsPDF("p", "px");
    stageRef.current.forEach((page, index) => {
      const data_url = page.toDataURL({
        orientation: "p",
        unit: "mm",
        format: "a4",
        putOnlyUsedFonts: true,
        compress: false,
        pixelRatio: 3
      });
      let width = myDoc.internal.pageSize.getWidth();
      let height = myDoc.internal.pageSize.getHeight();
      let top_left_margin = 0;
      let PDF_Width = width + top_left_margin * 2;
      let PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
      if (index > 0) {
        myDoc.addPage();
        myDoc.addImage(data_url, "PNG", 0, 0, width, height);
      } else {
        myDoc.addImage(data_url, "PNG", 0, 0, width, height);
      }
    });
    myDoc.save("stage.pdf");
  }, [stageRef]);

  const handleGoHomePage = useCallback(() => {
    clearStages();
    navigator("/");
  }, []);

  const handleUndo = useCallback(() => {
    if (history.currentStep === 0) return;
    const lastAction = {
      lastStepNumber: history.currentStep - 1,
      attrs: history.step[history.currentStep - 1].attrs
    };
    stageRef.current[0].children[0].children.forEach(
      (item: Konva.Shape, index: number) => {
        if (item.attrs.id === lastAction.attrs.id) {
          item.setAttrs({ ...lastAction.attrs });
        }
      }
    );
    setHistory(prevState => {
      return {
        ...prevState,
        currentStep: lastAction.lastStepNumber
      };
    });
  }, [history, stageRef]);

  const handleRedo = useCallback(() => {
    if (history.currentStep === history.step.length - 1) {
      return;
    }

    const lastAction = {
      lastStepNumber: history.currentStep + 1,
      attrs: history.step[history.currentStep + 1].attrs
    };
    stageRef.current[0].children[0].children.forEach(
      (item: Konva.Shape, index: number) => {
        if (item.attrs.id === lastAction.attrs.id) {
          item.setAttrs({ ...lastAction.attrs });
        }
      }
    );
    setHistory(prevState => {
      return {
        ...prevState,
        currentStep: lastAction.lastStepNumber
      };
    });
  }, [history, stageRef]);

  return (
    <HeaderEditorContext.Provider
      value={{
        handleSaveNewVersion,
        handleSaveTemplate,
        handleGoHomePage,
        generatePDF,
        handleUndo,
        handleRedo,
        handleCreateNewProject
      }}
    >
      {children}
    </HeaderEditorContext.Provider>
  );
};

// creating hook

function useHeaderEditor(): HeaderEditorContextData {
  const context = useContext(HeaderEditorContext);

  if (!context) {
    throw new Error("useAuth must be used with an HeaderEditorProvider");
  }

  return context;
}

export { HeaderEditorProvider, useHeaderEditor };
