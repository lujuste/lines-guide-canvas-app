import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { darken } from "polished";

interface TextProps extends React.HTMLProps<HTMLTextAreaElement> {
  margin?: string;
}

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  color?: string;
}

interface WrapperProps {
  marginTop?: string;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  padding: auto 13px;
  height: 68px;
  z-index: 99;
  justify-content: space-between;
  flex-shrink: 1;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.gradientBody},
    ${({ theme }) => theme.colors.gradientBody2} 120%
  );

  .MuiAvatar-colorDefault {
    background-color: #9945ee;
  }

  .btn-hover {
    display: flex;
    width: 70%;
    height: 40px;
    border-radius: 10px;
    justify-content: flex-start;
    align-items: center;
    background: transparent;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  @media (max-width: 1366px) {
    .btn-hover {
      width: 70%;
      height: 35px;
    }
  }

  .icon-back {
    width: 22px;
    height: 22px;
  }
`;

export const HeaderLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  padding: 0 60px 0 16px;
  max-width: 420px;

  @media (max-width: 1366px) {
    max-width: 320px;
  }

  @media (max-width: 1600px) {
    max-width: 380px;
  }
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};
  z-index: 99;
  position: relative;

  & .btn-click {
    display: flex;
    width: 80%;
    height: 40px;
    border-radius: 10px;
    justify-content: flex-end;
    align-items: center;
    background: transparent;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    @media (max-width: 1366px) {
      height: 35px;
    }
  }

  .icon-undo {
    display: flex;
    margin: 0 auto;
    align-items: center;
  }

  .icon-redo {
    display: flex;
    margin: 0 auto;
    align-items: center;
  }

  > .redoUndo {
    * {
      width: 50px;
      align-items: center;
      height: 50px;
    }
  }

  > .redoUndo-adjust {
    margin-top: 1rem;
  }

  @media (max-width: 1600px) {
    .redoUndo {
      width: 18px;
      height: 18px;
    }

    .redoRedo {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 1366px) {
    .redoUndo {
      width: 17px;
      height: 17px;
    }

    .redoRedo {
      width: 22px;
      height: 22px;
    }
  }
`;

export const Text = styled.p<TextProps>`
  font-family: "Roboto";
  font-size: 43px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  margin: ${props => (props.margin ? props.margin : "")};

  @media (max-width: 1366px) {
    font-size: 1.6rem;
  }
`;

export const HeaderCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 33.33%;
`;

export const HeaderRight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-right: 0.7rem;
  align-items: center;
  justify-content: space-around;
  max-width: 365px;

  & .btn-click {
    display: flex;
    width: 60px;
    height: 40px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background: transparent;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    @media (max-width: 1366px) {
      height: 35px;
      width: 46px;
    }
  }

  @media (max-width: 1600px) {
    max-width: 330px;

    & .save {
      width: 20px;
      height: 20px;
    }

    & .download {
      width: 26px;
      height: 26px;
    }
  }

  @media (max-width: 1366px) {
    max-width: 300px;

    & .save {
      width: 18px;
      height: 18px;
    }

    & .download {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${({ color, theme }) =>
    color ? color : theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  width: 139px;
  height: 50px;
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 18px;
  padding: 0;
  font-weight: bold;
  font-family: "Roboto";
  transition: all 0.5s linear;

  &:hover {
    background-color: white;
    color: black;
    -webkit-box-shadow: 0px 2px 14px -7px rgba(0, 0, 0, 0.94);
    box-shadow: 0px 2px 14px -7px rgba(0, 0, 0, 0.94);
  }

  @media (max-width: 1600px) {
    width: 120px;
    height: 42px;
    font-size: 1.5rem;
  }

  @media (max-width: 1366px) {
    width: 120px;
    height: 42px;
    font-size: 1.6rem;
  }
`;

export const AvatarEditor = styled(Avatar)`
  width: 80px;
  height: 80px;
  margin-right: 1rem;
`;

export const InputNameDocument = styled.input`
  background-color: transparent;
  border: none;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  min-width: 25rem;
  max-width: 35rem;
  width: auto;

  :hover {
    border: solid 0.2px rgba(255, 255, 255, 0.6);
    border-radius: 6px;
    height: 60%;
  }

  ::placeholder {
    font-weight: 700;
    color: rgba(255, 255, 255, 0.6);
  }
`;
