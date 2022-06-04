import styled from "styled-components";
import { Theme } from "../../../../@types/theme";

export const CanvasContainer = styled.div`
  width: 611px;
  height: 920px;
  background: transparent;
  margin: 1.6rem 0;
`;

export const HorizontalStack = styled.div`
  display: flex;
  width: 596px;
  height: 48px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export const FlexRow = styled.div`
  display: flex;
  max-width: 190px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 1600px) {
    max-width: 170px;
  }

  @media (max-width: 1366px) {
    max-width: 150px;
  }
`;

