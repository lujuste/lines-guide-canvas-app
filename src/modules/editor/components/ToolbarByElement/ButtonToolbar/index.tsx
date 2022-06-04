import React from "react";
import Tooltip from "../../Tooltip";
import DynamicIcons from "../DynamicIcons";

interface ButtonToolbarProps {
  className?: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  isActive?: boolean;
  tooltipText?: string;
  component?: string;
}

const ButtonToolbar: React.FC<ButtonToolbarProps> = ({
  className,
  type,
  onClick,
  isActive,
  tooltipText,
  component
}: ButtonToolbarProps) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      <Tooltip text={tooltipText} position="bottom">
        <DynamicIcons isActive={isActive} component={component} />
      </Tooltip>
    </button>
  );
};

export default ButtonToolbar;
