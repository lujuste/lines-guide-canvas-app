import React from "react";

// import { Container } from './styles';
interface DashIconProps {
  isActive?: boolean;
  className?: string;
}

const DashIcon: React.FC<DashIconProps> = ({ isActive, className }) => {
  return (
    <svg
      width="30"
      height="28"
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 20.6666H8.33333V17.3333H0V20.6666ZM10.8333 20.6666H19.1667V17.3333H10.8333V20.6666ZM21.6667 20.6666H30V17.3333H21.6667V20.6666ZM0 27.3333H3.33333V24H0V27.3333ZM6.66667 27.3333H10V24H6.66667V27.3333ZM13.3333 27.3333H16.6667V24H13.3333V27.3333ZM20 27.3333H23.3333V24H20V27.3333ZM26.6667 27.3333H30V24H26.6667V27.3333ZM0 14H13.3333V10.6666H0V14ZM16.6667 14H30V10.6666H16.6667V14ZM0 0.666626V7.33329H30V0.666626H0Z"
        fill={isActive ? "#663399" : "#000"}
      />
    </svg>
  );
};

export default DashIcon;
