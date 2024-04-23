import React, { memo } from "react";
import { View } from "react-native-ui-lib";
import { SafeAreaView } from "react-native";
import { BackButton } from "@app/components/BackButton";
import { styles } from "./styles";

type HeaderProps = {
  backgroundColor?: string;
  fill?: string;
};

export const HeaderGoBack = memo((props: HeaderProps

) => {
  // i need to pass background color as parameter here
  return (
    <SafeAreaView>
      <View style={[styles.container, { backgroundColor: props.backgroundColor }]}>
        <BackButton fill={props.fill} />
      </View>
    </SafeAreaView>
  );
});
