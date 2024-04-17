import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";
import { useCallback, useMemo } from "react";
import { User } from "@app/models/User";
import { useNavigation } from "@react-navigation/native";
import { UserSettingsScreen } from "@app/screens/UserSettings";

export const useUserHeader = () => {
  const me: User | null = useSelector(selectors.getMe);
  const navigation = useNavigation<any>();

  const initials = useMemo(
    () =>
      !me
        ? undefined
        : `${(me.name ?? "").charAt(0)}${(me.lastName ?? "").charAt(
            0,
          )}`.toUpperCase(),
    [me],
  );

  const goToProfile = useCallback(() => {
    navigation.navigate(UserSettingsScreen.RouteName);
  }, []);

  return { initials, goToProfile };
};
