import IconSvg from "../IconSvg";
import { Button, Heading } from "./styles";
import iconAddPage from "../../assets/icon-cross.svg";

interface ButtonAddPage extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  marginBottom?: string;
}

const ButtonAddPageCanva: React.FC<ButtonAddPage> = ({
  marginBottom,
  text,
  ...rest
}) => {
  return (
    <Button marginBottom={marginBottom} {...rest}>
      <IconSvg src={iconAddPage} description="Adicionar página" />
      <Heading marginLeft={"1.6rem"}> {text} </Heading>
    </Button>
  );
};

export default ButtonAddPageCanva;
