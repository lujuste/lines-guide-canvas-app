import styled from "styled-components";
import { Theme } from "../../../../../../@types/theme";

interface BoxProps {
  grab?: boolean;
}

export const Box = styled.div<BoxProps>`
  width: 100%;
  min-height: 128px;
  position: relative;
  background: transparent;
  align-items: center;
  display: flex;
  justify-content: center;

  background: ${({ theme }: Theme) => theme.colors.gray300};
  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ grab }) => (grab ? "grabbing" : "grab")};
  border-radius: 10px;
  background-image: url();
  display: flex;
  justify-content: center;
  align-items: center;

  & .img-img {
    object-fit: cover;
    display: flex;
    height: 128px;
    width: 100%;
    border-radius: 10px;
  }

  .icons-elements-sidebar {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 1366px) {
  }
`;
