import * as React from "react";
import Svg, { Path } from "react-native-svg";

type VisibilityIconProps = {
  color?: string;
};

const VisibilityIcon = ({ color, ...props }: VisibilityIconProps) => (
  <Svg width="100%" height="100%" fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill={color ?? "#44546F"}
      d="M21.25 9.15C18.94 5.52 15.56 3.43 12 3.43c-1.78 0-3.51.52-5.09 1.49-1.58.98-3 2.41-4.16 4.23-1 1.57-1 4.12 0 5.69 2.31 3.64 5.69 5.72 9.25 5.72 1.78 0 3.51-.52 5.09-1.49 1.58-.98 3-2.41 4.16-4.23 1-1.56 1-4.12 0-5.69ZM12 16.04c-2.24 0-4.04-1.81-4.04-4.04S9.76 7.96 12 7.96s4.04 1.81 4.04 4.04-1.8 4.04-4.04 4.04Z"
    />
    <Path
      fill={color ?? "#44546F"}
      d="M12 9.14a2.855 2.855 0 0 0 0 5.71c1.57 0 2.86-1.28 2.86-2.85S13.57 9.14 12 9.14Z"
    />
  </Svg>
);
export default VisibilityIcon;
