import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfessionalOfferState } from "./professional-offer.interfaces";
import * as selectors from "./professional-offer.selectors";
import * as sagas from "./professional-offer.sagas";
import * as extraActions from "@app/redux-store/extra-actions";
import { IProfessionalOffer } from "@app/models/ProfessionalOffer";

const initialState: ProfessionalOfferState = {
  list: [],
  currentProfessionalOffer: null,
};

export const professionalOfferStore = createSlice({
  name: "professional-offer",
  initialState,
  reducers: {
    setCurrentRequest: (
      state,
      action: PayloadAction<IProfessionalOffer | null>,
    ) => {
      state.currentProfessionalOffer = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      extraActions.getProfessionalsMeProfessionalOffers.success,
      (state, action) => {
        state.list = action.payload.data.professionalOffers;
      },
    );
    builder.addCase(extraActions.clearSession, (state, action) => {
      state.list = initialState.list;
      state.currentProfessionalOffer = initialState.currentProfessionalOffer;
    });
  },
});

export { selectors, sagas };
