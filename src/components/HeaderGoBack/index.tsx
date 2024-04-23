import React, { memo } from "react";
import { View } from "react-native-ui-lib";
import { SafeAreaView } from "react-native";
import { BackButton } from "@app/components/BackButton";
import { styles } from "./styles";

type HeaderProps = {
  backgroundColor?: string;
};

export const HeaderGoBack = memo(({ backgroundColor }: HeaderProps) => {
  // i need to pass background color as parameter here
  return (
    <SafeAreaView>
      <View style={[styles.container, { backgroundColor }]}>
        <BackButton />
      </View>
    </SafeAreaView>
  );
});
