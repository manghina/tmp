import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfessionalOfferState } from "./professional-offer.interfaces";
import * as selectors from "./professional-offer.selectors";
import * as sagas from "./professional-offer.sagas";
import * as extraActions from "@app/redux-store/extra-actions";
import { IProfessionalOffer } from "@app/models/ProfessionalOffer";

const initialState: ProfessionalOfferState = {
  activeList: [],
  archivedList: [],
  archivedPage: 1,
  archivedPerPage: 10,
  archivedTotalCount: null,
  currentProfessionalOffer: null,
};

export const professionalOfferStore = createSlice({
  name: "professional-offer",
  initialState,
  reducers: {
    professionalOffersPageVisited: (state) => {
      state.activeList = initialState.activeList;
      state.archivedList = initialState.archivedList;
      state.archivedPage = initialState.archivedPage;
      state.archivedPerPage = initialState.archivedPerPage;
      state.archivedTotalCount = initialState.archivedTotalCount;
    },
    increaseArchivedProfessionalOffersPage: (state) => {
      state.archivedPage += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      extraActions.getProfessionalsMeProfessionalOffers.success,
      (state, action) => {
        const { active, archived } = action.payload.prepareParams;
        const { professionalOffers, totalCount } = action.payload.data;

        if (active) {
          state.activeList = professionalOffers;
        }

        if (archived) {
          state.archivedTotalCount = totalCount;
          state.archivedList = [...state.archivedList, ...professionalOffers];
        }
      },
    );
    builder.addCase(
      extraActions.getProfessionalsMeProfessionalOffersByProfessionalOfferId
        .success,
      (state, action) => {
        const { professionalOffer } = action.payload.data;

        state.currentProfessionalOffer = professionalOffer;
      },
    );
    builder.addCase(
      extraActions.patchProfessionalsMeProfessionalOffersByProfessionalOfferId
        .success,
      (state, action) => {
        const { professionalOffer } = action.payload.data;

        state.currentProfessionalOffer = professionalOffer;
        state.activeList = state.activeList.map((offer) =>
          offer._id === professionalOffer._id ? professionalOffer : offer,
        );
      },
    );
    builder.addCase(extraActions.clearSession, (state, action) => {
      state.activeList = initialState.activeList;
      state.archivedList = initialState.archivedList;
      state.currentProfessionalOffer = initialState.currentProfessionalOffer;
    });
  },
});

export { selectors, sagas };
