interface GroupElementIconProps {
  isActive?: boolean;
  className?: string;
}

const GroupElementIcon = ({
  isActive,
  className,
  ...rest
}: GroupElementIconProps) => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M33.3334 33.3334H6.66671C5.78265 33.3334 4.93481 32.9822 4.30968 32.3571C3.68456 31.732 3.33337 30.8841 3.33337 30.0001V10.0001C3.33337 9.11603 3.68456 8.26818 4.30968 7.64306C4.93481 7.01794 5.78265 6.66675 6.66671 6.66675H33.3334C34.2174 6.66675 35.0653 7.01794 35.6904 7.64306C36.3155 8.26818 36.6667 9.11603 36.6667 10.0001V30.0001C36.6667 30.8841 36.3155 31.732 35.6904 32.3571C35.0653 32.9822 34.2174 33.3334 33.3334 33.3334ZM6.66671 10.0001V30.0001H33.3334V10.0001H6.66671ZM10 15.0001H30V18.3334H10V15.0001ZM10 21.6667H26.6667V25.0001H10V21.6667Z"
        fill={isActive ? "#9945EE" : "#C4C4C4"}
      />
    </svg>
  );
};

export default GroupElementIcon;
