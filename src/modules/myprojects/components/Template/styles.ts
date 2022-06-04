import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 55rem;
  width: 32.8rem;
  user-select: none;

  @media (max-width: 1600px) {
    width: 33rem;
    height: 45rem;
  }

  @media (max-width: 1366px) {
    width: 25rem;
    height: 40rem;
  }

  @media (max-width: 1280px) {
    width: 25rem;
  }

  .img {
    cursor: pointer;
  }
`;

export const TemplateThumbnail = styled.img`
  width: 80%;
  height: 70%;
  border-radius: 1rem;
  background-color: #fff;
  filter: drop-shadow(5px 5px 20px rgba(0, 0, 0, 0.25));
`;

export const TemplateName = styled.textarea`
  text-align: center;
  font-size: 1.8rem;
  color: #a5a5a5;
  margin-top: 1.5rem;
  border: none;
  resize: none;
`;

export const BottomSpace = styled.div`
  height: 3rem;
  width: 100%;
`;
