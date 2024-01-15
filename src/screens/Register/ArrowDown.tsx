import React from "react";
import { TouchableOpacity } from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";
import ArrowDownSVG from "@assets/icons/arrow-down.svg";

export const ArrowDown = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.pop();
      }}
    >
      <ArrowDownSVG />
    </TouchableOpacity>
  );
};
