import {
  BottomSpace,
  Container,
  TemplateName,
  TemplateThumbnail
} from "./styles";
import React, { useRef } from "react";
import PopUp from "../PopUp";
import { AllMyProjects } from "../../../../dtos/AllMyProjects";

interface Props {
  userDocument: AllMyProjects;
  name: string;
  url: string;
  width?: string;
  height?: string;
  handleMakeCopy: () => void;
  handleChangeProjectsName: () => void;
  handleDownload: () => void;
  handleDelete: () => void;
  handleChooseTemplate: () => void;
  setTemplateIDSelectedPopUp: any;
  handleChangeDocumentName: (
    document: AllMyProjects,
    newDocumentName: string
  ) => void;
  index: number;
  templateIDSelectedPopUp: string;
}

const Template: React.FC<Props> = ({
  url,
  width,
  height,
  name,
  userDocument,
  handleDelete,
  handleDownload,
  handleChangeProjectsName,
  handleMakeCopy,
  handleChooseTemplate,
  handleChangeDocumentName,
  templateIDSelectedPopUp,
  setTemplateIDSelectedPopUp,
  index
}) => {
  const inputTextRef = useRef<HTMLTextAreaElement>(null);

  return (
    <Container className="grid-item">
      <PopUp
        handleDelete={handleDelete}
        handleDownload={handleDownload}
        HandleChangeProjectsName={handleChangeProjectsName}
        HandleMakeCopy={handleMakeCopy}
        templateIDSelectedPopUp={templateIDSelectedPopUp}
        setTemplateIDSelectedPopUp={setTemplateIDSelectedPopUp}
        index={index}
        userDocument={userDocument}
      />

      <TemplateThumbnail
        src={url}
        alt=""
        className="img"
        onClick={event => {
          if (event.target === event.currentTarget) {
            handleChooseTemplate();
          }
        }}
      />

      <TemplateName
        defaultValue={name}
        ref={inputTextRef}
        onKeyPress={event => {
          if (event.key === "Enter") {
            inputTextRef.current.blur();
            handleChangeDocumentName(userDocument, inputTextRef.current.value);
          }
        }}
      />
      <BottomSpace></BottomSpace>
    </Container>
  );
};

export default Template;
