import styled from "styled-components";

interface ContainerSidebarNavProps {
  paddingTop?: string;
}

export const ContainerSidebarNav = styled.div<ContainerSidebarNavProps>`
  display: flex;

  padding-right: 0.5rem;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : "")};
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-left: 0.9rem;
  padding-bottom: 8rem;
`;
