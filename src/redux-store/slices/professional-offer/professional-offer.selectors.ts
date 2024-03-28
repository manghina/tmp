import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@app/redux-store";
import { ProfessionalOffer } from "@app/models/ProfessionalOffer";

export const getProfessionalOffersList = createSelector(
  (state: RootState) => state?.professionalOffer?.list ?? [],
  (list) =>
    list.map((iProfessionalOffer) => new ProfessionalOffer(iProfessionalOffer)),
);

export const getCurrentRequest = createSelector(
  (state: RootState) =>
    state?.professionalOffer?.currentProfessionalOffer ?? null,
  (currentProfessionalOffer) =>
    currentProfessionalOffer && new ProfessionalOffer(currentProfessionalOffer),
);
