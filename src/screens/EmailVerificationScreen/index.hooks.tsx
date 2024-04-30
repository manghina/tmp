import { actions } from "@app/redux-store";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { TutorialScreen } from "@app/screens/Tutorial";
import { LoginScreen } from "@app/screens/Login";

export const useEmailVerificationScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const handleEmailVerification = useCallback(
    (otp: string) => {
      dispatch(actions.verifyEmailOtp(otp));
    },
    [dispatch, actions],
  );

  const handleResendEmailOtp = useCallback(() => {
    console.log("Resend email otp");
  }, []);

  const handleGoBack = useCallback(() => {
    dispatch(actions.clearSession());
    navigation.reset({
      index: 0,
      routes: [
        { name: TutorialScreen.RouteName },
        { name: LoginScreen.RouteName },
      ],
    });
  }, [dispatch]);

  return {
    handleEmailVerification,
    handleResendEmailOtp,
    handleGoBack,
  };
};
