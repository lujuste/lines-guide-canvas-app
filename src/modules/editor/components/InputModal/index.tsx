import { InputDefault } from "./styles";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  borderBottom?: string;
  textTransform?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    type,
    height,
    border,
    borderRadius,
    borderBottom,
    textTransform,
    ...rest
  },
  ref
) => {
  return (
    <InputDefault
      placeholder={label}
      {...rest}
      name={name}
      id={name}
      type={type}
      ref={ref}
      height={height}
      border={border}
      borderRadius={borderRadius}
      borderBottom={borderBottom}
      textTransform={textTransform}
    />
  );
};

export const InputModal = forwardRef(InputBase);
