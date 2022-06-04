import React, { ReactNode } from "react";
import ButtonIcons from "../../../../../../shared/components/ButtonIcons";
import IconSvg from "../../../IconSvg";
import { Container, Time, Text, Flex } from "./styles";
import checkCommentIcon from "../../../../assets/icon-check-comment.svg";
import removeCommentIcon from "../../../../assets/icon-remove-comment.svg";

interface CommentsCardProps {
  date?: string;
  hours?: string;
  children?: ReactNode;
  accept?: any;
  remove?: any;
}

const CommentsCard: React.FC<CommentsCardProps> = ({
  date,
  hours,
  children,
  accept,
  remove
}) => {
  return (
    <Container>
      <Flex>
        <Time>{`${date} às ${hours}`}</Time>
        <Flex>
          <ButtonIcons width="30px">
            <IconSvg src={checkCommentIcon} description="Aceitar comentário" />
          </ButtonIcons>
          <ButtonIcons width="30px" margin="0 0 0 0.32rem">
            <IconSvg src={removeCommentIcon} description="Remover comentário" />
          </ButtonIcons>
        </Flex>
      </Flex>

      <Text> {children} </Text>
    </Container>
  );
};

export { CommentsCard };
