import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { View } from "react-native-ui-lib";
import { styles } from "./styles";

type EmptyIconProps = {
  color?: string;
  styleProp?;
};

const EmptyIcon = ({ color, styleProp, ...props }: EmptyIconProps) => (
  <View style={styles.container}>
    <Svg width={22} height={22} fill="none" {...props} style={styles.outerIcon}>
      <Path fill={color ?? "#000"} d="" />
    </Svg>
    <Svg width={16} height={16} fill="none" {...props} style={styles.innerIcon}>
      <Path fill={"black"} d="" />
    </Svg>
  </View>
);

export default EmptyIcon;
