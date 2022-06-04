import React from "react";
import { Box, Container } from "./styles";

interface DividerHorizontalProps {
  margin?: string;
}

export default function DividerHorizontal({ margin }: DividerHorizontalProps) {
  return (
    <Container margin={margin}>
      <Box />
    </Container>
  );
}
