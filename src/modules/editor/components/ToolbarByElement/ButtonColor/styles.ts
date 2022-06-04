import styled from "styled-components";
import { Theme } from "../../../../../@types/theme";

interface ButtonToolbarColorProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  newColor: string;
}

interface BoxColorInputProps {
  randomColor?: any;
  color?: any;
}

export const ButtonToolbarColor = styled.div<ButtonToolbarColorProps>`
  background: ${props => (props.newColor ? props.newColor : "")};
  display: flex;
  border-radius: 10px;
  border: none;
  width: 35px;
  height: 35px;
  border: 1px solid ${({ theme }: Theme) => theme.colors.gray300};

  @media (max-width: 1602px) {
    width: 30px;
    height: 30px;
    border-radius: 8px;
  }

  @media (max-width: 1366px) {
    width: 27px;
    height: 27px;
    border-radius: 7px;
  }
`;

export const DropDownContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: blue;
`;

export const Container = styled.div`
  display: flex;
  margin-right: 0.64rem;
  height: 35px;
  justify-content: center;
  position: relative;
  align-items: center;
`;

export const DropDownHeader = styled.div<{ Open: boolean }>`
  display: flex;
  align-items: center;
  padding-left: 0.32rem;
  justify-content: space-between;
  font-weight: bold;
  height: 100%;
  font-size: 1.6rem;
  color: ${({ theme }: Theme) => theme.colors.black};
  background: ${({ theme }: Theme) => theme.colors.primary};
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
  margin-top: 0.9rem;
  padding: 1em;
  position: absolute;
  width: 311px;
  background: white;
  box-shadow: 1px 3px 41px -15px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: 1px 3px 41px -15px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 1px 3px 41px -15px rgba(0, 0, 0, 0.21);
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: "Roboto";
  color: ${({ theme }: Theme) => theme.colors.black};
  font-size: 1.44rem;
  font-weight: 500;
  z-index: 99;
  &:hover {
    cursor: pointer;
  }

  &:first-child {
    padding-top: 1.2em;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 1.2em;
`;

export const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export const GridItem = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 5px;
`;

export const BoxColor = styled.li`
  width: 40px;
  height: 40px;
  background: ${({ color }) => color};
  border-radius: 10px;
  border: 1px solid ${({ theme }: Theme) => theme.colors.gray300};
  display: flex;
  align-items: center;

  & .btn-get-colors {
    border-radius: 10px;
    border: 1px solid ${({ theme }: Theme) => theme.colors.gray300};
    background: red;
  }

  & .popover-color {
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 100%;
  }

  & .cover-color {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 99;
    left: 320px;
  }
`;

export const BoxColorInput = styled.li<BoxColorInputProps>`
  width: 40px;
  height: 40px;
  background: ${({ color }) => color};
  border-radius: 10px;
  border: 1px solid ${({ theme }: Theme) => theme.colors.gray300};
  display: flex;
  align-items: center;

  & .btn-get-colors {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 1px solid ${({ theme }: Theme) => theme.colors.gray300};
    background: ${({ randomColor, color }) =>
      randomColor
        ? "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)"
        : "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)"};
  }

  & .popover-color {
    position: absolute;
    z-index: 99;
  }

  & .cover-color {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 99;
    left: 320px;
  }
`;

export const Text = styled.span<any>`
  font-size: 1.5rem;
  color: ${({ theme }: Theme) => theme.colors.black};
  margin: ${({ margin }) => (margin ? margin : "0 0 0.9rem 0")};
`;

export const HorizontalStack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 1.6rem;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerInputColor = styled.form`
  height: 50px;
  margin: auto 0;
  max-width: 220px;
  justify-content: space-around;
  padding: 0 1.6rem;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  display: flex;

  input {
    border: none;
    width: 100%;
    height: 100%;
    background: transparent;
  }
`;

export const VerticalStack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 1.6rem 0;
  flex-direction: column;
`;
