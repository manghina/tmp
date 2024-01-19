import { memo } from "react";
import { usePatientAppointmentsList } from "./index.hooks";
import { View, Text } from "react-native-ui-lib";
import { PatientAppointmentCard } from "../PatientAppointmentCard";

type PatientAppointmentsListProps = {};

export const PatientAppointmentsList = memo(
  ({}: PatientAppointmentsListProps) => {
    const { appointmentsList } = usePatientAppointmentsList();

    return (
      <View
        style={{
          gap: 10,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "900",
            }}
          >
            Prenotazioni in corso
          </Text>
        </View>
        {appointmentsList.map((appointment) => (
          <PatientAppointmentCard appointment={appointment} />
        ))}
      </View>
    );
  },
);

PatientAppointmentsList.displayName = "PatientAppointmentsList";
