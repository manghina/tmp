import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SuccessIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 36 36"
    {...props}
  >
    <Path
      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14Z"
      fill={props.color}
    />
    <Path
      d="M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05-6-6A1 1 0 0 0 8 18.53L15.49 26 28 13.52a1 1 0 0 0 0-1.42Z"
      fill={props.color}
    />
    <Path fill="none" d="M0 0h36v36H0z" />
  </Svg>
);
export default SuccessIcon;
