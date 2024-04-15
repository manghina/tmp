import { StyleSheet } from "react-native";
import { colorTokens } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";

export const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: colorTokens.elevationSurface,
  },
  scrollView: {
    height: "100%",
  },
  mainContainer: {
    padding: dimensionsTokens.paddingXs,
    gap: dimensionsTokens.paddingMd,
  },
  pageTitleContainer: {},
  pageTitle: {
    ...textVariants.h3CondensedBlackNormal,
  },
  pageSubtitle: {
    ...textVariants.p1MediumNormal,
  },
  sectionsContainer: {
    gap: dimensionsTokens.paddingXs,
  },
  section: {
    gap: dimensionsTokens.padding3Xs,
  },
  sectionTitle: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  sectionContent: {
    padding: dimensionsTokens.paddingXs,
    gap: dimensionsTokens.paddingXs,
    backgroundColor: colorTokens.colorBackgroundNeutralSubtle,
    borderColor: colorTokens.colorBorder,
    borderRadius: 8,
    borderWidth: 1.5,
  },
  subSection: {
    gap: dimensionsTokens.padding3Xs,
  },
  sectionSubtitle: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  subsectionContentText: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextDefault,
  },
  costRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  costLabelTitle: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextDefault,
  },
  costLabelSpecification: {
    ...textVariants.p1MediumItalic,
    color: colorTokens.colorTextDefault,
  },
  costValue: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextDefault,
  },
  costTotal: {
    ...textVariants.p1BoldNormal,
    color: colorTokens.colorTextDefault,
  },
  totalCostContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timingInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addToCalendarButton: {
    backgroundColor: colorTokens.colorBackgroundNeutral,
    paddingVertical: dimensionsTokens.padding4Xs,
    paddingHorizontal: dimensionsTokens.padding3Xs,
    borderRadius: 8,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: dimensionsTokens.padding4Xs,
  },
  addToCalendarText: {
    ...textVariants.p4MediumNormal,
    color: colorTokens.colorTextInformation,
  },
  row: {
    flexDirection: "row",
    gap: dimensionsTokens.padding3Xs,
  },
  infoIndicator: {
    ...textVariants.p4MediumNormal,
    color: colorTokens.colorTextInformation,
  },
  infoText: {
    ...textVariants.p4MediumNormal,
    color: colorTokens.colorTextDisabled,
  },
  infoIndicatorP1: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextInformation,
  },
});
