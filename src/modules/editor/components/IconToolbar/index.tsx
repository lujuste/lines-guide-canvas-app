interface IconToolbarProps {
  src: string;
  description: string;
  className?: string;
}

const IconToolbar: React.FC<IconToolbarProps> = ({
  src,
  description,
  className
}) => {
  return <img src={src} alt={description} className={className} />;
};

export default IconToolbar;
