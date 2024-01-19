import { Appointment, AppointmentStatus } from "@app/models/Appointment";
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

export const usePatientAppointmentCard = (appointment: Appointment) => {
  const wiggleAnim = useRef(new Animated.Value(0)).current; // Initial value for wiggle angle: 0

  const cardContainerStyles = useMemo(() => {
    const cardStyles = [styles.cardContainer];

    switch (appointment.status) {
      case AppointmentStatus.EXPIRING:
      case AppointmentStatus.AWAIT_USER_MESSAGE:
      case AppointmentStatus.LEAVE_A_REVIEW:
      case AppointmentStatus.PAYMENT_DUE:
        cardStyles.push(styles.cardContainerUserInputAwaited);
        break;
      case AppointmentStatus.AWAIT_AI_MESSAGE:
      case AppointmentStatus.SEARCHING_FOR_DOCTOR:
      case AppointmentStatus.AWAIT_DOCTOR_ACCEPTANCE:
        cardStyles.push(styles.cardContainerAiInputAwaited);
        break;
      case AppointmentStatus.CANCELED:
      case AppointmentStatus.COMPLETED:
      case AppointmentStatus.EXPIRED:
        cardStyles.push(styles.cardContainerContactTerminated);
        break;
      default:
        break;
    }

    if (appointment.status === AppointmentStatus.EXPIRING) {
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
  }, [appointment]);

  const cardTitleStyles = useMemo(() => {
    const titleStyles = [styles.cardTitle];

    switch (appointment.status) {
      case AppointmentStatus.EXPIRING:
      case AppointmentStatus.AWAIT_USER_MESSAGE:
      case AppointmentStatus.LEAVE_A_REVIEW:
      case AppointmentStatus.PAYMENT_DUE:
        titleStyles.push({
          color: userActionColor,
        });
        break;
      case AppointmentStatus.AWAIT_AI_MESSAGE:
      case AppointmentStatus.SEARCHING_FOR_DOCTOR:
      case AppointmentStatus.AWAIT_DOCTOR_ACCEPTANCE:
        titleStyles.push({
          color: aiActionColor,
        });
        break;
      case AppointmentStatus.CANCELED:
      case AppointmentStatus.COMPLETED:
      case AppointmentStatus.EXPIRED:
        titleStyles.push({
          color: contactTerminatedColor,
        });
        break;
      default:
        break;
    }

    return titleStyles;
  }, [appointment]);

  const cardDescriptionStyles = useMemo(() => {
    const descriptionStyles = [styles.cardDescription];

    switch (appointment.status) {
      case AppointmentStatus.EXPIRING:
      case AppointmentStatus.AWAIT_USER_MESSAGE:
      case AppointmentStatus.LEAVE_A_REVIEW:
      case AppointmentStatus.PAYMENT_DUE:
        descriptionStyles.push(styles.cardDescriptionTextUserInputAwaited);
        break;
      case AppointmentStatus.AWAIT_AI_MESSAGE:
      case AppointmentStatus.SEARCHING_FOR_DOCTOR:
      case AppointmentStatus.AWAIT_DOCTOR_ACCEPTANCE:
        descriptionStyles.push(styles.cardDescriptionTextAiInputAwaited);
        break;
      case AppointmentStatus.CANCELED:
      case AppointmentStatus.COMPLETED:
      case AppointmentStatus.EXPIRED:
        descriptionStyles.push(styles.cardDescriptionTextContactTerminated);
        break;
      default:
        break;
    }

    return descriptionStyles;
  }, [appointment]);

  const cardIcon = useMemo(() => {
    switch (appointment.status) {
      case AppointmentStatus.EXPIRING:
        return <AlarmIcon color={userActionColor} />;
      case AppointmentStatus.AWAIT_USER_MESSAGE:
        return <ChatIcon color={userActionColor} />;
      case AppointmentStatus.LEAVE_A_REVIEW:
        return <ReviewIcon color={userActionColor} />;
      case AppointmentStatus.PAYMENT_DUE:
        return <CalendarIcon color={userActionColor} />;
      case AppointmentStatus.AWAIT_AI_MESSAGE:
        return <CalendarErrorIcon color={aiActionColor} />;
      case AppointmentStatus.SEARCHING_FOR_DOCTOR:
        return <CalendarCheckIcon color={aiActionColor} />;
      case AppointmentStatus.AWAIT_DOCTOR_ACCEPTANCE:
        return <CalendarIcon color={aiActionColor} />;
      case AppointmentStatus.CANCELED:
        return <ChatIcon color={contactTerminatedColor} />;
      case AppointmentStatus.COMPLETED:
        return <ChatIcon color={contactTerminatedColor} />;
      case AppointmentStatus.EXPIRED:
        return <TimerIcon color={contactTerminatedColor} />;
      default:
        return <ChatIcon color={contactTerminatedColor} />;
    }
  }, [appointment, cardTitleStyles]);

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
