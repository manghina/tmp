import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";
import { useMemo } from "react";
import moment from "moment";

export const useUserRequestAppointmentDetailsScreen = () => {
  const currentRequest = useSelector(selectors.getCurrentRequest);
  const chosenSlot = useSelector(selectors.getChosenSlot);

  const visitDay = useMemo(() => moment(chosenSlot?.startDate), [chosenSlot]);

  return { currentRequest, chosenSlot, visitDay };
};
