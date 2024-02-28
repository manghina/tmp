import React, { memo } from "react";
import { TouchableOpacity, View } from "react-native-ui-lib";
import { SafeAreaView } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { headerHeight } from "@app/theme/spacings/dimensions";
import ArrowDownIcon from "@app/components/SvgIcons/ArrowDownIcon";
import { useNavigation } from "@react-navigation/native";

export const HeaderGoBack = memo(() => {
  const navigation = useNavigation<any>();
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
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
        >
          <View
            style={{
              height: headerHeight,
              aspectRatio: 1,
            }}
          >
            <ArrowDownIcon />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
});
