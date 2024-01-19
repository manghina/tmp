import { createSlice } from "@reduxjs/toolkit";
import { AppointmentsState } from "./appointments.interfaces";
import * as selectors from "./appointments.selectors";
import * as sagas from "./appointments.sagas";
import * as extraActions from "@app/redux-store/extra-actions";

export const appointmentsStore = createSlice({
  name: "appointments",
  initialState: {
    list: [],
  } as AppointmentsState,
  reducers: {},
  extraReducers: (builder) => {},
});

export { selectors, sagas };
