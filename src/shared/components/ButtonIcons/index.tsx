import React, { ReactNode } from "react";

import { FlexContainer } from "./styles";

interface ButtonIconsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: string;
  margin?: string;
  className?: string;
  justifyContent?: string;
}

const ButtonIcons = ({
  children,
  width,
  margin,
  className,
  justifyContent,
  ...rest
}: ButtonIconsProps) => {
  return (
    <FlexContainer
      justifyContent={justifyContent}
      margin={margin}
      width={width}
      className={className}
      {...rest}
    >
      {children}
    </FlexContainer>
  );
};

export default ButtonIcons;
