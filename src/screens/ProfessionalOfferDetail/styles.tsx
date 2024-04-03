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
  patientContainer: {},
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
  section: {
    gap: Dimensions.small.spacing_100,
  },
  sectionName: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  statusMainWrapper: {
    gap: Dimensions.small.spacing_100,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: Dimensions.small.spacing_100,
  },
  statusTitleContainer: {
    flex: 1,
  },
  statusTitle: {
    ...textVariants.p1BoldNormal,
  },
  statusSubtitle: {
    ...textVariants.p2MediumItalic,
    color: colorTokens.colorTextSubtle,
  },
  statusIconContainer: {
    paddingHorizontal: dimensionsTokens.paddingXs,
    paddingVertical: Dimensions.small.spacing_100,
    borderRadius: 8,
  },
  readyToBeAcceptedIconContainer: {
    backgroundColor: colorTokens.colorBackgroundWarning,
  },
  acceptedIconContainer: {
    backgroundColor: colorTokens.colorBackgroundSuccess,
  },
  rejectedIconContainer: {
    backgroundColor: colorTokens.colorBackgroundDanger,
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
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: colorTokens.colorBorder,
  },
  proposedSlotsContainer: {
    padding: dimensionsTokens.paddingXs,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: colorTokens.colorBorder,
    gap: dimensionsTokens.paddingXs,
  },
  slotContainer: {
    gap: Dimensions.small.spacing_100,
  },
  optionCounterText: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  optionDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionDateText: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextDefault,
  },
  optionDayAndTimeText: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  optionPrice: {
    ...textVariants.p1BoldNormal,
    color: colorTokens.colorTextDefault,
  },
  actionsContainer: {
    paddingTop: dimensionsTokens.paddingSm,
  },
  actionsDescription: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextDefault,
    textAlign: "center",
  },
  dangerButton: {
    backgroundColor: colorTokens.colorBackgroundDanger,
    paddingVertical: dimensionsTokens.paddingXs,
  },
  dangerButtonText: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextDanger,
  },
});
