import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { headerHeight } from "@app/theme/spacings/dimensions";
import { colorTokens } from "@app/theme/colors/tokens";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    paddingHorizontal: dimensionsTokens.paddingSm,
    height: headerHeight,
    backgroundColor: colorTokens.elevationSurface,
  },
});
