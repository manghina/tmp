import * as extraActions from "../extra-actions";
import * as ajax from "./ajax";
import * as feedback from "./feedback";
import * as ui from "./ui";
import * as user from "./user";
import * as request from "./requests";

export const reducers = {
  ajax: ajax.ajaxStore.reducer,
  feedback: feedback.feedbackStore.reducer,
  ui: ui.uiStore.reducer,
  user: user.userStore.reducer,
  request: request.requestStore.reducer,
};

export const actions = {
  ...extraActions,
  ...ajax.ajaxStore.actions,
  ...feedback.feedbackStore.actions,
  ...ui.uiStore.actions,
  ...user.userStore.actions,
  ...request.requestStore.actions,
};

export const selectors = {
  ...ajax.selectors,
  ...feedback.selectors,
  ...ui.selectors,
  ...user.selectors,
  ...request.selectors,
};

export const sagas = [
  ...Object.values(ajax.sagas),
  ...Object.values(feedback.sagas),
  ...Object.values(ui.sagas),
  ...Object.values(user.sagas),
  ...Object.values(request.sagas),
];
