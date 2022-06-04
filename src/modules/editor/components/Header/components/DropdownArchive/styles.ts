import styled from "styled-components";
import { Theme } from "../../../../../../@types/theme";

interface TextProps extends React.HTMLProps<HTMLTextAreaElement> {
  margin?: string;
}

export const DropDownContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-start;
  z-index: 99;
`;

export const Flex = styled.div`
  display: flex;
  max-width: 40px;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  position: relative;
  padding: 0 1.6rem;
  background: transparent;
  align-items: center;
`;

export const DropDownHeader = styled.div<{ Open: boolean }>`
  display: flex;
  align-items: center;
  padding-left: 0.32rem;
  justify-content: space-between;
  font-weight: bold;
  height: 100%;
  background: red;
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
  margin-top: 1.44rem;
  padding: 1.6em;
  position: absolute;
  width: 362px;
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
  z-index: 99;
  &:hover {
    cursor: pointer;
  }

  &:first-child {
    padding-top: 1.28em;
  }

  @media (max-width: 1600px) {
    font-size: 1.4rem;
    width: 289px;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 1em;
  z-index: 99;
  margin-top: 0.5em;
  margin-left: -5rem;

  @media (max-width: 1600px) {
    margin-right: 0rem;
  }
`;

export const WrapperButtons = styled.div`
  width: 100%;
  max-width: 302px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto 0rem 0;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  background: transparent;
  margin: 0.8rem 0;
  font-size: 1.6rem;
  line-height: 27px;
  justify-content: space-between;

  @media (max-width: 1600px) {
    font-size: 1.4rem;
  }
`;

export const Text = styled.p<TextProps>`
  font-family: "Roboto";
  font-size: 43px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  margin: ${props => (props.margin ? props.margin : "")};
  align-items: center;

  @media (max-width: 1366px) {
    font-size: 1.6rem !important;
  }

  @media (max-width: 1600px) {
    font-size: 1.7rem;
  }
`;

export const MiniBox = styled.div`
  max-width: 80px;
  width: 100%;
  height: 30px;
  background: #d9d9d9;
  border-radius: 5px;
`;
