import { withOpacity } from "@app/theme/colors/palette";
import { colorTokens } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loaderContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorTokens.elevationSurfaceAlternative,
    gap: dimensionsTokens.paddingXl,
  },
  progressBarContainer: {
    width: 266,
    height: 8,
    backgroundColor: withOpacity(
      colorTokens.colorBackgroundAlternativeBrand,
      0.2,
    ),
    borderRadius: 2,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    width: "100%",
    backgroundColor: colorTokens.colorBackgroundAlternativeBrand,
    borderRadius: 2,
  },
});
