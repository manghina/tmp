import React, { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Colors, Image } from "react-native-ui-lib";
import { Animated, Easing } from "react-native";

export const LoaderScreen = () => {
  const navigation = useNavigation<any>();
  const rotation = useRef(new Animated.Value(0)).current;
  const progressBarWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loadingDelay = setTimeout(() => {
      navigation.replace("Home");
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

  return (
    <View flex centerV centerH backgroundColor="#011820">
      <Animated.Image
        source={require("../../../assets/images/Union.png")}
        style={{ transform: [{ rotate: rotateInterpolate }] }}
      />
      <Image marginT-41 source={require("../../../assets/images/Logo.png")} />
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
