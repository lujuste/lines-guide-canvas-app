import { HTMLProps } from "react";
import styled from "styled-components";
import { Theme } from "../../../../@types/theme";

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

export const FlexSearch = styled.div`
  width: 100%;
  height: 70px;
`;

export const FlexBar = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
`;

export const TextContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5rem;
`;

export const Text = styled.span`
  font-size: 2rem;
  color: ${({ theme }: Theme) => theme.colors.gray300};
  text-align: center;
  line-height: 2.7rem;

  @media (max-width: 1600px) {
    font-size: 1.7rem;
  }

  @media (max-width: 1366px) {
    font-size: 1.6rem;
    line-height: 2.2rem;
    padding: 0 1rem;
  }
`;

