import { memo } from "react";
import { useUserChooseProfessionalOfferScreen } from "./index.hooks";
import { View } from "react-native-ui-lib";

type UserChooseProfessionalOfferScreenProps = {};

export const UserChooseProfessionalOfferScreen = memo(
  ({}: UserChooseProfessionalOfferScreenProps) => {
    const {} = useUserChooseProfessionalOfferScreen();

    return <View />;
  },
);

UserChooseProfessionalOfferScreen.displayName =
  "UserChooseProfessionalOfferScreen";
