import { useNavigation } from "@react-navigation/native";
import { HomeScreen } from "@app/screens/Home";
import { LoginScreen } from "@app/screens/Login";

export const usePasswordResetSuccessScreen = () => {
  const navigation = useNavigation<any>();
  const goToHomeScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: HomeScreen.RouteName }],
    });
  };
  const goToLoginScreen = () => navigation.replace(LoginScreen.RouteName);
  return { navigation, goToHomeScreen, goToLoginScreen };
};
