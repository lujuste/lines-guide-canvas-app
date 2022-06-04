interface PersonalizedIconProps {
  dPath: string;
  isActive?: boolean;
  width?: number;
  height?: number;
  activeColor?: string;
  inactivatedColor?: string;
  className?: string;
  viewBox?: string;
}

const PersonalizedIcon = ({
  isActive = false,
  className,
  width = 150,
  height = 150,
  viewBox = "0 0 40 40",
  activeColor = "#663399",
  inactivatedColor = "#C4C4C4",
  dPath,
  ...rest
}: PersonalizedIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      className={className}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={dPath} fill={isActive ? activeColor : inactivatedColor} />
    </svg>
  );
};

export default PersonalizedIcon;
