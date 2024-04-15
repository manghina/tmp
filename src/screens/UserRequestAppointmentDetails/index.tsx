import { View } from "react-native-ui-lib";
import { useUserRequestAppointmentDetailsScreen } from "@app/screens/UserRequestAppointmentDetails/index.hooks";

type UserRequestAppointmentDetailsScreenProps = {};

export const UserRequestAppointmentDetailsScreen =
  ({}: UserRequestAppointmentDetailsScreenProps) => {
    const {} = useUserRequestAppointmentDetailsScreen();

    return <View />;
  };

UserRequestAppointmentDetailsScreen.displayName =
  "UserRequestAppointmentDetailsScreen";
UserRequestAppointmentDetailsScreen.RouteName =
  "requests/appointment-details" as const;
