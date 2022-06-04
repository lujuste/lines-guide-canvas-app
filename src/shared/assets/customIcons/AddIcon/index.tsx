interface AddIconProps {
  isActive?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

const AddIcon = ({
  isActive = false,
  className,
  width = 33,
  height = 33,
  ...rest
}: AddIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3333 18H26.3333V21.3333H21.3333V26.3333H18V21.3333H13V18H18V13H21.3333V18ZM36.3333 8.83332V26.3333L26.3333 36.3333H8.83333C5.66667 36.3333 3 33.6666 3 30.5V8.83332C3 5.66665 5.66667 2.99998 8.83333 2.99998H30.5C33.6667 2.99998 36.3333 5.66665 36.3333 8.83332ZM33 9.33332C33 7.66665 31.6667 6.33332 30 6.33332H9.33333C7.66667 6.33332 6.33333 7.66665 6.33333 9.33332V30.1666C6.33333 31.8333 7.66667 33.1666 9.33333 33.1666H24.6667V30.6666C24.6667 27.5 27.3333 24.8333 30.5 24.8333H33V9.33332Z"
        fill={isActive ? "#663399" : "#C4C4C4"}
      />
    </svg>
  );
};

export default AddIcon;
