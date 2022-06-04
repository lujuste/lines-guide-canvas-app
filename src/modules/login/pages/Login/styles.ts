import styled from "styled-components";
import { Theme } from "../../../../@types/theme";
import { lighten, darken } from "polished";

export const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to top,
    ${({ theme }: Theme) => theme.colors.gradientBody},
    ${({ theme }: Theme) => theme.colors.gradientBody2} 80%
  );
  margin: 0 auto;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1220px;
  height: 100%;
  overflow-x: hidden;
`;

export const FormBox = styled.form`
  width: 844px;
  margin: auto 2rem;
  display: flex;
  padding: 10px 0 2px 0;
  flex-direction: column;
  height: 676px;
  background: ${({ theme }: Theme) => theme.colors.primary};
  border-radius: 30px;
  box-shadow: -1px 1px 15px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 1px 15px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 15px -3px rgba(0, 0, 0, 0.75);

  .img-logo {
    margin: 7.5rem auto 1rem auto;
    width: 252.78px;
    height: 53px;
  }

  @media (max-width: 1610px) {
    width: 720px;
    height: 560px;

    .img-logo {
      margin: 7.5rem auto 1rem auto;
      width: 192.78px;
      height: 43px;
    }
  }

  @media (max-width: 1399px) {
    width: 620px;
    height: 488px;

    .img-logo {
      margin: 4.5rem auto 0rem auto;
      width: 162.78px;
      height: 43px;
    }
  }
`;

export const LoadingFlex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  max-width: 548px;
  height: 360px;
  padding: 0 2rem;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  justify-content: center;
`;

export const Input = styled.input`
  margin: 0.9rem auto;
  width: 100%;
  max-width: 418px;
  height: 45px;
  border: none;
  border-bottom: 4px solid ${({ theme }: Theme) => theme.colors.background};
  border-radius: 2px;
  padding: 1rem 1rem 1rem 0rem;

  &::placeholder {
    font-size: 1.25rem;
    font-family: "Roboto";
    font-weight: 400;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 423px;
  height: 58px;
  margin: 0 auto;
  font-size: 1.25rem;
  font-family: "Roboto";
  font-weight: 600;
  margin-top: 3rem;
  color: ${({ theme }: Theme) => theme.colors.primary};
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.gradientBody},
    ${({ theme }) => theme.colors.gradientBody2} 148%
  );

  transition: all 0.9s linear;

  &:hover {
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.colors.black},
      ${({ theme }) => theme.colors.black} 148%
    );
  }
`;
