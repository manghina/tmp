import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { actions } from "@app/redux-store";
import { TutorialScreen } from "@app/screens/Tutorial";

export const useUserSettingsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const handleLogout = useCallback(() => {
    dispatch(actions.clearSession());
    navigation.navigate(TutorialScreen.RouteName);
  }, [dispatch, navigation]);

  return { handleLogout };
};
