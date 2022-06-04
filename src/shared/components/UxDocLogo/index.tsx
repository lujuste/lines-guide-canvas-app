import React from "react";
import UxDocLogoSvg from "../../../shared/assets/ux-doc-logo.svg";

import { LogoBox } from "./styles";

const UxDocLogoComponent: React.FC = () => {
  return (
    <LogoBox>
      <img src={UxDocLogoSvg} alt="" className="icon"/>
    </LogoBox>
  );
};

export default UxDocLogoComponent;
