import React from "react";
import BringToForwardIcon from "../icons/BringToForwardIcon";
import TakeBackIcon from "../icons/TakeBackIcon";
import StrongIcon from "../icons/StrongIcon";
import ItalicIcon from "../icons/ItalicIcon";
import UnderlineIcon from "../icons/UnderlineIcon";
import UpLowCaseIcon from "../icons/UpLowCaseIcon";
import AlignIcon from "../icons/AlignIcon";
import ListIcon from "../icons/ListIcon";
import LineHeightIcon from "../icons/LineHeightIcon";
import StrokeIcon from "../icons/StrokeIcon";
import DashIcon from "../icons/DashIcon";
import RadiusBorderIcon from "../icons/RadiusBorderIcon";

interface DynamicIconsProps {
  component?: string;
  isActive?: boolean;
}

export default function DynamicIcons({
  component,
  isActive
}: DynamicIconsProps) {
  let RenderIconDynamic = null;

  switch (component) {
    case "toFront":
      RenderIconDynamic = (
        <BringToForwardIcon
          className="width-icon-to-front"
          isActive={isActive}
        />
      );
      break;
    case "toBack":
      RenderIconDynamic = (
        <TakeBackIcon className="width-icon-toback" isActive={isActive} />
      );
      break;
    case "isStrong":
      RenderIconDynamic = (
        <StrongIcon className="width-icon-strong" isActive={isActive} />
      );
      break;
    case "isItalic":
      RenderIconDynamic = (
        <ItalicIcon className="width-icon-italic" isActive={isActive} />
      );
      break;
    case "isUnderline":
      RenderIconDynamic = (
        <UnderlineIcon className="width-icon-underline" isActive={isActive} />
      );
      break;
    case "isUpLowerCase":
      RenderIconDynamic = (
        <UpLowCaseIcon className="width-icon-casetext" isActive={isActive} />
      );
      break;

    case "isAlign":
      RenderIconDynamic = (
        <AlignIcon className="width-icon-align" isActive={isActive} />
      );
      break;

    case "isList":
      RenderIconDynamic = <ListIcon className="new-icon" isActive={isActive} />;
      break;

    case "isLineHeight":
      RenderIconDynamic = (
        <LineHeightIcon className="width-icon-textheight" isActive={isActive} />
      );
      break;

    case "isStroke":
      RenderIconDynamic = (
        <StrokeIcon className="width-icon-stroke" isActive={isActive} />
      );
      break;

    case "isDash":
      RenderIconDynamic = (
        <DashIcon className="width-icon-dash" isActive={isActive} />
      );
      break;

    case "isBorderRadius":
      RenderIconDynamic = (
        <RadiusBorderIcon className="width-icon-radius" isActive={isActive} />
      );
      break;

    default:
      break;
  }

  return <>{RenderIconDynamic && RenderIconDynamic}</>;
}
