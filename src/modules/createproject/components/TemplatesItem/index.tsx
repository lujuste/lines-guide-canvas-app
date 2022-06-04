import React from "react";
import { Flex, FlexCard, ImageThumbnail, Text } from "./styles";

// import { Container } from './styles';

interface ITemplatesItem {
  src?: string;
  text?: string;
  onClick?: any;
}

const TemplatesItem: React.FC<ITemplatesItem> = ({ src, text, onClick }) => {
  return (
    <Flex>
      <FlexCard onClick={onClick}>
        <ImageThumbnail src={src}></ImageThumbnail>
      </FlexCard>
      <Text> {text} </Text>
    </Flex>
  );
};

export default TemplatesItem;

