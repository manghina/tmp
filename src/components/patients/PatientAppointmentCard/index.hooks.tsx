import { Appointment, AppointmentStatus } from "@app/models/Appointment";
import { useEffect, useMemo, useRef } from "react";
import { styles } from "./styles";
import { Animated } from "react-native";

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
        titleStyles.push(styles.cardTitleTextUserInputAwaited);
        break;
      case AppointmentStatus.AWAIT_AI_MESSAGE:
      case AppointmentStatus.SEARCHING_FOR_DOCTOR:
      case AppointmentStatus.AWAIT_DOCTOR_ACCEPTANCE:
        titleStyles.push(styles.cardTitleTextAiInputAwaited);
        break;
      case AppointmentStatus.CANCELED:
      case AppointmentStatus.COMPLETED:
        titleStyles.push(styles.cardTitleTextContactTerminated);
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
        descriptionStyles.push(styles.cardDescriptionTextContactTerminated);
        break;
      default:
        break;
    }

    return descriptionStyles;
  }, [appointment]);

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

  return { cardContainerStyles, cardTitleStyles, cardDescriptionStyles };
};
