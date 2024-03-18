import React, { memo } from "react";
import { Animated, ViewStyle } from "react-native";
import { useAnimatedProgressBar } from "./index.hooks";
import { styles } from "./styles";
import { View } from "react-native-ui-lib";

type AnimatedProgressBarProps = {
  value: number;
  duration: number;
  style?: ViewStyle;
};

export const AnimatedProgressBar = memo(
  ({ value, duration, style }: AnimatedProgressBarProps) => {
    const { animatedValue } = useAnimatedProgressBar(value, duration);

    return (
      <View style={styles.mainContainer}>
        <Animated.View
          style={[
            styles.bar,
            style,
            {
              transform: [
                {
                  scaleX: animatedValue,
                },
              ],
            },
          ]}
        />
      </View>
    );
  },
);
