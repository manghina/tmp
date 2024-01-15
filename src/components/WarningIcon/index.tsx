import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const WarningIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Circle cx={12} cy={17} r={1} fill={props.color} />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10v4M3.447 18.106l6.764-13.528c.737-1.474 2.84-1.474 3.578 0l6.764 13.528A2 2 0 0 1 18.763 21H5.237a2 2 0 0 1-1.789-2.894Z"
    />
  </Svg>
);
export default WarningIcon;
