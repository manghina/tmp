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
  list: {
    flexGrow: 0,
    borderWidth: 1.5,
    borderRadius: Dimensions.small.spacing_100,
    borderColor: colorTokens.colorBorder,
  },
  listWithError: {
    borderColor: "#FF0000",
  },
  listItem: {
    borderTopWidth: 1.5,
    borderColor: colorTokens.colorBorder,
    justifyContent: "space-between",
    padding: dimensionsTokens.paddingXs,
    alignItems: "center",
  },
  firstListItem: {
    borderTopWidth: 0,
    borderTopLeftRadius: Dimensions.small.spacing_100,
    borderTopRightRadius: Dimensions.small.spacing_100,
  },
  lastListItem: {
    borderBottomRightRadius: Dimensions.small.spacing_100,
    borderBottomLeftRadius: Dimensions.small.spacing_100,
  },
  listItemSelected: {
    backgroundColor: colorTokens.colorBackgroundNeutralBold,
  },
  optionText: {
    ...textVariants.p1MediumNormal,
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
  errorText: {
    ...textVariants.p2MediumNormal,
    color: "#FF0000",
  },
});
