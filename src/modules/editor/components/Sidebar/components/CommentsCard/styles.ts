import styled from "styled-components";
import { Theme } from "../../../../../../@types/theme";

export const Container = styled.div`
  width: 100%;
  min-height: 139px;
  border: 1px solid ${({ theme }: Theme) => theme.colors.gray300};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  margin-bottom: 2.4rem;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

export const Time = styled.h4`
  font-size: 1.6rem;
  font-weight: "Roboto", sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray300};
  margin-top: 1.92rem;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  font-weight: "Roboto", sans-serif;
  font-weight: 400;
  color: black;
  color: ${({ theme }) => theme.colors.gray300};
  margin-top: 0.8rem;
  line-height: 2.4rem;
`;
