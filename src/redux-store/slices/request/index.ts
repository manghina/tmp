import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestsState } from "./request.interfaces";
import * as selectors from "./request.selectors";
import * as sagas from "./request.sagas";
import * as extraActions from "@app/redux-store/extra-actions";
import { IRequest } from "@app/models/Request";

const initialState: RequestsState = {
  list: [],
  currentRequest: null,
  currentRequestProfessionalOffers: null,
  chosenProfessionalOfferId: null,
  chosenSlotId: null,
  isPolling: false,
};

export const requestStore = createSlice({
  name: "request",
  initialState,
  reducers: {
    setRequestsList: (state, action: PayloadAction<IRequest[]>) => {
      state.list = action.payload;
    },
    messageSubmitted: (state, action: PayloadAction<string>) => {},
    startPollingRequest: (state) => {
      state.isPolling = true;
    },
    stopPollingRequest: (state) => {
      state.isPolling = false;
    },
    setCurrentRequest: (state, action: PayloadAction<IRequest | null>) => {
      const shouldResetRelatedFields =
        action.payload?._id !== state.currentRequest?._id;

      state.currentRequest = action.payload;

      if (shouldResetRelatedFields) {
        state.currentRequestProfessionalOffers =
          initialState.currentRequestProfessionalOffers;
        state.chosenProfessionalOfferId =
          initialState.chosenProfessionalOfferId;
        state.chosenSlotId = initialState.chosenSlotId;
      }
    },
    setChosenProfessionalOfferId: (state, action: PayloadAction<string>) => {
      state.chosenProfessionalOfferId = action.payload;
    },
    setChosenSlotId: (state, action: PayloadAction<string>) => {
      state.chosenSlotId = action.payload;
    },
    paymentSucceeded: (state) => {},
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
        state.currentRequestProfessionalOffers =
          initialState.currentRequestProfessionalOffers;
        state.chosenProfessionalOfferId =
          initialState.chosenProfessionalOfferId;
        state.chosenSlotId = initialState.chosenSlotId;
      },
    );
    builder.addCase(
      extraActions.postUsersMeRequests.success,
      (state, action) => {
        const { request } = action.payload.data;

        state.list = [request, ...state.list];
        state.currentRequest = request;
        state.currentRequestProfessionalOffers =
          initialState.currentRequestProfessionalOffers;
        state.chosenProfessionalOfferId =
          initialState.chosenProfessionalOfferId;
        state.chosenSlotId = initialState.chosenSlotId;
      },
    );
    builder.addCase(
      extraActions.postUsersMeRequestsMessagesByRequestId.success,
      (state, action) => {
        const { request } = action.payload.data;

        state.currentRequest = request;
        state.currentRequestProfessionalOffers =
          initialState.currentRequestProfessionalOffers;
        state.chosenProfessionalOfferId =
          initialState.chosenProfessionalOfferId;
        state.chosenSlotId = initialState.chosenSlotId;
      },
    );
    builder.addCase(
      extraActions.getUsersMeRequestsProfessionalOffersByRequestId.success,
      (state, action) => {
        state.currentRequestProfessionalOffers =
          action.payload.data.professionalOffers;
      },
    );
    builder.addCase(extraActions.clearSession, (state, action) => {
      state.list = initialState.list;
      state.currentRequest = initialState.currentRequest;
      state.currentRequestProfessionalOffers =
        initialState.currentRequestProfessionalOffers;
      state.chosenProfessionalOfferId = initialState.chosenProfessionalOfferId;
      state.chosenSlotId = initialState.chosenSlotId;
      state.isPolling = initialState.isPolling;
    });
  },
});

export { selectors, sagas };
