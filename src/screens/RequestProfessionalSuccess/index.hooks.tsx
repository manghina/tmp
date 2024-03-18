import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

export const useRequestProfessionalSuccessScreen = () => {
  const navigation = useNavigation<any>();
  const goToHomeScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  const handleSaveRequestInICal = useCallback(() => {
    console.log("mostra info appuntamento");
  }, []);
  
  return { goToHomeScreen, handleSaveRequestInICal };
};
