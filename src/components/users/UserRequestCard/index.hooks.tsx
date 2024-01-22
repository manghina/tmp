import { Request, RequestStatus } from "@app/models/Request";
import { useEffect, useMemo, useRef } from "react";
import { styles } from "./styles";
import { Animated } from "react-native";
import ChatIcon from "@app/components/SvgIcons/ChatIcon";
import AlarmIcon from "@app/components/SvgIcons/AlarmIcon";
import ReviewIcon from "@app/components/SvgIcons/ReviewIcon";
import CalendarIcon from "@app/components/SvgIcons/CalendarIcon";
import CalendarErrorIcon from "@app/components/SvgIcons/CalendarErrorIcon";
import CalendarCheckIcon from "@app/components/SvgIcons/CalendarCheckIcon";
import TimerIcon from "@app/components/SvgIcons/TimerIcon";

const userActionColor = "#FF8F1F";
const aiActionColor = "#3C77E8";
const contactTerminatedColor = "#181818";

export const useUserRequestCard = (request: Request) => {
  const wiggleAnim = useRef(new Animated.Value(0)).current; // Initial value for wiggle angle: 0

  const cardContainerStyles = useMemo(() => {
    const cardStyles: any[] = [styles.cardContainer];

    switch (request.status) {
      case RequestStatus.EXPIRING:
      case RequestStatus.AWAIT_USER_MESSAGE:
      case RequestStatus.LEAVE_A_REVIEW:
      case RequestStatus.PAYMENT_DUE:
        cardStyles.push(styles.cardContainerUserInputAwaited);
        break;
      case RequestStatus.AWAIT_AI_MESSAGE:
      case RequestStatus.SEARCHING_FOR_PROFESSIONAL:
      case RequestStatus.AWAIT_PROFESSIONAL_ACCEPTANCE:
        cardStyles.push(styles.cardContainerAiInputAwaited);
        break;
      case RequestStatus.CANCELED:
      case RequestStatus.COMPLETED:
      case RequestStatus.EXPIRED:
        cardStyles.push(styles.cardContainerContactTerminated);
        break;
      default:
        break;
    }

    if (request.status === RequestStatus.EXPIRING) {
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

    switch (request.status) {
      case RequestStatus.EXPIRING:
      case RequestStatus.AWAIT_USER_MESSAGE:
      case RequestStatus.LEAVE_A_REVIEW:
      case RequestStatus.PAYMENT_DUE:
        titleStyles.push({
          color: userActionColor,
        });
        break;
      case RequestStatus.AWAIT_AI_MESSAGE:
      case RequestStatus.SEARCHING_FOR_PROFESSIONAL:
      case RequestStatus.AWAIT_PROFESSIONAL_ACCEPTANCE:
        titleStyles.push({
          color: aiActionColor,
        });
        break;
      case RequestStatus.CANCELED:
      case RequestStatus.COMPLETED:
      case RequestStatus.EXPIRED:
        titleStyles.push({
          color: contactTerminatedColor,
        });
        break;
      default:
        break;
    }

    return titleStyles;
  }, [request]);

  const cardDescriptionStyles = useMemo(() => {
    const descriptionStyles: any[] = [styles.cardDescription];

    switch (request.status) {
      case RequestStatus.EXPIRING:
      case RequestStatus.AWAIT_USER_MESSAGE:
      case RequestStatus.LEAVE_A_REVIEW:
      case RequestStatus.PAYMENT_DUE:
        descriptionStyles.push(styles.cardDescriptionTextUserInputAwaited);
        break;
      case RequestStatus.AWAIT_AI_MESSAGE:
      case RequestStatus.SEARCHING_FOR_PROFESSIONAL:
      case RequestStatus.AWAIT_PROFESSIONAL_ACCEPTANCE:
        descriptionStyles.push(styles.cardDescriptionTextAiInputAwaited);
        break;
      case RequestStatus.CANCELED:
      case RequestStatus.COMPLETED:
      case RequestStatus.EXPIRED:
        descriptionStyles.push(styles.cardDescriptionTextContactTerminated);
        break;
      default:
        break;
    }

    return descriptionStyles;
  }, [request]);

  const cardIcon = useMemo(() => {
    switch (request.status) {
      case RequestStatus.EXPIRING:
        return <AlarmIcon color={userActionColor} />;
      case RequestStatus.AWAIT_USER_MESSAGE:
        return <ChatIcon color={userActionColor} />;
      case RequestStatus.LEAVE_A_REVIEW:
        return <ReviewIcon color={userActionColor} />;
      case RequestStatus.PAYMENT_DUE:
        return <CalendarIcon color={userActionColor} />;
      case RequestStatus.AWAIT_AI_MESSAGE:
        return <CalendarErrorIcon color={aiActionColor} />;
      case RequestStatus.SEARCHING_FOR_PROFESSIONAL:
        return <CalendarCheckIcon color={aiActionColor} />;
      case RequestStatus.AWAIT_PROFESSIONAL_ACCEPTANCE:
        return <CalendarIcon color={aiActionColor} />;
      case RequestStatus.CANCELED:
        return <ChatIcon color={contactTerminatedColor} />;
      case RequestStatus.COMPLETED:
        return <ChatIcon color={contactTerminatedColor} />;
      case RequestStatus.EXPIRED:
        return <TimerIcon color={contactTerminatedColor} />;
      default:
        return <ChatIcon color={contactTerminatedColor} />;
    }
  }, [request, cardTitleStyles]);

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
  };
};
