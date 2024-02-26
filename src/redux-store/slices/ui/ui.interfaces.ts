import { Action } from "redux";

export enum DialogTypes {}

export interface UiState {
  isDialogOpen: {
    [key in DialogTypes]: boolean;
  };
  forgotPasswordStepperCounter: number;
  professionalRegisterStepperCounter: number;
}

export interface SetDialogOpenAction extends Action {
  payload: {
    dialogType: DialogTypes;
    open: boolean;
  };
}

export interface SetForgotPasswordStepperCounterAction extends Action {
  payload: number;
}
