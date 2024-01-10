import { Action } from "redux";

export enum DialogTypes {}

export interface UiState {
  isDialogOpen: {
    [key in DialogTypes]: boolean;
  };
}

export interface SetDialogOpenAction extends Action {
  payload: {
    dialogType: DialogTypes;
    open: boolean;
  };
}
