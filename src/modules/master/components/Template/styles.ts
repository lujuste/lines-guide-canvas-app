import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1600px) {
    height: 45rem;
  }

  @media (max-width: 1366px) {
    height: 40rem;
  }

  @media (max-width: 1280px) {
    height: 38rem;
  }

  .img {
    cursor: pointer;
  }
`;
