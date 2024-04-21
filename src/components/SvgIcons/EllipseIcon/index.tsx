import { useSvgSizes } from "@app/hooks/useSvgSizes";
import { colorTokens } from "@app/theme/colors/tokens";
import * as React from "react";
import Svg, { Circle, SvgProps } from "react-native-svg";

const EllipseIcon = ({ color, size = 8, ...props }: SvgProps) => {
  const { width, height, viewBox } = useSvgSizes({
    size,
    viewBoxWidth: 8,
    viewBoxHeight: 8,
  });
  return (
    <Svg width={width} height={height} viewBox={viewBox} {...props}>
      <Circle
        id="Ellipse"
        cx="4"
        cy="4"
        r="4"
        fill={color ?? colorTokens.colorIcon}
      />
    </Svg>
  );
};
export default EllipseIcon;
