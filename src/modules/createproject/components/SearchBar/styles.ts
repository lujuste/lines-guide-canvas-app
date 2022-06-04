import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  align-items: center;
  overflow: hidden;
  border-bottom: 0.2rem #a5a5a5 solid;

  .icon {
  }
`;

export const Input = styled.input`
  height: 5rem;
  padding-left: 2.5rem;
  width: 100%;
  border: 0;
  font-size: 2rem;

  ::placeholder {
    color: #d8d8d8;
  }
`;
