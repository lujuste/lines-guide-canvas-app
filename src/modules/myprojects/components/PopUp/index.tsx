import React, { useEffect, useRef, useState } from "react";
import { AllMyProjects } from "../../../../dtos/AllMyProjects";
import PersonalizedIcon from "../../../../shared/assets/customIcons/PersonalizedIcon";
import MountIcons from "../../../../shared/utils/MountIcons";

import {
  Container,
  ContainerPopUp,
  Dots,
  ItemPopUp,
  Label,
  ToggleButton
} from "./styles";

interface PropsPopUp {
  handleDelete: () => void;
  handleDownload: () => void;
  HandleChangeProjectsName: () => void;
  HandleMakeCopy: () => void;
  index: number;
  templateIDSelectedPopUp: string;
  userDocument: AllMyProjects;
  setTemplateIDSelectedPopUp: any;
}

const PopUp: React.FC<PropsPopUp> = ({
  HandleMakeCopy,
  HandleChangeProjectsName,
  handleDownload,
  handleDelete,
  templateIDSelectedPopUp,
  setTemplateIDSelectedPopUp,
  userDocument
}) => {
  const refToggleButton = useRef(null);

  const togglePopUp = () => {
    setTemplateIDSelectedPopUp(userDocument.id);
    //console.log(templateIDSelectedPopUp);
  };

  return (
    <>
      <Container>
        <ToggleButton
          onClick={togglePopUp}
          ref={refToggleButton}
          about="button-popup"
        >
          <Dots>...</Dots>
        </ToggleButton>
        {templateIDSelectedPopUp === userDocument.id && (
          <ContainerPopUp>
            {/* <ItemPopUp onClick={HandleMakeCopy}>
              <PersonalizedIcon
                dPath={MountIcons.Copy.dPath}
                viewBox={MountIcons.Copy.viewBox}
                width={19}
                height={22}
              />
              <Label>Fazer uma cópia</Label>
            </ItemPopUp> */}
            {/* <ItemPopUp onClick={HandleChangeProjectsName}>
              <PersonalizedIcon
                dPath={MountIcons.Pencil.dPath}
                viewBox={MountIcons.Pencil.viewBox}
                width={19}
                height={22}
              />
              <Label>Alterar nome do projeto</Label>
            </ItemPopUp> */}
            {/* <ItemPopUp onClick={handleDownload}>
              <PersonalizedIcon
                dPath={MountIcons.Download.dPath}
                viewBox={MountIcons.Download.viewBox}
                width={19}
                height={22}
              />
              <Label>Baixar</Label>
            </ItemPopUp> */}
            <ItemPopUp onClick={handleDelete}>
              <PersonalizedIcon
                dPath={MountIcons.Trash.dPath}
                viewBox={MountIcons.Trash.viewBox}
                width={28}
                height={30}
              />
              <Label>Excluir</Label>
            </ItemPopUp>
          </ContainerPopUp>
        )}
      </Container>
    </>
  );
};

export default PopUp;
