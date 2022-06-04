import { HTMLProps } from "react";
import styled from "styled-components";
import { Theme } from "../../../@types/theme";

interface DimentionsProps {
  width: string;
  height: string;
}

interface IconSvgModifyProps {
  src?: string;
  alt?: string;
}

interface FlexEditorProps {
  zoomValue: number;
}

interface VStackProps extends HTMLProps<HTMLDivElement> {
  margin?: string;
  height?: string;
}

interface GridItemWorkspaceProps {
  pageOneOnly?: boolean;
}

export const ContainerLoading = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 2px 14px -7px rgba(0, 0, 0, 0.44);
  box-shadow: 0px 2px 14px -7px rgba(0, 0, 0, 0.44);
`;

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

export const GridItemHeader = styled.header`
  grid-area: header;
  z-index: 99;
`;

export const Header = styled.nav`
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

export const GridItemWorkspace = styled.div<GridItemWorkspaceProps>`
  grid-area: workspace;
  position: relative;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: scroll !important;
  margin: 0 auto;
  width: 65vw;
  background: ${({ theme }) => theme.colors.backgroundEditor};
`;

export const FlexEditor = styled.div<FlexEditorProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.editorBackground};
  align-items: center;
  overflow-x: auto;
  overflow-y: auto;
  transform: translate3d(0, 0, 0) perspective(1px)
    scale(${({ zoomValue }) => zoomValue && zoomValue})
    translateY(
      ${({ zoomValue }) =>
        zoomValue <= 1
          ? 0
          : zoomValue === 1.1
          ? "4.5%"
          : zoomValue === 1.2
          ? "8%"
          : zoomValue === 1.4
          ? "14%"
          : zoomValue === 1.6
          ? "18%"
          : zoomValue === 2 && "25%"}
    )
    translateZ(0);

  /* -webkit-transform: translate3d(0, 0, 0) perspective(1px)
    scale(${({ zoomValue }) => zoomValue && zoomValue})
    translateY(
      ${({ zoomValue }) =>
    zoomValue <= 1
      ? 0
      : zoomValue === 1.1
      ? "5%"
      : zoomValue === 1.2
      ? "10%"
      : zoomValue === 1.4
      ? "15%"
      : zoomValue === 1.6
      ? "20%"
      : zoomValue === 2 && "25%"}
    )
    translateZ(0);

  -moz-transform: translate3d(0, 0, 0) perspective(1px)
    scale(${({ zoomValue }) => zoomValue && zoomValue})
    translateY(
      ${({ zoomValue }) =>
    zoomValue <= 1
      ? 0
      : zoomValue === 1.1
      ? "5%"
      : zoomValue === 1.2
      ? "10%"
      : zoomValue === 1.4
      ? "15%"
      : zoomValue === 1.6
      ? "20%"
      : zoomValue === 2 && "25%"}
    )
    translateZ(0);

  -o-transform: translate3d(0, 0, 0) perspective(1px)
    scale(${({ zoomValue }) => zoomValue && zoomValue})
    translateY(
      ${({ zoomValue }) =>
    zoomValue <= 1
      ? 0
      : zoomValue === 1.1
      ? "5%"
      : zoomValue === 1.2
      ? "10%"
      : zoomValue === 1.4
      ? "15%"
      : zoomValue === 1.6
      ? "20%"
      : zoomValue === 2 && "25%"}
    )
    translateZ(0);

  -ms-transform: translate3d(0, 0, 0) perspective(1px)
    scale(${({ zoomValue }) => zoomValue && zoomValue})
    translateY(
      ${({ zoomValue }) =>
    zoomValue <= 1
      ? 0
      : zoomValue === 1.1
      ? "5%"
      : zoomValue === 1.2
      ? "10%"
      : zoomValue === 1.4
      ? "15%"
      : zoomValue === 1.6
      ? "20%"
      : zoomValue === 2 && "25%"}
    )
    translateZ(0); */
  padding-bottom: ${({ zoomValue }) =>
    zoomValue <= 1
      ? 0
      : zoomValue === 1.1
      ? "10rem"
      : zoomValue === 1.2
      ? "30rem"
      : zoomValue === 1.4
      ? "40rem"
      : zoomValue === 1.5 && "0"};
  backface-visibility: hidden !important;
  flex-direction: column;
  -webkit-filter: blur(0px) !important;
  transition: transform 0.2s ease;
  filter: blur(0) !important;
  will-change: transform;
  -webkit-font-smoothing: subpixel-antialiased !important;
`;

export const CanvasContainer = styled.div`
  width: 790px;
  min-height: 920px;
  height: 100%;
  background: transparent;
  margin: 2.6rem 0;
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

export const TextPage = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ theme }: Theme) => theme.colors.gray300};
`;

export const FlexDesignArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export const Canvas = styled.div`
  width: 550px;
  height: 776.69px;
  background: white;
  margin: 0 auto;
  -webkit-box-shadow: 0px 2px 14px -7px rgba(0, 0, 0, 0.44);
  box-shadow: 0px 2px 14px -7px rgba(0, 0, 0, 0.44);
  margin-bottom: 1.8rem;
`;

export const FlexRow = styled.div`
  display: flex;
  max-width: 190px;
  width: 100%;
  justify-content: space-between;
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

export const FlexSearch = styled.div`
  width: 100%;
  height: 70px;
`;

export const VStack = styled.div<VStackProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ height }) => (height ? height : "")};
  justify-content: space-between;
  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const FlexButton = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const IconSvgModify = styled.svg<IconSvgModifyProps>`
  width: 100%;
  height: 100%;
  background: url(${({ src }) => src}) no-repeat center / contain;
  stroke: black;
`;

export const FlexBar = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
`;

export const SpaceOfContainer = styled.div`
  width: 100px;
  height: 20px;
  background: transparent;
`;
