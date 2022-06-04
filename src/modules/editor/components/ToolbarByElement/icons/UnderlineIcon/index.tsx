import React from "react";

interface BaseIconProps {
  isActive?: boolean;
  className?: string;
}

export default function UnderlineIcon({ isActive, className }: BaseIconProps) {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 40 38"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 32H29V29.3333H11V32ZM20 26.6667C22.046 26.6667 24.0081 25.8238 25.4548 24.3235C26.9015 22.8232 27.7143 20.7884 27.7143 18.6667V8H24.5V18.6667C24.5 19.9043 24.0259 21.0913 23.182 21.9665C22.3381 22.8417 21.1935 23.3333 20 23.3333C18.8065 23.3333 17.6619 22.8417 16.818 21.9665C15.9741 21.0913 15.5 19.9043 15.5 18.6667V8H12.2857V18.6667C12.2857 20.7884 13.0985 22.8232 14.5452 24.3235C15.9919 25.8238 17.954 26.6667 20 26.6667Z"
        fill={isActive ? "#663399" : "#000"}
      />
    </svg>
  );
}
