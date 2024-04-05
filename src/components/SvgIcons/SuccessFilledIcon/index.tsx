import { colorTokens } from "@app/theme/colors/tokens";
import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

type SuccessFilledIconProps = {
  color?: string;
};

const SuccessFilledIcon = ({ color, ...props }: SuccessFilledIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill={color ?? colorTokens.colorIcon}>
      <Path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm4.78 7.7-5.67 5.67a.75.75 0 0 1-1.06 0l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0 .29.29.29.76 0 1.06Z" />
    </G>
  </Svg>
);

export default SuccessFilledIcon;
