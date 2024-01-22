import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@app/redux-store";
import { Request } from "@app/models/Request";

export const getRequestsList = createSelector(
  (state: RootState) => state?.request?.list ?? [],
  (list) => list.map((iRequest) => new Request(iRequest)),
);
