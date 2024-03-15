import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

export const useBackButton = () => {
  const navigation = useNavigation<any>();

  const onBackButtonPressed = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  return {
    onBackButtonPressed,
  };
};
