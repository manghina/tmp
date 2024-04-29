import { Text, View } from "react-native-ui-lib";
import { memo } from "react";
import { IUserSummary } from "@app/models/User";

import { styles } from "./styles";
import { useUserAvatarDetails } from "./index.hooks";
import { Avatar } from "@app/components/Avatar";

type UserAvatarDetailsProps = {
  user: IUserSummary;
};

export const UserAvatarDetails = memo(({ user }: UserAvatarDetailsProps) => {
  const {} = useUserAvatarDetails();

  return (
    <View style={styles.userGeneralitiesContainer}>
      <View style={styles.userAvatar}>
        <Avatar data={user} type="user" />
      </View>
      <View>
        <Text style={styles.userNameText}>
          Dott. {user.name} {user.lastName[0].toUpperCase()}.
        </Text>
        <Text style={styles.userAge}>24 anni</Text>
        <Text style={styles.userIllness}>Presunto mal di testa</Text>
      </View>
    </View>
  );
});

UserAvatarDetails.displayName = "UserAvatarDetails";
