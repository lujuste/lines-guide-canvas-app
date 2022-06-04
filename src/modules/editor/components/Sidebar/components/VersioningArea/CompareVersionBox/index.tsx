import React from "react";
import ButtonPrimary from "../../../../ButtonPrimary";
import DropdownVersioning from "../../../../DropdownVersioning";
import { CardVersion } from "../CardVersion";
import { Flex, VStack } from "./styles";

export const CompareVersionBox: React.FC = () => {
  return (
    <>
      <Flex>
        <DropdownVersioning borderRadius={"10px 0 0 10px"} />
        <DropdownVersioning borderRadius={"0"} />
        <ButtonPrimary borderRadius={"0 10px 10px 0"}>
          Comparar versões
        </ButtonPrimary>
      </Flex>
      <VStack>
        <CardVersion />
        <CardVersion />
        <CardVersion />
      </VStack>
    </>
  );
};
