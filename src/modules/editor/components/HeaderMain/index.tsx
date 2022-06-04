import React from "react";
import Header from "../Header";
import { FlexContainer, GridItemHeader, HeaderBox } from "./styles";

// import { Container } from './styles';

const HeaderMain: React.FC = () => {
  return (
    <GridItemHeader>
      <HeaderBox>
        <FlexContainer>
          <Header />
        </FlexContainer>
      </HeaderBox>
    </GridItemHeader>
  );
};

export default HeaderMain;
