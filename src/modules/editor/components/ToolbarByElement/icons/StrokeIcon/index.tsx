import React from "react";

// import { Container } from './styles';
interface StrokeIconProps {
  isActive?: boolean;
  className?: string;
}

const StrokeIcon: React.FC<StrokeIconProps> = ({ isActive, className }) => {
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
        d="M0 22.3333H30V19H0V22.3333ZM0 27.3333H30V25.6666H0V27.3333ZM0 15.6666H30V10.6666H0V15.6666ZM0 0.666626V7.33329H30V0.666626H0Z"
        fill={isActive ? "#663399" : "#000"}
      />
    </svg>
  );
};

export default StrokeIcon;
