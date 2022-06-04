import React from "react";
import { useTheme } from "../../../hooks/theme";
import { ComponentButton, Container } from "./styles";

const Button: React.FC = () => {
  const { toggleTheme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <Container>
      <ComponentButton onClick={handleToggleTheme}>
        mudar o tema
      </ComponentButton>
    </Container>
  );
};

export default Button;
