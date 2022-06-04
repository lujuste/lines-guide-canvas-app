import React from "react";
import PersonalizedIcon from "../../../../../../shared/assets/customIcons/PersonalizedIcon";
import ButtonIcons from "../../../../../../shared/components/ButtonIcons";
import { usePagesEditor } from "../../../../hooks/pagesEditor";
import Tooltip from "../../../Tooltip";

interface AddPageEditorProps {
  item?: any;
  index: number;
}

export default function AddPageEditor({ item, index }: AddPageEditorProps) {
  const {
    handleRemovePage,
    handleDuplicatePage,
    isActiveNewPage,
    handleAddNewPage,
    handleHoverIcon,
    handleHoverIconDuplicatePage,
    isActiveDuplicatePage,
    isActiveHoverIconRemovePage,
    handleHoverIconRemovePage,
    isVisibleAddPage
  } = usePagesEditor();

  return (
    <ButtonIcons
      onMouseEnter={() => handleHoverIcon(index, true)}
      onMouseLeave={() => handleHoverIcon(index, false)}
      onClick={() => handleAddNewPage(item.pageNumber)}
      style={{ position: "relative" }}
    >
      <Tooltip text="Adicionar página" position="bottom">
        <PersonalizedIcon
          isActive={isActiveNewPage.visible && isActiveNewPage.index === index}
          viewBox="0 0 30 30"
          activeColor="#663399"
          inactivatedColor="#a5a5a5"
          className="arrow-add-page-icon"
          width={30}
          height={30}
          dPath="M16 13.5H19.75V16H16V19.75H13.5V16H9.75V13.5H13.5V9.75H16V13.5ZM27.25 6.625V19.75L19.75 27.25H6.625C4.25 27.25 2.25 25.25 2.25 22.875V6.625C2.25 4.25 4.25 2.25 6.625 2.25H22.875C25.25 2.25 27.25 4.25 27.25 6.625ZM24.75 7C24.75 5.75 23.75 4.75 22.5 4.75H7C5.75 4.75 4.75 5.75 4.75 7V22.625C4.75 23.875 5.75 24.875 7 24.875H18.5V23C18.5 20.625 20.5 18.625 22.875 18.625H24.75V7Z"
        />
      </Tooltip>
    </ButtonIcons>
  );
}

