import { createSlice } from "@reduxjs/toolkit";
import { AppointmentsState } from "./appointments.interfaces";
import * as selectors from "./appointments.selectors";
import * as sagas from "./appointments.sagas";
import * as extraActions from "@app/redux-store/extra-actions";

import { AppointmentStatus } from "@app/models/Appointment";

const initialState: AppointmentsState = {
  list: Object.values(AppointmentStatus)
    .filter(() => true) // Set to false in order to see the other version of the home
    .map((status, index) => ({
      _id: index.toString(),
      status,
      description:
        "Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus.",
    })),
};

export const appointmentsStore = createSlice({
  name: "appointments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(extraActions.appStartup, (state) => {
      state.list = initialState.list;
    });
  },
});

export { selectors, sagas };
