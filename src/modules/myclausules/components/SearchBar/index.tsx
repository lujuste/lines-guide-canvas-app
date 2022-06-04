import React from "react";
import PersonalizedIcon from "../../../../shared/assets/customIcons/PersonalizedIcon";
import MountIcons from "../../../../shared/utils/MountIcons";

import {
  BorderView,
  Button,
  LabelButton
} from "../../components/SearchBar/styles";

import { Container, Input } from "./styles";

interface SearchProps {
  onClickSearchButton: () => void;
}

const SearchBar: React.FC<SearchProps> = ({ onClickSearchButton }) => {
  return (
    <Container>
      <BorderView>
        <PersonalizedIcon
          dPath={MountIcons.Zoom.dPath}
          viewBox={MountIcons.Zoom.viewBox}
          className="icon"
          width={30}
          height={30}
        />
        <Input type={"text"} placeholder="PESQUISAR"></Input>
        <PersonalizedIcon
          dPath={MountIcons.IconFilter.dPath}
          viewBox={MountIcons.IconFilter.viewBox}
          className="icon"
          width={30}
          height={30}
        />
      </BorderView>
      <Button onClick={onClickSearchButton}>
        <PersonalizedIcon
          dPath={MountIcons.IconAdd.dPath}
          viewBox={MountIcons.IconAdd.viewBox}
          width={33.33}
          height={33.33}
          className="icon-add"
        />
        <LabelButton>Cadastrar nova cláusula</LabelButton>
      </Button>
    </Container>
  );
};

export default SearchBar;
