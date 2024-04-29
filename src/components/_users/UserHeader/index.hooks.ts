import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";
import { useCallback, useMemo } from "react";
import { User } from "@app/models/User";
import { useNavigation } from "@react-navigation/native";
import { UserProfileScreen } from "@app/screens/UserProfileScreen";

export const useUserHeader = () => {
  const me: User | null = useSelector(selectors.getMe);
  const navigation = useNavigation<any>();

  const goToProfile = useCallback(() => {
    navigation.navigate(UserProfileScreen.RouteName);
  }, []);

  return { me, goToProfile };
};
