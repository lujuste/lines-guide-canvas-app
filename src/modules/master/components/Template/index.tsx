import { Container } from "./styles";
import React from "react";

interface Props {
  url: string;
  width?: string;
  height?: string;
}

const Template: React.FC<Props> = ({ url, width, height }) => {
  return (
    <Container className="grid-item">
      <img src={url} alt="" className="img"/>
    </Container>
  );
};

export default Template;
