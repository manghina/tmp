import { useCallback, useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tutorialImage1 from "@assets/img/doc11.png";
import tutorialImage2 from "@assets/img/doc9.png";
import tutorialImage3 from "@assets/img/doc15.png";

import { Button, Text, View } from "react-native-ui-lib";

const intervalBetweenImages = 5000;

const bgImages = [tutorialImage1, tutorialImage2, tutorialImage3];

const subtitles: string[] = [
  "Racconta a Sweep il problema di salute che vuoi risolvere",
  "Sweep troverà i medici migliori e li contatterà al posto tuo",
  "Scegli tra le opzioni possibili che Sweep ha raccolto per te!",
];

export const useTutorialScreen = () => {
  const navigation = useNavigation<any>();

  const fill1Anim = useRef(new Animated.Value(0)).current;
  const fill2Anim = useRef(new Animated.Value(0)).current;
  const fill3Anim = useRef(new Animated.Value(0)).current;

  const [imageIndex, setImageIndex] = useState(0);

  const [subtitle, setSubTitle] = useState(subtitles[imageIndex]);
  const [bgImage, setBgImage] = useState(bgImages[imageIndex]);

  const fill1 = useCallback(() => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fill1Anim, {
      toValue: 1,
      duration: intervalBetweenImages,
      useNativeDriver: true,
      // linear
      easing: (t) => t,
    }).start();
  }, [fill1Anim]);

  const fill2 = useCallback(() => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fill2Anim, {
      toValue: 1,
      duration: intervalBetweenImages,
      useNativeDriver: true,
      // linear
      easing: (t) => t,
    }).start();
  }, [fill2Anim]);

  const fill3 = useCallback(() => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fill3Anim, {
      toValue: 1,
      duration: intervalBetweenImages,
      useNativeDriver: true,
      // linear
      easing: (t) => t,
    }).start();
  }, [fill3Anim]);

  const resetAnimations = useCallback(() => {
    fill1Anim.setValue(0);
    fill2Anim.setValue(0);
    fill3Anim.setValue(0);
  }, [fill1Anim, fill2Anim, fill3Anim]);

  const onRegisterButtonClick = useCallback(() => {
    navigation.replace("home");
  }, [navigation]);

  const onLoginButtonClick = useCallback(() => {
    navigation.navigate("login");
  }, [navigation]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => {
        if (prevIndex === bgImages.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, intervalBetweenImages);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setBgImage(bgImages[imageIndex]);
    setSubTitle(subtitles[imageIndex]);

    if (imageIndex === 0) {
      resetAnimations();
      fill1();
    } else if (imageIndex === 1) {
      fill2();
    } else if (imageIndex === 2) {
      fill3();
    }
  }, [imageIndex, fill1, fill2, fill3, resetAnimations]);

  useEffect(() => {
    resetAnimations();
    fill1();
  }, [fill1, resetAnimations]);

  return {
    bgImage,
    subtitle,
    fill1Anim,
    fill2Anim,
    fill3Anim,
    onRegisterButtonClick,
    onLoginButtonClick,
  };
};
