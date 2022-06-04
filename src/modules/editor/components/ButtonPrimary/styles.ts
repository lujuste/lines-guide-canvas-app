import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  height?: string;
  borderRadius?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.black};
  min-height: ${({ height }) => (height ? height : "56px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "10px"};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Roboto";
  width: 100%;
`;
