import React, { memo } from "react";
import { View } from "react-native-ui-lib";
import { SafeAreaView } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { headerHeight } from "@app/theme/spacings/dimensions";
import { BackButton } from "../BackButton";

export const HeaderGoBack = memo(() => {
  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          alignItems: "flex-start",
          paddingHorizontal: dimensionsTokens.paddingSm,
          height: headerHeight,
        }}
      >
        <BackButton />
      </View>
    </SafeAreaView>
  );
});
