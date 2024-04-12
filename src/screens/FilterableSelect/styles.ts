import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";

export const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingVertical: dimensionsTokens.paddingXs,
    paddingHorizontal: dimensionsTokens.paddingSm,
    backgroundColor: colorTokens.elevationSurface,
    gap: dimensionsTokens.paddingMd,
  },
  headingContainer: {
    display: "flex",
  },
  title: {
    ...textVariants.h3CondensedBlackNormal,
  },
  info: {
    ...textVariants.p1MediumNormal,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: Dimensions.medium.spacing_150,
    color: colorTokens.colorIcon,
  },
  sectionTitle: {
    ...textVariants.p2MediumNormal,
  },
  listContainer: { flex: 1, gap: Dimensions.small.spacing_100 },
  list: { flex: 1, marginBottom: Dimensions.large.spacing_500 },
  listItem: {
    borderWidth: 1,
    borderColor: colorTokens.colorBorder,
    justifyContent: "space-between",
    padding: dimensionsTokens.paddingXs,
    backgroundColor: colorTokens.elevationSurface,
  },
  firstListItem: {
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
  listItemOpened: {
    borderBottomWidth: 0,
    backgroundColor: colorTokens.colorBackgroundNeutral,
  },
  listItemSubOption: {
    paddingLeft: dimensionsTokens.paddingLg,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  optionTextContainer: {
    flexDirection: "row",
    gap: dimensionsTokens.paddingXs,
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
