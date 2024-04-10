import React, { memo } from "react";
import { useUserSettingsScreen } from "./index.hooks";
import { Button } from "react-native-ui-lib";
import { SafeAreaView, ScrollView } from "react-native";
import { userHomeStyles } from "./styles";

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
