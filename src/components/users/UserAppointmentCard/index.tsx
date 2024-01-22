import { memo } from "react";
import { useUserAppointmentCard } from "./index.hooks";
import { Animated } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { Appointment } from "@app/models/Appointment";

type UserAppointmentCardProps = {
  appointment: Appointment;
};

export const UserAppointmentCard = memo(
  ({ appointment }: UserAppointmentCardProps) => {
    const {
      cardContainerStyles,
      cardTitleStyles,
      cardDescriptionStyles,
      cardIcon,
    } = useUserAppointmentCard(appointment);

    return (
      <Animated.View style={cardContainerStyles}>
        <View style={{ flexDirection: "row", gap: 15 }}>
          {cardIcon}
          <View flex style={{ gap: 10 }}>
            <Text style={cardTitleStyles}>{appointment.status}</Text>
            <Text style={cardDescriptionStyles}>{appointment.description}</Text>
          </View>
        </View>
      </Animated.View>
    );
  },
);

UserAppointmentCard.displayName = "UserAppointmentCard";
