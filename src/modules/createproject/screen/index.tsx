import React, { useEffect, useState } from "react";

import {
  UpdatesLabel,
  GridContainerTemplates,
  Container,
  Header
} from "./styles";
import Template from "../components/Template";
import SearchBar from "../components/SearchBar";
import api from "../../../services/api";
import LoadingEditor from "../../editor/components/Canvas/LoadingEditor";
import { useHeaderEditor } from "../../editor/hooks/headerEditor";
import TemplatesItem from "../components/TemplatesItem";
import BlankProjectDefault from "../components/BlankProjectDefault";
import { useNavigate } from "react-router-dom";
import cloneDeep from "lodash/cloneDeep";

interface IScreenCreateNewProject {
  bits_template_category_id: string;
  created_at: string;
  creator_id: string;
  description: string;
  id: string;
  key_words: string;
  last_editor_id: string;
  template: {
    arrayOfPages: any[];
  };
  thumbnail: string;
  thumbnail_url: string;
  title: string;
  updated_at: string;
  usage_counter: number;
}

const ScreenCreateNewProject: React.FC = () => {
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);
  const [templatesBits, setTemplatesBits] = useState<IScreenCreateNewProject[]>(
    []
  );
  const { handleCreateNewProject } = useHeaderEditor();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await api.get("bits-templates");
        setTemplatesBits(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  console.log(templatesBits);

  const chooseTemplateBits = async (template: any) => {
    // let getTemplate = [...template.template.arrayOfPages];

    let cloneTemplate = cloneDeep(template.template.arrayOfPages);
    try {
      const newProject = {
        template: {
          arrayOfPages: cloneTemplate
        },
        title: "Criando novo projeto de template",
        description: "Criando novo projeto de template"
      };
      const requestNewProject = await api.post("/user-templates", newProject);
      navigator(`/editor/my-template/${requestNewProject.data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingEditor />
      ) : (
        <Container>
          <Header>{/* <SearchBar /> */}</Header>

          <GridContainerTemplates>
            {/* {templatesBits.map(template => (
              <Template name={template.title} url={template.thumbnail_url} />
            ))} */}

            <BlankProjectDefault
              text="Em branco "
              onClick={handleCreateNewProject}
            />
            {templatesBits.map(template => (
              <TemplatesItem
                key={template.id}
                src={template.thumbnail_url}
                text={template.title}
                onClick={() => chooseTemplateBits(cloneDeep(template))}
              />
            ))}
          </GridContainerTemplates>
        </Container>
      )}
    </>
  );
};

export default ScreenCreateNewProject;
