import React from "react";
import { View, Colors } from "react-native-ui-lib";
import { Animated } from "react-native";
import UnionSVG from "@assets/img/union.svg";
import LogoSVG from "@assets/img/logo.svg";
import { useLoaderScreen } from "./index.hooks";
import { colorTokens } from "../../theme/colors/tokens";

export const LoaderScreen = () => {
  const { rotateInterpolate, progressBarWidth } = useLoaderScreen();

  return (
    <View
      flex
      centerV
      centerH
      backgroundColor={colorTokens.elevationSurfaceAlternative}
    >
      <Animated.View
        style={{
          transform: [{ rotate: rotateInterpolate }],
        }}
      >
        <UnionSVG />
      </Animated.View>
      <View marginT-41>
        <LogoSVG />
      </View>
      <View marginT-41>
        <View
          style={{
            width: 266,
            height: 8,
            backgroundColor: colorTokens.elevationSurfaceAlternative, //TODO:
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Animated.View
            style={{
              height: "100%",
              width: progressBarWidth.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "101%"],
              }),
              borderRadius: 2,
              backgroundColor: colorTokens.colorBackgroundAlternativeBrand,
            }}
          />
        </View>
      </View>
    </View>
  );
};
