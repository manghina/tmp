import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions, headerHeight } from "@app/theme/spacings/dimensions";

export const styles = StyleSheet.create({
  pageHeader: {
    backgroundColor: "#FEFEFE",
    height: headerHeight,
    paddingHorizontal: dimensionsTokens.paddingSm,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  pageContainer: {
    backgroundColor: "#FEFEFE",
    paddingTop: dimensionsTokens.paddingXs,
    paddingBottom: dimensionsTokens.paddingXs,
    paddingHorizontal: dimensionsTokens.paddingSm,
    gap: dimensionsTokens.paddingMd,
    height: "100%",
  },
  pageTitleContainer: {
    flexDirection: "column",
    gap: Dimensions.small.spacing_025,
    marginBottom: dimensionsTokens.paddingMd,
  },
  pageDashboardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: Dimensions.small.spacing_100,
  },
  pageDashboardHeaderRight: {
    flexDirection: "row",
  },
  dashboardContentContainer: {
    flexDirection: "row",
    gap: Dimensions.small.spacing_100,
  },
  dashboardBox: {
    flexBasis: "50%",
    flexDirection: "column",
    padding: dimensionsTokens.paddingXs,
    borderRadius: 8,
    backgroundColor: "#F7F8F9",
  },
  dashboardBoxBackgroundImage: {
    position: "absolute",
    zIndex: -1,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  dashboardBoxTitle: {
    marginBottom: dimensionsTokens.paddingXs,
    ...textVariants.p1MediumNormal,
    color: "#0055CC",
  },
  dashboardBoxValue: {
    ...textVariants.h5CondensedBoldItalic,
    color: "#172B4D",
  },
  dashboardBoxNote: {
    ...textVariants.p3MediumNormal,
    color: "#626F86",
  },
  historyBox: {
    width: 56,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedHistoryBox: {
    width: 56,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#0C66E4",
  },
  historyBoxText: {
    ...textVariants.p2MediumNormal,
    color: "#626F86",
  },
  selectedHistoryBoxText: {
    ...textVariants.p2BoldNormal,
    color: "#0C66E4",
  },
  pageTitle: {
    ...textVariants.h3CondensedBlackNormal,
  },
  pageDescription: {
    ...textVariants.p1MediumNormal,
  },
  pageContent: {
    gap: dimensionsTokens.paddingXs,
  },
  sectionContainer: {
    flexDirection: "column",
    gap: Dimensions.small.spacing_100,
  },
  sectionName: { ...textVariants.p2MediumNormal },
  detailsCard: {
    padding: dimensionsTokens.paddingXs,
    gap: dimensionsTokens.paddingXs,
    borderRadius: 8,
    backgroundColor: "rgba(9, 30, 66, 0.08)",
  },
  detailsContainer: { gap: Dimensions.small.spacing_025 },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailLabel: { ...textVariants.p1MediumNormal },
  detailValue: { ...textVariants.p1CondensedBoldNormal },
  dashboard: {
    ...textVariants.h6CondensedBlackNormal,
  },
  paymentMethodsContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(9, 30, 66, 0.06)",
  },
  paymentMethodRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: dimensionsTokens.paddingXs,
  },
  dividerLight: {
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(9, 30, 66, 0.06)",
  },
  dividerDark: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#44546F",
  },
  ctaContainer: {
    flexDirection: "column",
    gap: Dimensions.small.spacing_025,
  },
  ctaLabel: { alignSelf: "center", ...textVariants.p2MediumNormal },
  ctaButton: {
    paddingVertical: dimensionsTokens.paddingXs,
  },
  ctaButtonText: {
    ...textVariants.p2MediumNormal,
    color: "#FFF",
  },
});
