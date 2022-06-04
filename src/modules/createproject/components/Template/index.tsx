import { BottomSpace, Container, TemplateItem, TemplateName } from "./styles";
import React from "react";
import { useHeaderEditor } from "../../../editor/hooks/headerEditor";

interface Props {
  name: string;
  url: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

const Template: React.FC<Props> = ({ url, width, height, name, onClick }) => {
  return (
    <Container className="grid-item">
      <img
        width={width}
        height={height}
        onClick={onClick}
        src={url}
        alt=""
        className="img"
      />
      <TemplateName>{name}</TemplateName>
      <BottomSpace></BottomSpace>
    </Container>
  );
};

export default Template;
