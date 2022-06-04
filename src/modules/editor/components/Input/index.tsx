import { InputDefault } from "./styles";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, type, ...rest },
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
    />
  );
};

export const Input = forwardRef(InputBase);
