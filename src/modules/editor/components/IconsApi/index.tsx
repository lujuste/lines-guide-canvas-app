import React, { useEffect, useState } from "react";
import { useMainHook } from "../../../../hooks/main";
import api from "../../../../services/api";
import { useAsidebarEditor } from "../../hooks/asidebarEditor";
import LoadingEditor from "../Canvas/LoadingEditor";
import { SearchInput } from "../SearchInput";
import CardElements from "../Sidebar/components/CardElements";
import { ContainerSidebarNav } from "../Sidebar/components/ContainerSidebar/styles";
import GridElements from "../Sidebar/components/GridElements";
import GridItemElements from "../Sidebar/components/GridItemElements";
import Tooltip2 from "../Sidebar/components/Tooltip2";
import TooltipIconsApi from "../Sidebar/components/TooltipIconsApi";
import Tooltip from "../Tooltip";
import { FlexSearch } from "./styles";

// import { Container } from './styles';

// list of elements

interface ImageIcon {
  created_at: string;
  creator_id: string;
  icon_url: string;
  id: string;
  key_words: string;
  last_editor_id: string;
  name: string;
  updated_at: string;
  dpath: string;
}

const Icons: React.FC = () => {
  const [data, setData] = useState<ImageIcon[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await api.get("icon-repository");
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const { dragUrl } = useMainHook();
  const { grab, setIsGrab } = useAsidebarEditor();
  const [isSmallView, setIsSmallView] = useState(false);
  const [isMediumView, setIsMediumView] = useState(false);
  const [isLargeView, setIsLargeView] = useState(false);

  let width = window.innerWidth;

  useEffect(() => {
    getWidthOfScreenUser(width);
    console.log();
  }, [width]);

  const getWidthOfScreenUser = (width: number) => {
    if (width <= 1366) {
      setIsSmallView(true);
    }

    if (width > 1366 && width <= 1600) {
      setIsMediumView(true);
    }

    if (width > 1600) {
      setIsLargeView(true);
    }
  };

  useEffect(() => {
    setIsGrab({ active: false });
  }, []);

  const stylesInject = {
    paddingLeft: "1.25rem"
  };

  const stylesInjectMedium = {
    paddingLeft: "0.9rem"
  };

  const stylesInjectLarge = {
    paddingLeft: "1.55rem"
  };

  return (
    <ContainerSidebarNav>
      {loading ? (
        <LoadingEditor />
      ) : (
        <>
          {/* <FlexSearch style={{ margin: "0 0 1rem 0" }}>
            <SearchInput label="Pesquisar" />
          </FlexSearch> */}
          <GridElements columns={5}>
            {data.map((image: ImageIcon, index) => {
              return (
                <GridItemElements
                  css={
                    isSmallView
                      ? stylesInject
                      : isMediumView
                      ? stylesInjectMedium
                      : isLargeView && stylesInjectLarge
                  }
                  key={String(Math.random())}
                >
                  <TooltipIconsApi text="Arraste para usar">
                    <CardElements>
                      <img
                        style={{
                          opacity: grab && index === grab.index ? "0.1" : "1",
                          cursor:
                            grab && index === grab.index
                              ? "-webkit-grabbing !important"
                              : "-webkit-grab !important",
                          transition: "all 0.1s linear"

                          /* W3C standards syntax, should come least */
                        }}
                        onDragEnd={e => setIsGrab({ active: false })}
                        className="icons-elements-sidebar"
                        alt={`icon#@@#${Math.random().toString()}`}
                        src={image.icon_url}
                        draggable={true}
                        onDragStart={(e: any) => {
                          e.target.dpath = image.dpath;
                          dragUrl.current = e.target;
                        }}
                      />
                    </CardElements>
                  </TooltipIconsApi>
                </GridItemElements>
              );
            })}
          </GridElements>
        </>
      )}
    </ContainerSidebarNav>
  );
};

export default Icons;

