import React from "react";
import PersonalizedIcon from "../../../../../../shared/assets/customIcons/PersonalizedIcon";
import ButtonIcons from "../../../../../../shared/components/ButtonIcons";
import { usePagesEditor } from "../../../../hooks/pagesEditor";
import { useWorkspaceEditor } from "../../../../hooks/workspaceEditor";
import Tooltip from "../../../Tooltip";

// import { Container } from './styles';

interface MoveUpProps {
  index: number;
  item: any;
}

const MoveUpPage: React.FC<MoveUpProps> = ({ index, item }) => {
  const { isActiveUpPage, isActiveHoverMoveUpPage, handleHoverMoveUpPage } =
    useWorkspaceEditor();

  const { handleOrderPageMoveUp, disabledButton } = usePagesEditor();

  return (
    <>
      {disabledButton.visible && index === 0 ? (
        <ButtonIcons
          style={{
            position: "relative",
            cursor: "no-drop"
          }}
          disabled
          className="btn-toolbar"
        >
          <Tooltip text="disabilitado" position="bottom">
            <PersonalizedIcon
              isActive={isActiveUpPage}
              viewBox="0 0 20 13"
              activeColor="#DEDEDE"
              inactivatedColor="#DEDEDE"
              className="blocked-icon"
              width={20}
              height={12.37}
              dPath="M2.35 12.7L10 5.04995L17.65 12.7L20 10.3333L10 0.333284L0 10.3333L2.35 12.7Z"
            />
          </Tooltip>
        </ButtonIcons>
      ) : (
        <ButtonIcons
          onMouseEnter={() => handleHoverMoveUpPage(index, true)}
          onMouseLeave={() => handleHoverMoveUpPage(index, false)}
          onClick={() => handleOrderPageMoveUp(item.pageNumber, index)}
          className="btn-toolbar"
          style={{ position: "relative" }}
        >
          <Tooltip text="Para cima" position="bottom">
            <PersonalizedIcon
              isActive={
                isActiveHoverMoveUpPage.visible &&
                isActiveHoverMoveUpPage.index === index
              }
              viewBox="0 0 20 13"
              activeColor="#663399"
              inactivatedColor="#a5a5a5"
              width={20}
              height={12.37}
              className="arrow-moveup-icon"
              dPath="M2.35 12.7L10 5.04995L17.65 12.7L20 10.3333L10 0.333284L0 10.3333L2.35 12.7Z"
            />
          </Tooltip>
        </ButtonIcons>
      )}
    </>
  );
};

export default MoveUpPage;

