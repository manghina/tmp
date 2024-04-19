import { useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { User } from "@app/models/User";
import { RequestChatScreen } from "@app/screens/RequestChat";
import { LoginScreen } from "@app/screens/Login";
import { Account } from "@app/models/Account";
import { OtpVerificationScreen } from "../OtpVerificationScreen";

export const useUserHomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const me: User | null = useSelector(selectors.getMe);
  const account: Account | null = useSelector(selectors.getAccount);
  const requestsList = useSelector(selectors.getRequestsList);

  const onSweepNowButtonPressed = useCallback(() => {
    dispatch(actions.setCurrentRequest(null));
    navigation.navigate(RequestChatScreen.RouteName);
  }, [dispatch, navigation]);

  const handleUserEmailVerification = useCallback(
    (otpCode: string) => {
      dispatch(actions.verifyEmailOtp(otpCode));
    },
    [dispatch],
  );

  useEffect(() => {
    if (account?.emailVerified === false) {
      navigation.replace(OtpVerificationScreen.RouteName, {
        componentProps: {
          componentTitle: "Verifica email",
          componentDescription:
            "Inserisci il codice numerico che abbiamo inviato al tuo indirizzo email",
        },
        handleVerification: handleUserEmailVerification,
        hideGoBack: true,
        hideHeader: true,
      });
    }
  }, [account, navigation]);

  useEffect(() => {
    if (!me) {
      navigation.replace(LoginScreen.RouteName);
    }
  }, [me, navigation]);

  useEffect(() => {
    dispatch(actions.getUsersMeRequests.request({}));
  }, [dispatch]);

  return { me, requestsList, onSweepNowButtonPressed };
};
