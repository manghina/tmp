import * as React from "react";
import Svg, { Path } from "react-native-svg";

type CameraIconProps = {
  color?: string;
};

const CameraIcon = ({ color, ...props }: CameraIconProps) => (
  <Svg width="100%" height="100%" fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill={color ?? "#3C77E8"}
      fillOpacity={0.5}
      fillRule="evenodd"
      d="M6.393 3.83C7.043 2.757 8.21 2 9.545 2h4.91c1.335 0 2.501.757 3.153 1.83.198.328.42.671.649.985.11.15.323.27.62.27H19a4 4 0 0 1 4 4V17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V9.086a4 4 0 0 1 4-4h.122c.297 0 .511-.12.621-.27.229-.315.451-.658.65-.986ZM9.545 4c-.558 0-1.111.322-1.442.867-.218.359-.472.753-.744 1.126-.548.753-1.415 1.093-2.236 1.093H5a2 2 0 0 0-2 2V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9.086a2 2 0 0 0-2-2h-.122c-.822 0-1.689-.34-2.237-1.093a16.201 16.201 0 0 1-.744-1.126c-.33-.545-.884-.867-1.442-.867h-4.91ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default CameraIcon;
