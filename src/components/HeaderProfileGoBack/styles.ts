import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { headerHeight } from "@app/theme/spacings/dimensions";
import { colorTokens } from "@app/theme/colors/tokens";
import { textVariants } from "@app/theme/typographies/variants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: dimensionsTokens.paddingSm,
    height: headerHeight,
    backgroundColor: colorTokens.elevationSurface,
  },
  pageTitle: {
    ...textVariants.h3CondensedBlackNormal,
  },
});
