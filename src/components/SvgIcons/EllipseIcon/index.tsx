import * as React from "react";
import Svg, { Circle } from "react-native-svg";

type EllipseIconProps = {
  color?: string;
};

const EllipseIcon = ({ color, ...props }: EllipseIconProps) => (
  <Svg width={8} height={8} fill="none" {...props}>
    <Circle id="Ellipse" cx="4" cy="4" r="4" fill={color ?? "#000"} />
  </Svg>
);

export default EllipseIcon;
