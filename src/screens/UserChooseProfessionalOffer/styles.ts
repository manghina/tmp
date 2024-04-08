import { StyleSheet } from "react-native";
import { colorTokens } from "@app/theme/colors/tokens";
import { Dimensions, headerHeight } from "@app/theme/spacings/dimensions";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colorTokens.elevationSurface,
  },
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
  pageTitle: {
    ...textVariants.h3CondensedBlackNormal,
    color: colorTokens.colorTextDefault,
  },
  pageDescription: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  howDoesItWorkContainer: {
    flexDirection: "row",
    gap: Dimensions.small.spacing_100,
  },
  howDoesItWorkFirstColumn: {},
  howDoesItWorkSecondColumn: {
    gap: Dimensions.small.spacing_050,
  },
  howDoesItWorkTitle: {
    color: colorTokens.colorTextInformation,
    ...textVariants.p1BoldNormal,
  },
  howDoesItWorkSubtitle: {
    color: colorTokens.colorTextSubtle,
    ...textVariants.p2MediumNormal,
  },
  fullHeight: {
    height: "100%",
  },
});
