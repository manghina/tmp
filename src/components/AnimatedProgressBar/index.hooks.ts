import { Animated } from "react-native";
import { useEffect, useRef } from "react";

export const useAnimatedProgressBar = (
  value: number,
  duration: number = 250,
) => {
  const animatedValue = useRef(new Animated.Value(value)).current;

  useEffect(() => {
    // Animate to firstStepCompletionPercentage
    Animated.timing(animatedValue, {
      toValue: value,
      duration: duration,
      useNativeDriver: false,
    }).start();
  }, [value, duration]);

  return { animatedValue };
};
