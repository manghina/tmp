import { useState } from "react";
import { Animated } from "react-native";

export const useProfessionalHomeScreen = () => {
  const [selectedHistoryBox, setSelectedHistoryBox] = useState("30G");
  const [isBookingListExpanded, setIsBookingListExpanded] = useState(true);
  const [iconRotation] = useState(new Animated.Value(0));

  const rotateIcon = iconRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const toggleBookingList = () => {
    setIsBookingListExpanded(!isBookingListExpanded);
    Animated.timing(iconRotation, {
      toValue: !isBookingListExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return {
    selectedHistoryBox,
    setSelectedHistoryBox,
    isBookingListExpanded,
    rotateIcon,
    toggleBookingList,
  };
};
