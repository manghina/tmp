import { useEffect, useState } from "react";
import { Animated } from "react-native";
import { useDispatch } from "react-redux";
import { actions } from "@app/redux-store";

export const useProfessionalHomeScreen = () => {
  const dispatch = useDispatch();

  const [selectedHistoryBox, setSelectedHistoryBox] = useState("30G");
  const [isActiveRequestsListExpanded, setIsActiveRequestsListExpanded] =
    useState(true);
  const [isArchivedRequestsListExpanded, setIsArchivedRequestsListExpanded] =
    useState(true);
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

  const toggleActiveRequestsList = () => {
    setIsActiveRequestsListExpanded(!isActiveRequestsListExpanded);
    Animated.parallel([
      Animated.timing(bookingListIconRotation, {
        toValue: isActiveRequestsListExpanded ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const toggleArchivedRequestsList = () => {
    setIsArchivedRequestsListExpanded(!isArchivedRequestsListExpanded);
    Animated.parallel([
      Animated.timing(historyListIconRotation, {
        toValue: isArchivedRequestsListExpanded ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  useEffect(() => {
    dispatch(actions.professionalOffersPageVisited());
  }, [dispatch]);

  return {
    selectedHistoryBox,
    setSelectedHistoryBox,
    bookingRotateIcon,
    historyRotateIcon,
    isActiveRequestsListExpanded,
    isArchivedRequestsListExpanded,
    toggleActiveRequestsList,
    toggleArchivedRequestsList,
  };
};
