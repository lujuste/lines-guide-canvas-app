import React from "react";
import PersonalizedIcon from "../../../../../../shared/assets/customIcons/PersonalizedIcon";
import ButtonIcons from "../../../../../../shared/components/ButtonIcons";
import { usePagesEditor } from "../../../../hooks/pagesEditor";
import Tooltip from "../../../Tooltip";

// import { Container } from './styles';

interface RemovePageEditorProps {
  index: number;
  item: any;
}

const RemovePageEditor: React.FC<RemovePageEditorProps> = ({ index, item }) => {
  const {
    handleRemovePage,
    isActiveHoverIconRemovePage,
    handleHoverIconRemovePage
  } = usePagesEditor();

  return (
    <ButtonIcons
      onClick={() => handleRemovePage(item.pageNumber)}
      onMouseEnter={() => handleHoverIconRemovePage(index, true)}
      onMouseLeave={() => handleHoverIconRemovePage(index, false)}
      style={{ position: "relative" }}
    >
      <Tooltip text="Remover página" position="bottom">
        <PersonalizedIcon
          isActive={
            isActiveHoverIconRemovePage.visible &&
            isActiveHoverIconRemovePage.index === index
          }
          viewBox="0 0 30 30"
          activeColor="#663399"
          inactivatedColor="#a5a5a5"
          width={30}
          height={30}
          className="arrow-add-page-icon"
          dPath="M11.5 3.75V5H5.25V7.5H6.5V23.75C6.5 24.413 6.76339 25.0489 7.23223 25.5178C7.70107 25.9866 8.33696 26.25 9 26.25H21.5C22.163 26.25 22.7989 25.9866 23.2678 25.5178C23.7366 25.0489 24 24.413 24 23.75V7.5H25.25V5H19V3.75H11.5ZM9 7.5H21.5V23.75H9V7.5ZM11.5 10V21.25H14V10H11.5ZM16.5 10V21.25H19V10H16.5Z"
        />
      </Tooltip>
    </ButtonIcons>
  );
};

export default RemovePageEditor;

