import styled from "styled-components";
import { Theme } from "../../../../@types/theme";

export const ContainerModal = styled.form`
  max-width: 900px;
  height: 519px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  background: ${({ theme }: Theme) => theme.colors.primary};
  -webkit-box-shadow: 0px 2px 15px 5px rgba(0, 0, 0, 0.11);
  box-shadow: 0px 2px 15px 5px rgba(0, 0, 0, 0.11);
  position: relative;
  border-radius: 10px;
  padding: 0 1.6rem;
  justify-content: space-around;
  padding-bottom: 1.6rem;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  min-height: 73px;
  border-radius: 20px;
  align-items: center;
  border: solid 1px red;
  padding: 0 1.6rem;
  line-height: 190%;
  justify-content: center;
`;

export const Text = styled.span`
  color: red;
  font-size: 1.6rem;
  text-align: center;
  max-width: 700px;
`;

export const Wrapper = styled.div`
  display: flex;
  background: red;
  width: 100%;
  justify-content: space-between;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 227px;
  padding: 1, 6rem 1.6rem;
  border-radius: 20px;

  &::placeholder {
    font-size: 1.8rem;
    padding: 1rem 0 0 1rem;
    margin-left: 2rem;
    color: ${({ theme }: Theme) => theme.colors.gray900};
    line-height: 2.7rem;
  }
`;
