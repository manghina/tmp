import { memo } from "react";
import { usePatientAppointmentCard } from "./index.hooks";
import { View } from "react-native-ui-lib";
import { Appointment } from "@app/models/Appointment";

type PatientAppointmentCardProps = {
  appointment: Appointment;
};

export const PatientAppointmentCard = memo(
  ({ appointment }: PatientAppointmentCardProps) => {
    const {} = usePatientAppointmentCard();

    return <View />;
  },
);

PatientAppointmentCard.displayName = "PatientAppointmentCard";
