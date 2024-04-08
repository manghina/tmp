import { StyleSheet } from "react-native";
import { headerHeight } from "@app/theme/spacings/dimensions";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";

export const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: headerHeight + dimensionsTokens.paddingXs,
    flexDirection: "column",
    gap: dimensionsTokens.paddingMd,
  },
  contentWrapper: { paddingHorizontal: dimensionsTokens.paddingSm },
  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    gap: dimensionsTokens.paddingXs,
  },
  actionsContainer: {
    paddingVertical: dimensionsTokens.paddingXs,
    alignItems: "center",
  },
  pageTitle: {
    ...textVariants.h3CondensedBlackNormal,
    color: colorTokens.colorTextDefault,
  },
  pageDescription: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  sectionTitle: {
    ...textVariants.h6CondensedBlackNormal,
    color: colorTokens.colorTextDefault,
  },
  sectionSubtitle: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  backButtonText: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextDefault,
    textDecorationLine: "underline",
  },
});
