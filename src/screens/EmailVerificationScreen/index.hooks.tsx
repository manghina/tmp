import { actions } from "@app/redux-store";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useEmailVerificationScreen = () => {
  const dispatch = useDispatch();

  const handleEmailVerification = useCallback(
    (otp: string) => {
      dispatch(actions.verifyEmailOtp(otp));
    },
    [dispatch, actions],
  );

  const handleResendEmailOtp = useCallback(() => {
    console.log("Resend email otp");
  }, []);

  return {
    handleEmailVerification,
    handleResendEmailOtp,
  };
};
