import styled from "styled-components";

interface GridProps {
  marginTop?: string;
  columns: number;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  gap: 20px;
  margin: ${({ marginTop }) => marginTop && marginTop};
  padding-top: 2rem;

  @media (max-width: 1600px) {
    padding-top: 1.5rem;
  }

  @media (max-width: 1366px) {
    padding-top: 1rem;
  }
`;
