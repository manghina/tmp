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
    paddingBottom: dimensionsTokens.paddingLg,
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
  listContainer: {
    flex: 1,
    gap: dimensionsTokens.padding3Xs,
  },
  list: {
    flexGrow: 0,
    borderWidth: 1.5,
    borderRadius: Dimensions.small.spacing_100,
    borderColor: colorTokens.colorBorder,
  },
  noList: {
    display: "none",
  },
  noResultsText: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextSubtle,
    textAlign: "center",
    paddingTop: dimensionsTokens.paddingMd,
  },
  listItem: {
    borderTopWidth: 1.5,
    borderColor: colorTokens.colorBorder,
    justifyContent: "space-between",
    padding: dimensionsTokens.paddingXs,
    backgroundColor: colorTokens.elevationSurface,
    alignItems: "center",
    gap: dimensionsTokens.padding3Xs,
  },
  firstListItem: {
    borderTopWidth: 0,
  },
  listItemSelected: {
    backgroundColor: colorTokens.colorBackgroundNeutralBold,
  },
  listItemSelectedMultiple: {
    backgroundColor: colorTokens.colorBackgroundSelected,
  },
  listItemOpened: {
    backgroundColor: colorTokens.colorBackgroundNeutral,
  },
  listItemWithSubOptionsSelected: {
    backgroundColor: colorTokens.colorBackgroundInformation,
  },
  listItemSubOption: {
    paddingLeft: dimensionsTokens.paddingLg,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  optionTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: dimensionsTokens.padding3Xs,
    flexShrink: 1,
  },
  optionTextQuantityContainer: {
    backgroundColor: colorTokens.colorBackgroundBrandBold,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
  },
  optionTextQuantity: {
    ...textVariants.p3BoldNormal,
    color: colorTokens.colorTextInverse,
  },
  optionText: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextDefault,
  },
  optionIconContainer: {
    flexShrink: 0,
  },
  optionIcon: {
    color: colorTokens.colorBorder,
  },
  optionIconSelected: {
    color: colorTokens.colorBorderInverse,
  },
  optionIconMultiple: {
    borderRadius: 100,
    color: colorTokens.colorBorder,
  },
  optionIconSelectedMultiple: {
    color: colorTokens.colorBorderSelected,
  },
  optionTextSelected: {
    color: colorTokens.colorTextInverse,
  },
  optionTextSelectedMultiple: {
    color: colorTokens.colorTextSelected,
  },
});
