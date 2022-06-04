import React from "react";
import ReactLoading from "react-loading";
import { ContainerLoading } from "./styles";

// import { Container } from './styles';

const LoadingEditor: React.FC = () => {
  return (
    <ContainerLoading>
      <ReactLoading type="spin" color="#000" height={100} width={100} />
    </ContainerLoading>
  );
};

export default LoadingEditor;

