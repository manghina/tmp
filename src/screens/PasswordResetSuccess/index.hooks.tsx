import { useNavigation } from "@react-navigation/native";
import { LoginScreen } from "@app/screens/Login";
import { useCallback } from "react";
import { TutorialScreen } from "../Tutorial";

export const usePasswordResetSuccessScreen = () => {
  const navigation = useNavigation<any>();

  const goToLoginScreen = useCallback(
    () =>
      navigation.reset({
        index: 0,
        routes: [
          { name: TutorialScreen.RouteName },
          { name: LoginScreen.RouteName },
        ],
      }),
    [navigation],
  );
  return { navigation, goToLoginScreen };
};
