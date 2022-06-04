import styled from "styled-components";
import { Theme } from "../../../../../../@types/theme";

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

export const ContainerTextRight = styled.div`
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
    max-width: 150px;
    margin-left: 1.6rem;
  }

  @media (max-width: 1366px) {
    max-width: 145px;
  }
`;

export const ContainerText = styled.div<ContainerProps>`
  width: 100%;
  max-width: 900px;
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

    @media (max-width: 1366px) {
      width: 35px;
      height: 35px;
    }
  }

  @media (max-width: 1600px) {
    max-width: 790px;
  }

  @media (max-width: 1366px) {
    max-width: 680px;
  }
`;

export const ContainerLeft = styled.div<ContainerProps>`
  width: 100%;
  max-width: 160px;
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
    max-width: 130px;
  }

  @media (max-width: 1366px) {
    max-width: 130px;
    margin-right: 0rem;
    margin-right: 1rem;
  }
`;

export const Text = styled.p<TextProps>`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme, isActive }: TextProps) =>
    isActive ? theme.colors.black : theme.colors.background};
  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const FlexContainer = styled.div`
  width: 100%;
  max-width: 170px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media (max-width: 1366px) {
    max-width: 150px;
  }
`;

export const DropDownContainer = styled.div`
  margin: 0 auto;
  display: flex;
  position: relative;
`;

export const DropDownHeader = styled.div<{ Open: boolean }>`
  display: block;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropDownListContainer = styled.div`
  position: relative;
`;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 0.9rem;
  position: absolute;
  padding: 1em;
  top: 0;
  left: -65%;
  min-height: 230px;
  width: 160px;
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

export const ListItem = styled.li`
  list-style: none;
  padding-top: 1rem;
  margin-bottom: 0.8em;
  margin-top: 1rem;
  font-size: 1.8rem;
  color: #000;
  display: flex;
  align-items: center;

  @media (max-width: 1600px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1366px) {
    font-size: 1.5rem;
  }
`;

export const VerticalStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0.2em;
  padding-bottom: 3rem;
`;

export const DropDownListContainerAlign = styled.div`
  position: relative;

  @media (max-width: 1366px) {
    .icons-align-toolbar {
      width: 18px;
      height: 18px;
    }
  }
`;

export const DropDownListAlign = styled.div`
  padding: 0;
  margin: 0;
  margin-top: 0.9rem;
  position: absolute;
  padding: 1em;
  top: 0;
  left: -35%;
  min-height: 260px;
  width: 60px;
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
  @media (max-width: 1600px) {
    min-height: 230px;
  }

  @media (max-width: 1366px) {
    min-height: 200px;
  }
`;

export const ListItemAlign = styled.li`
  list-style: none;
  padding-top: 1rem;
  margin-bottom: 0.8em;
  margin-top: 1rem;
  font-size: 1.8rem;
  color: #000;
  display: flex;
  align-items: center;
`;

export const ButtonToolbarIsolate = styled.button`
  cursor: pointer;
  background: transparent;
`;

