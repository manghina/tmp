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

  const handleLogout = useCallback(() => {
    dispatch(actions.clearSession());
    navigation.replace("tutorial");
  }, [dispatch, navigation]);

  const profileMenuItems: UserProfileMenu = useMemo(
    () => [
      {
        category: "Principale",
        items: [
          {
            label: "Modifica profilo",
            icon: <EditIcon />,
            onPress: () => navigation.navigate("user-edit"),
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
      },
      {
        category: "Supporto",
        items: [
          {
            label: "Rivedi app tutorials",
            icon: <PlayIcon />,
            onPress: () => console.log("Review app tutorials"),
          },
          {
            label: "Termini e condizioni",
            icon: <TermsAndConditionsIcon />,
            onPress: () => console.log("Terms and conditions"),
          },
          {
            label: "Privacy Policy",
            icon: <PrivacyIcon />,
            onPress: () => console.log("Privacy Policy"),
          },
          {
            label: "FAQs",
            icon: <FAQIcon />,
            onPress: () => console.log("FAQs"),
          },
        ],
      },
      {
        category: "La tua opinione è importante",
        items: [
          {
            label: "Contattaci",
            icon: <ContactIcon />,
            onPress: () => console.log("Contattaci"),
          },
          {
            label: "Rispondi al sondaggio",
            icon: <SurveyIcon />,
            onPress: () => console.log("Rispondi al sondaggio"),
          },
          {
            label: "Lascia 5 stelle sull'App Store",
            icon: <StarIcon />,
            onPress: () => console.log("Lascia 5 stelle sull'App Store"),
          },
        ],
      },
      {
        category: "Altro",
        items: [
          {
            label: "Esegui il Logout",
            icon: <LogoutIcon />,
            onPress: handleLogout,
          },
          {
            label: "Gestisci profilo",
            icon: <ProfileIcon />,
            onPress: () => console.log("Gestisci profilo"),
          },
        ],
      },
    ],
    [navigation],
  );

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
