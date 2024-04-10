import React, { memo } from "react";
import { useNotificationsButton } from "./index.hooks";
import { TouchableOpacity, View } from "react-native-ui-lib";
import BellIcon from "@app/components/SvgIcons/BellIcon";
import { style } from "./styles";

type NotificationsButtonProps = {};

export const NotificationsButton = memo(({}: NotificationsButtonProps) => {
  const { onNotificationsButtonPressed } = useNotificationsButton();

  return (
    <TouchableOpacity onPress={onNotificationsButtonPressed}>
      <View style={style.button}>
        <BellIcon />
      </View>
    </TouchableOpacity>
  );
});
