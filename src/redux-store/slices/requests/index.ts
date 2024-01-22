import { createSlice } from "@reduxjs/toolkit";
import { RequestsState } from "./requests.interfaces";
import * as selectors from "./requests.selectors";
import * as sagas from "./requests.sagas";
import * as extraActions from "@app/redux-store/extra-actions";

import { RequestStatus } from "@app/models/Request";

const initialState: RequestsState = {
  list: Object.values(RequestStatus)
    .filter(() => true) // Set to false in order to see the other version of the home
    .map((status, index) => ({
      _id: index.toString(),
      status,
      description:
        "Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus.",
    })),
};

export const requestStore = createSlice({
  name: "request",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(extraActions.appStartup, (state) => {
      state.list = initialState.list;
    });
  },
});

export { selectors, sagas };
