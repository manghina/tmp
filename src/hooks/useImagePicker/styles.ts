import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { dimensionsTokens } from "@app/theme/spacings/tokens";

export const styles = StyleSheet.create({
  dialogContainer: {
    backgroundColor: "#FFF",
    padding: dimensionsTokens.paddingSm,
    borderRadius: 10,
  },
  dialogContent: {
    gap: dimensionsTokens.paddingSm,
  },
  dialogTitle: {
    ...textVariants.p1BoldNormal,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: dimensionsTokens.paddingSm,
  },
  optionText: {
    ...textVariants.p2MediumNormal,
  },
});
