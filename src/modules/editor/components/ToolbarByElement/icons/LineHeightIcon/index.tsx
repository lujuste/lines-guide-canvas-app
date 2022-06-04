import React from "react";

interface BaseIconProps {
  isActive?: boolean;
  className?: string;
}

export default function LineHeightIcon({ isActive, className }: BaseIconProps) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 35 30"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6667 16.6666H34.6667V13.3333H14.6667V16.6666ZM14.6667 26.6666H34.6667V23.3332H14.6667V26.6666ZM14.6667 6.66658H34.6667V3.33325H14.6667V6.66658ZM8 6.66658H12.1667L6.33333 0.833252L0.5 6.66658H4.66667V23.3332H0.5L6.33333 29.1666L12.1667 23.3332H8V6.66658Z"
        fill={isActive ? "#663399" : "#000"}
      />
    </svg>
  );
}
