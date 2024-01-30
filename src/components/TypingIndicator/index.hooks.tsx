import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

export const useTypingIndicator = () => {
  const dot1Opacity = useRef(new Animated.Value(0.3)).current;
  const dot2Opacity = useRef(new Animated.Value(0.3)).current;
  const dot3Opacity = useRef(new Animated.Value(0.3)).current;

  const animateDots = () => {
    const createAnimation = (dot: Animated.Value) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(dot, {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: false,
          }),
          Animated.timing(dot, {
            toValue: 0.3,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: false,
          }),
        ]),
      );

    createAnimation(dot1Opacity).start();
    setTimeout(() => createAnimation(dot2Opacity).start(), 200);
    setTimeout(() => createAnimation(dot3Opacity).start(), 400);
  };

  useEffect(() => {
    animateDots();
  }, []);

  return {
    dot1Opacity,
    dot2Opacity,
    dot3Opacity,
  };
};
