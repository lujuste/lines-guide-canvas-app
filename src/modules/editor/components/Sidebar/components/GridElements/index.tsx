import { ReactNode } from "react";
import { Grid } from "./styles";

interface GridElementsProps {
  children: ReactNode;
  className?: string;
  marginTop?: string;
  columns: number;
}

const GridElements: React.FC<GridElementsProps> = ({
  children,
  className,
  marginTop,
  columns,
  ...rest
}): JSX.Element => {
  return (
    <Grid
      columns={columns}
      marginTop={marginTop}
      className={className}
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default GridElements;
