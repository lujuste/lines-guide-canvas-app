import React, { useState } from "react";
import { useAsidebarEditor } from "../../hooks/asidebarEditor";
import ButtonPrimary from "../ButtonPrimary";
import ClausesView from "../ClausesView";
import { TextContent, VStack, Text } from "../ClausesView/styles";
import UploadImages from "../UploadImages";
import CloudView from "../UploadImages";
import CommentsView from "../CommentsView";
import GroupElements from "../GroupElementsView";
import ElementsView from "../GroupElementsView";
import { ScrollTemplates } from "../ScrollTemplates";
import { SearchInput } from "../SearchInput";
import ElementsSidebar from "../ElementsKonva";
import ShapesView from "../ElementsKonva";
import { ContainerSidebarNav } from "../Sidebar/components/ContainerSidebar/styles";
import { CompareVersionBox } from "../Sidebar/components/VersioningArea/CompareVersionBox";
import TemplatesView from "../TemplatesView";
import Icons from "../IconsApi";
import UploadImagesView from "../IconsApi";
import VersioningProject from "../VersioningProject";
import { FlexSearch } from "./styles";
import ElementsKonva from "../ElementsKonva";

// import { Container } from './styles';

const AsidebarComponents: React.FC = () => {
  const {
    isActive,
    setIsActive,
    template,
    setTemplate,
    clauses,
    setClauses,
    elements,
    setElements,
    uniqueElement,
    setUniqueElement,
    uploadImages,
    setUploadImages,
    cloud,
    setCloud,
    comments,
    setComments,
    isVersioning,
    setIsVersioning,
    handleNavigate,
    handleActiveButton
  } = useAsidebarEditor();

  const [search, setSearch] = useState("");

  return (
    <>
      {/* list of templates bits below  */}
      {template && <TemplatesView search={search} setSearch={setSearch} />}
      {/* Clauses area below */}
      {clauses && (
        <ClausesView
          isActive={isActive}
          handleActiveButton={handleActiveButton}
        />
      )}
      {/* Group of elements below */}
      {elements && <GroupElements />}
      {/* Elements Konva below*/}
      {uniqueElement && <ElementsKonva />}
      {/* Elements Icons Svg below*/}
      {uploadImages && <Icons />}
      {/* Uploads images below*/}
      {cloud && <UploadImages />}
      {/* Comments below*/}
      {comments && <CommentsView />}
      {/* Area for control of version below*/}
      {isVersioning && <VersioningProject />}
    </>
  );
};

export default AsidebarComponents;

