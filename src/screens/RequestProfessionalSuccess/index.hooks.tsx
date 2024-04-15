import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { UserHomeScreen } from "@app/screens/UserHome";
import { UserRequestAppointmentDetailsScreen } from "src/screens/UserRequestAppointmentDetails";

export const useRequestPaymentSucceededScreen = () => {
  const navigation = useNavigation<any>();

  const onCloseButtonPressed = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [
        { name: UserHomeScreen.RouteName },
        { name: UserRequestAppointmentDetailsScreen.RouteName },
      ],
    });
  }, [navigation]);

  const handleSaveRequestInICal = useCallback(() => {
    console.log("mostra info appuntamento");
  }, []);

  return { onCloseButtonPressed, handleSaveRequestInICal };
};
