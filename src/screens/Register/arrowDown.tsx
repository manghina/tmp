import React from "react";
import {View, Text, TouchableOpacity} from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";
import ArrowDownSVG from "@app/svg/Register/arrow-down.svg";

export const ArrowDown = () => {
  const navigation = useNavigation<any>();
    return (
      <TouchableOpacity onPress={() => {
        navigation.pop();
      }}>
        <ArrowDownSVG></ArrowDownSVG>
      </TouchableOpacity>
    );
}