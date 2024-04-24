import { useNavigation } from "@react-navigation/native";
import { LoginScreen } from "@app/screens/Login";
import { useCallback } from "react";

export const usePasswordResetSuccessScreen = () => {
  const navigation = useNavigation<any>();

  const goToLoginScreen = useCallback(
    () => navigation.replace(LoginScreen.RouteName, { hideGoBack: true }),
    [navigation],
  );
  return { navigation, goToLoginScreen };
};
