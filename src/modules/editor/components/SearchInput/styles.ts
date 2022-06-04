import styled from "styled-components";
import { Theme } from "../../../../@types/theme";;

export const FlexContainer = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  margin-top: 0.6rem;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }: Theme) => theme.colors.gray900};
  position: relative;
  & .search-icon {
    width: 40px;
    height: 40px;
  }
`;

export const VerticalStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0.2em;
`;

export const HorizontalStack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & .testandoicone {
    width: 35px;
    height: 35px;
    margin-right: 0.8rem;
  }
`;

export const DropDownContainer = styled.div`
  margin: 0 auto;
  display: flex;
`;

export const DropDownHeader = styled.div<{ Open: boolean }>`
  display: flex;
  align-items: center;
  padding-left: 0.2rem;
  justify-content: flex-end;
  font-weight: bold;
  width: 20px;
  height: 100%;
  font-size: 1.6rem;
  color: ${({ theme }: Theme) => theme.colors.black};
  background: ${({ theme }: Theme) => theme.colors.primary};
  &:hover {
    cursor: pointer;
  }

  & .filter-icon-svg {
    width: 35px;
    height: 35px;
  }
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 0.9rem;
  position: absolute;
  padding: 1em;
  top: 40px;
  right: 10px;
  bottom: 0;
  min-height: 180px;
  width: 260px;
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
  color: #a5a5a5;
  display: flex;
  align-items: center;
`;
