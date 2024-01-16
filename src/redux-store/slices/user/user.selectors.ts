import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@app/redux-store";
import { User } from "@app/models/User";

export const getUserMe = createSelector(
  (state: RootState) => state?.user.me,
  (me) => (me ? new User(me) : null),
);
export const getCookie = (state: RootState) => state?.user.cookie;
