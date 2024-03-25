import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as selectors from "@app/redux-store/slices/ui/ui.selectors";
import {
  SetDialogOpenAction,
  SetForgotPasswordStepperCounterAction,
  UiState,
} from "@app/redux-store/slices/ui/ui.interfaces";
import * as extraActions from "@app/redux-store/extra-actions";
import * as sagas from "@app/redux-store/slices/ui/ui.sagas";

const initialState: UiState = {
  isDialogOpen: {},
  forgotPasswordStepperCounter: 1,
  professionalRegisterStepperCounter: 1,
};

export const uiStore = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setDialogOpen: (state, action: SetDialogOpenAction) => {
      state.isDialogOpen = {
        ...(state.isDialogOpen ?? initialState.isDialogOpen),
        [action.payload.dialogType]: action.payload.open,
      };
    },
    setForgotPasswordStepperCounter: (
      state,
      action: SetForgotPasswordStepperCounterAction,
    ) => {
      state.forgotPasswordStepperCounter = action.payload;
    },
    setProfessionalRegisterStepperCounter: (
      state,
      action: PayloadAction<number>,
    ) => {
      state.professionalRegisterStepperCounter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.appStartup, (state) => {
      state.isDialogOpen = {
        ...initialState.isDialogOpen,
      };
      state.forgotPasswordStepperCounter =
        initialState.forgotPasswordStepperCounter;
      state.professionalRegisterStepperCounter =
        initialState.professionalRegisterStepperCounter;
    });
    builder.addCase(extraActions.clearSession, (state, action) => {
      state.isDialogOpen = initialState.isDialogOpen;
      state.forgotPasswordStepperCounter =
        initialState.forgotPasswordStepperCounter;
      state.professionalRegisterStepperCounter =
        initialState.professionalRegisterStepperCounter;
    });
  },
});

export { selectors, sagas };
