import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;

  align-items: center;
  overflow: hidden;

  .icon {
  }
`;

export const BorderView = styled.div`
  border-bottom: 0.5rem #a5a5a5 solid;
  width: 60%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  height: 5rem;
  padding-left: 2.5rem;
  border: 0;
  font-size: 2rem;

  @media (max-width: 1600px) {
    font-size: 1.9rem;
  }

  @media (max-width: 1366px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }

  ::placeholder {
    color: #d8d8d8;
  }
`;

export const Button = styled.div`
  width: 30%;
  margin-left: 5%;
  background-color: #000;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.3rem;
  border-radius: 1.2rem;
  cursor: pointer;

  .icon-add {
    width: 3rem;

    @media (max-width: 1600px) {
      width: 3rem;
    }

    @media (max-width: 1366px) {
      width: 3rem;
    }

    @media (max-width: 1280px) {
      width: 2.5rem;
    }
  }
`;

export const LabelButton = styled.label`
  font-size: 2.4rem;
  color: #fff;
  padding-left: 5%;
  user-select: none;
  cursor: pointer;

  @media (max-width: 1600px) {
    font-size: 2.1rem;
  }

  @media (max-width: 1366px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1280px) {
    font-size: 1.6rem;
  }
`;
