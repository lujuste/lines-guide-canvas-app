import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Container = styled.div`
  margin-left: 42%;
`;

export const ComponentButton = styled.button<ButtonProps>`
  width: 300px;
  height: 100px;
  font-size: 30px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.black};
  border: 5px solid ${props => props.theme.colors.border};
  border-radius: 5px;
`;
