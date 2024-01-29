import { Request, RequestStatus } from "@app/models/Request";
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
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { actions } from "../../../redux-store";

const userActionColor = "#FF8F1F";
const aiActionColor = "#3C77E8";
const contactTerminatedColor = "#181818";

export const useUserRequestCard = (request: Request) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const wiggleAnim = useRef(new Animated.Value(0)).current; // Initial value for wiggle angle: 0

  const cardContainerStyles = useMemo(() => {
    const cardStyles: any[] = [styles.cardContainer];

    switch (request.currentStatus) {
      case RequestStatus.COLLECTING_INFORMATION:
        cardStyles.push(styles.cardContainerUserInputAwaited);
        break;
      default:
        break;
    }

    if (request.currentStatus === RequestStatus.COLLECTING_INFORMATION) {
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
  }, [request]);

  const cardTitleStyles = useMemo(() => {
    const titleStyles: any[] = [styles.cardTitle];

    switch (request.currentStatus) {
      case RequestStatus.COLLECTING_INFORMATION:
        titleStyles.push({
          color: userActionColor,
        });
        break;
      default:
        break;
    }

    return titleStyles;
  }, [request]);

  const cardDescriptionStyles = useMemo(() => {
    const descriptionStyles: any[] = [styles.cardDescription];

    switch (request.currentStatus) {
      case RequestStatus.COLLECTING_INFORMATION:
        descriptionStyles.push(styles.cardDescriptionTextUserInputAwaited);
        break;
      default:
        break;
    }

    return descriptionStyles;
  }, [request]);

  const cardIcon = useMemo(() => {
    switch (request.currentStatus) {
      case RequestStatus.COLLECTING_INFORMATION:
        return <ChatIcon color={userActionColor} />;
      default:
        return <ChatIcon color={contactTerminatedColor} />;
    }
  }, [request, cardTitleStyles]);

  const onCardPressed = useCallback(() => {
    dispatch(actions.setCurrentRequest(request.toInterface()));
    dispatch(
      actions.getUsersMeRequestsByRequestId.request({
        requestId: request._id,
      }),
    );

    if (
      request.currentStatus === RequestStatus.COLLECTING_INFORMATION ||
      true
    ) {
      navigation.navigate("requests/chat");
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
