import React, { useState } from "react";
import { TextContent, Text } from "../ClausesView/styles";
import { CommentsCard } from "../Sidebar/components/CommentsCard";
import { ContainerSidebarNav } from "../Sidebar/components/ContainerSidebar/styles";

// import { Container } from './styles';

const commentScope = {
  id: "01",
  date: "12 de março",
  hours: "17:33",
  comment:
    "Testando comentários abaixo lorem ipsolum Testando comentários abaixo lorem ipsolum Testando comentários abaixo lorem ipsolum Testando comentários abaixo lorem ipsolum Testando comentários abaixo lorem ipsolum Testando comentários abaixo lorem ipsolum Testando comentários abaixo lorem ipsolum Testando comentários abaixo lorem ipsolum"
};

const commentScope2 = {
  id: "01",
  date: "12 de março",
  hours: "17:33",
  comment:
    "Testando comentários abaixo lorem ipsolum Testando comentários abaixo lorem ipsolum Testando comentários abaixo lorem ipsolum Testando comentários abaixo lorem ipsolum Testando comentários abaixo lorem ipsolum Testando comentários abaixo lorem ipsolum Testando comentários abaixo lorem ipsolum Testando comentários abaixo lorem ipsolum"
};

const CommentsView: React.FC = () => {
  const [commentsData, setCommentsData] = useState([
    commentScope,
    commentScope2
  ]);

  return (
    <ContainerSidebarNav paddingTop="2rem">
      {/* {commentsData.map((comment, index) => (
        <CommentsCard
          key={comment.id}
          date={comment.date}
          hours={comment.hours}
        >
          {comment.comment}
        </CommentsCard>
      ))} */}

      <TextContent>
        <Text>
          A função <strong>Comentários</strong>, que permite ao dono do projeto
          incluir comentários e anotações para verificar alguns pontos
          específicos do documento, ainda não está disponível nesta versão beta.
          Essa funcionalidade estará disponível em breve.
        </Text>
      </TextContent>
    </ContainerSidebarNav>
  );
};

export default CommentsView;

