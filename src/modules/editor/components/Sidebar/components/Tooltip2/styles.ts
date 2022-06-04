import { HTMLProps } from "react";
import styled, { css, keyframes } from "styled-components";
import { Theme } from "../../../../../../@types/theme";

interface CenterContainerProps extends HTMLProps<HTMLDivElement> {
  position?: string;
  positionAt?: any;
}

interface TooltipBoxProps extends HTMLProps<HTMLSpanElement> {
  position?: string;
}

export const TooltipWrapper = styled.div`
  position: inherit;
  display: inline-flex;
`;

export const TooltipTarget = styled.button`
  border: none;
  background: none;
  color: inherit;
  cursor: inherit;
  display: flex;
`;

export const CenterContainer = styled.div<CenterContainerProps>`
  position: absolute;
  width: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 100px;
  right: 0%;
  top: calc(100%);
  pointer-events: none;

  transition: all ease-in-out;

  ${({ position }) => {
    switch (position) {
      case "bottom":
        return css`
          bottom: unset !important;
          top: calc(80% + 5px);
        `;

      case "left":
        return css`
          display: none;
        `;
      case "right":
        return css`
          display: none;
        `;
      case "top":
        return css`
          display: none;
        `;
      default:
        return css`
          bottom: unset;
          top: calc(100% + 5px);
        `;
    }
  }}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const TooltipBox = styled.span<TooltipBoxProps>`
  position: relative;
  background: ${({ theme }: Theme) => theme.colors.black};
  color: ${({ theme }: Theme) => theme.colors.primary};
  text-align: center;
  border-radius: 5px;
  display: block;
  max-width: 180px;
  width: 80px;
  padding: 10px 8px;
  z-index: 999;
  margin-top: 1.6rem;
  font-size: 1.12rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);

  &:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #000 transparent;
    left: calc(49% - 4.5px);
    bottom: 100%;
    z-index: 999;
  }

  animation: ${fadeIn} 1s linear;

  ${({ position }) => {
    switch (position) {
      case "bottom":
        return css`
          &::after {
            border-color: #000 transparent transparent transparent;
            top: unset;
            width: 1px;
            bottom: 100%;
            z-index: 999;
          }
        `;

      case "left":
        return css`
          &::after {
            border-color: red;
            top: unset;
            width: 1px;
            bottom: 100%;
            left: calc(50% - 5px);
          }
        `;

      case "right":
        return css`
          &::after {
            border-color: red;
            top: unset;
            width: 1px;
            bottom: 100%;
            left: calc(50% - 5px);
          }
        `;

      case "top":
        return css`
          &::after {
            border-color: red;
            top: unset;
            width: 1px;
            bottom: 100%;
          }
        `;

      default:
        return css``;
    }
  }}
`;

