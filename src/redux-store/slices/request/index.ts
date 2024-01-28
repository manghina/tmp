import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestsState } from "./request.interfaces";
import * as selectors from "./request.selectors";
import * as sagas from "./request.sagas";
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
  currentRequest: null,
};

export const requestStore = createSlice({
  name: "request",
  initialState,
  reducers: {
    messageSubmitted: (state, action: PayloadAction<string>) => {},
    startPollingRequest: (state) => {},
    stopPollingRequest: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.appStartup, (state) => {
      // state.list = initialState.list;
    });
    builder.addCase(
      extraActions.postUsersMeRequests.success,
      (state, action) => {
        const { request } = action.payload.data;

        state.list = [request, ...state.list];
        state.currentRequest = request;
      },
    );
  },
});

export { selectors, sagas };
