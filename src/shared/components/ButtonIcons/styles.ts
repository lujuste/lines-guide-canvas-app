import styled from "styled-components";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  width?: string;
  margin?: string;
  justifyContent?: string;
}

export const FlexContainer = styled.button<ButtonProps>`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  width: ${props => (props.width ? props.width : "25px")};
  align-items: center;
  margin: ${({ margin }) => (margin ? margin : "")};
  background: transparent;
`;
