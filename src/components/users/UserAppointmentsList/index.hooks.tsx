import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";

export const useUserAppointmentsList = () => {
  const appointmentsList = useSelector(selectors.getAppointmentsList);

  return { appointmentsList };
};
