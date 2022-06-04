import styled from "styled-components";
import { Theme } from "../../../../@types/theme";

export const Container = styled.div`
  display: grid;
  height: 40px;
  max-width: 120px;
  margin-left: 0.1rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1600px) {
    max-width: 100px;
    height: 36px;
  }

  @media (max-width: 1366px) {
    max-width: 90px;
    height: 32px;
    margin-right: 0rem;
  }
`;

export const BoxDecrement = styled.button`
  height: 100%;
  border-top: 2px solid ${({ theme }: Theme) => theme.colors.gray300};
  border-bottom: 2px solid ${({ theme }: Theme) => theme.colors.gray300};
  border-left: 2px solid ${({ theme }: Theme) => theme.colors.gray300};
  font-size: 1.8rem;
`;

export const BoxIncrement = styled.button`
  height: 100%;
  border-bottom: 2px solid ${({ theme }: Theme) => theme.colors.gray300};
  border-top: 2px solid ${({ theme }: Theme) => theme.colors.gray300};
  border-right: 2px solid ${({ theme }: Theme) => theme.colors.gray300};
  font-size: 1.8rem;
`;

export const Flex = styled.div`
  max-width: 50px;
  height: 100%;
`;

export const NumberArea = styled.input`
  max-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0;
  border: none;
  border: 2px solid ${({ theme }: Theme) => theme.colors.gray300};
  height: 100%;

  @media (max-width: 1600px) {
    max-width: 43px;
  }

  @media (max-width: 1366px) {
    max-width: 34px;
  }
`;
