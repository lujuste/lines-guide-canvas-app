import React from "react";

// import { Container } from './styles';
interface BorderRadiusIconProps {
  isActive?: boolean;
  className?: string;
}

const RadiusBorderIcon: React.FC<BorderRadiusIconProps> = ({
  isActive,
  className
}) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M26.6667 26.6667H30V30H26.6667V26.6667ZM26.6667 23.3333H30V20H26.6667V23.3333ZM0 16.6667H3.33333V13.3333H0V16.6667ZM0 23.3333H3.33333V20H0V23.3333ZM0 10H3.33333V6.66667H0V10ZM0 3.33333H3.33333V0H0V3.33333ZM6.66667 3.33333H10V0H6.66667V3.33333ZM20 30H23.3333V26.6667H20V30ZM13.3333 30H16.6667V26.6667H13.3333V30ZM20 30H23.3333V26.6667H20V30ZM6.66667 30H10V26.6667H6.66667V30ZM0 30H3.33333V26.6667H0V30ZM30 8.33333C30 3.73333 26.2667 0 21.6667 0H13.3333V3.33333H21.6667C24.4167 3.33333 26.6667 5.58333 26.6667 8.33333V16.6667H30V8.33333Z"
        fill={isActive ? "#663399" : "#000"}
      />
    </svg>
  );
};

export default RadiusBorderIcon;
