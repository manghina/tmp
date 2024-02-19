import { memo } from "react";
import { View } from "react-native-ui-lib";
import { ArrowDown } from "@app/screens/Register/ArrowDown";
import { SafeAreaView } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { headerHeight } from "@app/theme/spacings/dimensions";

export const HeaderGoBack = memo(() => {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: dimensionsTokens.paddingSm,
          height: headerHeight,
        }}
      >
        <ArrowDown />
      </View>
    </SafeAreaView>
  );
});
