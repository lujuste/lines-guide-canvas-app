import styled from "styled-components";
import { Theme } from "../../../../@types/theme";

interface InputDefaultProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
}

export const InputDefault = styled.input<any>`
  width: 100%;
  min-height: ${({ height }) => (height ? height : "100px")};
  border: ${({ border }) => (border ? border : "none")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "")};
  border-bottom: ${({ borderBottom }) => (borderBottom ? borderBottom : "")};
  padding: 0rem 3.2rem 0 3.2rem;

  &::placeholder {
    font-size: 1.8rem;
    color: ${({ theme }: Theme) => theme.colors.gray900};
    line-height: 2.7rem;
    text-transform: ${({ textTransform }) =>
      textTransform ? textTransform : ""};
  }
`;
