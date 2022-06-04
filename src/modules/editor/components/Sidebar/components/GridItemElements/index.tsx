import { ReactNode } from "react";
import { GridItem } from "./styles";

interface GridItemElementsProps {
  src?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
  css?: any;
}

const GridItemElements: React.FC<GridItemElementsProps> = ({
  src,
  description,
  className,
  children,
  css,
  ...rest
}): JSX.Element => {
  return (
    <GridItem style={css} {...rest}>
      {children}
    </GridItem>
  );
};

export default GridItemElements;
