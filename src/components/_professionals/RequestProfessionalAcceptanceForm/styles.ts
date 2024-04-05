import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { dimensionsTokens } from "@app/theme/spacings/tokens";

export const styles = StyleSheet.create({
  acceptedRequestContainer: {
    gap: dimensionsTokens.paddingXs,
  },
  acceptedRequestTitle: {
    ...textVariants.h6CondensedBlackNormal,
    color: colorTokens.colorTextDefault,
  },
  acceptedRequestDescription: {},
  availabilityBox: {
    backgroundColor: colorTokens.colorBackgroundNeutral,
    padding: Dimensions.small.spacing_100,
    marginTop: dimensionsTokens.paddingXs,
  },
  slotContainer: {
    gap: Dimensions.medium.spacing_150,
  },
  slotCountIndicator: {
    backgroundColor: colorTokens.colorBackgroundNeutral,
    padding: Dimensions.small.spacing_100,
  },
  slotCountText: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextDefault,
  },
  inputsContainer: {
    gap: Dimensions.small.spacing_100,
  },
  inputsRow: {
    flexDirection: "row",
    gap: dimensionsTokens.paddingXs,
  },
  inputFieldContainer: { flex: 1 },
  euroSymbolAccessoryContainer: {
    margin: Dimensions.small.spacing_100,
    paddingVertical: Dimensions.small.spacing_100,
    paddingHorizontal: Dimensions.medium.spacing_150,
    backgroundColor: colorTokens.colorBackgroundNeutral,
    borderRadius: 4,
  },
  euroSymbolAccessoryText: {
    ...textVariants.p1CondensedBlackNormal,
  },
  priceRecapContainer: {
    flexDirection: "row",
    gap: Dimensions.small.spacing_050,
  },
  priceRecap: {
    ...textVariants.p1MediumItalic,
    color: colorTokens.colorTextSubtlest,
  },
  priceTotal: {
    ...textVariants.p1BoldItalic,
    color: colorTokens.colorTextSubtlest,
  },
  actionsContainer: {
    paddingTop: dimensionsTokens.paddingSm,
    gap: Dimensions.small.spacing_100,
  },
  actionsDescription: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextDefault,
    textAlign: "center",
  },
  textButton: {
    backgroundColor: "transparent",
  },
  actionLabel: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextInverse,
    margin: Dimensions.small.spacing_050,
  },
  danger: {
    color: colorTokens.colorTextDanger,
  },
});
