import { HTMLProps } from "react";
import styled from "styled-components";
import { Theme } from "../../../../@types/theme";

interface HeadingProps {
  marginLeft: string;
}

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  marginBottom?: string;
}

export const Button = styled.button<ButtonProps>`
  width: 596px;
  height: 60px;
  display: flex;
  background: ${({ theme }: Theme) => theme.colors.gray500};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "")};
`;

export const Heading = styled.p<HeadingProps>`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  color: #a5a5a5;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "")};
`;
