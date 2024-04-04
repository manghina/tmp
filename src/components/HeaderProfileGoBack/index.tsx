import React, { memo } from "react";
import { Text, View } from "react-native-ui-lib";
import { SafeAreaView } from "react-native";
import { BackButton } from "@app/components/BackButton";
import { NotificationsButton } from "../NotificationsButton";
import { styles } from "./styles";

export const HeaderProfileGoBack = memo(() => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackButton />
        <Text style={styles.pageTitle}>Mio Profilo</Text>
        <NotificationsButton />
      </View>
    </SafeAreaView>
  );
});
