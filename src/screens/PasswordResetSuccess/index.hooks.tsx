import { useNavigation } from "@react-navigation/native";

export const usePasswordResetSuccessScreen = () => {
  const navigation = useNavigation<any>();
  const goToHomeScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "home" }],
    });
  };
  const goToLoginScreen = () => navigation.replace("login");
  return { navigation, goToHomeScreen, goToLoginScreen };
};
