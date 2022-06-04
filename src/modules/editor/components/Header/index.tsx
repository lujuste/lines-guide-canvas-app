import {
  Container,
  HeaderCenter,
  HeaderLeft,
  HeaderRight,
  Wrapper,
  Text,
  Button,
  AvatarEditor,
  InputNameDocument
} from "./styles";

import backIcon from "../../assets/icon-back.svg";
import undoIcon from "../../assets/icon-undo.svg";
import redoIcon from "../../assets/icon-redo.svg";
import commentsIcon from "../../assets/icon-comments.svg";
import saveIcon from "../../assets/icon-save.svg";
import downloadIcon from "../../assets/icon-download.svg";
import DropdownArchive from "./components/DropdownArchive";
import { useCallback, useRef, useState } from "react";
import { useHeaderEditor } from "../../hooks/headerEditor";
import { useMainHook } from "../../../../hooks/main";
import Konva from "konva";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { generatePDF } = useHeaderEditor();
  const [isOpen, setIsOpen] = useState(false);
  const { documentName } = useMainHook();
  const refInputNameProject = useRef<HTMLInputElement>(null);
  const navigator = useNavigate();

  const {
    handleSaveTemplate,
    handleGoHomePage,
    handleUndo,
    handleRedo,
    handleCreateNewProject
  } = useHeaderEditor();

  return (
    <Container>
      <HeaderLeft>
        <Wrapper>
          <button
            className="btn-hover"
            onClick={() => {
              handleGoHomePage();
            }}
          >
            <img className="icon-back" src={backIcon} alt="Ícone de voltar" />
            <Text>Início</Text>
          </button>
        </Wrapper>

        <Wrapper>
          <button onClick={() => setIsOpen(!isOpen)} className="btn-click">
            <DropdownArchive isOpen={isOpen} setIsOpen={setIsOpen} />
          </button>
        </Wrapper>

        <Wrapper marginTop={"0.3rem"}>
          <button className="btn-click" onClick={handleUndo}>
            <div className="icon-undo">
              <img
                className="redoUndo"
                width="22px"
                height="22px"
                src={undoIcon}
                alt="Ícone de voltar"
              />
            </div>
          </button>
          <button className="btn-click" onClick={handleRedo}>
            <div className="icon-redo">
              <img className="redoRedo" src={redoIcon} alt="Ícone de avançar" />
            </div>
          </button>
        </Wrapper>
      </HeaderLeft>

      <HeaderCenter>
        {/* <input type="text" /> */}
        <InputNameDocument
          ref={refInputNameProject}
          type="text"
          placeholder="Novo documento"
          defaultValue={
            documentName.current ? documentName.current : "Novo documento"
          }
          onChange={(onChangeEvent: React.ChangeEvent<HTMLInputElement>) => {
            documentName.current = onChangeEvent.target.value;
          }}
        />
        {/* <Text margin="0 auto"></Text> */}
      </HeaderCenter>

      <HeaderRight>
        {/* <button className="btn-click">
          <img
            className="redoUndo"
            src={commentsIcon}
            alt="Ícone de comentários"
          />
        </button> */}
        <button className="btn-click" onClick={handleSaveTemplate}>
          <img className="save" src={saveIcon} alt="Ícone de salvar" />
        </button>
        <button className="btn-click" onClick={generatePDF}>
          <img
            className="download"
            src={downloadIcon}
            alt="Ícone de download"
          />
        </button>
        <Button target="_blank" onClick={handleCreateNewProject} color="black">
          <a target="_blank"> Novo projeto </a>
        </Button>
        {/* <AvatarEditor> L </AvatarEditor> */}
      </HeaderRight>
    </Container>
  );
}
