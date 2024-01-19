import { memo } from "react";
import { usePatientAppointmentCard } from "./index.hooks";
import { Animated } from "react-native";
import { Text } from "react-native-ui-lib";
import { Appointment } from "@app/models/Appointment";

type PatientAppointmentCardProps = {
  appointment: Appointment;
};

export const PatientAppointmentCard = memo(
  ({ appointment }: PatientAppointmentCardProps) => {
    const { cardContainerStyles, cardTitleStyles, cardDescriptionStyles } =
      usePatientAppointmentCard(appointment);

    return (
      <Animated.View style={cardContainerStyles}>
        <Text style={cardTitleStyles}>{appointment.status}</Text>
        <Text style={cardDescriptionStyles}>{appointment.description}</Text>
      </Animated.View>
    );
  },
);

PatientAppointmentCard.displayName = "PatientAppointmentCard";
