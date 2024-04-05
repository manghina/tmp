import { useCallback, useEffect, useState } from "react";
import { Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { useNavigation } from "@react-navigation/native";

export const useProfessionalHomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const professionalMe = useSelector(selectors.getMe);
  const activeProfessionalOffers = useSelector(
    selectors.getActiveProfessionalOffersList,
  );
  const archivedTotalCount = useSelector(
    selectors.getProfessionalOfferArchivedTotalCount,
  );
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

  const onGoToProfile = useCallback(() => {
    navigation.navigate("user-settings");
  }, []);

  return {
    professionalMe,
    activeProfessionalOffers,
    archivedTotalCount,
    selectedHistoryBox,
    setSelectedHistoryBox,
    bookingRotateIcon,
    historyRotateIcon,
    isActiveRequestsListExpanded,
    isArchivedRequestsListExpanded,
    toggleActiveRequestsList,
    toggleArchivedRequestsList,
    onGoToProfile,
  };
};
