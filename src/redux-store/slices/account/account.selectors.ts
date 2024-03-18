import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@app/redux-store";
import { User } from "@app/models/User";
import { Professional } from "@app/models/Professional";

export const getAccount = (state: RootState) => state?.account.account;
export const getMe = createSelector(
  getAccount,
  (state: RootState) => state?.account.userMe,
  (state: RootState) => state?.account.professionalMe,
  (iAccount, iUser, iProfessional) => {
    switch (iAccount?.type) {
      case "user":
        return iUser ? new User(iUser) : null;
      case "professional":
        return iProfessional ? new Professional(iProfessional) : null;
      default:
        return null;
    }
  },
);
export const getCookie = (state: RootState) => state?.account.cookie;
