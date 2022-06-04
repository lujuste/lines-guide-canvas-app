import styled from "styled-components";
import { Theme } from "../../../../@types/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  width: 1px;
  height: 30px;
  background: ${({ theme }: Theme) => theme.colors.black};
`;
