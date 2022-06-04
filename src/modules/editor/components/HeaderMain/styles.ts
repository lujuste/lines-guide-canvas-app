import styled from "styled-components";
import { Theme } from "../../../../@types/theme";
export const GridItemHeader = styled.header`
  grid-area: header;
  z-index: 99;
`;

export const HeaderBox = styled.nav`
  width: 100%;
  height: 100%;
  position: sticky;
`;

export const FlexContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to left,
    ${({ theme }: Theme) => theme.colors.gradientBody},
    ${({ theme }: Theme) => theme.colors.gradientBody2} 80%
  );
`;
