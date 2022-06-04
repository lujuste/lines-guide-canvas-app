import { HTMLProps } from "react";
import styled from "styled-components";
import { Theme } from "../../../../@types/theme";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  borderRadius?: string;
}

export const DropDownContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  z-index: 10;
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  max-width: 146px;
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: center;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "7px")};
  border: 1px solid ${({ theme }: Theme) => theme.colors.gray300};
`;

export const DropDownHeader = styled.div<{ Open: boolean }>`
  display: flex;
  align-items: center;
  padding-left: 0.48rem;
  padding-right: 0.48rem;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  height: 100%;
  text-align: center;
  font-size: 1.6rem;
  color: ${({ theme }: Theme) => theme.colors.gray300};

  &:hover {
    cursor: pointer;
  }

  .effect-arrow {
    transition: all 0.1s ease-in;
    transform: ${props => (props.Open ? "rotateZ(-180deg)" : "")};
  }
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 0.4rem;
  padding-left: 0.52em;
  text-align: center;
  background: white;
  box-shadow: 1px 3px 41px -15px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: 1px 3px 41px -15px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 1px 3px 41px -15px rgba(0, 0, 0, 0.21);
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: "Roboto";
  color: ${({ theme }: Theme) => theme.colors.black};
  font-size: 1.6rem;
  font-weight: 500;
  z-index: 1000;

  &:hover {
    cursor: pointer;
  }

  &:first-child {
    padding-top: 1.28em;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 1.28em;
`;
