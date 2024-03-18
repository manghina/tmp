import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { colorTokens } from "@app/theme/colors/tokens";

export const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    padding: dimensionsTokens.paddingSm,
    backgroundColor: colorTokens.elevationSurface,
  },
  pageContent: {
    display: "flex",
    gap: dimensionsTokens.paddingMd,
  },
  pageTitle: {
    ...textVariants.h3CondensedBlackNormal,
  },
  pageSubtitle: {
    ...textVariants.p1MediumNormal,
  },
  formColumn: {
    display: "flex",
    gap: dimensionsTokens.paddingMd,
  },
  mainActionContainer: {
    gap: Dimensions.small.spacing_100,
  },
  mainActionLabel: {
    ...textVariants.p2MediumNormal,
    textAlign: "center",
  },
  textDisabled: {
    color: colorTokens.colorTextDisabled,
  },
  subtlest: {
    color: colorTokens.colorTextSubtlest,
  },
  backButton: {
    ...textVariants.p2MediumNormal,
    textAlign: "center",
    textDecorationLine: "underline",
    color: colorTokens.colorTextSubtle,
  },
});
