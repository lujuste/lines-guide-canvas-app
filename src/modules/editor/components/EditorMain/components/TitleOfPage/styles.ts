import styled from "styled-components";
import { Theme } from "../../../../../../@types/theme";

export const FlexRow = styled.div`
  display: flex;
  max-width: 190px;
  width: 100%;
  justify-content: space-between;
`;

export const TextPage = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ theme }: Theme) => theme.colors.gray300};
`;
