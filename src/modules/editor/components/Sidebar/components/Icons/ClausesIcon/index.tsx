interface ClausesIconProps {
  isActive?: boolean;
  className?: string;
}

const ClausesIcon = ({ isActive, className, ...rest }: ClausesIconProps) => {
  return (
    <svg
      width="33"
      height="33"
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66663 8.33325H33.3333V11.6666H6.66663V8.33325ZM6.66663 14.9999H33.3333V18.3333H6.66663V14.9999ZM6.66663 21.6666H33.3333V24.9999H6.66663V21.6666ZM6.66663 28.3333H23.3333V31.6666H6.66663V28.3333Z"
        fill={isActive ? "#9945EE" : "#C4C4C4"}
      />
    </svg>
  );
};

export default ClausesIcon;
