import styled from "styled-components";

interface DimentionsProps {
  width: string;
  height: string;
}

export const GridContainer = styled.div<DimentionsProps>`
  display: grid;
  grid-template-areas:
    "header header header header header header"
    "workspace workspace workspace sidebar sidebar sidebar";
  grid-template-rows: 68px calc(${({ height }) => height} - 68px);
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow: hidden;
`;

