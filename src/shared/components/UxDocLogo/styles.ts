import styled from "styled-components";

export const LogoBox = styled.div`
  height: 3.2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .icon {
    @media (max-width: 1600px) {
      width: 16rem;
    }

    @media (max-width: 1366px) {
      width: 14rem;
    }

    @media (max-width: 1280px) {
      width: 12rem;
    }
  }
`;

export const Image = styled.image``;
