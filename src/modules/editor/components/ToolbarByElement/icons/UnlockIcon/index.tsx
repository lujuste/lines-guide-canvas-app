import React from "react";

interface BaseIconProps {
  className?: string;
  isActive?: boolean;
}

export default function UnlockIcon({ className, isActive }: BaseIconProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6666 20.6667C14.5506 20.6667 15.3985 21.0179 16.0236 21.6431C16.6487 22.2682 16.9999 23.116 16.9999 24.0001C16.9999 25.8501 15.5166 27.3334 13.6666 27.3334C11.8166 27.3334 10.3333 25.8501 10.3333 24.0001C10.3333 22.1501 11.8333 20.6667 13.6666 20.6667ZM26.9999 0.666748C22.3999 0.666748 18.6666 4.40008 18.6666 9.00008V12.3334H3.66659C1.83325 12.3334 0.333252 13.8334 0.333252 15.6667V32.3334C0.333252 34.1667 1.83325 35.6667 3.66659 35.6667H23.6666C25.4999 35.6667 26.9999 34.1667 26.9999 32.3334V15.6667C26.9999 13.8334 25.4999 12.3334 23.6666 12.3334H21.9999V9.00008C21.9999 6.23341 24.2333 4.00008 26.9999 4.00008C29.7666 4.00008 31.9999 6.23341 31.9999 9.00008V12.3334H35.3333V9.00008C35.3333 4.40008 31.5999 0.666748 26.9999 0.666748ZM23.6666 15.6667V32.3334H3.66659V15.6667H23.6666Z"
        fill={isActive ? "#663399" : "#000"}
      />
    </svg>
  );
}
