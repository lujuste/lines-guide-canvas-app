import React from "react";
import { useMainHook } from "../../../../hooks/main";
import PersonalizedIcon from "../../../../shared/assets/customIcons/PersonalizedIcon";
import { useHeaderEditor } from "../../hooks/headerEditor";
import { usePagesEditor } from "../../hooks/pagesEditor";
import { useToolbarEditor } from "../../hooks/toolbarEditor";
import { Box, ContextMenu, FlexList, Wrapper, Text, Button } from "./styles";

interface RightClickMenuProps {
  top: number;
  left: number;
  isShow: boolean;
}

const RightClickMenu: React.FC<RightClickMenuProps> = ({
  top,
  left,
  isShow
}) => {
  const { copyObject, pasteObject } = usePagesEditor();
  const { deleteElement } = useToolbarEditor();
  const { handleUndo, handleRedo } = useHeaderEditor();

  return (
    <>
      {isShow && (
        <ContextMenu top={top} left={left}>
          <FlexList>
            <Wrapper margin="0rem 0rem 2.5rem 0rem">
              <Button type="button" onClick={copyObject}>
                <PersonalizedIcon
                  viewBox="0 0 25 28"
                  width={25}
                  className="btn-rightclick-menu-icon"
                  inactivatedColor="black"
                  height={28}
                  dPath="M21.75 25.25H8V7.75H21.75V25.25ZM21.75 5.25H8C7.33696 5.25 6.70107 5.51339 6.23223 5.98223C5.76339 6.45107 5.5 7.08696 5.5 7.75V25.25C5.5 25.913 5.76339 26.5489 6.23223 27.0178C6.70107 27.4866 7.33696 27.75 8 27.75H21.75C22.413 27.75 23.0489 27.4866 23.5178 27.0178C23.9866 26.5489 24.25 25.913 24.25 25.25V7.75C24.25 7.08696 23.9866 6.45107 23.5178 5.98223C23.0489 5.51339 22.413 5.25 21.75 5.25ZM18 0.25H3C2.33696 0.25 1.70107 0.513392 1.23223 0.982233C0.763392 1.45107 0.5 2.08696 0.5 2.75V20.25H3V2.75H18V0.25Z"
                />{" "}
                <span style={{ marginLeft: "1rem" }}>Copiar</span>
              </Button>
              {/* <Box
                style={{
                  backgroundColor: "rgba(196, 196, 196, 0.3)",
                  width: "79px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "5px"
                }}
              >
                <Text>ctrl + c</Text>
              </Box> */}
            </Wrapper>
            <Wrapper>
              <Button onClick={() => pasteObject()}>
                <PersonalizedIcon
                  viewBox="0 0 24 28"
                  inactivatedColor="black"
                  className="btn-rightclick-menu-icon"
                  width={24}
                  height={28}
                  dPath="M20.75 25H3.25V5H5.75V8.75H18.25V5H20.75V25ZM12 2.5C12.3315 2.5 12.6495 2.6317 12.8839 2.86612C13.1183 3.10054 13.25 3.41848 13.25 3.75C13.25 4.08152 13.1183 4.39946 12.8839 4.63388C12.6495 4.8683 12.3315 5 12 5C11.6685 5 11.3505 4.8683 11.1161 4.63388C10.8817 4.39946 10.75 4.08152 10.75 3.75C10.75 3.41848 10.8817 3.10054 11.1161 2.86612C11.3505 2.6317 11.6685 2.5 12 2.5ZM20.75 2.5H15.525C15 1.05 13.625 0 12 0C10.375 0 9 1.05 8.475 2.5H3.25C2.58696 2.5 1.95107 2.76339 1.48223 3.23223C1.01339 3.70107 0.75 4.33696 0.75 5V25C0.75 25.663 1.01339 26.2989 1.48223 26.7678C1.95107 27.2366 2.58696 27.5 3.25 27.5H20.75C21.413 27.5 22.0489 27.2366 22.5178 26.7678C22.9866 26.2989 23.25 25.663 23.25 25V5C23.25 4.33696 22.9866 3.70107 22.5178 3.23223C22.0489 2.76339 21.413 2.5 20.75 2.5Z"
                />{" "}
                <span style={{ marginLeft: "1rem" }}>Colar</span>
              </Button>
              {/* <Box
                style={{
                  backgroundColor: "rgba(196, 196, 196, 0.3)",
                  width: "79px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "5px"
                }}
              >
                <Text>ctrl + v</Text>
              </Box> */}
            </Wrapper>
            <Wrapper>
              <Button onClick={() => handleUndo()}>
                <PersonalizedIcon
                  viewBox="0 0 20 22"
                  width={20}
                  inactivatedColor="black"
                  className="btn-rightclick-menu-icon"
                  height={22}
                  dPath="M20 13.875C20 16.0299 19.144 18.0965 17.6202 19.6202C16.0965 21.144 14.0299 22 11.875 22H2.5V19.5H11.875C15 19.5 17.5 17 17.5 13.875C17.5 10.75 15 8.25 11.875 8.25H4.7875L8.6375 12.1125L6.875 13.875L0 7L6.875 0.125L8.65 1.8875L4.7875 5.75H11.875C14.0299 5.75 16.0965 6.60602 17.6202 8.12976C19.144 9.65349 20 11.7201 20 13.875Z"
                />{" "}
                <span style={{ marginLeft: "1rem" }}>Desfazer</span>
              </Button>
              {/* <Box
                style={{
                  backgroundColor: "rgba(196, 196, 196, 0.3)",
                  width: "79px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "5px"
                }}
              >
                <Text>ctrl + c</Text>
              </Box> */}
            </Wrapper>
            <Wrapper>
              <Button>
                {" "}
                <PersonalizedIcon
                  viewBox="0 0 20 22"
                  width={20}
                  height={22}
                  inactivatedColor="black"
                  className="btn-rightclick-menu-icon"
                  dPath="M8.125 19.5H17.5V22H8.125C5.97011 22 3.90349 21.144 2.37976 19.6202C0.856024 18.0965 0 16.0299 0 13.875C0 11.7201 0.856024 9.65349 2.37976 8.12976C3.90349 6.60602 5.97011 5.75 8.125 5.75H15.2125L11.35 1.8875L13.125 0.125L20 7L13.125 13.875L11.3625 12.1125L15.2125 8.25H8.125C5 8.25 2.5 10.75 2.5 13.875C2.5 17 5 19.5 8.125 19.5Z"
                />{" "}
                <span style={{ marginLeft: "1rem" }}>Refazer</span>
              </Button>
              {/* <Box
                style={{
                  backgroundColor: "rgba(196, 196, 196, 0.3)",
                  width: "79px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "5px"
                }}
              >
                <Text>ctrl + c</Text>
              </Box> */}
            </Wrapper>
            <Wrapper>
              <Button onClick={() => deleteElement()}>
                <PersonalizedIcon
                  viewBox="0 0 21 24"
                  width={21}
                  height={24}
                  inactivatedColor="black"
                  className="btn-rightclick-menu-icon"
                  dPath="M6.5 0.75V2H0.25V4.5H1.5V20.75C1.5 21.413 1.76339 22.0489 2.23223 22.5178C2.70107 22.9866 3.33696 23.25 4 23.25H16.5C17.163 23.25 17.7989 22.9866 18.2678 22.5178C18.7366 22.0489 19 21.413 19 20.75V4.5H20.25V2H14V0.75H6.5ZM4 4.5H16.5V20.75H4V4.5ZM6.5 7V18.25H9V7H6.5ZM11.5 7V18.25H14V7H11.5Z"
                />{" "}
                <span style={{ marginLeft: "1rem" }}>Excluir</span>
              </Button>
              {/* <Box
                style={{
                  backgroundColor: "rgba(196, 196, 196, 0.3)",
                  width: "79px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "5px"
                }}
              >
                <Text>ctrl + c</Text>
              </Box> */}
            </Wrapper>
          </FlexList>
        </ContextMenu>
      )}
    </>
  );
};

export default RightClickMenu;
