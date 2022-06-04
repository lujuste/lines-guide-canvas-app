import React from "react";
import PersonalizedIcon from "../../../../shared/assets/customIcons/PersonalizedIcon";
import MountIcons from "../../../../shared/utils/MountIcons";

import { Container, Input } from "./styles";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <PersonalizedIcon
        dPath={MountIcons.Zoom.dPath}
        viewBox={MountIcons.Zoom.viewBox}
        className="icon"
        width={30}
        height={30}
      />
      <Input type={"text"} placeholder="PESQUISAR"></Input>
    </Container>
  );
};

export default SearchBar;
