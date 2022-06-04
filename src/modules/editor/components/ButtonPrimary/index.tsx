import { ReactNode } from "react";
import { Button } from "./styles";

interface ButtonClausesProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  height?: string;
  borderRadius?: string;
}

const ButtonPrimary: React.FC<ButtonClausesProps> = ({
  height,
  children,
  borderRadius,
  ...rest
}) => {
  return (
    <Button borderRadius={borderRadius} height={height} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonPrimary;
