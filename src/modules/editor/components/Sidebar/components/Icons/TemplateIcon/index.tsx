interface TemplateIconProps {
  isActive?: boolean;
  className?: string;
}

const TemplateIcon = ({ isActive, className, ...rest }: TemplateIconProps) => {
  return (
    <svg
      {...rest}
      className={className}
      width="33"
      height="33"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.6666 6.66675H8.33329C7.41282 6.66675 6.66663 7.41294 6.66663 8.33341V11.6667C6.66663 12.5872 7.41282 13.3334 8.33329 13.3334H31.6666C32.5871 13.3334 33.3333 12.5872 33.3333 11.6667V8.33341C33.3333 7.41294 32.5871 6.66675 31.6666 6.66675Z"
        stroke={isActive ? "#9945EE" : "#C4C4C4"}
        stroke-width="3.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 20H8.33329C7.41282 20 6.66663 20.7462 6.66663 21.6667V31.6667C6.66663 32.5871 7.41282 33.3333 8.33329 33.3333H15C15.9204 33.3333 16.6666 32.5871 16.6666 31.6667V21.6667C16.6666 20.7462 15.9204 20 15 20Z"
        stroke={isActive ? "#9945EE" : "#C4C4C4"}
        stroke-width="3.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.3333 20H33.3333"
        stroke={isActive ? "#9945EE" : "#C4C4C4"}
        stroke-width="3.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.3333 26.6667H33.3333"
        stroke={isActive ? "#9945EE" : "#C4C4C4"}
        stroke-width="3.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.3333 33.3335H33.3333"
        stroke={isActive ? "#9945EE" : "#C4C4C4"}
        stroke-width="3.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TemplateIcon;
