import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";
import { useCallback, useMemo } from "react";
import moment from "moment";

export const useUserRequestAppointmentDetailsScreen = () => {
  const currentRequest = useSelector(selectors.getCurrentRequest);
  const chosenProfessionalOffer = useSelector(
    selectors.getChosenProfessionalOffer,
  );
  const chosenSlot = useSelector(selectors.getChosenSlot);

  const visitDay = useMemo(() => moment(chosenSlot?.startDate), [chosenSlot]);

  const onAddToCalendarPressed = useCallback(() => {}, []);

  return {
    currentRequest,
    chosenProfessionalOffer,
    chosenSlot,
    visitDay,
    onAddToCalendarPressed,
  };
};
