import styled from "styled-components";
import { Theme } from "../../../@types/theme";

export const Container = styled.div`
  display: flex;
  font-family: "Roboto";
  padding-left: 3rem;
  border-radius: 0px 0px 0px 20px;
  justify-content: left;
  height: 7.5rem;

  align-items: center;
  font-size: 2.2rem;
  cursor: pointer;

  color: ${({ theme }: Theme) => theme.colors.border};
  :hover {
    color: ${({ theme }: Theme) => theme.colors.background};
    background-color: #fff;
  }

  label {
    font-weight: 500;
    user-select: none;
    margin-left: 2.8rem;
    user-select: none;
    cursor: pointer;
  }

  @media (max-width: 1600px) {
    font-size: 1.6rem;
    height: 6rem;
    padding-left: 2rem;
  }

  @media (max-width: 1366px) {
    font-size: 1.3rem;
    height: 5rem;
  }

  @media (max-width: 1280px) {
    height: 4rem;
  }

  :hover {
    background-color: #fff;
    cursor: pointer;
  }

  /*for changing icon's height*/
  .icon {
    @media (max-width: 1600px) {
      width: 2.2rem;
      height: 2.2rem;
    }

    @media (max-width: 1366px) {
      width: 2rem;
      height: 2rem;
      
    }

    @media (max-width: 1280px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const ButtonText = styled.label``;
