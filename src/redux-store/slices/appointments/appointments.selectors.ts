import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@app/redux-store";
import { Appointment } from "@app/models/Appointment";

export const getAppointmentsList = createSelector(
  (state: RootState) => state?.appointments?.list ?? [],
  (list) => list.map((iAppointment) => new Appointment(iAppointment)),
);
