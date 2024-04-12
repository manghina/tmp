import { useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";

export const useRegisterBottomSheet = () => {
  const navigation = useNavigation<any>();
  const [visibleWebView, setVisibleWebView] = useState(false);

  const onUserRegisterButtonPressed = useCallback(
    () => navigation.navigate("user-register"),
    [navigation],
  );

  const onProfessionalRegisterButtonPressed = useCallback(
    () => navigation.navigate("professional-register"),
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
    onTermsAndConditionsButtonPressed,
    onPrivacyPolicyButtonPressed,
    onWebViewClose,
  };
};
