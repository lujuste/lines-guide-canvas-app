import styled from "styled-components";
import { Theme } from "../../../../../@types/theme";

interface DashProps {
  dash?: number[];
}

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropDownContainer = styled.div`
  margin: 0 auto;
  display: flex;
`;

export const DropDownHeader = styled.div<{ Open: boolean }>`
  display: block;

  &:hover {
    cursor: pointer;
  }
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 0.9rem;
  position: absolute;
  padding: 1em;
  top: 50px;
  left: 190px;
  bottom: 0;
  min-height: 81px;
  width: 152px;
  background: white;
  box-shadow: 1px 3px 41px -15px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: 1px 3px 41px -15px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 1px 3px 41px -15px rgba(0, 0, 0, 0.21);
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: "Roboto";
  color: ${({ theme }: Theme) => theme.colors.black};
  font-size: 1.8rem;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }

  &:first-child {
    padding-top: 0.8em;
  }
`;

export const HorizontalStack = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const LineBarNormal = styled.div`
  margin-top: 1rem;
  border: 2px solid black;
  width: 100px;
`;

export const LineWithDash = styled.div<DashProps>`
  margin-top: 3rem;
  border: 2px solid black;
  border-style: dashed;
  width: 100px;
`;

export const HStack = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
