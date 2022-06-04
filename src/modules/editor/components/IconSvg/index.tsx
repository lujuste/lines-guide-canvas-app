interface IconSvgProps {
  src: string;
  description: string;
  className?: string;
}

const IconSvg: React.FC<IconSvgProps> = ({ src, description, className }) => {
  return <img className={className} src={src} alt={description} />;
};

export default IconSvg;
