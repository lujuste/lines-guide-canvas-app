import React, { useEffect, useState } from "react";
import { SearchInput } from "../SearchInput";
import CardElements from "../Sidebar/components/CardElements";
import { ContainerSidebarNav } from "../Sidebar/components/ContainerSidebar/styles";
import GridElements from "../Sidebar/components/GridElements";
import GridItemElements from "../Sidebar/components/GridItemElements";
import { FlexSearch } from "./styles";
import RectangleIcon from "../../assets/rectangle.svg";
import EllipseIcon from "../../assets/ellipse.svg";
import LineIcon from "../../assets/line.svg";
import SquareIcon from "../../assets/square.svg";
import TriangleIcon from "../../assets/triangle.svg";
import StarIcon from "../../assets/star.svg";
import textEditIcon from "../../assets/editIconText.svg";
import { useMainHook } from "../../../../hooks/main";
import { useAsidebarEditor } from "../../hooks/asidebarEditor";
import ImageDrag from "./components/ImageDrag";
import Tooltip from "../Tooltip";

const ElementsKonva: React.FC = () => {
  const { dragUrl } = useMainHook();
  const { grab, setIsGrab } = useAsidebarEditor();
  const [index, setIndex] = useState(0);

  console.log(grab, "grab");

  return (
    <ContainerSidebarNav>
      {/* <FlexSearch style={{ margin: "0 0 1rem 0" }}>
        <SearchInput label="Pesquisar" />
      </FlexSearch> */}
      <GridElements columns={4}>
        <GridItemElements>
          <CardElements>
            <ImageDrag
              draggable={true}
              className={"konvashape-icon"}
              grab={grab.active}
              setIsGrab={setIsGrab}
              imageSrc={textEditIcon}
              alt={"konvashape#@@#text"}
              index={0}
              indexGrab={grab.index}
            />
          </CardElements>
        </GridItemElements>
        <GridItemElements>
          <CardElements grab={grab.active}>
            <ImageDrag
              draggable={true}
              className={"konvashape-icon"}
              grab={grab.active}
              setIsGrab={setIsGrab}
              imageSrc={RectangleIcon}
              alt={"konvashape#@@#rectangle"}
              index={1}
              indexGrab={grab.index}
            />
          </CardElements>
        </GridItemElements>
        <GridItemElements>
          <CardElements>
            <ImageDrag
              draggable={true}
              className={"konvashape-icon"}
              grab={grab.active}
              setIsGrab={setIsGrab}
              imageSrc={EllipseIcon}
              alt={"konvashape#@@#circle"}
              index={2}
              indexGrab={grab.index}
            />
          </CardElements>
        </GridItemElements>

        <GridItemElements>
          <CardElements>
            <ImageDrag
              draggable={true}
              className={"konvashape-icon"}
              grab={grab.active}
              setIsGrab={setIsGrab}
              imageSrc={TriangleIcon}
              alt={"konvashape#@@#triangle2"}
              index={3}
              indexGrab={grab.index}
            />
          </CardElements>
        </GridItemElements>

        <GridItemElements>
          <CardElements>
            <ImageDrag
              draggable={true}
              className={"konvashape-icon"}
              grab={grab.active}
              setIsGrab={setIsGrab}
              imageSrc={SquareIcon}
              alt={"konvashape#@@#square"}
              index={4}
              indexGrab={grab.index}
            />
          </CardElements>
        </GridItemElements>

        <GridItemElements>
          <CardElements>
            <ImageDrag
              draggable={true}
              className={"konvashape-icon"}
              grab={grab.active}
              setIsGrab={setIsGrab}
              imageSrc={StarIcon}
              alt={"konvashape#@@#star"}
              index={5}
              indexGrab={grab.index}
            />
          </CardElements>
        </GridItemElements>

        <GridItemElements>
          <CardElements>
            <ImageDrag
              draggable={true}
              className={"konvashape-icon"}
              grab={grab.active}
              setIsGrab={setIsGrab}
              imageSrc={LineIcon}
              alt={"konvashape#@@#simpleLine"}
              index={6}
              indexGrab={grab.index}
            />
          </CardElements>
        </GridItemElements>
      </GridElements>
    </ContainerSidebarNav>
  );
};

export default ElementsKonva;

