import styled from "styled-components";
import { Theme } from "../../../../../../@types/theme";

interface ContainerProps {
  margin?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const Box = styled.div`
  max-width: 302px;
  width: 100%;
  height: 1px;
  background: ${({ theme }: Theme) => theme.colors.black};
`;
