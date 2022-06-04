import React from "react";
import { ModalContextProvider } from "../contexts/ModalContext";
import { RightMenuContextProvider } from "../contexts/RightMenuContext";

import { AuthProvider } from "./auth";
import { HeaderEditorProvider } from "../modules/editor/hooks/headerEditor";
import { MainHookProvider } from "./main";
import { CustomThemeProvider } from "./theme";
import { ToolbarEditorProvider } from "../modules/editor/hooks/toolbarEditor";
import { AsidebarEditorProvider } from "../modules/editor/hooks/asidebarEditor";
import { PagesEditorProvider } from "../modules/editor/hooks/pagesEditor";
import { WorkspaceEditorProvider } from "../modules/editor/hooks/workspaceEditor";
import { IconsColorsProvider } from "../modules/editor/hooks/iconsColors";
import { SelectionHookProvider } from "../modules/editor/hooks/selection";
import { EditorTextHookProvider } from "../modules/editor/hooks/editorText";

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <MainHookProvider>
        <SelectionHookProvider>
          <EditorTextHookProvider>
            <WorkspaceEditorProvider>
              <PagesEditorProvider>
                <ToolbarEditorProvider>
                  <IconsColorsProvider>
                    <HeaderEditorProvider>
                      <CustomThemeProvider>
                        <AsidebarEditorProvider>
                          <RightMenuContextProvider>
                            <ModalContextProvider>
                              {children}
                            </ModalContextProvider>
                          </RightMenuContextProvider>
                        </AsidebarEditorProvider>
                      </CustomThemeProvider>
                    </HeaderEditorProvider>
                  </IconsColorsProvider>
                </ToolbarEditorProvider>
              </PagesEditorProvider>
            </WorkspaceEditorProvider>
          </EditorTextHookProvider>
        </SelectionHookProvider>
      </MainHookProvider>
    </AuthProvider>
  );
};

export default AppProvider;
