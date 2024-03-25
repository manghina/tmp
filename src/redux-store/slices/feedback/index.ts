import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeedbackState } from "./feedback.interfaces";
import * as selectors from "./feedback.selectors";
import * as sagas from "./feedback.sagas";
import * as extraActions from "@app/redux-store/extra-actions";

export const feedbackStore = createSlice({
  name: "feedback",
  initialState: {
    open: false,
    type: "info",
    message: "",
  } as FeedbackState,
  reducers: {
    setFeedback: (
      state,
      {
        payload,
      }: PayloadAction<{
        type?: "success" | "info" | "warning" | "error";
        message?: string;
      }>,
    ) => {
      state.open = true;
      state.type = payload.type ?? "info";
      state.message = payload.message ?? state.message;
    },
    closeFeedback: (state) => {
      state.open = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.appStartup, (state) => {
      state.open = false;
      state.message = "";
      state.type = "info";
    });
    builder.addCase(extraActions.clearSession, (state, action) => {
      state.open = false;
      state.message = "";
      state.type = "info";
    });
  },
});

export { selectors, sagas };
