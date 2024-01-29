import React, { memo } from "react";
import { Animated } from "react-native";
import { useTypingIndicator } from "./index.hooks";
import { View } from "react-native-ui-lib";
import { styles } from "./styles";

export const TypingIndicator = memo(() => {
  const { dot1Opacity, dot2Opacity, dot3Opacity } = useTypingIndicator();

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.dot, { opacity: dot1Opacity }]} />
      <Animated.View
        style={[styles.dot, { opacity: dot2Opacity, marginLeft: 8 }]}
      />
      <Animated.View
        style={[styles.dot, { opacity: dot3Opacity, marginLeft: 8 }]}
      />
    </View>
  );
});

TypingIndicator.displayName = "TypingIndicator";
