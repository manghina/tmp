import { IRequestSummary, Request, RequestStatus } from "@app/models/Request";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { styles } from "./styles";
import { Animated } from "react-native";
import ChatIcon from "@app/components/SvgIcons/ChatIcon";
import AlarmIcon from "@app/components/SvgIcons/AlarmIcon";
import ReviewIcon from "@app/components/SvgIcons/ReviewIcon";
import CalendarIcon from "@app/components/SvgIcons/CalendarIcon";
import CalendarErrorIcon from "@app/components/SvgIcons/CalendarErrorIcon";
import CalendarCheckIcon from "@app/components/SvgIcons/CalendarCheckIcon";
import TimerIcon from "@app/components/SvgIcons/TimerIcon";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { actions, selectors } from "@app/redux-store";

const userActionColor = "#FF8F1F";
const aiActionColor = "#3C77E8";
const contactTerminatedColor = "#181818";

export const useRequestCard = (requestSummary: IRequestSummary) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const requests = useSelector(selectors.getRequestsList);

  const wiggleAnim = useRef(new Animated.Value(0)).current;

  const request = useMemo(
    () => requests.find((req) => req._id === requestSummary._id),
    [requests, requestSummary],
  );

  const cardContainerStyles = useMemo(() => {
    const cardStyles: any[] = [styles.cardContainer];

    switch (requestSummary.currentStatus) {
      case RequestStatus.COLLECTING_INFORMATION:
        cardStyles.push(styles.cardContainerUserInputAwaited);
        break;
      default:
        break;
    }

    if (requestSummary.currentStatus === RequestStatus.COLLECTING_INFORMATION) {
      cardStyles.push({
        transform: [
          {
            rotate: wiggleAnim.interpolate({
              inputRange: [-1, 1],
              outputRange: ["-0.03rad", "0.03rad"],
            }),
          },
        ],
      });
    }

    return cardStyles;
  }, [requestSummary]);

  const cardTitleStyles = useMemo(() => {
    const titleStyles: any[] = [styles.cardTitle];

    switch (requestSummary.currentStatus) {
      case RequestStatus.COLLECTING_INFORMATION:
        titleStyles.push({
          color: userActionColor,
        });
        break;
      default:
        break;
    }

    return titleStyles;
  }, [requestSummary]);

  const cardDescriptionStyles = useMemo(() => {
    const descriptionStyles: any[] = [styles.cardDescription];

    switch (requestSummary.currentStatus) {
      case RequestStatus.COLLECTING_INFORMATION:
        descriptionStyles.push(styles.cardDescriptionTextUserInputAwaited);
        break;
      default:
        break;
    }

    return descriptionStyles;
  }, [requestSummary]);

  const cardIcon = useMemo(() => {
    switch (requestSummary.currentStatus) {
      case RequestStatus.COLLECTING_INFORMATION:
        return <ChatIcon color={userActionColor} />;
      default:
        return <ChatIcon color={contactTerminatedColor} />;
    }
  }, [requestSummary, cardTitleStyles]);

  const onCardPressed = useCallback(() => {
    if (!request) {
      return;
    }

    dispatch(actions.setCurrentRequest(request.toInterface()));
    dispatch(
      actions.getUsersMeRequestsByRequestId.request({
        requestId: request._id,
      }),
    );

    switch (requestSummary.currentStatus) {
      case RequestStatus.COLLECTING_INFORMATION:
        navigation.navigate("requests/chat");
        return;
      case RequestStatus.PROFESSIONAL_OFFERS_CREATED:
        navigation.navigate("requests/professional-offers");
        return;
      default:
        break;
    }
  }, [dispatch, navigation, request]);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(wiggleAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(wiggleAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(wiggleAnim, {
          toValue: -1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(wiggleAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(wiggleAnim, {
          toValue: -1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(wiggleAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(wiggleAnim, {
          toValue: 0,
          duration: 4500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [wiggleAnim]);

  return {
    cardIcon,
    cardContainerStyles,
    cardTitleStyles,
    cardDescriptionStyles,
    onCardPressed,
  };
};
