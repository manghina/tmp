import { StyleSheet, Dimensions as DeviceDimensions } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { colorTokens } from "@app/theme/colors/tokens";
import { textVariants } from "@app/theme/typographies/variants";

const { width } = DeviceDimensions.get("screen");

export const styles = StyleSheet.create({
  cardContainer: {
    width: width,
    paddingHorizontal: dimensionsTokens.paddingMd * 1.5,
  },
  card: {
    width: "100%",
    padding: dimensionsTokens.paddingXs,
    gap: dimensionsTokens.paddingXs,
    backgroundColor: colorTokens.elevationSurfaceRaised,
    borderRadius: Dimensions.medium.spacing_200,
    borderColor: colorTokens.colorBorder,
    borderWidth: 2,
  },
  cardSelected: {
    borderColor: colorTokens.colorBorderFocused,
  },
  section: {
    gap: Dimensions.small.spacing_100,
  },
  sectionTitle: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  doctorInfoContainer: {
    padding: dimensionsTokens.paddingXs,
    borderRadius: Dimensions.small.spacing_100,
    backgroundColor: colorTokens.colorBackgroundNeutral,
    gap: Dimensions.small.spacing_100,
  },

  infoTextTitle: {
    ...textVariants.p2CondensedBlackNormal,
    color: colorTokens.colorTextDefault,
  },
  infoText: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextDefault,
  },
  slotsContainer: {
    gap: Dimensions.small.spacing_100,
  },
  slot: {
    borderWidth: 2,
    borderColor: colorTokens.colorBorder,
    borderRadius: Dimensions.small.spacing_100,
    backgroundColor: colorTokens.elevationSurfaceRaised,
    padding: dimensionsTokens.paddingXs,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  slotSelected: {
    borderColor: colorTokens.colorBorderSelected,
    backgroundColor: colorTokens.colorBackgroundSelected,
  },
  slotFirstColumn: {
    flexDirection: "row",
    alignItems: "center",
    gap: Dimensions.small.spacing_100,
  },
  slotSecondColumn: {},
  slotDayText: {
    ...textVariants.p2BoldNormal,
    color: colorTokens.colorTextDefault,
  },
  slotTodayText: {
    ...textVariants.p2MediumItalic,
    color: colorTokens.colorTextDefault,
  },
  slotTimeText: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextDefault,
  },
  slotPriceText: {
    ...textVariants.p1BoldNormal,
    color: colorTokens.colorTextDefault,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colorTokens.colorBorder,
    justifyContent: "center",
    alignItems: "center",
  },
  radioSelected: {
    borderColor: colorTokens.colorBorderSelected,
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "transparent",
  },
  radioInnerSelected: {
    backgroundColor: colorTokens.colorBackgroundSelectedBold,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colorTokens.colorIconInverse,
  },
});
