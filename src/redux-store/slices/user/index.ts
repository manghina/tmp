import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./user.interfaces";
import * as selectors from "./user.selectors";
import * as sagas from "./user.sagas";
import * as extraActions from "@app/redux-store/extra-actions";

export const userStore = createSlice({
  name: "user",
  initialState: {
    me: {},
    cookie: null,
  } as UserState,
  reducers: {
    registrationFormSubmitted: (
      state,
      action: PayloadAction<{
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        birthDate: string;
      }>,
    ) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(
      extraActions.postAccountsSessions.success,
      (state, action) => {
        state.cookie = action.payload.data.cookie;
      },
    );
    builder.addCase(extraActions.getUsersMe.success, (state, action) => {
      state.me = action.payload.data.user;
    });
    /*builder.addCase(extraActions.appStartup, (state, action) => {
      state.cookie = null;
    });*/ // Scommentare per prevenire navigazione diretta a home screen utente
  },
});

export { selectors, sagas };
