import { ReactElement, useCallback, useEffect, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { User } from "@app/models/User";
import BellIcon from "@app/components/SvgIcons/BellIcon";

type UserProfileMenuItem = {
  label: string;
  icon: ReactElement;
  onPress: () => void;
};

type UserProfileMenu = {
  category: string;
  items: UserProfileMenuItem[];
}[];

export const useUserProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const me: User | null = useSelector(selectors.getMe);

  const profileMenuItems: UserProfileMenu = useMemo(
    () => [
      {
        category: "Principale",
        items: [
          {
            label: "Modifica profilo",
            icon: <BellIcon color="#44546F" />,
            onPress: () => navigation.navigate("user-edit"),
          },
          {
            label: "Credenziali di accesso",
            icon: <BellIcon color="#44546F" />,
            onPress: () => console.log("Credentials"),
          },
          {
            label: "Configura",
            icon: <BellIcon color="#44546F" />,
            onPress: () => console.log("Configure"),
          },
          {
            label: "Metodi di pagamento",
            icon: <BellIcon color="#44546F" />,
            onPress: () => console.log("Payment methods"),
          },
          {
            label: "Documenti",
            icon: <BellIcon color="#44546F" />,
            onPress: () => console.log("Documents"),
          },
        ],
      },
      {
        category: "Supporto",
        items: [
          {
            label: "Rivedi app tutorials",
            icon: <BellIcon color="#44546F" />,
            onPress: () => console.log("Review app tutorials"),
          },
          {
            label: "Termini e condizioni",
            icon: <BellIcon color="#44546F" />,
            onPress: () => console.log("Terms and conditions"),
          },
        ],
      },
    ],
    [],
  );

  const handleLogout = useCallback(() => {
    dispatch(actions.clearSession());
    navigation.navigate("tutorial");
  }, [dispatch, navigation]);

  useEffect(() => {
    if (!me) {
      navigation.replace("login");
    }
  }, [me, navigation]);

  useEffect(() => {
    dispatch(actions.getUsersMeRequests.request({}));
  }, [dispatch]);

  return { me, profileMenuItems, handleLogout };
};
