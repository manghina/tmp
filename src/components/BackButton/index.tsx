import React, { memo } from "react";
import { useBackButton } from "./index.hooks";
import { TouchableOpacity, View } from "react-native-ui-lib";
import { styles } from "./styles";
import { ArrowDownIcon } from "@app/components/SvgIcons";
import { colorTokens } from "@app/theme/colors/tokens";

type BackButtonProps = {
  variant?: "light" | "dark";
};

export const BackButton = memo(({ variant = "light" }: BackButtonProps) => {
  const { onBackButtonPressed } = useBackButton();
  // and color too

  return (
    <TouchableOpacity onPress={onBackButtonPressed}>
      <View style={styles.button}>
        <ArrowDownIcon
          color={
            variant === "light"
              ? colorTokens.colorIcon
              : colorTokens.colorBackgroundAlternativeSubtle
          }
        />
      </View>
    </TouchableOpacity>
  );
});
