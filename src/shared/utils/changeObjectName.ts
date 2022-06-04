export default function changeObjectName(objectNameOnCanva: string) {
  switch (objectNameOnCanva) {
    case "Rect":
      return "rectangle";
      break;
    case "Text":
      return "simpleText";
      break;
    case "Image":
      return "image";
      break;
    case "Line":
      return "simpleLine";
      break;
    case "Circle":
      return "circle";
      break;
  }
}
