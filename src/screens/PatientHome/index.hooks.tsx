import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";

export const usePatientHomeScreen = () => {
  const navigation = useNavigation<any>();

  const me = useSelector(selectors.getUserMe);
  const appointmentsList = useSelector(selectors.getAppointmentsList);

  useEffect(() => {
    if (!me) {
      navigation.replace("Login");
    }
  }, [me, navigation]);

  return { me, appointmentsList };
};
