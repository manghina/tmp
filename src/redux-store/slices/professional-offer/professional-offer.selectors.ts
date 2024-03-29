import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@app/redux-store";
import { ProfessionalOffer } from "@app/models/ProfessionalOffer";

export const getActiveProfessionalOffersList = createSelector(
  (state: RootState) => state?.professionalOffer?.activeList ?? [],
  (list) =>
    list.map((iProfessionalOffer) => new ProfessionalOffer(iProfessionalOffer)),
);

export const getArchivedProfessionalOffersList = createSelector(
  (state: RootState) => state?.professionalOffer?.archivedList ?? [],
  (list) =>
    list.map((iProfessionalOffer) => new ProfessionalOffer(iProfessionalOffer)),
);

export const getProfessionalOfferArchivedPage = (state: RootState) =>
  state?.professionalOffer?.archivedPage;
export const getProfessionalOfferArchivedPerPage = (state: RootState) =>
  state?.professionalOffer?.archivedPerPage;
export const getProfessionalOfferArchivedTotalCount = (state: RootState) =>
  state?.professionalOffer?.archivedTotalCount;

export const getCurrentProfessionalOffer = createSelector(
  (state: RootState) =>
    state?.professionalOffer?.currentProfessionalOffer ?? null,
  (currentProfessionalOffer) =>
    currentProfessionalOffer && new ProfessionalOffer(currentProfessionalOffer),
);
