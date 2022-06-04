import styled from "styled-components";

export const InputDefault = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  padding: 0 1rem;

  &::placeholder {
    text-transform: uppercase;
    font-size: 1.6rem;
    line-height: 150%;
    color: #d8d8d8;
  }
`;
