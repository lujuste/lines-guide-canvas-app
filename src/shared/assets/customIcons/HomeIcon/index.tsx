interface HomeIconProps {
  isActive?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

const HomeIcon = ({
  isActive = false,
  className,
  width = 33,
  height = 33,
  ...rest
}: HomeIconProps) => {
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
        d="M13.6666 28.3333V18.3333H20.3333V28.3333H28.6666V15H33.6666L17 0L0.333313 15H5.33331V28.3333H13.6666Z"
        fill={isActive ? "#663399" : "#C4C4C4"}
      />
    </svg>
  );
};

export default HomeIcon;
