import { useNavigation } from "@react-navigation/native";

export const usePasswordResetSuccessScreen = () => {
  const navigation = useNavigation<any>();
  const goToHomeScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };
  const goToLoginScreen = () => navigation.replace("LoginOptions");
  return { navigation, goToHomeScreen, goToLoginScreen };
};
