import { useState } from "react";
import { Animated } from "react-native";

export const useProfessionalHomeScreen = () => {
  const [selectedHistoryBox, setSelectedHistoryBox] = useState("30G");
  const [isBookingListExpanded, setIsBookingListExpanded] = useState(true);
  const [isHistoryListExpanded, setIsHistoryListExpanded] = useState(true);
  const [bookingListIconRotation] = useState(new Animated.Value(0));
  const [historyListIconRotation] = useState(new Animated.Value(0));
  const [bookingListHeight] = useState(new Animated.Value(1));
  const [historyListHeight] = useState(new Animated.Value(1));

  const bookingRotateIcon = bookingListIconRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });
  const historyRotateIcon = historyListIconRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const bookingListExpand = bookingListHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 450],
  });

  const historyListExpand = historyListHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 450],
  });

  const toggleBookingList = () => {
    setIsBookingListExpanded(!isBookingListExpanded);
    Animated.parallel([
      Animated.timing(bookingListIconRotation, {
        toValue: isBookingListExpanded ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(bookingListHeight, {
        toValue: !isBookingListExpanded ? 1 : 0,
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
      Animated.timing(historyListHeight, {
        toValue: !isHistoryListExpanded ? 1 : 0,
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
    bookingListExpand,
    historyListExpand,
    toggleBookingList,
    toggleHistoryList,
  };
};
