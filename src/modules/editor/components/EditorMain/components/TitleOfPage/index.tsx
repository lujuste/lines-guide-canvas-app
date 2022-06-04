import React from "react";
import { FlexRow, TextPage } from "./styles";

// import { Container } from './styles';

interface ITitleOfPageProps {
  index: number;
}

const TitleOfPage: React.FC<ITitleOfPageProps> = ({ index }) => {
  return (
    <FlexRow>
      <TextPage>{`Página ${index + 1}`}</TextPage>
    </FlexRow>
  );
};

export default TitleOfPage;
