import React, { memo } from "react";
import { Text, View } from "react-native-ui-lib";
import { SafeAreaView } from "react-native";
import { BackButton } from "@app/components/BackButton";
import { NotificationsButton } from "../NotificationsButton";

export const HeaderProfileGoBack = memo(() => {
  return (
    <SafeAreaView>
      <View
        paddingL-20
        paddingR-20
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <BackButton />
        <Text h4>Mio Profilo</Text>
        <NotificationsButton />
      </View>
    </SafeAreaView>
  );
});
