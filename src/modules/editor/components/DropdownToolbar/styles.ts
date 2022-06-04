import styled from "styled-components";
import { Theme } from "../../../../@types/theme";

export const DropDownContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: blue;
`;

export const Container = styled.div`
  display: flex;
  max-width: 140px;
  width: 100%;
  margin-right: 0.64rem;
  height: 35px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1600px) {
    width: 120px;
  }

  @media (max-width: 1366px) {
    width: 110px;
    margin: 0 1rem;
  }
`;

export const DropDownHeader = styled.div<{ Open: boolean }>`
  display: flex;
  align-items: center;
  padding-left: 0.82rem;
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

  @media (max-width: 1600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1366px) {
    font-size: 1.4rem;
  }
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 0.9rem;
  padding-left: 1.6em;
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
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media (max-width: 1366px) {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;
