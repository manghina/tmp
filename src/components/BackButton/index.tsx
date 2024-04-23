import React, { memo } from "react";
import { useBackButton } from "./index.hooks";
import { TouchableOpacity, View } from "react-native-ui-lib";
import { styles } from "./styles";
import { ArrowDownIcon } from "@app/components/SvgIcons";

type BackButtonProps = {
  fill?: string
};

export const BackButton = memo((props: BackButtonProps) => {
  const { onBackButtonPressed } = useBackButton();
  // and color too

  return (
    <TouchableOpacity onPress={onBackButtonPressed}>
      <View style={styles.button}>
        <ArrowDownIcon color={props.fill} />
      </View>
    </TouchableOpacity>
  );
});
