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

export enum CardStatus {
  PLAIN = "PLAIN",
  EXPIRING = "EXPIRING",
  BOOKED = "BOOKED",
  WAITING_FEEDBACK = "WAITING_FEEDBACK",
}

const userActionColor = "#FF8F1F";
const aiActionColor = "#3C77E8";
const contactTerminatedColor = "#181818";

export const useRequestCard = (status: CardStatus) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const requests = useSelector(selectors.getRequestsList);

  const wiggleAnim = useRef(new Animated.Value(0)).current;

  const cardContainerStyles = useMemo(() => {
    const cardStyles: any[] = [styles.cardContainer];

    switch (status) {
      case CardStatus.PLAIN:
        cardStyles.push(styles.cardContainerUserInputAwaited);
        break;
      default:
        break;
    }

    if (status === CardStatus.EXPIRING) {
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
  }, [status]);

  const cardTitleStyles = useMemo(() => {
    const titleStyles: any[] = [styles.cardTitle];

    switch (status) {
      case CardStatus.PLAIN:
        titleStyles.push({
          color: userActionColor,
        });
        break;
      default:
        break;
    }

    return titleStyles;
  }, [status]);

  const cardDescriptionStyles = useMemo(() => {
    const descriptionStyles: any[] = [styles.cardDescription];

    switch (status) {
      case CardStatus.PLAIN:
        descriptionStyles.push(styles.cardDescriptionTextUserInputAwaited);
        break;
      default:
        break;
    }

    return descriptionStyles;
  }, [status]);

  const cardIcon = useMemo(() => {
    switch (status) {
      case CardStatus.PLAIN:
        return <ChatIcon color={userActionColor} />;
      default:
        return <ChatIcon color={contactTerminatedColor} />;
    }
  }, [status, cardTitleStyles]);

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
