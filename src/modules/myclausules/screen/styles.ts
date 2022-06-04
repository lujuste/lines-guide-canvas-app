import styled from "styled-components";
import Modal from "react-modal";
import { Theme } from "../../../@types/theme";

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const ModalContainer = styled.div`
  height: 100%;

  h2 {
    font-size: 2.4rem;
    font-weight: 500;
    color: #ddd;
    font-family: "Roboto";
  }
`;

export const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: #ddd;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const DivBorder = styled.div`
  width: 100%;
  height: 60%;
  border: 0.1rem solid #ddd;
  border-radius: 2rem;
  padding: 3rem;
  margin-top: 2.5rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1600px) {
    height: 55%;
  }

  @media (max-width: 1366px) {
    height: 50%;
  }

  @media (max-width: 1280px) {
  }
`;

export const DivBorderBottom = styled.div`
  width: 100%;
  height: 15%;
  border: 0.1rem solid #ddd;
  border-radius: 2rem;
  padding: 3rem;
  margin-top: 2.4rem;

  @media (max-width: 1600px) {
  }

  @media (max-width: 1366px) {
    padding-top: 2rem;
  }

  @media (max-width: 1280px) {
    padding-top: 1rem;
  }
`;

export const InputText = styled.input`
  width: 100%;
  height: 5rem;
  border: 0;
  font-size: 2.4rem;
  font-weight: 500;
  font-family: "Roboto";
  padding-left: 1rem;
  padding-bottom: 1.5rem;

  ::placeholder {
    color: #d8d8d8;
  }
`;

export const InputTextArea = styled.textarea`
  font-size: 2.7rem;
  height: 100%;
  width: 100%;
  border: 0px;
  font-weight: 500;
  color: #000;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1600px) {
  }

  @media (max-width: 1366px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1280px) {
  }

  ::placeholder {
    color: #d8d8d8;
  }
`;

export const Warning = styled.label`
  color: #de2d2d;
  font-family: "Roboto";
  font-size: 1.6rem;
  font-weight: 500;

  @media (max-width: 1600px) {
    height: 55%;
  }

  @media (max-width: 1366px) {
    font-size: 1.4rem;
  }

  @media (max-width: 1280px) {
    font-size: 1.37rem;
  }
`;

export const SaveButton = styled.div`
  height: 6.3rem;
  background-color: #000;
  width: 100%;
  border-radius: 1rem;
  margin-top: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SaveButtonLabel = styled.label`
  color: #fff;
  font-size: 2.4rem;
  user-select: none;

  :hover {
    cursor: pointer;
  }

  ::selection {
    display: none;
  }
`;

export const ClausuleItemContainer = styled.div`
  margin-top: 5rem;
`;

export const ClausuleItem = styled.div`
  height: 9.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  border-radius: 0px 0px 0px 30px;
  cursor: pointer;

  :hover {
    background-color: #f5f6fa;
  }
`;

export const ClausuleLabel = styled.label`
  font-size: 2.5rem;
  padding-left: 2rem;
  cursor: pointer;
  user-select: none;
`;

export const ModalShowClausule = styled.div`
  height: 100%;
  padding-bottom: 3.3rem;
  padding-left: 3.8rem;
  padding-right: 3.8rem;
  padding-top: 4.8rem;
`;

export const ModalEditClausule = styled.div`
  height: 100%;
`;

export const ModalCreateClausule = styled.div`
  height: 100%;
  padding-top: 4.8rem;
  padding-left: 3.8rem;
  padding-right: 3.8rem;
  padding-bottom: 1.7rem;
`;

export const LabelShowTitle = styled.label`
  font-size: 2.4rem;
  font-family: "Roboto";
  font-weight: 400;
  padding-top: 2rem;
  display: block;
  padding-bottom: 2.1rem;
`;

export const TextShowTitle = styled.p`
  font-size: 2.4rem;
  font-family: "Roboto";
  font-weight: 400;
  padding-top: 2rem;
`;

export const TextContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20rem;
`;

export const Text = styled.span`
  font-size: 2rem;
  color: ${({ theme }: Theme) => theme.colors.gray300};
  text-align: center;
  line-height: 2.7rem;
`;
