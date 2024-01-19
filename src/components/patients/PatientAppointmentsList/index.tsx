import { memo } from "react";
import { usePatientAppointmentsList } from "./index.hooks";
import { View } from "react-native-ui-lib";

type PatientAppointmentsListProps = {};

export const PatientAppointmentsList = memo(
  ({}: PatientAppointmentsListProps) => {
    const { appointmentsList } = usePatientAppointmentsList();

    return <View />;
  },
);

PatientAppointmentsList.displayName = "PatientAppointmentsList";
