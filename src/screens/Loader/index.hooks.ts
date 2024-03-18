import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const useLoaderScreen = () => {
  const navigation = useNavigation<any>();
  const rotation = useRef(new Animated.Value(0)).current;
  const progressBarWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loadingDelay = setTimeout(() => {
      // navigation.replace("tutorial");
    }, 3000);

    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    Animated.timing(progressBarWidth, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

    return () => {
      clearTimeout(loadingDelay);
      progressBarWidth.setValue(0);
    };
  }, [navigation, rotation, progressBarWidth]);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return { rotateInterpolate, progressBarWidth };
};
