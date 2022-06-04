import { HTMLProps } from "react";
import styled from "styled-components";

interface VStackProps extends HTMLProps<HTMLDivElement> {
  margin?: string;
  height?: string;
}

export const VStack = styled.div<VStackProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ height }) => (height ? height : "")};
  justify-content: space-between;
  margin: ${({ margin }) => (margin ? margin : "")};
`;
