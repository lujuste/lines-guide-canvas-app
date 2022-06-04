import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 10%;
  justify-content: center;
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
  display: grid;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  overflow-y: scroll;
  padding-bottom: 10rem;
  grid-column-gap: 12rem;
  grid-row-gap: 5rem;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1680px) {
    padding: 0 2rem;
    grid-column-gap: 8rem;
  }

  @media (max-width: 1366px) {
    grid-column-gap: 4rem;
  }
`;
