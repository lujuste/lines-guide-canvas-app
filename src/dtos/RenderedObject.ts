export interface IRenderedObject {
  x: number;
  y: number;
  width: number;
  align?: "justify" | "center" | "left" | "right";
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  fill?: string;
  id: string;
  object: string;
  setPoints?: number;
  stroke?: string;
  strokeWidth?: string;
  src?: string;
  dash?: number[];
}
