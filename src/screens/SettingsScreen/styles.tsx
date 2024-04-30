import { colorTokens } from "@app/theme/colors/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";
import { StyleSheet } from "react-native";

export const userProfileStyles = StyleSheet.create({
  safeAreaView: {
    height: "100%",
    backgroundColor: colorTokens.elevationSurface,
  },
  scrollView: {
    height: "100%",
  },
  profileInfoContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: dimensionsTokens.paddingMd,
    gap: dimensionsTokens.paddingXs,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: colorTokens.colorBackgroundAccentMagentaSubtle,
  },
  profileImageTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 120,
  },
  profileImageText: {
    ...textVariants.h1MediumNormal,
    color: colorTokens.colorTextInverse,
    textAlign: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  editImageButton: {
    position: "absolute",
    bottom: -4,
    right: 0,
    width: 48,
    height: 48,
    backgroundColor: colorTokens.colorBackgroundNeutralBold,
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: colorTokens.colorBorderInverse,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  profileInfoText: {
    ...textVariants.h5BoldItalic,
  },
  menuContainer: {
    flexDirection: "column",
    gap: dimensionsTokens.paddingXs,
    paddingHorizontal: dimensionsTokens.paddingSm,
  },
  menuCategory: {
    flexDirection: "column",
    gap: dimensionsTokens.padding3Xs,
    
  },
  menuCatergoryTitle: {
    ...textVariants.h3CondensedBlackNormal,
    paddingVertical: dimensionsTokens.padding3Xs,
  },
  menuItem: {
    backgroundColor: colorTokens.colorBackgroundNeutral,
    borderRadius: 8,
    flexDirection: "row",
    gap: dimensionsTokens.padding3Xs,
    alignItems: "center",
    padding: Dimensions.medium.spacing_175,
  },
  menuItemText: {
    ...textVariants.p1MediumNormal,
  },
});
