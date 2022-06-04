import React from "react";

interface BaseIconProps {
  isActive?: boolean;
  className?: string;
}

export default function ItalicIcon({ isActive, className }: BaseIconProps) {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 40 36"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6667 8V13H20.35L14.65 26.3333H10V31.3333H23.3333V26.3333H19.65L25.35 13H30V8H16.6667Z"
        fill={isActive ? "#663399" : "#000"}
      />
    </svg>
  );
}
