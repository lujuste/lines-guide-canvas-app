import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}
interface TextProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isActive?: boolean;
  children?: ReactNode;
}

export const ButtonCheckOption = styled.button<ButtonPrimaryProps>`
  flex: 0.5;
  background: ${({ isActive }) => (isActive ? "transparent" : "transparent")};
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 1.8rem;
  border-bottom: ${({ isActive, theme }) =>
    isActive ? `6px solid ${theme.colors.background}` : ""};
`;

export const Text = styled.p<TextProps>`
  font-size: ${({ isActive }) => isActive && "1.8rem"};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.black : theme.colors.gray300};

  @media (max-width: 1600px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1600px) {
    font-size: 1.5rem;
  }
`;
