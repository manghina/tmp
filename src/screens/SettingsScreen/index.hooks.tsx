import { ReactElement, useCallback, useEffect, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { User } from "@app/models/User";
import {
  ConfigureIcon,
  ContactIcon,
  CredentialsIcon,
  DocumentsIcon,
  EditIcon,
  FAQIcon,
  LogoutIcon,
  PaymentsIcon,
  PlayIcon,
  PrivacyIcon,
  ProfileIcon,
  StarIcon,
  SurveyIcon,
  TermsAndConditionsIcon,
} from "@app/components/SvgIcons";
import { ProfileEditScreen } from "@app/screens/ProfileEditScreen";
import { TutorialScreen } from "@app/screens/Tutorial";
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
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const me: User | null = useSelector(selectors.getMe);

  const handleLogout = useCallback(() => {
    dispatch(actions.clearSession());
    navigation.replace(TutorialScreen.RouteName);
  }, [dispatch, navigation]);

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

  useEffect(() => {
    dispatch(actions.getUsersMeRequests.request({}));
  }, [dispatch]);

  return { me, profileMenuItems, handleLogout };
};
