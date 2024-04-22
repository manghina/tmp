import { StyleSheet } from "react-native";
import { colorTokens } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";

export const styles = StyleSheet.create({
  headerContainer: { backgroundColor: colorTokens.elevationSurface },
  headerRow: {
    paddingHorizontal: dimensionsTokens.paddingSm,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  avatarContainer: {
    width: 40,
    height: 40,
  },
});
