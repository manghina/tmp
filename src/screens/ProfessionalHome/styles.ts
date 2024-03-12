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
  bookingsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookingsHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  bookingList: {
    flexDirection: "column",
    gap: dimensionsTokens.paddingXs,
  },
  bookingListItem: {
    backgroundColor: "#e9f2ff",
    borderRadius: 8,
    flexDirection: "row",
    gap: dimensionsTokens.paddingXs,
    padding: dimensionsTokens.paddingXs,
  },
  bookingListItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookingListItemTimeLeftText: {
    color: "#A54800",
    ...textVariants.p2MediumNormal,
  },
  bookingListItemTitle: {
    color: "#0C66E4",
    ...textVariants.p1BoldNormal,
  },
  bookingListItemContentText: {
    color: "#172B4D",
    marginTop: 6,
    ...textVariants.p2MediumItalic,
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
