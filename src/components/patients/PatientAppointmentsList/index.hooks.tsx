import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";

export const usePatientAppointmentsList = () => {
  const appointmentsList = useSelector(selectors.getAppointmentsList);

  return { appointmentsList };
};
