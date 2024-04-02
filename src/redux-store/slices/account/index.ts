import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountState } from "./account.interfaces";
import * as selectors from "./account.selectors";
import * as sagas from "./account.sagas";
import * as extraActions from "@app/redux-store/extra-actions";
import { Specialization } from "@app/models/common/DoctorCommon";

export const accountStore = createSlice({
  name: "account",
  initialState: {
    account: null,
    userMe: null,
    professionalMe: null,
    cookie: null,
  } as AccountState,
  reducers: {
    userRegistrationFormSubmitted: (
      state,
      action: PayloadAction<{
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        birthDate: string;
      }>,
    ) => {},
    professionalRegistrationFormSubmitted: (
      state,
      action: PayloadAction<{
        name: string;
        lastName: string;
        birthDate: string;
        phones: string[];
        specializations: Specialization[];
        city: string;
        alboId: string;
        email: string;
        password: string;
        //professionalPaperPhoto: any;
      }>,
    ) => {},
    resetAccount: (state) => {
      state.account = null;
      state.userMe = null;
      state.professionalMe = null;
      state.cookie = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      extraActions.postAccountsSessions.success,
      (state, action) => {
        state.cookie = action.payload.data.cookie;
        state.account = action.payload.data.account;
      },
    );
    builder.addCase(extraActions.postAccounts.success, (state, action) => {
      state.account = action.payload.data.account;
    });
    builder.addCase(extraActions.getAccountsMe.success, (state, action) => {
      state.account = action.payload.data.account;
    });
    builder.addCase(extraActions.getUsersMe.success, (state, action) => {
      state.userMe = action.payload.data.user;
      state.professionalMe = null;
    });
    builder.addCase(extraActions.postUsers.success, (state, action) => {
      state.account = action.payload.data.account;
      state.userMe = action.payload.data.user;
      state.professionalMe = null;
    });
    builder.addCase(
      extraActions.getProfessionalsMe.success,
      (state, action) => {
        state.userMe = null;
        state.professionalMe = action.payload.data.professional;
      },
    );
    builder.addCase(extraActions.postProfessionals.success, (state, action) => {
      state.account = action.payload.data.account;
      state.userMe = null;
      state.professionalMe = action.payload.data.professional;
    });
    builder.addCase(extraActions.clearSession, (state, action) => {
      state.cookie = null;
    });
    builder.addCase(extraActions.appStartup, (state, action) => {
      // state.cookie = null; // Scommentare per prevenire navigazione diretta a home screen utente
    });
  },
});

export { selectors, sagas };
