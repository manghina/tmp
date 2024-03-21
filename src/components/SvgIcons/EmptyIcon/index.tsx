import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { View } from "react-native-ui-lib";
import { colorTokens } from "../../../theme/colors/tokens";

type EmptyIconProps = {
  color?: string;
  styles?;
};

const EmptyIcon = ({ color, styles, ...props }: EmptyIconProps) => (
  <View
    style={{
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Svg
      width={22}
      height={22}
      fill="none"
      {...props}
      style={styles }
    >
      <Path fill={color ?? "#000"} d="" />
    </Svg>
    <Svg
      width={18}
      height={18}
      fill="none"
      {...props}
      style={{
        // ...styles,
        backgroundColor: "white",
        borderRadius: 99,
        position: "absolute",
        borderColor: "black",
        borderWidth: 10,
      }}
    >
      <Path fill={"black"} d="" />
    </Svg>
  </View>
);

export default EmptyIcon;
