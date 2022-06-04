import { ReactNode } from "react";
import { Box } from "./styles";

interface CardElementsProps {
  src?: string;
  description?: string;
  children?: ReactNode;
  image?: string;
  grab?: boolean;
  className?: string;
}

const CardElements: React.FC<CardElementsProps> = ({
  src,
  description,
  image,
  children,
  grab,
  className
}) => {
  return <Box className={className}>{children}</Box>;
};

export default CardElements;
