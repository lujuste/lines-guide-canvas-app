import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Header = styled.div`
  height: 10;
  width: 100%;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
`;

export const UpdatesLabel = styled.h2`
  margin-top: 2rem;
  margin-bottom: 3.2rem;
  font-size: 2rem;
  font-weight: 500;

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
  height: 90%;
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: visible;
  padding-left: 2%;
  padding-right: 2%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  grid-gap: 1rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;
