interface UploadIconProps {
  isActive?: boolean;
  className?: string;
}

const UploadImagesIcon = ({
  isActive,
  className,
  ...rest
}: UploadIconProps) => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1667 22.5L18.3333 27.5L24.1667 20L31.6667 30H8.33333L14.1667 22.5ZM35 31.6667V8.33333C35 7.44928 34.6488 6.60143 34.0237 5.97631C33.3986 5.35119 32.5507 5 31.6667 5H8.33333C7.44928 5 6.60143 5.35119 5.97631 5.97631C5.35119 6.60143 5 7.44928 5 8.33333V31.6667C5 32.5507 5.35119 33.3986 5.97631 34.0237C6.60143 34.6488 7.44928 35 8.33333 35H31.6667C32.5507 35 33.3986 34.6488 34.0237 34.0237C34.6488 33.3986 35 32.5507 35 31.6667Z"
        fill={isActive ? "#9945EE" : "#C4C4C4"}
      />
    </svg>
  );
};

export default UploadImagesIcon;
