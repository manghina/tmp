import { useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { UserRegisterScreen } from "@app/screens/UserRegister";
import { ProfessionalRegisterScreen } from "@app/screens/ProfessionalRegister";
import { LoginScreen } from "@app/screens/Login";

export const useHomeScreen = () => {
  const navigation = useNavigation<any>();
  const [visibleWebView, setVisibleWebView] = useState(false);

  const onUserRegisterButtonPressed = useCallback(
    () => navigation.navigate(UserRegisterScreen.RouteName),
    [navigation],
  );

  const onProfessionalRegisterButtonPressed = useCallback(
    () => navigation.navigate(ProfessionalRegisterScreen.RouteName),
    [navigation],
  );

  const onLoginButtonPressed = useCallback(
    () => navigation.replace(LoginScreen.RouteName),
    [navigation],
  );

  const onTermsAndConditionsButtonPressed = useCallback(() => {
    setVisibleWebView(true);
  }, []);

  const onPrivacyPolicyButtonPressed = useCallback(() => {
    setVisibleWebView(true);
  }, []);

  const onWebViewClose = useCallback(() => setVisibleWebView(false), []);

  return {
    visibleWebView,
    onUserRegisterButtonPressed,
    onProfessionalRegisterButtonPressed,
    onLoginButtonPressed,
    onTermsAndConditionsButtonPressed,
    onPrivacyPolicyButtonPressed,
    onWebViewClose,
  };
};
