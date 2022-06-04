import React, { useRef } from "react";
import {
  ItemTemplate,
  ListContainer,
  MovieContainer,
  Title,
  Wrapper
} from "./styles";

// import { Container } from './styles';

const TemplatesList: React.FC = () => {
  const listRef = useRef();

  return (
    <ListContainer>
      <Title></Title>
      <Wrapper>
        {/* <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => console.log("console.log1")}
        >    */}
        <MovieContainer ref={listRef}>
          {/* <MovieItem index={0} /> */}
          <ItemTemplate></ItemTemplate>
          <ItemTemplate></ItemTemplate>
          <ItemTemplate></ItemTemplate>
          <ItemTemplate></ItemTemplate>
          <ItemTemplate></ItemTemplate>
        </MovieContainer>

        {/* </ArrowBackIosOutlined> */}
      </Wrapper>
    </ListContainer>
  );
};

export default TemplatesList;

