import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10rem;

  @media (max-width: 1600px) {
    width: 30rem;
  }

  @media (max-width: 1366px) {
    width: 25rem;
  }

  @media (max-width: 1280px) {
    width: 25rem;
  }

  .img {
    cursor: pointer;
  }
`;

export const TemplateName = styled.label`
  text-align: center;
  font-size: 1.8rem;
  color: #a5a5a5;
`;

export const BottomSpace = styled.div`
  height: 3rem;
  width: 100%;
`;

export const TemplateItem = styled.div``;
