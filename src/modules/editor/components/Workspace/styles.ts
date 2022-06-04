import styled from "styled-components";
import { Theme } from "../../../../@types/theme";

interface GridItemWorkspaceProps {
  pageOneOnly?: boolean;
}

export const GridItemWorkspace = styled.div<GridItemWorkspaceProps>`
  grid-area: workspace;
  position: relative;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: ${({ pageOneOnly }) => (pageOneOnly ? "auto" : "auto")};
  width: 65vw;
  background: ${({ theme }) => theme.colors.backgroundEditor};
`;

export const ToolsbarEditor = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #adb5bd;
  display: flex;
  background: white;
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
`;

export const FlexToolbar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  padding: 0 1.6rem;
  justify-content: space-between;
  align-items: center;
`;

export const HorizontalStack = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  padding-left: 3.2rem;
  padding-right: 3.2rem;
`;

export const FlexRow = styled.div`
  display: flex;
  max-width: 190px;
  width: 100%;
  justify-content: space-between;
`;

export const TextPage = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ theme }: Theme) => theme.colors.gray300};
`;

export const Canvas = styled.div`
  width: 794px;
  height: 1123px;
  margin: 0 auto;
  -webkit-box-shadow: 0px 2px 14px -7px rgba(0, 0, 0, 0.44);
  box-shadow: 0px 2px 14px -7px rgba(0, 0, 0, 0.44);
  margin-bottom: 1.8rem;
`;

