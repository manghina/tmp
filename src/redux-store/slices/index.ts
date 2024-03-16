import * as extraActions from "../extra-actions";
import * as ajax from "./ajax";
import * as feedback from "./feedback";
import * as ui from "./ui";
import * as account from "./account";
import * as request from "./request";

export const reducers = {
  ajax: ajax.ajaxStore.reducer,
  feedback: feedback.feedbackStore.reducer,
  ui: ui.uiStore.reducer,
  account: account.accountStore.reducer,
  request: request.requestStore.reducer,
};

export const actions = {
  ...extraActions,
  ...ajax.ajaxStore.actions,
  ...feedback.feedbackStore.actions,
  ...ui.uiStore.actions,
  ...account.accountStore.actions,
  ...request.requestStore.actions,
};

export const selectors = {
  ...ajax.selectors,
  ...feedback.selectors,
  ...ui.selectors,
  ...account.selectors,
  ...request.selectors,
};

export const sagas = [
  ...Object.values(ajax.sagas),
  ...Object.values(feedback.sagas),
  ...Object.values(ui.sagas),
  ...Object.values(account.sagas),
  ...Object.values(request.sagas),
];
