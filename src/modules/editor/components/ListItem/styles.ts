import { HTMLProps } from "react";
import styled from "styled-components";

export const ListItemText = styled.li`
  width: 100%;
  min-height: 75px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-family: "Roboto";
  padding: 0 1.6rem;
  border-radius: 0px 0px 0px 20px;
  margin-top: 1.6rem;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundEditor};
  }
`;
