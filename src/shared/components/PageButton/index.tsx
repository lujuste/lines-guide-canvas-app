import React, { HTMLProps } from "react";
import PersonalizedIcon from "../../assets/customIcons/PersonalizedIcon";
import { ButtonText, Container } from "./styles";

// import { Container } from './styles';

interface Props extends HTMLProps<HTMLDivElement> {
  isActive: boolean;
  buttonLabel: string;
  iconWidth?: number;
  iconHeight?: number;
  viewBox?: string;
  dPath: string;
  classNameIcon?: string;
}

const PagesButton: React.FC<Props> = ({
  isActive,
  iconWidth,
  buttonLabel,
  iconHeight,
  viewBox,
  dPath,
  children,
  classNameIcon,
  ...rest
}) => {
  return (
    <Container
      onMouseEnter={rest.onMouseEnter}
      onMouseLeave={rest.onMouseOut}
      onClick={rest.onClick}
    >
      <PersonalizedIcon
        isActive={isActive}
        className={classNameIcon}
        width={iconWidth}
        height={iconHeight}
        dPath={dPath}
        viewBox={viewBox}
      />
      <ButtonText>{buttonLabel}</ButtonText>
    </Container>
  );
};

export default PagesButton;
