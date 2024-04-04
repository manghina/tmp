import { StyleSheet } from "react-native";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { colorTokens } from "@app/theme/colors/tokens";

export const style = StyleSheet.create({
  button: {
    width: Dimensions.large.spacing_400,
    height: Dimensions.large.spacing_400,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: colorTokens.colorIcon,
  },
});
