import { memo } from "react";
import { usePatientAppointmentCard } from "./index.hooks";
import { Animated } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { Appointment } from "@app/models/Appointment";

type PatientAppointmentCardProps = {
  appointment: Appointment;
};

export const PatientAppointmentCard = memo(
  ({ appointment }: PatientAppointmentCardProps) => {
    const {
      cardContainerStyles,
      cardTitleStyles,
      cardDescriptionStyles,
      cardIcon,
    } = usePatientAppointmentCard(appointment);

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

PatientAppointmentCard.displayName = "PatientAppointmentCard";
