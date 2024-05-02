import { ReactElement, useEffect, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {  selectors } from "@app/redux-store";
import { User } from "@app/models/User";
import {
  ConfigureIcon,
  CredentialsIcon,
  DocumentsIcon,
  EditIcon,
  PaymentsIcon,
} from "@app/components/SvgIcons";
import { ProfileEditScreen } from "@app/screens/ProfileEditScreen";
import { LoginScreen } from "@app/screens/Login";

type MenuItem = {
  label: string;
  icon: ReactElement;
  onPress: () => void;
};

type SettingsMenu = {
  category: string;
  items: MenuItem[];
}[];

export const useSettingsProfileScreen = () => {

  const navigation = useNavigation<any>();

  const me: User | null = useSelector(selectors.getMe);


  const profileMenuItems: SettingsMenu = useMemo(
    () => [
      {
        category: "Configura",
        items: [
          {
            label: "Modifica profilo",
            icon: <EditIcon />,
            onPress: () => navigation.navigate(ProfileEditScreen.RouteName),
          },
          {
            label: "Credenziali di accesso",
            icon: <CredentialsIcon />,
            onPress: () => console.log("Credentials"),
          },
          {
            label: "Configura",
            icon: <ConfigureIcon />,
            onPress: () => console.log("Configure"),
          },
          {
            label: "Metodi di pagamento",
            icon: <PaymentsIcon />,
            onPress: () => console.log("Payment methods"),
          },
          {
            label: "Documenti",
            icon: <DocumentsIcon />,
            onPress: () => console.log("Documents"),
          },
        ],
      }
    ],
    [navigation],
  );

  useEffect(() => {
    if (!me) {
      navigation.replace(LoginScreen.RouteName);
    }
  }, [me, navigation]);


  return { me, profileMenuItems };
};
