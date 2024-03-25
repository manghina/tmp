import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestsState } from "./request.interfaces";
import * as selectors from "./request.selectors";
import * as sagas from "./request.sagas";
import * as extraActions from "@app/redux-store/extra-actions";
import { IRequest } from "@app/models/Request";

const initialState: RequestsState = {
  list: [],
  currentRequest: null,
  isPolling: false,
};

export const requestStore = createSlice({
  name: "request",
  initialState,
  reducers: {
    messageSubmitted: (state, action: PayloadAction<string>) => {},
    startPollingRequest: (state) => {
      state.isPolling = true;
    },
    stopPollingRequest: (state) => {
      state.isPolling = false;
    },
    setCurrentRequest: (state, action: PayloadAction<IRequest | null>) => {
      state.currentRequest = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      extraActions.getUsersMeRequests.success,
      (state, action) => {
        state.list = action.payload.data.requests;
      },
    );
    builder.addCase(
      extraActions.getUsersMeRequestsByRequestId.success,
      (state, action) => {
        state.currentRequest = action.payload.data.request;
      },
    );
    builder.addCase(
      extraActions.postUsersMeRequests.success,
      (state, action) => {
        const { request } = action.payload.data;

        state.list = [request, ...state.list];
        state.currentRequest = request;
      },
    );
    builder.addCase(
      extraActions.postUsersMeRequestsMessagesByRequestId.success,
      (state, action) => {
        const { request } = action.payload.data;

        state.currentRequest = request;
      },
    );
    builder.addCase(extraActions.clearSession, (state, action) => {
      state.list = initialState.list;
      state.currentRequest = initialState.currentRequest;
      state.isPolling = initialState.isPolling;
    });
  },
});

export { selectors, sagas };
