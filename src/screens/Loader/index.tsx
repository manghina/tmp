import React from "react";
import { View } from "react-native-ui-lib";
import { Animated } from "react-native";
import UnionSVG from "@assets/img/union.svg";
import LogoSVG from "@assets/img/logo.svg";
import { useLoaderScreen } from "./index.hooks";
import { styles } from "./styles";

export const LoaderScreen = () => {
  const { rotateInterpolate, progressBarXTranslation } = useLoaderScreen();

  return (
    <View style={styles.loaderContainer}>
      <Animated.View
        style={{
          transform: [{ rotate: rotateInterpolate }],
        }}
      >
        <UnionSVG />
      </Animated.View>
      <LogoSVG />
      <View>
        <View style={styles.progressBarContainer}>
          <Animated.View
            style={[
              styles.progressBar,
              {
                transform: [{ translateX: progressBarXTranslation }],
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

LoaderScreen.displayName = "LoaderScreen";
LoaderScreen.RouteName = "loader" as const;
