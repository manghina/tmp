import { memo } from "react";
import { useUserAppointmentsList } from "./index.hooks";
import { View, Text } from "react-native-ui-lib";
import { UserAppointmentCard } from "@app/components/users/UserAppointmentCard";

type UserAppointmentsListProps = {};

export const UserAppointmentsList = memo(({}: UserAppointmentsListProps) => {
  const { appointmentsList } = useUserAppointmentsList();

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
        <UserAppointmentCard key={appointment._id} appointment={appointment} />
      ))}
    </View>
  );
});

UserAppointmentsList.displayName = "UserAppointmentsList";
