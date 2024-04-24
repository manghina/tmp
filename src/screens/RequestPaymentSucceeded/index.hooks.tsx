import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import { UserHomeScreen } from "@app/screens/UserHome";
import { UserRequestAppointmentDetailsScreen } from "src/screens/UserRequestAppointmentDetails";
import { selectors } from "@app/redux-store";
import { handleRequestReview } from "@app/utils/appStore";
import { useSelector } from "react-redux";

export const useRequestPaymentSucceededScreen = () => {
  const navigation = useNavigation<any>();
  const account = useSelector(selectors.getAccount);

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

  useEffect(() => {
    if (!account?.flags?.FIRST_PAYMENT) {
      handleRequestReview();
    }
  }, [account]);

  return { onCloseButtonPressed, handleSaveRequestInICal };
};
