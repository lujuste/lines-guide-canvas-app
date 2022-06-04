import styled, { css } from "styled-components";
import { Theme } from "../../../../@types/theme";

interface ContextMenuProps {
  top: number;
  left: number;
}

interface WrapperProps {
  margin?: string;
}

export const ContextMenu = styled.div<ContextMenuProps>`
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  width: 225px;
  max-height: 288px;
  z-index: 30;
  box-shadow: 1px 3px 41px -15px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: 1px 3px 41px -15px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 1px 3px 41px -15px rgba(0, 0, 0, 0.21);
  background-color: ${({ theme }: Theme) => theme.colors.primary};
  ${({ top, left }) => css`
    top: ${top}px;
    left: ${left}px;
  `}

  @media (max-width: 1600px) {
    width: 200px;
    max-height: 282px;
  }
`;

export const FlexList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 10;
  box-sizing: border-box;
  padding: 2rem;
`;

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;
  display: flex;
  margin: ${({ margin }) => (margin ? margin : "2.5rem 0")};
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1600px) {
    span {
      font-size: 1.4rem;
    }
  }
`;

export const Box = styled.div``;

export const Text = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  cursor: pointer;
  background: transparent;
`;
