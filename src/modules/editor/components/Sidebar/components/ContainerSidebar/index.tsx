import { ReactNode } from "react";
import { ContainerSidebarNav } from "./styles";

interface ContainerSidebarProps {
  children: ReactNode;
  paddingTop?: string;
}

const ContainerSidebar = ({ children, paddingTop }: ContainerSidebarProps) => {
  return (
    <ContainerSidebarNav paddingTop={paddingTop}>
      {children}
    </ContainerSidebarNav>
  );
};

export default ContainerSidebar;
