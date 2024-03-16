import React, { memo } from "react";
import { View } from "react-native-ui-lib";
import { SafeAreaView } from "react-native";
import { BackButton } from "@app/components/BackButton";
import { styles } from "./styles";

export const HeaderGoBack = memo(() => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackButton />
      </View>
    </SafeAreaView>
  );
});
