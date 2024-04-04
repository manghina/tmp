import { colorTokens } from "@app/theme/colors/tokens";
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
    gap: 10,
  },
  menuCategory: {
    flexDirection: "column",
  },
  menuCategoryList: {
    flexDirection: "column",
    gap: 8,
  },
  menuItem: {
    backgroundColor: "rgb(239, 241, 243)",
    borderRadius: 8,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
