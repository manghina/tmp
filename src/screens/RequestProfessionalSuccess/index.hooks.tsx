import { useNavigation } from "@react-navigation/native";

export const useRequestProfessionalSuccessScreen = () => {
  const navigation = useNavigation<any>();
  const goToHomeScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };
  return { goToHomeScreen };
};
