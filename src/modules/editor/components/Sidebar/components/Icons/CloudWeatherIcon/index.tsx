interface CloudWeatherIconProps {
  isActive?: boolean;
  className?: string;
}

const CloudWeatherIcon = ({
  isActive,
  className,
  ...rest
}: CloudWeatherIconProps) => {
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
        d="M25 21.6666H27.5V26.3666L31.5666 28.7166L30.3166 30.8833L25 27.8166V21.6666ZM30.2166 15.5499C28.7166 11.3499 24.7166 8.33325 20 8.33325C15.5 8.33325 11.6666 11.0833 9.99996 14.9999C5.39996 14.9999 1.66663 18.7333 1.66663 23.3333C1.66663 27.9333 5.39996 31.6666 9.99996 31.6666H16.1333C18.0166 35.5999 22.0166 38.3333 26.6666 38.3333C33.1166 38.3333 38.3333 33.1166 38.3333 26.6666C38.3333 21.4666 34.9333 17.0666 30.2166 15.5499ZM9.99996 28.3333C7.23329 28.3333 4.99996 26.0999 4.99996 23.3333C4.99996 20.5666 7.23329 18.3333 9.99996 18.3333C10.6166 18.3333 11.2166 18.4499 11.7666 18.6499C12.0883 16.6988 13.0928 14.9254 14.6009 13.6463C16.109 12.3672 18.0225 11.6655 20 11.6666C22.7166 11.6666 25.1166 12.9833 26.6666 14.9999C20.2 14.9999 15 20.2333 15 26.6666C15 27.2333 15.05 27.7833 15.1333 28.3333H9.99996ZM26.6666 34.9999C22.0666 34.9999 18.3333 31.2666 18.3333 26.6666C18.3333 22.0666 22.0666 18.3333 26.6666 18.3333C31.2666 18.3333 35 22.0666 35 26.6666C35 31.2666 31.2666 34.9999 26.6666 34.9999Z"
        fill={isActive ? "#9945EE" : "#C4C4C4"}
      />
    </svg>
  );
};

export default CloudWeatherIcon;