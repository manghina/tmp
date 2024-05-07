import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: Dimensions.small.spacing_050,
  },
  digit: {
    ...textVariants.p1BoldNormal,
    marginBottom: Dimensions.small.spacing_050,
    color: colorTokens.colorTextAccentGraySubtle,
  },
  active: {
    ...textVariants.h3CondensedBlackNormal,
    marginBottom: 0,
    color: colorTokens.colorTextAccentGrayBolder,
  },
});
