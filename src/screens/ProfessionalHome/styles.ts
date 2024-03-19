import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions, headerHeight } from "@app/theme/spacings/dimensions";

export const styles = StyleSheet.create({
  page: {
    height: "100%",
    backgroundColor: "white",
  },
  pageHeader: {
    backgroundColor: "#FEFEFE",
    height: headerHeight,
    paddingHorizontal: dimensionsTokens.paddingSm,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  pageTitle: {
    ...textVariants.h3CondensedBlackNormal,
  },
  pageDescription: {
    ...textVariants.p1MediumNormal,
  },
  pageContainer: {
    backgroundColor: "#FEFEFE",
    paddingTop: dimensionsTokens.paddingXs,
    paddingBottom: dimensionsTokens.paddingXs,
    paddingHorizontal: dimensionsTokens.paddingSm,
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
    marginBottom: Dimensions.small.spacing_100,
    gap: Dimensions.small.spacing_100,
  },
  pageDashboardHeaderRight: {
    flexDirection: "row",
  },
  dashboardContentContainer: {
    flexDirection: "row",
    marginBottom: dimensionsTokens.paddingMd,
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
    ...textVariants.h5BoldItalic,
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
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#0C66E4",
  },
  bookingsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Dimensions.small.spacing_100,
  },
  bookingsHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: Dimensions.small.spacing_100,
  },
  bookingList: {
    gap: Dimensions.small.spacing_100,
    marginBottom: dimensionsTokens.paddingMd,
  },
  helpSection: {
    marginTop: dimensionsTokens.paddingMd,
    flex: 1,
    textAlign: "center",
    ...textVariants.p2MediumNormal,
  },
  link: {
    ...textVariants.p2BoldItalic,
    color: "#0C66E4",
  },
  sectionTitle: {
    ...textVariants.h6CondensedBlackNormal,
  },
  historyBoxText: {
    ...textVariants.p2MediumNormal,
    color: "#626F86",
  },
  selectedHistoryBoxText: {
    ...textVariants.p2BoldNormal,
    color: "#0C66E4",
  },
});
