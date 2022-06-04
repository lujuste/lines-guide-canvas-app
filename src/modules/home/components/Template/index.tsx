import { BottomSpace, Container, TemplateName } from "./styles";
import React from "react";

interface Props {
  name: string;
  url: string;
  width?: string;
  height?: string;
}

const Template: React.FC<Props> = ({ url, width, height, name }) => {
  return (
    <Container className="grid-item">
      <img src={url} alt="" className="img" />
      <TemplateName>{name}</TemplateName>
      <BottomSpace></BottomSpace>
    </Container>
  );
};

export default Template;
