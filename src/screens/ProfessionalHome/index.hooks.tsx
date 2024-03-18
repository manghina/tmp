import { useState } from "react";
import { Animated } from "react-native";

export const useProfessionalHomeScreen = () => {
  const [selectedHistoryBox, setSelectedHistoryBox] = useState("30G");
  const [isBookingListExpanded, setIsBookingListExpanded] = useState(true);
  const [isHistoryListExpanded, setIsHistoryListExpanded] = useState(true);
  const [bookingListIconRotation] = useState(new Animated.Value(0));
  const [historyListIconRotation] = useState(new Animated.Value(0));

  const bookingRotateIcon = bookingListIconRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });
  const historyRotateIcon = historyListIconRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const toggleBookingList = () => {
    setIsBookingListExpanded(!isBookingListExpanded);
    Animated.parallel([
      Animated.timing(bookingListIconRotation, {
        toValue: isBookingListExpanded ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const toggleHistoryList = () => {
    setIsHistoryListExpanded(!isHistoryListExpanded);
    Animated.parallel([
      Animated.timing(historyListIconRotation, {
        toValue: isHistoryListExpanded ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return {
    selectedHistoryBox,
    setSelectedHistoryBox,
    bookingRotateIcon,
    historyRotateIcon,
    toggleBookingList,
    toggleHistoryList,
  };
};
