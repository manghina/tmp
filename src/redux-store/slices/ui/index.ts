import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "@app/redux-store/slices/ui/ui.selectors";
import {
  DialogTypes,
  SetDialogOpenAction,
  UiState,
} from "@app/redux-store/slices/ui/ui.interfaces";
import * as extraActions from "@app/redux-store/extra-actions";
import * as sagas from "@app/redux-store/slices/ui/ui.sagas";

const initialState: UiState = {
  isDialogOpen: {},
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
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.appStartup, (state) => {
      state.isDialogOpen = {
        ...initialState.isDialogOpen,
      };
    });
  },
});

export { selectors, sagas };
