import { useState } from "react";
import { Animated } from "react-native";

export const useProfessionalHomeScreen = () => {
  const [selectedHistoryBox, setSelectedHistoryBox] = useState("30G");
  const [isBookingListExpanded, setIsBookingListExpanded] = useState(true);
  const [iconRotation] = useState(new Animated.Value(0));
  const [listHeight] = useState(new Animated.Value(250));

  const rotateIcon = iconRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const toggleBookingList = () => {
    setIsBookingListExpanded(!isBookingListExpanded);
    Animated.parallel([
      Animated.timing(iconRotation, {
        toValue: isBookingListExpanded ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(listHeight, {
        toValue: isBookingListExpanded ? 0 : 250,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return {
    selectedHistoryBox,
    setSelectedHistoryBox,
    isBookingListExpanded,
    rotateIcon,
    listHeight,
    toggleBookingList,
  };
};
