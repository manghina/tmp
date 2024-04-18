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

declare global {
  interface SelectOption {
    label: string;
    reducedLabel?: string;
    value: string;
    options?: Omit<SelectOption, "options">[];
  }
}
