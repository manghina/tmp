import * as React from "react";
import Svg, { Path } from "react-native-svg";

type CloseIconProps = {
  color?: string;
  width?: number | string;
  height?: number | string;
};

const CloseIcon = ({ color, width, height, ...props }: CloseIconProps) => (
  <Svg width={width ?? 10} height={height ?? 10} fill="none" {...props}>
    <Path
      stroke={color ?? "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 1 8 8M1 9l8-8"
    />
  </Svg>
);

export default CloseIcon;
