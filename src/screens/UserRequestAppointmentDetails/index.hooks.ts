import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";
import { useCallback, useMemo } from "react";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { RequestCancelByUserScreen } from "../RequestCancelByUser";

export const useUserRequestAppointmentDetailsScreen = () => {
  const navigation = useNavigation<any>();
  const currentRequest = useSelector(selectors.getCurrentRequest);
  const chosenProfessionalOffer = useSelector(
    selectors.getChosenProfessionalOffer,
  );
  const chosenSlot = useSelector(selectors.getChosenSlot);

  const visitDay = useMemo(() => moment(chosenSlot?.startDate), [chosenSlot]);

  const onAddToCalendarPressed = useCallback(() => {}, []);

  const onCancelRequestPressed = useCallback(() => {
    navigation.navigate(RequestCancelByUserScreen.RouteName);
  }, [navigation]);

  return {
    currentRequest,
    chosenProfessionalOffer,
    chosenSlot,
    visitDay,
    onAddToCalendarPressed,
    onCancelRequestPressed,
  };
};
