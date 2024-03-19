import { StyleSheet } from "react-native";
import { colorTokens } from "@app/theme/colors/tokens";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colorTokens.colorBackgroundNeutral,
  },
  bar: {
    transformOrigin: "left",
    backgroundColor: colorTokens.colorBackgroundBrandBold,
    height: 4,
  },
});
