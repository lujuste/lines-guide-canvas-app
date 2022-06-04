import { ReactNode } from "react";
import { ListStyle, Wrapper } from "./styles";

interface ListProps {
  children: ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return (
    <Wrapper>
      <ListStyle>{children}</ListStyle>
    </Wrapper>
  );
};

export default List;
