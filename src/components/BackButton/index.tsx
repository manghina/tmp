import React, { memo } from "react";
import { useBackButton } from "./index.hooks";
import { TouchableOpacity, View } from "react-native-ui-lib";
import ArrowDownIcon from "@app/components/SvgIcons/ArrowDownIcon";
import { styles } from "./styles";

type BackButtonProps = {};

export const BackButton = memo(({}: BackButtonProps) => {
  const { onBackButtonPressed } = useBackButton();

  return (
    <TouchableOpacity onPress={onBackButtonPressed}>
      <View style={styles.button}>
        <ArrowDownIcon />
      </View>
    </TouchableOpacity>
  );
});
