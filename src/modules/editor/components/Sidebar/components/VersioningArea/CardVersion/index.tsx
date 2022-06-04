import React from "react";
import {
  CardImage,
  CardInfos,
  Container,
  Heading,
  Text,
  SimpleItalicText
} from "./styles";

interface CardVersionProps {
  card?: string;
  date?: string;
  hours?: string;
  version?: string;
  user?: string;
}

export const CardVersion: React.FC<CardVersionProps> = ({
  card,
  date,
  hours,
  version,
  user
}) => {
  return (
    <Container>
      <CardImage />
      <CardInfos>
        <Heading>23/08/20 11:45</Heading>
        <Text>Versão: 03</Text>
        <SimpleItalicText>Criado por: nome da pessoa</SimpleItalicText>
      </CardInfos>
    </Container>
  );
};
