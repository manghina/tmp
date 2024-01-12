import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const InfoIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Circle cx={12} cy={12} r={10} stroke={props.color} strokeWidth={1.5} />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 17v-6"
    />
    <Circle
      cx={1}
      cy={1}
      r={1}
      fill={props.color}
      transform="matrix(1 0 0 -1 11 9)"
    />
  </Svg>
);
export default InfoIcon;
