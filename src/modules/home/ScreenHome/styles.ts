import styled from "styled-components";
import { Theme } from "../../../@types/theme";

export const Barner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 25.8rem;
  width: 100%;
  border-radius: 0px 0px 0px 40px;
  background: linear-gradient(180deg, #663399 0%, #000000 201.55%);
  height: 25%;

  @media (max-width: 1600px) {
    height: 20rem;
  }

  @media (max-width: 1366px) {
    height: 15rem;
  }

  @media (max-width: 1280px) {
    height: 10rem;
  }
`;

export const BarnerTitle = styled.h2`
  color: #fff;
  font-family: "Roboto";
  font-weight: 300;
  font-size: 2.8rem;
  text-align: center;

  @media (max-width: 1600px) {
    font-size: 2.2rem;
  }

  @media (max-width: 1366px) {
    font-size: 2rem;
  }

  @media (max-width: 1280px) {
    font-size: 1.6rem;
  }
`;

export const LegalDesign = styled.label`
  color: #fff;
  font-family: "Roboto";
  font-weight: 300;
  font-size: 6rem;
  text-align: center;

  @media (max-width: 1600px) {
    font-size: 4rem;
  }

  @media (max-width: 1366px) {
    font-size: 3rem;
  }

  @media (max-width: 1280px) {
    font-size: 1.6rem;
  }
`;

export const BarnerFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .create-project-main {
    @media (max-width: 1600px) {
      width: 3rem;
      height: 3rem;
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

export const StartNowLabel = styled.h3`
  color: #fff;
  font-size: 2.4rem;
  font-weight: 400;
  padding-left: 20px;

  @media (max-width: 1600px) {
    font-size: 2.1rem;
  }

  @media (max-width: 1366px) {
    font-size: 2rem;
  }

  @media (max-width: 1280px) {
    font-size: 1.4rem;
  }
`;

export const ContainerDocItem = styled.div`
  align-self: flex-end;
  justify-self: end;
  position: absolute;
  right: 1.5rem;
  top: auto;
  border: auto;
`;

export const Button = styled.div`
  display: flex;
  font-family: "Roboto";
  height: 7.5rem;
  margin-top: 0.3rem;
  padding-left: 3rem;
  border-radius: 0px 0px 0px 20px;
  justify-content: left;
  align-items: center;
  font-size: 2.2rem;
  cursor: pointer;
  color: ${({ theme }: Theme) => theme.colors.border};

  :hover {
    color: ${({ theme }: Theme) => theme.colors.background};
  }

  label {
    font-weight: 500;
    user-select: none;
    margin-left: 2.8rem;
    user-select: none;
    cursor: pointer;
  }

  :hover {
    background-color: #fff;
    cursor: pointer;
  }

  @media (max-width: 1600px) {
    font-size: 1.6rem;
    height: 7rem;
    padding-left: 2rem;
  }

  @media (max-width: 1366px) {
    font-size: 1.3rem;
    height: 7rem;
  }

  @media (max-width: 1280px) {
  }

  .icons {
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

export const BoxUpdatesLabel = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
`;

export const UpdatesLabel = styled.h2`
  font-size: 2rem;

  @media (max-width: 1600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1366px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1280px) {
    font-size: 1.2rem;
  }
`;

export const GridContainerTemplates = styled.div`
  height: 65%;
  flex-wrap: wrap;
  overflow-y: auto;
  //display: grid;
  //grid-template-columns: repeat(3, 1fr);
  //grid-gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ::after {
    content: "";
    width: 100%;
    height: 3rem;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonNewProject = styled.button`
  background: transparent;
`;
