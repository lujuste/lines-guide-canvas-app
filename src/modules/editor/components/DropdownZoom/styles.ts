import styled from "styled-components";
import { Theme } from "../../../../@types/theme";

export const DropDownContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  width: 80px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  border: 1px solid ${({ theme }: Theme) => theme.colors.gray300};

  @media (max-width: 1600px) {
    width: 72px;
  }

  @media (max-width: 1366px) {
    width: 60px;
    height: 30px;
  }
`;

export const DropDownHeader = styled.div<{ Open: boolean }>`
  display: flex;
  align-items: center;
  padding-left: 0.48rem;
  padding-right: 0.48rem;
  justify-content: space-between;
  font-weight: 400;
  height: 100%;
  text-align: center;
  font-size: 1.6rem;
  color: ${({ theme }: Theme) => theme.colors.black};

  @media (max-width: 1600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1366px) {
    font-size: 1.3rem;
  }

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
  padding-left: 0.2em;
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

  &:hover {
    cursor: pointer;
  }

  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;
