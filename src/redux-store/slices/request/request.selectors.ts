import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@app/redux-store";
import { Request } from "@app/models/Request";
import { ProfessionalOffer } from "../../../models/ProfessionalOffer";

export const getRequestsList = createSelector(
  (state: RootState) => state?.request?.list ?? [],
  (list) => list.map((iRequest) => new Request(iRequest)),
);

export const getCurrentRequest = createSelector(
  (state: RootState) => state?.request?.currentRequest ?? null,
  (currentRequest) => currentRequest && new Request(currentRequest),
);
export const getCurrentRequestProfessionalOffers = createSelector(
  (state: RootState) => state?.request?.currentRequestProfessionalOffers ?? [],
  (iCurrentRequestProfessionalOffers) =>
    iCurrentRequestProfessionalOffers.map(
      (iCurrentRequestProfessionalOffer) =>
        new ProfessionalOffer(iCurrentRequestProfessionalOffer),
    ),
);

export const getIsPolling = (state: RootState) =>
  state?.request?.isPolling ?? false;
