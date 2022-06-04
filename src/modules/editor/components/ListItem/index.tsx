import { ReactNode } from "react";
import { ListItemText } from "./styles";

interface ListItemProps {
  children: ReactNode;
  visibilityIconsOptionsClauses?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({
  children,
  onMouseEnter,
  onMouseLeave,
  visibilityIconsOptionsClauses,
  ...rest
}) => {
  return (
    <ListItemText
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </ListItemText>
  );
};

export default ListItem;
