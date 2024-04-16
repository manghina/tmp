import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";

export const styles = StyleSheet.create({
  sectionTitle: {
    ...textVariants.p2MediumNormal,
  },
  listContainer: { gap: dimensionsTokens.padding3Xs },
  listItem: {
    borderWidth: 1,
    borderColor: colorTokens.colorBorder,
    justifyContent: "space-between",
    padding: dimensionsTokens.paddingXs,
    alignItems: "center",
  },
  firstListItem: {
    borderTopLeftRadius: Dimensions.small.spacing_100,
    borderTopRightRadius: Dimensions.small.spacing_100,
  },
  lastListItem: {
    borderTopWidth: 0,
    borderBottomRightRadius: Dimensions.small.spacing_100,
    borderBottomLeftRadius: Dimensions.small.spacing_100,
  },
  listItemSelected: {
    backgroundColor: colorTokens.colorBackgroundNeutralBold,
  },
  optionText: {
    color: colorTokens.colorTextDefault,
  },
  optionIcon: {
    color: colorTokens.colorBorder,
  },
  optionTextSelected: {
    color: colorTokens.colorTextInverse,
  },
  optionIconSelected: {
    color: colorTokens.colorBorderInverse,
  },
});
