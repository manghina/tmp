import { useEffect, useState } from "react";
import { Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";

export const useProfessionalHomeScreen = () => {
  const dispatch = useDispatch();

  const [selectedHistoryBox, setSelectedHistoryBox] = useState("30G");
  const [isBookingListExpanded, setIsBookingListExpanded] = useState(true);
  const [isHistoryListExpanded, setIsHistoryListExpanded] = useState(true);
  const [bookingListIconRotation] = useState(new Animated.Value(0));
  const [historyListIconRotation] = useState(new Animated.Value(0));

  const professionalOffers = useSelector(selectors.getProfessionalOffersList);

  console.log(professionalOffers);

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

  useEffect(() => {
    dispatch(actions.getProfessionalsMeProfessionalOffers.request({}));
  }, [dispatch]);

  return {
    selectedHistoryBox,
    setSelectedHistoryBox,
    bookingRotateIcon,
    historyRotateIcon,
    isBookingListExpanded,
    isHistoryListExpanded,
    toggleBookingList,
    toggleHistoryList,
  };
};
