import React from "react";
import PersonalizedIcon from "../../../../../../shared/assets/customIcons/PersonalizedIcon";
import ButtonIcons from "../../../../../../shared/components/ButtonIcons";
import { usePagesEditor } from "../../../../hooks/pagesEditor";
import Tooltip from "../../../Tooltip";

// import { Container } from './styles';

interface DuplicatePageEditorProps {
  item: any;
  index: number;
}

const DuplicatePageEditor: React.FC<DuplicatePageEditorProps> = ({
  item,
  index
}) => {
  const {
    handleDuplicatePage,
    handleHoverIconDuplicatePage,
    isActiveDuplicatePage
  } = usePagesEditor();

  return (
    <ButtonIcons
      onMouseEnter={() => handleHoverIconDuplicatePage(index, true)}
      onMouseLeave={() => handleHoverIconDuplicatePage(index, false)}
      onClick={() => handleDuplicatePage(Number(item.pageNumber), index)}
      style={{ position: "relative" }}
    >
      <Tooltip text="Duplicar página" position="bottom">
        <PersonalizedIcon
          isActive={
            isActiveDuplicatePage.visible &&
            isActiveDuplicatePage.index === index
          }
          viewBox="0 0 30 30"
          activeColor="#663399"
          inactivatedColor="#a5a5a5"
          className="arrow-add-page-icon"
          width={30}
          height={30}
          dPath="M22.25 13.5H18.5V17.25H16V13.5H12.25V11H16V7.25H18.5V11H22.25V13.5ZM24.75 4.75V19.75H9.75V4.75H24.75ZM24.75 2.25H9.75C8.375 2.25 7.25 3.375 7.25 4.75V19.75C7.25 20.413 7.51339 21.0489 7.98223 21.5178C8.45107 21.9866 9.08696 22.25 9.75 22.25H24.75C26.1375 22.25 27.25 21.1375 27.25 19.75V4.75C27.25 4.08696 26.9866 3.45107 26.5178 2.98223C26.0489 2.51339 25.413 2.25 24.75 2.25ZM4.75 7.25H2.25V24.75C2.25 25.413 2.51339 26.0489 2.98223 26.5178C3.45107 26.9866 4.08696 27.25 4.75 27.25H22.25V24.75H4.75V7.25Z"
        />
      </Tooltip>
    </ButtonIcons>
  );
};

export default DuplicatePageEditor;

