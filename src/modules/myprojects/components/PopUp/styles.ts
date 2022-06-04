import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 5%;
  left: -5%;
  z-index: 10;
`;

export const ToggleButton = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: #000;
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const Dots = styled.label`
  font-size: 3rem;
  background-color: transparent;
  color: #fff;
  transform: translateY(-25%);
  cursor: pointer;
  user-select: none;
  pointer-events: none;
`;

export const ContainerPopUp = styled.div`
  width: 28rem;
  background: #ffffff;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  padding-left: 2.7rem;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 10;
`;

export const ItemPopUp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  height: 5rem;
  margin-top: 1rem;
`;

export const Icon = styled.img``;

export const Label = styled.label`
  color: #a5a5a5;
  font-size: 1.8rem;
  padding-left: 5%;
  cursor: pointer;
`;
