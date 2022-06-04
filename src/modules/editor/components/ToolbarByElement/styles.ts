import React from "react";
import styled from "styled-components";
import { Theme } from "../../../../@types/theme";

interface ButtonColor extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  maxWidth?: string;
}

interface TextProps extends React.HTMLProps<HTMLTextAreaElement> {
  isActive?: boolean;
  theme?: any;
  margin?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "")};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 60;

  & .btn-toolbar {
    align-items: center;
    display: flex;
    background: transparent;
    width: 40px;
    height: 40px;
    justify-content: center;
    border-radius: 10px;
    position: relative;
    z-index: 90;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const ContainerDefaultPage = styled.div<ContainerProps>`
  width: 100%;
  max-width: 460px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 60;

  & .btn-toolbar {
    align-items: center;
    display: flex;
    background: transparent;
    width: 40px;
    height: 40px;
    justify-content: center;
    border-radius: 10px;
    position: relative;
    z-index: 90;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const ContainerRightDefaultPage = styled.div`
  width: 100%;
  max-width: 180px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 60;

  & .btn-toolbar {
    align-items: center;
    display: flex;
    background: transparent;
    width: 40px;
    height: 40px;
    justify-content: center;
    border-radius: 10px;
    position: relative;
    z-index: 90;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 1600px) {
    max-width: 16%;
  }
`;

export const ContainerRightBlankPage = styled.div`
  width: 100%;
  max-width: 180px;
  height: 100%;
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: flex-end;
  z-index: 60;

  & .btn-toolbar {
    align-items: center;
    display: flex;
    background: transparent;
    width: 40px;
    height: 40px;
    justify-content: center;
    border-radius: 10px;
    position: relative;
    z-index: 90;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 1600px) {
    max-width: 180px;
  }

  @media (max-width: 1600px) {
    max-width: 150px;
  }
`;

export const ContainerLeftBlankPage = styled.div`
  width: 100%;
  max-width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 60;

  & .btn-toolbar {
    align-items: center;
    display: flex;
    background: transparent;
    width: 40px;
    height: 40px;
    justify-content: center;
    border-radius: 10px;
    position: relative;
    z-index: 90;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 1600px) {
    max-width: 150px;
  }
`;

export const ContainerBlankPage = styled.div<ContainerProps>`
  width: 100%;
  max-width: 240px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 60;

  & .btn-toolbar {
    align-items: center;
    display: flex;
    background: transparent;
    width: 40px;
    height: 40px;
    justify-content: center;
    border-radius: 10px;
    position: relative;
    z-index: 90;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 1600px) {
    max-width: 240px;
  }
`;

export const ContainerImageLeft = styled.div<ContainerProps>`
  width: 100%;
  max-width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 60;

  & .btn-toolbar {
    align-items: center;
    display: flex;
    background: transparent;
    width: 40px;
    height: 40px;
    justify-content: center;
    border-radius: 10px;
    position: relative;
    z-index: 90;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 1600px) {
    max-width: 80px;
  }
`;

export const ContainerImage = styled.div`
  max-width: 0px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 60;
  & .btn-toolbar {
    align-items: center;
    display: flex;
    background: transparent;
    width: 40px;
    height: 40px;
    justify-content: center;
    border-radius: 10px;
    position: relative;
    z-index: 90;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  max-width: 170px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ColorProperty = styled.button<ButtonColor>`
  background: ${props => (props.color ? props.color : "")};
  display: flex;
  border-radius: 10px;
  border: none;
  width: 35px;
  height: 35px;
`;

export const Text = styled.p<TextProps>`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme, isActive }: TextProps) =>
    isActive ? theme.colors.black : theme.colors.background};
  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const ButtonToolbarIcon = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  justify-content: center;
  width: 40px;
  height: 40px;
`;
