import styled from "styled-components";

const width = window.innerWidth;
const height = window.innerHeight;

export const Container = styled.div`
  width: ${width}px;
  height: ${height}px;
  background-color: #000;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
`;
