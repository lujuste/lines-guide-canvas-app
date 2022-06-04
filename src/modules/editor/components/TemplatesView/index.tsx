import React from "react";
import { ScrollTemplates } from "../ScrollTemplates";
import { SearchInput } from "../SearchInput";
import { ContainerSidebarNav } from "../Sidebar/components/ContainerSidebar/styles";
import TemplatesList from "./components/TemplateList";
import { FlexSearch } from "./styles";

// import { Container } from './styles';

interface ITemplatesViewProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const TemplatesView: React.FC<ITemplatesViewProps> = ({
  search,
  setSearch
}) => {
  return (
    <ContainerSidebarNav>
      {/* <FlexSearch>
        <SearchInput
          type="search"
          name={"search"}
          label={"Pesquisar"}
          search={search}
          setSearch={setSearch}
        />
      </FlexSearch> */}

      {/* <TemplatesList /> */}

      <ScrollTemplates text="Tipo de contrato" />
      {/* <ScrollTemplates text="Tipo de contrato" />
      <ScrollTemplates text="Tipo de contrato" /> */}
    </ContainerSidebarNav>
  );
};

export default TemplatesView;

