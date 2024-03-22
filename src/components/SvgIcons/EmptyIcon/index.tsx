import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { View } from "react-native-ui-lib";
import { styles } from "./styles";

type EmptyIconProps = {
  color1?: string;
  color2?: string;
  styleProp?;
  selected?: boolean;
};

const EmptyIcon = ({
  color1,
  color2,
  styleProp,
  selected = false,
  ...props
}: EmptyIconProps) => (
  <View style={styles.container}>
    <Svg
      width={22}
      height={22}
      fill="none"
      {...props}
      style={[
        styles.outerIcon,
        selected ? styles.selectedOuterIcon : styles.unselectedOuterIcon,
      ]}
    >
      <Path fill={color1 ?? "#000"} d="" />
    </Svg>
    <Svg
      width={16}
      height={16}
      fill="none"
      {...props}
      style={[
        styles.innerIcon,
        selected ? styles.selectedInnerIcon : styles.unselectedInnerIcon,
      ]}
    >
      <Path fill={color2 ?? "black"} d="" />
    </Svg>
  </View>
);

export default EmptyIcon;
