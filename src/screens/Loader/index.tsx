import React from "react";
import { View, Colors } from "react-native-ui-lib";
import { Animated } from "react-native";
import UnionSVG from "../../../assets/images/Union.svg";
import LogoSVG from "../../../assets/images/Logo.svg";
import {useLoaderScreen} from "./index.hooks";

export const LoaderScreen = () => {
  const { rotateInterpolate, progressBarWidth } = useLoaderScreen();

  return (
    <View flex centerV centerH backgroundColor="#011820">
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
            backgroundColor: Colors.defaultText,
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
              backgroundColor: Colors.loadingBlue,
            }}
          />
        </View>
      </View>
    </View>
  );
};
