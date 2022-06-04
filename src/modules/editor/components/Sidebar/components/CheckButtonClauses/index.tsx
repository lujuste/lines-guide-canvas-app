import { ReactNode } from "react";
import { ButtonCheckOption, Text } from "./styles";

interface CheckButtonClauses
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  label: string;
  children?: ReactNode;
}

const CheckButtonClauses: React.FC<CheckButtonClauses> = ({
  isActive,
  label,
  ...rest
}) => {
  return (
    <>
      <ButtonCheckOption {...rest} isActive={isActive}>
        <Text isActive={isActive}> {label}</Text>
      </ButtonCheckOption>
    </>
  );
};

export default CheckButtonClauses;
