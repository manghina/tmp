import { useEffect, useMemo, useRef } from "react";
import { Animated, Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const useLoaderScreen = () => {
  const navigation = useNavigation<any>();
  const rotation = useRef(new Animated.Value(0)).current;
  const progressBar = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    Animated.sequence([
      Animated.timing(progressBar, {
        toValue: 0.5,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(progressBar, {
        delay: 1000,
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(progressBar, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }),
      Animated.loop(
        Animated.timing(progressBar, {
          toValue: 1,
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ),
    ]).start();

    return () => {
      progressBar.setValue(0);
    };
  }, [navigation, rotation, progressBar]);

  const rotateInterpolate = useMemo(
    () =>
      rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
      }),
    [rotation],
  );

  const progressBarXTranslation = useMemo(
    () =>
      progressBar.interpolate({
        inputRange: [0, 1],
        outputRange: [-300, 300],
      }),
    [progressBar],
  );

  return { rotateInterpolate, progressBarXTranslation };
};
