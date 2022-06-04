import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 1.6rem auto;
`;

export const CardImage = styled.div`
  max-width: 236px;
  width: 100%;
  height: 100%;
  height: 236px;
  border-radius: 10px;
  background: #f5f6fa;
`;

export const CardInfos = styled.div`
  max-width: 332px;
  width: 100%;
  height: 100px;
  display: flex;
  padding-left: 0.8rem;
  background: #f5f6fa;
  justify-content: space-evenly;
  margin-left: auto;
  margin: auto 0 auto auto;
  flex-direction: column;
`;

export const Heading = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.background};
`;

export const Text = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.36rem;
  color: ${({ theme }) => theme.colors.background};
`;

export const SimpleItalicText = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.black};
`;
