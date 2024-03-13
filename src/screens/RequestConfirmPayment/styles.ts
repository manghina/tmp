import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions, headerHeight } from "@app/theme/spacings/dimensions";

export const styles = StyleSheet.create({
  pageContainer: {
    paddingTop: headerHeight + dimensionsTokens.paddingXs,
    paddingBottom: dimensionsTokens.paddingXs,
    paddingHorizontal: dimensionsTokens.paddingMd,
    gap: dimensionsTokens.paddingMd,
    height: "100%",
  },
  pageTitleContainer: {
    flexDirection: "column",
    gap: Dimensions.small.spacing_025,
    marginBottom: dimensionsTokens.paddingMd,
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
  sumRecap: {
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
});
