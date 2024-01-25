import { RootState } from "@app/redux-store";

export const getIsDialogOpen = (state: RootState) => state?.ui?.isDialogOpen;
export const getForgotPasswordStepperCounter = (state: RootState) => state?.ui?.forgotPasswordStepperCounter;
