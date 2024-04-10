import "react-native-svg";

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "react-native-svg" {
  export interface SvgProps {
    size?: number;
  }
}
