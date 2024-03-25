import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { actions } from "@app/redux-store";

export const useUserSettingsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const handleLogout = useCallback(() => {
    dispatch(actions.clearSession());
    navigation.navigate("tutorial");
  }, [dispatch, navigation]);

  return { handleLogout };
};
