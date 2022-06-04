import React from "react";
import PersonalizedIcon from "../../../../../../shared/assets/customIcons/PersonalizedIcon";
import ButtonIcons from "../../../../../../shared/components/ButtonIcons";
import { usePagesEditor } from "../../../../hooks/pagesEditor";
import { useWorkspaceEditor } from "../../../../hooks/workspaceEditor";
import Tooltip from "../../../Tooltip";

// import { Container } from './styles';

interface IMoveDownPageProps {
  index: number;
  item: any;
}

const MoveDownPage: React.FC<IMoveDownPageProps> = ({ index, item }) => {
  const { handleOrderPageMoveDown } = usePagesEditor();

  const { isHandleHoverIconMoveDownPage, handleHovePageMoveDown } =
    useWorkspaceEditor();

  return (
    <ButtonIcons
      style={{ position: "relative" }}
      onClick={() => handleOrderPageMoveDown(item.pageNumber)}
      onMouseEnter={() => handleHovePageMoveDown(index, true)}
      onMouseLeave={() => handleHovePageMoveDown(index, false)}
    >
      <Tooltip text="Para baixo" position="bottom">
        <PersonalizedIcon
          isActive={
            isHandleHoverIconMoveDownPage.visible &&
            isHandleHoverIconMoveDownPage.index === index
          }
          viewBox="0 0 20 13"
          activeColor="#663399"
          inactivatedColor="#a5a5a5"
          width={20}
          height={12.37}
          className="arrow-moveup-icon"
          dPath="M17.65 0.300049L10 7.95005L2.35 0.300047L-2.06901e-07 2.66671L10 12.6667L20 2.66672L17.65 0.300049Z"
        />
      </Tooltip>
    </ButtonIcons>
  );
};

export default MoveDownPage;

