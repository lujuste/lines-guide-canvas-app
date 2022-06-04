import React from "react";
import EditorMain from "../EditorMain";
import ToolbarMain from "../ToolbarMain";

import { GridItemWorkspace } from "./styles";

// import { Container } from './styles';

const Workspace: React.FC = () => {
  return (
    <GridItemWorkspace>
      <ToolbarMain />
      <EditorMain />
    </GridItemWorkspace>
  );
};

export default Workspace;

