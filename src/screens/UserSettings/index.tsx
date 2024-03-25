import React, { memo } from "react";
import { useUserSettingsScreen } from "./index.hooks";
import { View, Text, Button, TouchableOpacity } from "react-native-ui-lib";
import { SafeAreaView, ScrollView } from "react-native";
import SweepSvg from "@app/components/SweepSvg";
import { userHomeStyles } from "./styles";
import { UserRequestsList } from "@app/components/users/UserRequestsList";

export const UserSettingsScreen = memo(() => {
  const { handleLogout } = useUserSettingsScreen();

  return (
    <>
      <SafeAreaView style={userHomeStyles.safeAreaView}>
        <ScrollView>
          <Button label="Logout" onPress={handleLogout} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
});

UserSettingsScreen.displayName = "UserSettingsScreen";
