import styled from "styled-components";
import { Theme } from "../../../../@types/theme";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 10vh 90vh;
  width: 100vw;
  height: 100vh;

  grid-template-areas:
    "aside header"
    "aside main";
`;

export const Aside = styled.aside`
  grid-area: aside;
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.gradientBody},
    ${({ theme }) => theme.colors.gradientBody2} 80%
  );

  display: grid;
  grid-template-columns: 1fr 10fr;
  grid-template-rows: 10vh 70vh 20vh;

  grid-template-areas:
    "asidegap asidetop"
    "asidegap asidemain"
    "asidegap asidefooter";
`;

export const AsideGap = styled.div`
  grid-area: asidegap;
  //background-color: azure;
`;

export const AsideTop = styled.div`
  grid-area: asidetop;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
  position: relative;
  //border-bottom: solid #c4c4c4 2px;

  ::after {
    position: absolute;
    content: "";
    height: 2px;
    width: 90%;
    background-color: #c4c4c4;
    bottom: 0;
    right: 0;
  }
`;

export const LogoBox = styled.div`
  height: 3.2rem;
`;

export const AsideMain = styled.div`
  grid-area: asidemain;
  display: flex;
  flex-direction: column;
  padding-top: 7.9rem;
  //background-color: black;
`;

export const AsideButton = styled.div`
  width: 100%;
  max-width: 22rem;
`;

export const AsideFooter = styled.div`
  grid-area: asidefooter;
  border-top: 2px #c4c4c4 solid;
`;

export const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const CentralBoxHeader = styled.div`
  width: 89.67%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const TopLine = styled.div`
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
  background-color: #a5a5a5;
`;

export const Main = styled.main`
  grid-area: main;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CentralBoxMain = styled.main`
  width: 89.67%;
  height: 100%;
  margin-top: 3.5rem;
`;

export const Barner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 25.8rem;
  width: 100%;
  border-radius: 0px 0px 0px 40px;
  background: linear-gradient(180deg, #663399 0%, #000000 201.55%);
  height: 30%;

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

export const UpdatesLabel = styled.h2`
  margin-top: 2rem;
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
  height: 70%;
  flex-wrap: wrap;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;
