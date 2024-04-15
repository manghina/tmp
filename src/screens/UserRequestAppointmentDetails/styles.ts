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
  timingInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addToCalendarButton: {
    backgroundColor: colorTokens.colorBackgroundNeutral,
    padding: dimensionsTokens.padding4Xs,
    borderRadius: 8,
  },
  addToCalendarText: {
    ...textVariants.p4MediumNormal,
    color: colorTokens.colorTextInformation,
  },
});
