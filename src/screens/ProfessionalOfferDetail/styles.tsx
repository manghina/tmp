import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";

export const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    backgroundColor: colorTokens.elevationSurface,
  },
  pageContainer: {
    padding: dimensionsTokens.paddingXs,
    gap: dimensionsTokens.paddingMd,
  },
  pageTitleText: {
    ...textVariants.h3CondensedBlackNormal,
  },
  pageSubtitleText: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  contentWrapper: {
    gap: dimensionsTokens.paddingXs,
  },
  patientContainer: {
    gap: Dimensions.small.spacing_100,
  },
  actionsContainer: {
    alignItems: "center",
    gap: Dimensions.small.spacing_100,
  },
  actionLabel: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextDefault,
  },
  rejectActionLabel: {
    color: colorTokens.colorTextInverse,
  },
  patientCardContainer: {
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: colorTokens.colorBorder,
    padding: dimensionsTokens.paddingXs,
    gap: dimensionsTokens.paddingXs,
  },
  profilePic: {
    width: 48.6,
    height: 48.6,
    marginRight: 10,
    borderRadius: 50,
  },
  requestContainer: {
    borderRadius: 8,
    padding: dimensionsTokens.paddingXs,
    backgroundColor: colorTokens.colorBackgroundNeutral,
  },
  ButtonsSection: {
    alignItems: "center",
    gap: Dimensions.small.spacing_100,
  },
  buttonGray: {
    width: "100%",
    backgroundColor: colorTokens.colorBackgroundNeutral,
    color: colorTokens.colorTextDefault,
  },
  buttonRed: {
    width: "100%",
    backgroundColor: colorTokens.colorBackgroundDangerBold,
    color: colorTokens.colorTextInverse,
  },
  sectionName: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  pText: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextDefault,
  },
  patientName: {
    ...textVariants.p1CondensedBoldNormal,
  },
  patientAge: {
    ...textVariants.p2BoldItalic,
    color: colorTokens.colorTextInformation,
  },
  patientIllness: {
    ...textVariants.p2BoldNormal,
    color: colorTokens.colorTextInformation,
  },
  requestSummaryContainer: {
    gap: Dimensions.small.spacing_100,
  },
  requestSummaryText: {
    ...textVariants.p2BoldItalic,
    color: colorTokens.colorTextDefault,
  },
  rejectionHeaderText: {
    ...textVariants.h3CondensedBlackNormal,
    color: colorTokens.colorTextDanger,
  },
});
