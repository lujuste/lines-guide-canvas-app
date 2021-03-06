import React from "react";

interface BaseIconProps {
  isActive?: boolean;
  className?: string;
}

export default function AlignIcon({ isActive, className }: BaseIconProps) {
  return (
    <svg
      width="28"
      height="28"
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5H35V8.33333H5V5ZM5 11.6667H25V15H5V11.6667ZM5 18.3333H35V21.6667H5V18.3333ZM5 25H25V28.3333H5V25ZM5 31.6667H35V35H5V31.6667Z"
        fill={isActive ? "#663399" : "#000"}
      />
    </svg>
  );
}
