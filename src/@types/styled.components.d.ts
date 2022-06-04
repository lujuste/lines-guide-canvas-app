import { firstTheme } from "../styles/themes";
import "styled-components";

type CustomTheme = typeof firstTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
